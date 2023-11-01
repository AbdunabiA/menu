import BurgerMenu from "assets/icons/burgerMenu";
import s from "./header.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "assets/images/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    hide: { y: 40, opacity: 0 },
  };
  const [nav, setNav] = useState(false);
  const { i18n, t } = useTranslation();
  return (
    <header>
      <div className={s.nav_bg}>
        {nav ? (
          <motion.div
            // initial={{y:-100}}
            // animate={{y:0}}
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
              <motion.ul
                variants={container}
                initial="hidden"
                animate="visible"
                transition={{}}
                
              >
              
                  <motion.li key={1} variants={item} >
                    <a href="#main">{t("Asosiy")}</a>
                  </motion.li>
                  <motion.li key={2} variants={item} >
                    <a href="#menu">{t("Menyu")}</a>
                  </motion.li>
                  <motion.li key={3} variants={item} >
                    <a href="#contacts">{t("Kontaktlar")}</a>
                  </motion.li>
                  <motion.li key={4} variants={item} >
                    <a href="#location">{t("Bizning joylashuvimiz")}</a>
                  </motion.li>
                  <motion.li key={5} variants={item} >
                    <p
                      className={i18n.language === "ru" ? s.low_opacity : null}
                      onClick={() => i18n.changeLanguage("uz")}
                    >
                      UZ
                    </p>
                  </motion.li>
                  <motion.li key={6} variants={item} >
                    <p
                      className={i18n.language === "uz" ? s.low_opacity : null}
                      onClick={() => i18n.changeLanguage("ru")}
                    >
                      RU
                    </p>
                  </motion.li>
                
              </motion.ul>
            </div>
          </motion.div>
        ) : null}
        <div className="container">
          <motion.nav initial={{ y: "-100%" }} animate={{ y: 0 }}>
            <div className={s.logo}>
              <img src={logo} alt="" />
            </div>
            <div className={s.hamburger} onClick={() => setNav(true)}>
              <BurgerMenu width={25} height={25} />
            </div>
            <ul className={s.pc_nav}>
              <li>
                <a href="#main">{t("Asosiy")}</a>
              </li>
              <li>
                <a href="#menu">{t("Menyu")}</a>
              </li>
              <li>
                <a href="#contacts">{t("Kontaktlar")}</a>
              </li>
              <li>
                <a href="#location">{t("Bizning joylashuvimiz")}</a>
              </li>
              <li>
                <p
                  className={i18n.language === "ru" ? s.low_opacity : null}
                  onClick={() => i18n.changeLanguage("uz")}
                >
                  UZ
                </p>
              </li>
              <li>
                <p
                  className={i18n.language === "uz" ? s.low_opacity : null}
                  onClick={() => i18n.changeLanguage("ru")}
                >
                  RU
                </p>
              </li>
            </ul>
          </motion.nav>
        </div>
      </div>
      <motion.div initial={{opacity:0, y:800}} transition={{stiffness:100}} animate={{opacity:1, y:0}} className={s.header_bg}>
        <div className="container">
          <motion.div className={s.welcome_text} initial={{opacity:0, y:-800}} animate={{opacity:1, y:0}}>
            <h1>{t("Tanho cakega xush kelibsiz")}</h1>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
