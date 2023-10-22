import { useState } from "react";
import s from "./menu.module.scss";
import { menu } from "assets/db";

const Menu = () => {
  console.log(menu);
  const [category, setCategory] = useState(null)
  return (
    <div className="container">
      <div className={s.menu_wrapper}>
        <h1>Menu</h1>
        <div className={s.categories}>
          {menu.map((el, i) => {
            return (
              <div key={i}>
                <h2 className={s.category_name} onClick={()=>{
                    setCategory((prev)=>{
                        if(prev === el.id) return null
                        return el.id
                    })
                }}>{el.name}</h2>
                <div className={el.id !== category ? s.products_closed : s.products_open}>
                  {el.products.map((el, index) => {
                    return (
                      <div key={index} className={s.product}>
                        <div className={s.product__image}>
                          <img src={el.image} alt="" />
                        </div>
                        <div className={s.procust__infos}>
                          <h3 className={s.product__name}>{el.name}</h3>
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
