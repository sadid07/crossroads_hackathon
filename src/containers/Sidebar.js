import React, { useState } from 'react';
import styled from 'styled-components';
import { Link ,NavLink} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import $ from "jquery";

const Nav = styled.div`
  background: #FFFFFF;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #FFFFFF;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;

  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 100;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const SidebarHide = () => {


    $('.header').on("click", function () {
  
      setSidebar(false);

    });

    $('.home').on("click", function () {

      setSidebar(false);

    });

    $('.sidebar__hidden').on("click", function () {
      setSidebar(false);
      console.log('click.......')
    });




  }


  return (
    <>
      {SidebarHide()}
      <IconContext.Provider  value={{ color: '#FFFFFF' }}>
        <NavLink className="secondHeader__btn" to='#' style={{ marginLeft: '24px' ,marginTop:"6px" ,marginBottom:'11px'}} onClick={showSidebar}>
            <FaIcons.FaBars style={{width:"21px" ,height:"23px" ,marginTop:'-3px'}}  onClick={showSidebar} />
          </NavLink>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavLink to='#'>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={showSidebar} style={{marginLeft:"292px" ,color:'black'}}  width="45" height="45" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </NavLink>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
