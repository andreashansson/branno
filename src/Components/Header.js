import React from 'react';
import '../static/css/Header.css';

const Header = (props) => {

  let menu = props.headers.map((item, i) => {
    return (
      <li key={ i } className="Header-Container__MenuListItem">{ item }</li>
    )
  })

  return (
    <div className="Header-Container">
      <img className="Header-Container__logo" src={ props.logo } alt="logo" />
      <ul className="Header-Container__Menu">
        { menu }
      </ul>
    </div>
  )
}

export default Header;
