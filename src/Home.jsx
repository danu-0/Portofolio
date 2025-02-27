import Navbb from './components/Nav'
import SectionOne from './pages/Section_One'
import ProjectCarousel from './pages/Section_Project'
import MailToMe from './pages/Section_Mail'
import FooterSection from './pages/Footer'

function Home() {
  return (
    <div>
      <Navbb />
      <SectionOne />
      <ProjectCarousel />
      <MailToMe />
      <FooterSection />
    </div>
  )
}
export default Home
