import './forms.scss'

function CookingCount (){
    return(
        <div className='Form-container'>
            <div className='Form-container__flex'>
                <div className='Form-container__flex--item1'></div>
                <div className='Form-container__flex--item'>
                    <form>
                        <section>
                            <div className='Form-question'>How many people do you need this service for?</div>
                            <div className='Form-answers'>
                                <div className='answers-items'><label><input name="count"  type="radio" value="Less-than-10" />Less than 10 people</label></div>
                                <div className='answers-items'><label><input name="count"  type="radio" value="10-20" />10-20</label></div>
                                <div className='answers-items'><label><input name="count"  type="radio" value="20-40" />20-40</label></div>
                                <div className='answers-items'><label><input name="count"  type="radio" value="40-60" />40-60</label></div>
                                <div className='answers-items'><label><input name="count"  type="radio" value="60-80" />60-80</label></div>
                                <div className='answers-items'><label><input name="count"  type="radio" value="80-100" />80-100</label></div>
                                <div className='answers-items'><label><input name="count"  type="radio" value="More-than-100" />More than 100 people</label></div>
                            </div>
                        </section>
                    </form>
                </div>
                <div className='Form-container__flex--item1'></div>
            </div>
        </div>
    )
}

export default CookingCount


