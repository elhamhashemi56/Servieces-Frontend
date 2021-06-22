import './navbar.scss'
import {Link, useHistory} from "react-router-dom";

function Navbar(){
 
    return (
      
        <div className='Nav-Container'>
            <div className='Nav-Container__items'>
                <a href="#">Cleaning and catering &#9662;</a>
                <ul>
                    <li><Link to='./cooking'>Cooking</Link></li>
                    <li><a href="">Catering</a></li>
                    <li><a href="">Normal cleaning service</a></li>
                    <li><a href="">Special cleaning services</a></li>
                    <li><a href="">Periodic cleaning service</a></li>
                    <li><a href="">Spraying</a></li>
                    <li><a href="">Disinfection of home and workplace</a></li>
                </ul>
            </div>

            <div className='Nav-Container__items'>
                <a href="#">Wash &#9662;</a>
                <ul>
                    <li><a href="">Curtain wash</a></li>
                    <li><a href="">Laundry</a></li>
                    <li><a href="">Carpet cleaning</a></li>
                    <li><a href="">Washing sofa and mattress</a></li>
                </ul>
            </div>

            <div className='Nav-Container__items'>
                <a href="#">Cooling and heating &#9662;</a>
                <ul>
                    <li><a href="">Water heater repair</a></li>
                    <li><a href="">Water cooler repair on site</a></li>
                    
                </ul>
            </div>

            <div className='Nav-Container__items'>
                <a href="#">Cooling and heating &#9662;</a>
                <ul>
                    <li><a href="">Water heater repair</a></li>
                    <li><a href="">Water cooler repair on site</a></li>
                    
                </ul>
            </div>

            <div className='Nav-Container__items'>
                <a href="#">Cooling and heating &#9662;</a>
                <ul>
                    <li><a href="">Water heater repair</a></li>
                    <li><a href="">Water cooler repair on site</a></li>
                    
                </ul>
            </div>

            <div className='Nav-Container__items'>
                <a  href="#">Cooling and heating &#9662;</a>
                <ul>
                    <li><a href="">Water heater repair</a></li>
                    <li><a href="">Water cooler repair on site</a></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar