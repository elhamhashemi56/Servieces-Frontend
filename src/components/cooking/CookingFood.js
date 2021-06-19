import './cookingforms.css'



function CookingFood (){
    return(
        <div className='Cooking-container-forms'>
        <div className='cookInfo-forms'>
            <div className='cookItem1'></div>
            <div className='cookItem-forms'>
                <form className='form-container'>
                        <div className='form-questions'>
                            <div className='question'>In what areas do you need a chef?</div>
                            <div className='answers'>
                                <div className='answers-items'><input type="checkbox" value="course" />main course</div>
                                <div className='answers-items'><input type="checkbox" value="Desserts"/>Desserts and appetizers</div>
                            </div>
                        </div>
                </form>
            </div>
            <div className='cookItem1'></div>
        </div>
        
    </div>
    )
}

export default CookingFood