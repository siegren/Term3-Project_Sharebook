import Radium from 'radium';
import color from 'color';
import React from 'react';
import { Link } from 'react-router';

const styles = {
  base: {
    color: 'gray'
  },
  header: {
    fontSize: 15,
    // color: '#fff',
    margin: 0
  }

}
//@Radium
const Header = (props) => (
  <header className="header"
    style={[
      styles.base,
      styles.header
    ]}>
    <nav className = "navbar navbar-default">
      <div className = "container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">ShareBook</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='books'>Book List</Link></li>
            <li><Link to='/new'>Donate Book</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);


export default Radium(Header);
