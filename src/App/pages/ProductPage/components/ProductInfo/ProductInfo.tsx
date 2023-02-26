import React, { useContext, useEffect, useState } from "react";

import { Button } from "@components/Button/Button";
import { Card } from "@components/Card/Card";
import { Loader } from "@components/Loader/Loader";
import { Context, Response } from "@utils/Context/Context";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import styles from "./ProductInfo.module.scss";

const ProductInfo = () => {
  const [product, setProduct] = useState<Response | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const products = useContext(Context);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios({
        method: "get",
        url: `https://api.escuelajs.co/api/v1/products/${id}`,
      });
      setProduct(data);
      setLoading(false);
    };

    fetch();
  }, [id]);
  return (
    <>
      {!loading ? (
        <>
          <div className={styles.product}>
            <img
              src={product!.images[0]}
              alt="Sorry"
              className={styles.product__img}
            />
            <div className={styles.product__wrapper}>
              <h3 className={styles.product__wrapper__title}>
                {product!.title}
              </h3>
              <p className={styles.product__wrapper__descr}>
                {product!.description}
              </p>
              <div className={styles.product__wrapper__content}>{`${
                product!.price
              }$`}</div>
              <div className={styles.product__wrapper__buttons}>
                <Button className={styles.product__wrapper__buttons__payment}>
                  Buy Now
                </Button>
                <Button className={styles.product__wrapper__buttons__cart}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
          <p className={styles.title}>Related Items</p>
          <div className={styles.related}>
            {products
              .filter(
                (item) =>
                  item.category.id === product?.category.id &&
                  item.id !== product.id
              )
              .slice(0, 3)
              .map((item) => (
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
        </>
      ) : (
        <Loader className={styles.loader} />
      )}
    </>
  );
};

export default ProductInfo;
