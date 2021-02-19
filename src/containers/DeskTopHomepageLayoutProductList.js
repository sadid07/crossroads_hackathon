
import React from "react";
import "./Product.css";
import "./productlist.css"
import { useStateValue } from "./StateProvider";
import "./DeskTopHomepageLayout.css"
import DeskTopHomepageLayoutProduct from "./DeskTopHomepageLayoutProduct"
import { NavLink } from 'react-router-dom'

function DeskTopHomepageLayoutProductList({ id, title, image, price, rating }) {


    return (

        <div className='product'>
            <div className="product__info">
                <h4> Kenwood kMix Stand </h4>
 
            </div>
            <div className='row ' >
               
              
                <div className='col-md-6'>
                    <DeskTopHomepageLayoutProduct

                        id={10002}
                        title="Kenwood kMix Stand "
                        price={239}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.quadjunkie.co.nz%2Fwp-content%2Fuploads%2F2020%2F09%2FNazgul5-analog-fpv-drone-3-1000x1000-1.jpg&f=1&nofb=1"
                        rating={4}
                    />

                </div>
                <div className='col-md-6'>
                    <DeskTopHomepageLayoutProduct

                        id={10002}
                        title="Kenwood kMix Stand "
                        price={239}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficdn2.digitaltrends.com%2Fimage%2Fdji-aeroscope-portable-unit-2-1000x1000.jpg&f=1&nofb=1"
                        rating={4}
                    />

                </div>

                <div className='col-md-6'>
                    <DeskTopHomepageLayoutProduct

                        id={10002}
                        title="Kenwood kMix Stand "
                        price={239}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdronemadness.com%2Fwp-content%2Fuploads%2F2019%2F06%2FRISE-Vusion-250-Best-Cheap-Drones.jpg&f=1&nofb=1"
                        rating={4}
                    />

                </div>


                <div className='col-md-6' >
                    <DeskTopHomepageLayoutProduct

                        id={10002}
                        title="Kenwood kMix Stand "
                        price={239}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdrones.bg%2Fwp-content%2Fuploads%2F2020%2F05%2Ftitan-xl5-bnf-4-1000x1000-1-1.jpg&f=1&nofb=1"
                        rating={4}
                    />

                </div>


            </div>
            <h6> Kenwood kMix Stand </h6>
        </div>
    );
}

export default DeskTopHomepageLayoutProductList;
