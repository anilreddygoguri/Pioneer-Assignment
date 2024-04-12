import SideNavbar from "../SideNavbar"

import './style.css'

const NotFound=()=>(
    <div className="notfound-bg-container">
    <SideNavbar/>
    <div className="not-found-container">
        <h1>Error 404 NotFound</h1>
        <p>Oops! looks like the page doesn't exist.</p>
    </div>
    
    </div>
)
export default NotFound