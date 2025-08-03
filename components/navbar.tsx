import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-neutral-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 max-w-7xl ">
        <Link
          href="/"
          className="text-neutral-800 hover:text-amber-900 font-bold transition duration-300 text-xl"
        >
          MIR-US-ME
        </Link>
        <div className="hidden md:flex space-x-6 gap-4">
          <Link
            href="/"
            className="text-neutral-800 hover:text-amber-900 font-bold transition duration-300 text-lg"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-neutral-800 hover:text-amber-900 font-bold transition duration-300 text-lg"
          >
            Products
          </Link>
          <Link
            href="/checkout"
            className="text-neutral-800  hover:text-amber-900 font-bold transition duration-300 text-lg"
          >
            Checkout
          </Link>
        </div>
        <div className="flex items-center space-x-4">hello</div>
      </div>
    </nav>
  );
};
