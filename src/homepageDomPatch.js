import homepageContent from './constants/homepageContent';

const PAGE_PATHS = new Set(['/', '']);

function normalize(value) {
  return (value || '').replace(/\s+/g, ' ').trim();
}

function ensureMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      if (key !== 'content') {
        element.setAttribute(key, value);
      }
    });
    document.head.appendChild(element);
  }

  if (attributes.content) {
    element.setAttribute('content', attributes.content);
  }
}

function setSeo() {
  const { title, description } = homepageContent.seo;

  document.title = title;
  ensureMeta('meta[name="description"]', {
    name: 'description',
    content: description,
  });
  ensureMeta('meta[property="og:title"]', {
    property: 'og:title',
    content: title,
  });
  ensureMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: description,
  });
  ensureMeta('meta[name="twitter:title"]', {
    name: 'twitter:title',
    content: title,
  });
  ensureMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: description,
  });
}

function isEditableTextElement(element) {
  if (!element) {
    return false;
  }

  if (element.closest('script, style, svg, nav')) {
    return false;
  }

  const text = normalize(element.textContent);
  if (!text) {
    return false;
  }

  const childTextElements = element.querySelectorAll(
    'h1, h2, h3, h4, h5, h6, p, blockquote, span, strong, small'
  );

  return childTextElements.length === 0;
}

function orderedElements(root, selector) {
  return [...root.querySelectorAll(selector)].filter((element) => isEditableTextElement(element));
}

function setElementText(element, text) {
  if (!element || !text) {
    return;
  }

  element.textContent = text;
}

function firstHeading(section) {
  return section.querySelector('h1, h2');
}

function firstParagraphAfter(section, reference) {
  const paragraphs = orderedElements(section, 'p');

  if (!reference) {
    return paragraphs[0] || null;
  }

  return (
    paragraphs.find((paragraph) => {
      return Boolean(reference.compareDocumentPosition(paragraph) & Node.DOCUMENT_POSITION_FOLLOWING);
    }) || paragraphs[0] || null
  );
}

function firstEyebrow(section, heading) {
  const candidates = orderedElements(section, 'p, span, div, small').filter((element) => {
    const text = normalize(element.textContent);
    return text.length <= 60 && !element.closest('a, button, li, blockquote');
  });

  if (!heading) {
    return candidates[0] || null;
  }

  return (
    candidates.find((candidate) => {
      return Boolean(candidate.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_FOLLOWING);
    }) || candidates[0] || null
  );
}

function actionElements(section) {
  return [...section.querySelectorAll('a, button')].filter((element) => normalize(element.textContent));
}

function updateIntro(section, content) {
  if (!section || !content) {
    return;
  }

  const heading = firstHeading(section);
  const eyebrow = firstEyebrow(section, heading);
  const description = firstParagraphAfter(section, heading);

  setElementText(eyebrow, content.eyebrow);
  setElementText(heading, content.title);
  setElementText(description, content.description);
}

function updateActions(section, labels, hrefs = []) {
  const actions = actionElements(section);

  labels.forEach((label, index) => {
    const action = actions[index];
    if (!action) {
      return;
    }

    setElementText(action, label);

    if (action.tagName === 'A' && hrefs[index]) {
      action.setAttribute('href', hrefs[index]);
    }
  });
}

function findRepeatedGroup(section, minimumItems = 3) {
  const candidates = [section, ...section.querySelectorAll('div, section, article, ul, ol')]
    .map((element) => {
      const children = [...element.children].filter((child) => normalize(child.textContent));
      return {
        element,
        children,
      };
    })
    .filter(({ children }) => children.length >= minimumItems);

  if (!candidates.length) {
    return [];
  }

  candidates.sort((left, right) => {
    return left.children.length - right.children.length;
  });

  return candidates[0].children.slice(0, minimumItems);
}

function leafTextElements(container) {
  return orderedElements(container, 'h1, h2, h3, h4, h5, h6, p, span, strong, small, div');
}

function updateStats(section, stats) {
  const items = findRepeatedGroup(section, stats.length);

  items.forEach((item, index) => {
    const blocks = leafTextElements(item);
    if (!blocks.length) {
      return;
    }

    setElementText(blocks[0], stats[index].value);
    setElementText(blocks[1] || blocks[0], stats[index].label);
  });
}

function updateCards(section, entries) {
  const items = findRepeatedGroup(section, entries.length);

  items.forEach((item, index) => {
    const titles = [...item.querySelectorAll('h3, h4, h5, h6')];
    const paragraphs = orderedElements(item, 'p');
    const title = titles[0] || leafTextElements(item)[0];
    const description = paragraphs[0] || leafTextElements(item)[1];

    setElementText(title, entries[index].title);
    setElementText(description, entries[index].description);
  });
}

function updateTestimonial(section, content) {
  const eyebrow = firstEyebrow(section, section.querySelector('blockquote, p'));
  const quote = section.querySelector('blockquote') || orderedElements(section, 'p')[0];
  const paragraphs = orderedElements(section, 'p');
  const attribution =
    paragraphs.find((paragraph) => paragraph !== quote && paragraph !== eyebrow) ||
    leafTextElements(section).slice(-1)[0];

  setElementText(eyebrow, content.eyebrow);
  setElementText(quote, content.quote);
  setElementText(attribution, content.attribution);
}

function updateFooter() {
  const footer = document.querySelector('footer');
  if (!footer) {
    return;
  }

  const paragraph = orderedElements(footer, 'p, span, div').find((element) => normalize(element.textContent));
  setElementText(paragraph, homepageContent.footer.tagline);
}

function ensureFallbackH1() {
  if (document.querySelector('h1')) {
    return;
  }

  const main = document.querySelector('main');
  if (!main) {
    return;
  }

  const hiddenHeading = document.createElement('h1');
  hiddenHeading.textContent = homepageContent.seo.hiddenH1;
  hiddenHeading.setAttribute(
    'style',
    'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;'
  );
  main.prepend(hiddenHeading);
}

function homepageSections() {
  const main = document.querySelector('main');
  if (!main) {
    return [];
  }

  let sections = [];

  try {
    sections = [...main.querySelectorAll(':scope > section')];
  } catch {
    sections = [];
  }

  if (sections.length >= 7) {
    return sections;
  }

  sections = [...main.querySelectorAll('section')];
  if (sections.length >= 7) {
    return sections;
  }

  return [...main.children].filter((element) => normalize(element.textContent));
}

function patchHomepage() {
  if (!PAGE_PATHS.has(window.location.pathname)) {
    return;
  }

  setSeo();

  const sections = homepageSections();
  if (sections.length < 8) {
    return;
  }

  updateIntro(sections[0], homepageContent.hero);
  updateActions(sections[0], [homepageContent.hero.primaryCta, homepageContent.hero.secondaryCta]);

  updateStats(sections[1], homepageContent.stats);

  updateIntro(sections[2], homepageContent.whyLakeIsland);
  updateCards(sections[2], homepageContent.whyLakeIsland.items);

  updateIntro(sections[3], homepageContent.collections);
  updateCards(sections[3], homepageContent.collections.cards);

  updateIntro(sections[4], homepageContent.process);
  updateCards(sections[4], homepageContent.process.steps);

  updateIntro(sections[5], homepageContent.studioNote);
  updateTestimonial(sections[6], homepageContent.testimonial);

  updateIntro(sections[7], homepageContent.finalCta);
  updateActions(
    sections[7],
    [homepageContent.finalCta.primaryCta, homepageContent.finalCta.secondaryCta],
    [homepageContent.finalCta.primaryHref]
  );

  updateFooter();
  ensureFallbackH1();
}

function initializeHomepagePatch() {
  patchHomepage();

  const observer = new MutationObserver(() => {
    patchHomepage();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeHomepagePatch, { once: true });
} else {
  initializeHomepagePatch();
}
