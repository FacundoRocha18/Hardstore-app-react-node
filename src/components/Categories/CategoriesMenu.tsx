import React from "react";
import { Link } from "react-router-dom";

/* Styles imports -------------------------------- */
import style from "./CategoriesMenu.module.css";

const CategoriesMenu = ({ categories }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.menu}>
          {categories.map(({ id, name }, index) => (
            <li key={index}>
              <Link to={`/api/products/categories/${id}`} replace title={name}>
                {name}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesMenu;
