import './Main.css'
import Header from '../../components/Header/Header';
import Bannerfx from '../../components/Banner/Banner'
import Subtitle  from '../../components/Subtitle/Subtitle';
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About';
import imgBanner from '../../img/cakeshop/cakes/101001.jpg'
import Expanding from '../../components/Expanding/Expanding'


function Main(){
    return(
        <div>
        <Header/>
        <Bannerfx background = {imgBanner} />
        <Subtitle  text = "NOSOTROS"/>
        <About />
        <Expanding />
        <Subtitle  text = "CONTÁCTANOS"/>
        <Footer />
        </div>
    );

}

export default Main;