import styles from './Stub.module.scss';

type Props = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
};

function Stub({ title, subtitle, children }: Props) {
  return (
    <div className={styles.wrapper}>
      {title && <span>{title}</span>}
      {subtitle && <span>{subtitle}</span>}
      {children}
    </div>
  );
}

export { Stub };
