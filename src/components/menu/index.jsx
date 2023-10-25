import { useEffect, useState } from "react";
import s from "./menu.module.scss";
import { menu } from "assets/db";
import { useTranslation } from "react-i18next";

const Menu = () => {
  console.log(menu);
  const {i18n, t} = useTranslation() 
  const [category, setCategory] = useState(null)
  // const [loading, setLoading] = useState(false)
  // const [data, setData] = useState(null)
  // const [error, setError] = useState(null)
  // useEffect(()=>{
  //   setLoading(true)
  //   const getData = async (url) => {
  //     try{
  //       const response = await fetch(url)
  //       const data = response.json()
  //       setData(data)
  //     }catch(error){
  //       setError(error)
  //     }finally{
  //       setLoading(false)
  //     }
  //   }
  //   getData("https://sitemenu.pythonanywhere.com/categories");
  // },[])
  // if(loading) return <p>Loading...</p>
  // if(error) return <p>{error?.message}</p>
  // console.log(data);
  return (
    <div className="container">
      <div className={s.menu_wrapper}>
        <h1>{t("Menyu")}</h1>
        <div className={s.categories}>
          {menu.map((el, i) => {
            return (
              <div key={i}>
                <div
                  onClick={() => {
                    setCategory((prev) => {
                      if (prev === el.id) return null;
                      return el.id;
                    });
                  }}
                  className={
                    el.id !== category
                      ? s.category_card
                      : s.category_card_selected
                  }
                >
                  <div className={s.category_image}>
                    <img src={el.image} alt="" />
                  </div>
                  <div className={s.category_content}>
                    <h2 className={s.category_name}>
                      {el[`name_${i18n.language}`]}
                    </h2>
                  </div>
                </div>
                <div
                  className={
                    el.id !== category ? s.products_closed : s.products_open
                  }
                >
                  {el.foods.map((el, index) => {
                    return (
                      <div key={index} className={s.product}>
                        <div className={s.product__image}>
                          <img src={el.image} alt="" />
                        </div>
                        <div className={s.product__infos}>
                          <h3 className={s.product__name}>{el.name_uz}</h3>
                          <p className={s.product__price}>{el.price}</p>
                          <p className={s.product__comment}>{el.comment}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
