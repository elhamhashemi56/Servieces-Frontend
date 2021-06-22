import './forms.scss'

function CookingGender (){
    return(
        <div className='Form-container'>
            <div className='Form-container__flex'>
                <div className='Form-container__flex--item1'></div>
                <div className='Form-container__flex--item'>
                    <form>
                        <section>
                            <div className='Form-question'>Do you need a man or a woman?</div>
                            <div className='Form-answers'>
                                <div className='answers-items'><label><input name="gender"  type="radio" value="Man" />Man</label></div>
                                <div className='answers-items'><label><input name="gender"  type="radio" value="Woman" />Woman</label></div>
                                <div className='answers-items'><label><input name="gender"  type="radio" value="No-diffrent" />No diffrent</label></div>
                            </div>
                        </section>
                    </form>
                </div>
                <div className='Form-container__flex--item1'></div>
            </div>
        </div>
    )
}

export default CookingGender