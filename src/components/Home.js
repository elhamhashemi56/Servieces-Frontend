import './home.scss'
import homeBild from './images/pic-home.jpg'
import HomeMain  from './HomeMain'
function Home (){
    return(
      <div className='Home'>
        <div className='Home__header'>
          <section className='Home__header--left'>
            <div className='HomeHeaderLeft-choose'>Choose your city and search for the service you want.</div>
            <div className='HomeHeaderLeft-search'></div>
          </section>

          <section className='Home__header--logo'>
            <div className='HomeHeaderLogo-haus'><div className='HomeHeaderLogo-hausTitr'>Home</div></div>
            <div className='HomeHeaderLogo-contain'>
              <div className='HomeHeaderLogo-service'>SERVICES</div>
              <div className='HomeHeaderLogo-and'>&</div>
              <div className='HomeHeaderLogo-repair'>REPAIRS</div>
            </div>
            <div className='HomeHeaderLogo-line'><p className='HomeHeaderLogo-titrline'>The  smallest  things  make  the  biggest  difference</p></div>
          </section>
         
          <img src={homeBild} className='Home__header--handwerker'></img>

        </div>

        <div className='Home__mitte'></div>
        <HomeMain />
      </div>
    )
}

export default Home