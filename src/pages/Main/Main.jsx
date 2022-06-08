import './Main.css'
import Header from '../../components/Header/Header';
import Bannerfx from '../../components/Banner/Banner';
import imgBanner from '../../img/cakeshop/cakes/101001.jpg'
import Subtitle from '../../components/Subtitle/Subtitle'
import Expanding from '../../components/Expanding/Expanding'
import Footer from '../../components/Footer/Footer'

function Main(){
    return(
        <div>
        <Header/>
        <Bannerfx background = {imgBanner} />
        <Subtitle  text = "NOSOTROS"/>
        <Expanding />
        <Subtitle  text = "CONTÁCTANOS"/>

        <Footer />
        </div>

    );
}
export default Main;