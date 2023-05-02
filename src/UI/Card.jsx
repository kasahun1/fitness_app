export const Card = ({ className, children }) => {
  return <article className={` card ${className}`}>{children}</article>;
};
