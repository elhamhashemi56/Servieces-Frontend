
import './formfooter.css'

function FormFooter ({step,setStep}){
    
    return(
        <div className='StartBack'>
           <div><button className='butnS-B' onClick={()=>setStep(step+1)}>{step === 0 ? "START" : "NEXT"}</button></div>
           <div><button className='butnS-B' onClick={()=>setStep(step-1)}>BACK</button></div>
            

        </div>
    )
}

export default FormFooter