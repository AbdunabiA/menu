import BurgerMenu from "assets/icons/burgerMenu";
import s from "./header.module.scss";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <header>
      <div className={s.nav_bg}>
        {nav ? (
          <div
            className={s.mobile_nav}
            id="cover"
            onClick={(e) => {
              if (e.target.id === "cover") {
                setNav(false);
              }
            }}
          >
            <div className={s.navlinks_wrapper}>
              <div className={s.exit}>
                <h1 onClick={() => setNav(false)}>X</h1>
              </div>
              <ul>
                <li>
                  <a href="#main">Главная</a>
                </li>
                <li>
                  <a href="#menu">Меню</a>
                </li>
                <li>
                  <a href="#contacts">Контакты</a>
                </li>
                <li>
                  <a href="#location">Наша локация</a>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
        <div className="container">
          <nav>
            <div className={s.logo}>
              <h1>Logo</h1>
            </div>
            <div className={s.hamburger} onClick={() => setNav(true)}>
              <BurgerMenu width={25} height={25} />
            </div>
            <ul className={s.pc_nav}>
              <li>
                <a href="#main">Главная</a>
              </li>
              <li>
                <a href="#menu">Меню</a>
              </li>
              <li>
                <a href="#contacts">Контакты</a>
              </li>
              <li>
                <a href="#location">Наша локация</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={s.header_bg}>
        <div className="container">
          <div className={s.welcome_text}>
            <h1>Lorem ipsum dolor sit.</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
