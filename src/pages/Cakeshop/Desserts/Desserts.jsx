import Bannerfx from '../../../components/Banner/Banner';
import './Desserts.css'
import dessertsBanner from '../../../img/cakeshop/desserts/DESSERT-BANNER.jpg'
import Subtitle  from '../../../components/Subtitle/Subtitle';
import Cards from '../../../components/Cards/Cards';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header'

function Desserts(){
    return(
        <div>
            <Header />
            <Bannerfx background={dessertsBanner}></Bannerfx>
            <Subtitle text="POSTRES"></Subtitle>
            <Cards />
            <Footer />
        </div>
    );
}

export default Desserts;