import React , { PropTypes } from 'react';
import {Link,IndexLink} from 'react-router';

const Header = () => {
return (
    <nav>       
        <IndexLink to="/" activeClassName ="active" >Home </IndexLink>
         {" | "}
         <IndexLink to="/courses" activeClassName ="active" >Product </IndexLink>
        {" | "}
         <IndexLink to="/about" activeClassName ="active" >About </IndexLink>
         {" | "}
         <IndexLink to="/tictac" activeClassName ="active" >TicTac </IndexLink>
         {" | "}
         <IndexLink to="/basic" activeClassName ="active" >Examples </IndexLink>
         </nav>
);

};

export default Header;