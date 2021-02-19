



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
import {endpoint} from "../constants";
import { authAxios } from "../utils";
// import { NavLink } from "react-router-dom";


const UPDATE_FORM = "UPDATE_FORM";
const CREATE_FORM = "CREATE_FORM";


// Order
class Order extends React.Component {


    render() {

      const isAuthenticated = localStorage.getItem('token')
      if (!isAuthenticated) {
        return <Redirect to="/login" />;
      }







        return (
        
          <div className='container' style={{ background:'#FFFFFF'}}>
            <div className='row '>
        


            <div className='col-md-12'>
              <div className='row'>

                <div className='col-md-4'>
                  <br></br>
                  <div class="list-group" id="list-tab" role="tablist">
                    <NavLink to={'/allorderproducts'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                      <div className='row'>
                        <div className="col-md-12">
                          <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                       
                            <h5 style={{ display: 'inline-block', marginTop: "12px" ,marginLeft:"22px" }}> All Order Products </h5>

                        </div>
                        {/* <div className='col-md-9'>
                            <h5 style={{ display: 'inline-block', marginTop: "12px" }}> All Order Products </h5>
                        </div> */}
                        <p></p>
                      </div>
                    </NavLink>
                  </div>
                </div>

                <div className='col-md-4'>
                  <br></br>
                  <div class="list-group" id="list-tab" role="tablist">
                    <NavLink to={'/profile'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                      <div className='row'>
                        <div className="col-md-12">
                          <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                            <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}> Profile </h5>

                        
                        </div>
                       
                        <p></p>
                      </div>
                    </NavLink>
                  </div>
                </div>

                <div className='col-md-4'>
                  <br></br>
                  <div class="list-group" id="list-tab" role="tablist">
                    <NavLink to={'/allneworderproductslist'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                      <div className='row'>
                        <div className="col-md-12">
                          <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                            <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}> New Orders </h5>

                        </div>
                        
                        <p></p>
                      </div>
                    </NavLink>
                  </div>
                </div>

                <div className='col-md-4'>
                  <br></br>
                  <div class="list-group" id="list-tab" role="tablist">
                    <NavLink to={'/userordersummary'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                      <div className='row'>
                        <div className="col-md-12">
                          <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                            <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}> Orders Summary </h5>

                        </div>
                       
                        <p></p>
                      </div>
                    </NavLink>
                  </div>
                </div>

                <div className='col-md-4'>
                  <br></br>
                  <div class="list-group" id="list-tab" role="tablist">
                    <NavLink to={'/ordertrack'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                      <div className='row'>
                        <div className="col-md-12">
                          <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                            <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}> Track </h5>

                        </div>
                       
                        <p></p>
                      </div>
                    </NavLink>
                  </div>
                </div>

                <div className='col-md-4'>
                  <br></br>
                  <div class="list-group" id="list-tab" role="tablist">
                    <NavLink to={'/allcompletesorderproducts'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                      <div className='row'>
                        <div className="col-md-12">
                          <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                       
                            <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}> Complete Orders </h5>

                        </div>
                     
                        <p></p>
                      </div>
                    </NavLink>
                  </div>
                </div>

                <div className='col-md-4'>
                  <br></br>
                  <div class="list-group" id="list-tab" role="tablist">
                    <NavLink to={'/allreturnsorderproductslist'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                      <div className='row'>
                        <div className="col-md-12">
                          <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                        
                            <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}> Returns Product List</h5>

                        </div>
                     
                        <p></p>
                      </div>
                    </NavLink>
                  </div>
                </div>

                <div className='col-md-4'>
                  <br></br>
                  <div class="list-group" id="list-tab" role="tablist">
                    <NavLink to={'/allcencelledorderproductslist'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                      <div className='row'>
                        <div className="col-md-12">
                          <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                            <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}> Cancelled Product List</h5>

                        </div>
                        
                     

                        <p></p>
                      </div>
                    </NavLink>
                  </div>
                </div>

              

                </div>

              </div>
            </div>
          </div>


        );
    }
}



export default Order;
