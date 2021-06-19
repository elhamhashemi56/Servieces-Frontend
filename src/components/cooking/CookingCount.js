import './cookingforms.css'



function CookingCount (){
    return(
        <div className='Cooking-container-forms'>
        <div className='cookInfo-forms'>
            <div className='cookItem1'></div>
            <div className='cookItem-forms'>
                <form className='form-container'>
                        <div className='form-questions'>
                            <div className='question'>How many people do you need this service for?</div>
                            <div className='answers'>
                                <div className='answers-items'><input type="radio" value="Man" />Less than 10 people</div>
                                <div className='answers-items'><input type="radio" value="Woman"/>10-20</div>
                                <div className='answers-items'><input type="radio" value="Woman"/>20-40</div>
                                <div className='answers-items'><input type="radio" value="Woman"/>40-60</div>
                                <div className='answers-items'><input type="radio" value="Woman"/>60-80</div>
                                <div className='answers-items'><input type="radio" value="Woman"/>80-100</div>
                                <div className='answers-items'><input type="radio" value="Nodiffrent" />More than 100 people</div>
                                
                            </div>
                        </div>
                </form>
            </div>
            <div className='cookItem1'></div>
        </div>
        
    </div>
    )
}

export default CookingCount