import './Biscuits.css'
import Bannerfx from '../../../components/Banner/Banner';
import Biscuitsbanner from "../../../img/cakeshop/biscuits/COOKIES-BANNER.png";
import Subtitle  from '../../../components/Subtitle/Subtitle';
import Cards from '../../../components/Cards/Cards';
import Footer from '../../../components/Footer/Footer'


function Biscuits(){
    return(
        <div className='main'>
        <Bannerfx background={Biscuitsbanner}/>
        <Subtitle text="GALLETAS"/>
        <Cards url='http://localhost:4000/biscuits' />
        <Footer />
        </div>
    );
}

export default Biscuits;