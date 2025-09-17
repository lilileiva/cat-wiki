import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import logo from '../../img/CatwikiLogo.svg';

function Navbar() {
  return (
    <div className={style.container}>
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  )
}

export default Navbar;