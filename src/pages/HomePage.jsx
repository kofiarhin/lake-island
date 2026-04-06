import CategorySpacer from '../components/CategorySpacer'
import FloatingUtilities from '../components/FloatingUtilities'
import FooterAccordion from '../components/FooterAccordion'
import FooterBottom from '../components/FooterBottom'
import GreenDivider from '../components/GreenDivider'
import HeroSection from '../components/HeroSection'
import KidsBanner from '../components/KidsBanner'
import MainHeader from '../components/MainHeader'
import NewsletterSignup from '../components/NewsletterSignup'
import Reveal from '../components/Reveal'
import SaleBanner from '../components/SaleBanner'
import TopPromoBar from '../components/TopPromoBar'
import WornByYou from '../components/WornByYou'
import { homePageContent } from '../data/homePageContent'

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0d1116] text-white">
      <div className="relative mx-auto w-full max-w-[428px] overflow-hidden bg-[#0d1116] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <TopPromoBar />
        <MainHeader />
        <HeroSection
          heroImage={homePageContent.heroImage}
          heroVideo={homePageContent.heroVideo}
        />
        <FloatingUtilities />
        <Reveal variant="fade-up" duration={550}>
          <CategorySpacer />
        </Reveal>
        <Reveal variant="fade-up" duration={600} threshold={0.1}>
          <KidsBanner kidsImage={homePageContent.kidsImage} />
        </Reveal>
        <Reveal variant="fade-left" duration={600} threshold={0.1}>
          <SaleBanner saleButtons={homePageContent.saleButtons} />
        </Reveal>
        <GreenDivider />
        <Reveal variant="fade-up" duration={600} threshold={0.08}>
          <WornByYou galleryImages={homePageContent.galleryImages} />
        </Reveal>
        <Reveal variant="fade-up" duration={550} threshold={0.1}>
          <NewsletterSignup />
        </Reveal>
        <Reveal variant="fade-up" duration={500} threshold={0.05}>
          <FooterAccordion footerRows={homePageContent.footerRows} />
        </Reveal>
        <Reveal variant="fade-in" duration={400} threshold={0.2}>
          <FooterBottom />
        </Reveal>
      </div>
    </div>
  )
}

export default HomePage
