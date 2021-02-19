import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #131921;
  justify-content: space-between;
  align-items: center;
  ${'' /* padding: 5px; */}
  list-style: none;
  height: 37px;
  text-decoration: none;
  font-size: 14px;
  ${'' /* margin-left: 18px; */}

  &:hover {
    background: #EAEDED;
    ${'' /* border-left: 4px solid #632ce4; */}
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 18px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 37px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #131921;
  font-size: 18px;

  ${'' /* &:hover {
    background: #632ce4;
    cursor: pointer;
  } */}
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick = {item.subNav && showSubnav} >
        <div>
          {/* {item.icon} */}
          <SidebarLabel className = "sidebar__hidden" >{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel >{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
