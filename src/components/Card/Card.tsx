import styles from "./Card.module.scss";

export type CardProps = {
  /** URL изображения */
  image: string;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Подзаголовок карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  content?: React.ReactNode;
  category?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  content,
  category,
  ...props
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={image} alt="card-img" />
      <h5 className={styles.card__category}>{category}</h5>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__subtitle}>{subtitle}</p>
      <div className={styles.card__content}>{`${content}$`}</div>
    </div>
  );
};
