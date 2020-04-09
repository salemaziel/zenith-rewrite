import React from 'react';
//import NavBarCustom from './NavDir/NavBarCustom';
import NavbarRowFull from "./NavRowFull"
import SideNav, {MenuIcon} from "react-simple-sidenav"



//const Header = () => (
class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      showNav: false,

    }
  }

  render() {
    return (
  <header>
    <div className="container-fluid">
     
      <NavbarRowFull />

              
        
    </div>
  </header>
);
    }
  }

export default Header;
