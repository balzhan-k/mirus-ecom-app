import Stripe from "stripe";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/products/${product.id}`}>
      {product.images && product.images[0] && (
        <div className="relative h-full w-full">
          <Image
            alt={product.name}
            src={product.images[0]}
            fill
            objectFit="cover"
            className="transition-opacity duration-500 ease-in-out"
          />
        </div>
      )}

      <CardHeader>
        <CardTitle> {product.name} </CardTitle>
        <CardContent>
          {price && price.unit_amount && (
            <p className="text-xl text-amber-900">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
        </CardContent>
      </CardHeader>
    </Link>
  );
};
