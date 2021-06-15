
import './startback.css'
import {useHistory} from 'react-router-dom'


function StartBack (){
    
    const history=useHistory()
    const forms = ()=>{
            history.push('./cookingforms')
    }

    return(
        <div className='StartBack'>
           <div><button className='butnS-B' onClick={forms}>START</button></div>
           <div><button className='butnS-B'>BACK</button></div>
            

        </div>
    )
}

export default StartBack