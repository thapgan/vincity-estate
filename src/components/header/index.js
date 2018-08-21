import React, { Component } from 'react';
import Link from 'gatsby-link'
import './header.css'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    }

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    const menus = [
      {name: 'VinCity Gia Lâm', link:'/#vincityGiaLam'},
      {name: 'Chung Cư', link:'/#ChungCu'},
      {name: 'Biệt thự', link:'/#BietThu'},
      {name: 'Tiện ích', link:'/#TienIch'},
      {name: 'Tin Tức', link:'/tin-tuc'}
    ]    
    return (
      <header className="header">
        <nav>
          
          <Link
            to="/"
            className="brand-name"
          >
            <img src="/vinlogo.png" style={{float: 'left', height: '35px'}}/><span style={{color:'rgb(237,172,16)'}}>VinCity</span><span style={{color:'white'}}> - Estate</span>
          </Link>
          <div style={{
            float: 'right',
            height: '50px',
            display: 'inline-block',
            lineHeight: '50px'
          }}>
            <i className="navbar-toogle fas fa-bars" onClick={(e)=>{this.handleToggle(e)}}/>
            <ul className={`navbar-right ${this.state.toggle ? '' : 'menu-hide'}`}>
              {
                menus.map(m => {
                  return <li key={m.name}><Link to={m.link} activeClassName="menu-active" onClick={(e)=>{this.handleToggle(e)}}>{m.name}</Link></li>
                })          
              }
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
export default Header
