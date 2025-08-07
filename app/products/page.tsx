import { stripe } from "@/lib/stripe";
import { ProductList } from "@/components/product-list";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <div className="min-h-screen  max-w-7xl mx-auto">
      <ProductList products={products.data} />
    </div>
  );
}
