import Stripe from "stripe";
import { Card } from "./ui/card";

interface Props {
    products: Stripe.Product[]
}

export const Carousel =({products}: Props) => {

  return (
    <Card></Card>)
     ;
} 