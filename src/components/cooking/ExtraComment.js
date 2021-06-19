import './cookingforms.css'



function ExtraComment (){
    return(
        <div className='Cooking-container-forms'>
        <div className='cookInfo-forms'>
            <div className='cookItem1'></div>
            <div className='cookItem-forms'>
                <form className='form-container'>
                        <div className='form-questions'>
                            <div className='question'>Any other explanation that the expert needs to know :</div>
                            <textarea className='textereaClass' name="Comment" id="" cols="25" rows="8" placeholder='For example, how to coordinate or more details ...'></textarea>
                        </div>
                </form>
            </div>
            <div className='cookItem1'></div>
        </div>
        
    </div>
    )
}

export default ExtraComment