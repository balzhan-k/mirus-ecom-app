"use client";

import Stripe from "stripe";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}

export const ProductMarquee = ({ products }: Props) => {
  return (
    <div className="relative overflow-hidden bg-white p-0 m-0">
      <div className="flex animate-scroll space-x-8">
        {[...products, ...products].map((product, index) => {
         
          return (
            <div key={`${product.id}-${index}`} className="flex-shrink-0 w-96">
              <Card className="p-0 h-80 rounded-lg shadow-lg border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {product.images && product.images[0] && (
                  <div className="relative h-full w-full">
                    <Image
                      alt={product.name}
                      src={product.images[0]}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <h3 className="absolute bottom-4 text-4xl font-semibold text-white font-great-vibes bg-amber-900 p-2 px-28">
                    {product.name.split(' ')[0].charAt(0).toUpperCase() + product.name.split(' ')[0].slice(1).toLowerCase()}           
                    </h3>
                  </div>
                )}
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
