import './cookingforms.css'
import NextBack from './NextBack'


function CookingForms (){
    return(
        <div className='Cooking-container-forms'>
        <div className='cookInfo-forms'>
            <div className='cookItem1'></div>
            <div className='cookItem-forms'>
                <form className='form-container'>
                        <div className='form-questions'>
                            <div className='question'>Do you need a man or a woman?</div>
                            <div className='answers'>
                                <div className='answers-items'><input type="radio" value="Man" />Man</div>
                                <div className='answers-items answer-line'></div>
                                <div className='answers-items'><input type="radio" value="Woman"/>Woman</div>
                                <div className='answers-items answer-line'></div>
                                <div className='answers-items'><input type="radio" value="Nodiffrent" />No diffrent</div>
                            </div>
                        </div>
                </form>
            </div>
            <div className='cookItem1'></div>
        </div>
        <div>
         <NextBack />
        </div>
    </div>
    )
}

export default CookingForms