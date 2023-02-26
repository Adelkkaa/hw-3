import styles from "./Button.module.scss";
import { Loader } from "../Loader/Loader";
import { LoaderSize } from "../Loader/Loader";

const classNames = require("classnames");

export type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  className?: string;
  disabled?: boolean;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  loading,
  children,
  className,
  disabled,
  ...props
}) => {
  const btnClass = classNames(className, styles.button, {
    button_disabled: disabled || loading,
  });
  return (
    <>
      {loading ? (
        <button
          className={btnClass}
          {...props}
          disabled
          style={{ padding: "0px 18px 0px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ padding: "0px 18px 0px 0px" }}>
              {" "}
              <Loader size={LoaderSize.s} />
            </div>
            {children}
          </div>
        </button>
      ) : (
        <button
          className={btnClass}
          style={{ padding: "0px 27px 0px" }}
          disabled={disabled}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
};
