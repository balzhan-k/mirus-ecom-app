import Image from "next/image";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import { ProductMarquee } from "@/components/product-marquee";

//query products from stripe API
export default async function Home() {
  const products = await stripe.products.list();


  return (
    <div className="min-h-screen bg-orange-50">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-8 items-center">
          <div className="z-10">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold font-italic text-amber-900 mb-6 leading-tight tracking-tight">
              MIRUS - a lasting heritage
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed">
              Inspired by the beauty of cultural heritage, each piece is a
              unique work of art for you to wear and share.
            </p>
            <Button asChild variant="default">
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 bg-amber-900 text-neutral-50 font-semibold rounded-lg border-2 border-amber-900 transition-all duration-300 hover:bg-neutral-50 hover:text-amber-900 hover:-translate-y-1 hover:shadow-xl"
              >
                Browse all products
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                alt="Banner Image"
                width={600}
                height={600}
                src="/banner.jpg"
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-0">
        <div className="max-w-8xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            Featured Pieces
          </h2>
          <ProductMarquee products={products.data} />
        </div>
      </section>


      <section className="relative min-h-[80vh] flex items-center overflow-hidden py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-8 items-center">
        <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                alt="Banner Image"
                width={600}
                height={600}
                src="/banner2.jpg"
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>


          <div className="z-10">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold font-italic text-amber-900 mb-6 leading-tight tracking-tight">
            Designed with Soul, Crafted with Heart
            </h1>
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed">
            At MIR-US-ME, every design is purposefully created and then meticulously brought to life by skilled artisans. We believe in the soul of our original designs and the heart poured into every detail, using ethically sourced materials to create unique and meaningful treasures.
            </p>
            
          </div>
          
        </div>
      </section>
    </div>
  );
}
