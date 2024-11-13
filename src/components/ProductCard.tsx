import { ReactElement } from "react";

interface product {
  id: number;
  title: string;
  img: string;
}

interface Props {
  // children: React.ReactNode
  children: ReactElement | ReactElement[];
  product: product;
  className?: string;
  style?: React.CSSProperties | undefined;
}

const ProductCard = ({ children, product, className, style }: Props) => {
  return <div className={className} style={style}>{children}</div>;
};

export default ProductCard;
