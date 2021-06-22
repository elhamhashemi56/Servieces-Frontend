import './forms.scss'

function ExtraComment (){
    return(
        <div className='Form-container'>
            <div className='Form-container__flex'>
                <div className='Form-container__flex--item1'></div>
                <div className='Form-container__flex--item'>
                    <form>
                        <section>
                            <div className='Form-question'>Any other explanation that the expert needs to know :</div>
                            <textarea className='form-texterea' name="Comment" id="" cols="25" rows="8" placeholder='For example, how to coordinate or more details ...'></textarea>
                        </section>
                    </form>
                </div>
                <div className='Form-container__flex--item1'></div>
            </div>
        </div>
    )
}

export default ExtraComment

