import './cooking.css'
import StartBack from './StartBack'

function Cooking (){
    return(
    
        <div className='Cooking-container'>
            <div className='cookInfo'>
                <div className='cookItem1'></div>
                <div className='cookItem'>cooking info</div>
                <div className='cookItem1'></div>
            </div>
            <div>
             <StartBack />
            </div>
        </div>
    )
}

export default Cooking