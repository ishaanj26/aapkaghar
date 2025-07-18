import Hero from './Hero/Hero'
import FeaturedProperties from './FeaturedProperties/FeaturedProperies'
import FeaturedLocation from './FeaturedLocation/FeaturedLocation'
import Services from './Services/Services'
import BenefitSection from './BenefitSection/BenefitSection'
import Blogs from './Blogs/Blogs'
import OurTeam from './OurTeam/OurTeam'
import PickUpPage from './PickUpPage/PickUpPage'
import FeaturedOffers from './FeaturedOffers/FeaturedOffers'
import Footer from '../../components/Footer/Footer'
import BrandsDefault from './BrandsSupport/BrandsSupport'

export default function Home() {
    return (
        <div>
            <Hero  />
            <PickUpPage/>
            <FeaturedProperties />
            <FeaturedOffers/>
            <FeaturedLocation />
            <Services />
            <BenefitSection /> 
            <OurTeam/>
            <Blogs />
            <BrandsDefault/>
            <Footer /> 
        </div>
    )
}