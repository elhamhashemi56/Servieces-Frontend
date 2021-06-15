import './navbar.css'
import {Link, useHistory} from "react-router-dom";

function Navbar(){

    return (
        <nav1>
            <div>
                <a className='anavbar' href="#">Cleaning and catering &#9662;</a>
                <ul className='ulnav'>
                    <li className='linav'><Link className='anav' to='./cooking'>Cooking</Link></li>
                    <li className='linav'><a className='anav' href="">Catering</a></li>
                    <li className='linav'><a className='anav' href="">Normal cleaning service</a></li>
                    <li className='linav'><a className='anav' href="">Special cleaning services</a></li>
                    <li className='linav'><a className='anav' href="">Periodic cleaning service</a></li>
                    <li className='linav'><a className='anav' href="">Spraying</a></li>
                    <li className='linav'><a className='anav' href="">Disinfection of home and workplace</a></li>
                </ul>
            </div>

            <div>
                <a className='anavbar' href="#">Wash &#9662;</a>
                <ul className='ulnav'>
                    <li className='linav'><a className='anav' href="">Curtain wash</a></li>
                    <li className='linav'><a className='anav' href="">Laundry</a></li>
                    <li className='linav'><a className='anav' href="">Carpet cleaning</a></li>
                    <li className='linav'><a className='anav' href="">Washing sofa and mattress</a></li>
                </ul>
            </div>

            <div>
                <a className='anavbar' href="#">Cooling and heating &#9662;</a>
                <ul className='ulnav'>
                    <li className='linav'><a  className='anav' href="">Water heater repair</a></li>
                    <li className='linav'><a  className='anav' href="">Water cooler repair on site</a></li>
                    
                </ul>
            </div>

            <div>
                <a className='anavbar' href="#">Cooling and heating &#9662;</a>
                <ul className='ulnav'>
                    <li className='linav'><a  className='anav' href="">Water heater repair</a></li>
                    <li className='linav'><a  className='anav' href="">Water cooler repair on site</a></li>
                    
                </ul>
            </div>

            <div>
                <a className='anavbar' href="#">Cooling and heating &#9662;</a>
                <ul className='ulnav'>
                    <li className='linav'><a  className='anav' href="">Water heater repair</a></li>
                    <li className='linav'><a  className='anav' href="">Water cooler repair on site</a></li>
                    
                </ul>
            </div>

            <div>
                <a className='anavbar' href="#">Cooling and heating &#9662;</a>
                <ul className='ulnav'>
                    <li className='linav'><a  className='anav' href="">Water heater repair</a></li>
                    <li className='linav'><a  className='anav' href="">Water cooler repair on site</a></li>
                    
                </ul>
            </div>
        </nav1>
    )
}

export default Navbar