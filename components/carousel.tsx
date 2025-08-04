"use client"

import Stripe from "stripe";
import { Card } from "./ui/card";
import { useState, useEffect } from "react";

interface Props {
    products: Stripe.Product[]
}

export const Carousel =({products}: Props) => {
const [current, setCurrent] = useState<number>(0)

useEffect(() => {
    const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % products.length)
    }, 3000)
    return () => clearInterval(interval)
}, [products.length])

const currentProduct = products[current]

const price = currentProduct.default_price as Stripe.Price

  return (
    <Card>
        {current}
    </Card>)
     ;
} 