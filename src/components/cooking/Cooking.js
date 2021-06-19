import { useState } from 'react'
import './cooking.scss'
import CookingGender from './CookingGender'
import FormFooter from './FormFooter'
import CookingInfo from './CookingInfo'
import CookingCount from './CookingCount'
import CookingFood from './CookingFood'
import ExtraComment from './ExtraComment'
import DateTime from './DateTime'


const STEP_INFO=0
const STEP_GENDER=1
const STEP_COUNT=2
const STEP_FOOD=3
const STEP_COMMENT=4
const STEP_DATE_TIME=5


function Cooking (){
    const [step,setStep]=useState(STEP_INFO)

    const generetStep=()=>{
        switch(step){

            case STEP_INFO:
                return <CookingInfo />

            case STEP_GENDER:
                return <CookingGender />

            case STEP_COUNT:
                return <CookingCount />

            case STEP_FOOD:
                return <CookingFood />

            case STEP_COMMENT:
                return <ExtraComment />

            case STEP_DATE_TIME:
                return <DateTime />
        }
    }

    return(
        <div className='Cooking-container'>
            {generetStep()}
            <div>
             <FormFooter step={step} setStep={setStep} />
            </div>
        </div>
    )
}

export default Cooking