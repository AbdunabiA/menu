import { useEffect, useState } from "react";
import s from "./menu.module.scss";
import { menu } from "assets/db";
import { useTranslation } from "react-i18next";
import Loader from "components/loader";
import { motion } from "framer-motion";

const Menu = () => {
  // console.log(menu);
  const {i18n, t} = useTranslation() 
  const [category, setCategory] = useState(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  useEffect(()=>{
    setLoading(true)
    const getData = async (url) => {
      try{
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      }catch(error){
        setError(error)
      }finally{
        setLoading(false)
      }
    }
    getData("https://sitemenu.pythonanywhere.com/categories");
  },[])
  useEffect(() => {
    if (category) {
      const firstProduct = document.getElementById(`first-product-${category}`);
      if (firstProduct) {
        firstProduct.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [category]);
  if(loading) return <Loader/>
  if(error) return <p>{error?.message}</p>
  console.log(data);
  return (
    <div className="container">
      <div className={s.menu_wrapper}>
        <h1>{t("Menyu")}</h1>
        <div className={s.categories}>
          {data?.map((categor, i) => {
            return (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                key={i}
              >
                <motion.div
                  onClick={() => {
                    setCategory((prev) => {
                      if (prev === categor.id) return null;
                      return categor.id;
                    });
                  }}
                  className={
                    categor.id !== category
                      ? s.category_card
                      : s.category_card_selected
                  }
                >
                  <div className={s.category_image}>
                    <img src={categor.photo} alt="" />
                  </div>
                  <div className={s.category_content}>
                    <h2 className={s.category_name}>
                      {categor[`name_${i18n.language}`]}
                    </h2>
                  </div>
                </motion.div>
                <div
                  className={
                    categor.id !== category
                      ? s.products_closed
                      : s.products_open
                  }
                >
                  {categor.foods.map((el, index) => {
                    // console.log(el.name_uz, index);
                    return (
                      <div
                        key={index}
                        className={s.product}
                        id={index === 0 ? `first-product-${categor.id}` : null}
                      >
                        <div className={s.product__image}>
                          <img
                            src={`https://sitemenu.pythonanywhere.com${el.photo}`}
                            alt=""
                          />
                        </div>
                        <div className={s.product__infos}>
                          <h3 className={s.product__name}>
                            {el[`name_${i18n.language}`]}
                          </h3>
                          <p className={s.product__price}>{el.price}</p>
                          <p className={s.product__comment}>
                            {el[`about_${i18n.language}`]}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
