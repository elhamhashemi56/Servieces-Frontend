import './home.css'
import homeBild from './images/pic-home.jpg'
import HomeBottom  from './HomeBottom'
function Home (){
    return(
      <div>
        <div className='homepic'>
          <div className='homepic-items lefthome'>
            <div className='choose'>Choose your city and search for the service you want.</div>
            <div className='search'></div>
          </div>
          <div className='homepic-items homelogo'>
            <div className='p1'><div className='p1div'>Home</div></div>
            <div className='p_contain'>
              <div className='pservice'>SERVICES</div>
              <div className='and'>&</div>
              <div className='repair'>REPAIRS</div>
            </div>
            <div className='line'><p className='titrline'>The  smallest  things  make  the  biggest  difference</p></div>
          </div>
          <div className='homepic-items'><img src={homeBild} className='handwerker'></img></div>
        </div>
        <div className='trclass'></div>
        <HomeBottom />
      </div>
    )
}

export default Home