"use client";

import Stripe from "stripe";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface Props {
  products: Stripe.Product[];
}

export const ProductMarquee = ({ products }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 1; // Adjust speed here
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      
      // Reset when we've scrolled one full width
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [products]);

  return (
    <div className="relative overflow-hidden p-0 m-0">
      <div ref={scrollRef} className="flex space-x-8 will-change-transform">
        {[...products, ...products].map((product, index) => (
          <div key={`${product.id}-${index}`} className="flex-shrink-0 w-96">
            <Card className="p-0 h-80 rounded-lg shadow-xl border-stone-900 overflow-hidden transition-shadow duration-300">
              {product.images && product.images[0] && (
                <div className="relative h-full w-full">
                  <Image
                    alt={product.name}
                    src={product.images[0]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg"
                  />
                  <h3 className="absolute bottom-4 text-4xl font-semibold text-white font-great-vibes bg-amber-900 p-2 px-28">
                    {product.name.split(' ')[0].charAt(0).toUpperCase() + product.name.split(' ')[0].slice(1).toLowerCase()}
                  </h3>
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};