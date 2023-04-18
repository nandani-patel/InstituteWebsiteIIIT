import React from 'react'
import { useNavigate } from 'react-router-dom'
import banner_inst from '../../Assets/banner_inst.png'
import Research from '../../research_updates/research'
import Announce from '../Announcments/announcments'
import Gallery from '../Gallery/gallery'
import Foot from '../Footer/foot'
import News from '../newsandevents/news'
import Cards from '../insights/cards'
import "./home.css"
import NavbarHeader from '../Navbar/navbar';
import Boardofgoverners from '../administration/Boardofgoverners'
import Newnavbar from '../Navbar/newnavbar'
import AchievementCaraousel from '../Achievements/AchievementCaraousel'
const LandingPage = () => {

  const navigate = useNavigate()
  return (
    <div>
      <div className='bg-img'>
        <div className='outside'>
        <div className='container'>
        <Newnavbar/>
        </div>
          <div style={{
            width: "55%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10%"
          }}>
            <div className="heroSection" style={{ fontSize: "1.2rem" }}>PDPM</div>
            <div className="heroSection">Indian Institute of Information Technology, Design and Manufacturing, Jabalpur</div>
          </div>

        </div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <img src={banner_inst} alt="institute banner"/> */}
        </div>
        {/* <div className='heading'>
          About the Institute
        </div>
        <div className='heading-para'>
          Probably at no previous moment in the world history have commerce and industry become so complex, extensive, and globally interrelated as they are today. India, which is going through a rapid growth in its manufacturing sector, is not unaffected by these changes.
        </div>
        <div
          style={{
            color: "#077B0A",
            textDecorationLine: "underline",
            fontSize: "18px",
            cursor: "pointer",
            marginTop: "1rem"
          }} onClick={() => { navigate("/about") }}>
          Read more
        </div>
        <News />
        <Announce />
        <Research /> */}
        <div
          style={{
            padding:"0% 10% 10%"
        }}>
          <AchievementCaraousel />
        </div>
        <div classname="features" style={{ textAlign: "center", color: "#001A38", letterSpacing: "3px" }}>
          <h2> IIITDMJ Features</h2>
          <h4 style={{ letterSpacing: "0px" }}> Take a deep insight </h4>
          <Cards />
          <Gallery />
          <Boardofgoverners />
        </div>
      </div>
      <Foot />
    </div>
  )
}

export default LandingPage