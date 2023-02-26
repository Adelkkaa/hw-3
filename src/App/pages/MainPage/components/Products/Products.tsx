import React, { useContext, useRef, useState, useEffect } from "react";

import { Card } from "@components/Card/Card";
import { Loader } from "@components/Loader/Loader";
import { Context, Response } from "@utils/Context/Context";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

import styles from "./Products.module.scss";

const Products = () => {
  const products = useContext(Context);
  const [productsPerPage, setProductsPerPage] = useState<Response[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const productsLenght = useRef(9);

  useEffect(() => {
    setProductsPerPage(products.slice(0, productsLenght.current));
  }, [products]);
  const fetchMoreData = () => {
    if (productsPerPage.length >= products.length) {
      setHasMore(false);
      return;
    }
    productsLenght.current += 9;
    const newElem: Response[] = products.slice(0, productsLenght.current);
    setProductsPerPage(newElem);
  };
  return (
    <>
      <div className={styles.products}>
        <h2 className={styles.products__title}>Total Product</h2>
        <h6 className={styles.products__count}>{products.length}</h6>
      </div>

      {products.length === 0 ? (
        <Loader className={styles.loader} />
      ) : (
        <InfiniteScroll
          dataLength={productsPerPage.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={null}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className={styles.products__wrapper}>
            {productsPerPage.map((item) => (
              <Link key={item.id} to={`/products/${item.id}`}>
                <Card
                  title={item.title}
                  subtitle={
                    item.description.length > 133
                      ? item.description.split(" ").slice(0, 15).join(" ") +
                        "..."
                      : item.description
                  }
                  image={item.images[0]}
                  content={item.price}
                  category={item.category?.name}
                />
              </Link>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

export default Products;
