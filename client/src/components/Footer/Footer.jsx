import style from './Footer.module.css';
import logo from '../../img/CatwikiLogo.svg';

function Footer() {
  return (
    <div className={style.container}>
      <img className={style.logo} src={logo} alt="logo" />
      <p className={style.text}>
        © created by <a href='https://lilianaleiva.vercel.app' rel="noreferrer" target='_blank'><b>Liliana Leiva</b></a> - devChallenge.io 2022
      </p>
    </div>
  )
}

export default Footer;