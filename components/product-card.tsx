import Stripe from "stripe";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={"/products/1"}>
      <Card className="border border-gray-200 shadow-none hover:shadow-sm transition-shadow duration-300">
        {product.images && product.images[0] && (
          <div className="relative h-80 w-full">
            <Image
              alt={product.name}
              src={product.images[0]}
              fill
              objectFit="cover"
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        )}

        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold text-gray-900">
            {product.name}
          </CardTitle>
          <CardContent className="p-0">
            {price && price.unit_amount && (
              <p className="text-sm text-gray-600">
                ${(price.unit_amount / 100).toFixed(2)}
              </p>
            )}
            <Button className="text-sm text-gray-600 p-0">View Details</Button>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
};
