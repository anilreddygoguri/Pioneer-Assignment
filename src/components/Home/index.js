import SideNavbar from "../SideNavbar"

import './style.css'
import SimpleLineChart from "../SimpleLineChart"
import CryptoPrices from "../CryptoPrices"

const Home=()=>(
    <div className="home-bg-container">
    <SideNavbar/>
    <div className="home-container">
       <div className="header-container">
        <div>
        <h1 className="welcome-text">Hello, <span className="name-text">Brooklyn Simmons</span></h1>
        <p className="description">Welcome to <span className="trading-text">spot trading!</span></p>
        </div>
        <button className="trading-button">Start Trading</button>
       </div>
       <div className="graph-container">
        <SimpleLineChart/>
        <CryptoPrices/>
       </div>
    </div>
    </div>
)
export default Home