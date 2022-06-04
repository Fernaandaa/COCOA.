import './Banner.css'
import {Banner}from'../../elements/Elements'
import Border from '../../img/BORDER .svg'

function Bannerfx(props) {
    return (
        <div>
            <h1>ajajja</h1>
            
            <Banner background={require(`../../img/cakeshop/cakes/101001.jpg`)} >
                <img src={Border}/>
            </Banner>
        </div>
    );
}

export default Bannerfx;