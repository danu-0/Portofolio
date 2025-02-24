
import Navbb from './components/Nav';
import SectionOne  from "./pages/Section_One";
import ProjectCarousel from "./pages/Section_Two";
import MailToMe from "./pages/Section_Mail";
//
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Home (){

  

    return(
        <div>
            <Navbb/>
            <SectionOne/>
            <ProjectCarousel/>
            <MailToMe/>
        </div>
    )
}
export default Home;