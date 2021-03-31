
import React from "react";
import { connect } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import {
    Button,
    Card,
    Dimmer,
    Divider,
    Form,
    Grid,
    Header,
    Image,
    Label,
    Loader,
    Menu,
    Message,
    Segment,
    Select,
    Table,
} from "semantic-ui-react";
import {
    countryListURL,
    addressListURL,
    addressCreateURL,
    addressUpdateURL,
    addressDeleteURL,
    userIDURL,
    paymentListURL
} from "../constants";
import axios from "axios";

import { authAxios } from "../utils";
import { endpoint } from "../constants";



class OrbitplugGuideline extends React.Component {

    state = {
        loading: false,
        error: null,
        data: []
      };
    


    componentDidMount() {
        this.setState({ loading: true });
        
          window.scrollTo(0, 0);
      
    
    
        axios
          .get(`${endpoint}/OrbitplugGuidelineView/`)
    
          .then(res => {
            this.setState({ data: res.data.results, loading: false });
            window.scrollTo(0, 0);
    
    
          })
          .catch(err => {
            this.setState({ error: err, loading: false });
          });
      }


    render() {
        const { data, error, loading } = this.state;

        return (
            <div className='container my-1'>
                <div className='row ml-4'>
               


                    <div className='col-md-12'>
                        <div className='row'>


                        {data.map(v => {
                            return (
        
                                <div className='col-md-4'>
                                    <br></br>
                                    <div class="list-group" id="list-tab" role="tablist">
                                        <NavLink to={`/${v.link}`} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                                            <div className='row'>
                                                <div className="col-md-12">
                                                    <img style={{ width: "55px", height: "55px", display: "inline-block" }} src={v.image} class="rounded float-start" alt="..." />
                                                    <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}>{v.name}</h5>

                                                </div>

                                                <p></p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                  );
                                })}



                            <br></br>

                        

               




                        
                    




{/* ....................................................................................................................................... */}


                                <div className='col-md-12' style ={{textAlign:"center"}}>
                                    <br></br>
                                <br></br>
                                <br></br>
                        

                                        <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">
                                    <img src="https://scontent.fdac41-1.fna.fbcdn.net/v/t1.15752-9/137076265_151163760140074_333387832993996218_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=Q9lzpt2E2B8AX_M9H5B&_nc_ht=scontent.fdac41-1.fna&oh=324ce6f2691598750e57be8b83a84d1b&oe=6037DD1D" class="img-fluid" alt="..." />
                                            
                                        </NavLink>
                                </div>




                            <div className='col-md-12' style={{ textAlign: "center" }}>
                                <br></br>
                                <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fshovabd.com%2Fimages%2Fpayment%2Frocket-payment.jpg&f=1&nofb=1" class="img-fluid" alt="..." />

                                </NavLink>
                            </div>




                            <div className='col-md-12' style={{ textAlign: "center" }}>
                                <br></br>
                                <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fddnbd.com%2Fwp-content%2Fuploads%2F2020%2F08%2FPayment-Flow-Chart-1-for-ISP-823x551.jpeg&f=1&nofb=1" class="img-fluid" alt="..." />

                                </NavLink>
                            </div>





                                <div className='col-md-12' style ={{textAlign:"center"}}>
                                <br></br>
                                <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpayment.surecash.net%2Fwp-content%2Fuploads%2F2020%2F09%2FGBMC-Payment-Process-Banner-1024x725.png&f=1&nofb=1" class="img-fluid" alt="..." />

                                </NavLink>
                            </div>












                        </div>
                    </div>



                </div>
            </div>


        );
    }
}



export default OrbitplugGuideline;
