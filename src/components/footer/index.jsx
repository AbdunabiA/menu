import Telegram from "assets/icons/telegram";
import s from "./footer.module.scss";
import Instagram from "assets/icons/instagram";
import logo from "assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={s.footer_wrapper}>
          <div className={s.left}>
            <img src={logo} alt="" />
          </div>
          <div className={s.right}>
            <a href="https://t.me/tanhocake_uz" className={s.icon}>
              <Telegram w={"30"} h={"30"} />
            </a>
            <a href="https://www.instagram.com/tanhocakeuz/" className={s.icon}>
              <Instagram w={"30"} h={"30"} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
