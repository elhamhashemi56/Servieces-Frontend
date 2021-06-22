import './forms.scss'

function CookingFood (){
    return(

        <div className='Form-container'>
            <div className='Form-container__flex'>
                <div className='Form-container__flex--item1'></div>
                <div className='Form-container__flex--item'>
                    <form>
                        <section>
                            <div className='Form-question'>In what areas do you need a chef?</div>
                            <div className='Form-answers'>
                                <div className='answers-items'><input type="checkbox" value="course" />main course</div>
                                <div className='answers-items'><input type="checkbox" value="Desserts" />Desserts and appetizers</div>
                            </div>
                        </section>
                    </form>
                </div>
                <div className='Form-container__flex--item1'></div>
            </div>
        </div>
    )
}

export default CookingFood