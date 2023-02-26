import styles from "./Input.module.scss";

const classNames = require("classnames");
export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({ value, onChange, ...props }) => {
  const inputClass = classNames(
    styles.input,
    { input_disabled: props.disabled },
    props.className
  );
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}
      className={inputClass}
      type="text"
      placeholder="Search property"
    />
  );
};
