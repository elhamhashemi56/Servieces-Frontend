
import './formfooter.scss'

function FormFooter ({step,setStep}){
    
    return(
        <div className='Form-Footer'>
           <button  onClick={()=>setStep(step+1)}>{step === 0 ? "START" : "NEXT"}</button>
           <button  onClick={()=>setStep(step-1)}>BACK</button>  
        </div>
    )
}

export default FormFooter