import CategorySpacer from '../components/CategorySpacer'
import FloatingUtilities from '../components/FloatingUtilities'
import FooterAccordion from '../components/FooterAccordion'
import FooterBottom from '../components/FooterBottom'
import GreenDivider from '../components/GreenDivider'
import HeroSection from '../components/HeroSection'
import KidsBanner from '../components/KidsBanner'
import MainHeader from '../components/MainHeader'
import NewsletterSignup from '../components/NewsletterSignup'
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
        <CategorySpacer />
        <KidsBanner kidsImage={homePageContent.kidsImage} />
        <SaleBanner saleButtons={homePageContent.saleButtons} />
        <GreenDivider />
        <WornByYou galleryImages={homePageContent.galleryImages} />
        <NewsletterSignup />
        <FooterAccordion footerRows={homePageContent.footerRows} />
        <FooterBottom />
      </div>
    </div>
  )
}

export default HomePage
