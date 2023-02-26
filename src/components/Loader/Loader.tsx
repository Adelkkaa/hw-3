import styles from "./Loader.module.scss";
export enum LoaderSize {
  s = "s",
  m = "m",
  l = "l",
}

export type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};

export const Loader: React.FC<LoaderProps> = ({ className, size, loading }) => {
  return (
    <>
      {className !== undefined ? (
        <div
          className={`${
            size ? `${styles.loader_size_}${size}` : styles.loader_size_m
          } ${className}`}
        ></div>
      ) : (
        <>
          {loading !== undefined ? (
            loading && (
              <div
                className={
                  size ? `${styles.loader_size_}${size}` : styles.loader_size_m
                }
              ></div>
            )
          ) : (
            <div
              className={
                size ? `${styles.loader_size_}${size}` : styles.loader_size_m
              }
            ></div>
          )}
        </>
      )}
    </>
  );
};
