import React from "react";

import Filter from "./components/Filter";
import Products from "./components/Products";
import Search from "./components/Search";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.main__title}>Products</h1>
      <p className={styles.main__descr}>
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </p>
      <div className={styles.main__search}>
        <Search />
        <Filter />
      </div>
      <Products />
    </div>
  );
};

export default MainPage;
