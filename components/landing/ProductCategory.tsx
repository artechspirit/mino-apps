import Link from "next/link";

export default function ProductCategory() {
  return (
    <section className="mt-[-7px] md:mt-0 md:py-8">
      <div className="max-w-[90vw] md:max-w-[1100px] mx-auto">
        <div className="flex flex-wrap gap-x-4 md:gap-x-0 gap-y-4 justify-between">
          <Link
            href="/"
            className="max-w-1/2 min-h-[200px] w-[47.4%] md:w-1/2 bg-[url('/images/back-category-1.svg')] bg-cover p-6 pb-4 flex items-end"
          >
            <span className="text-white font-bold">Sepatu Anak</span>
          </Link>

          <Link
            href="/"
            className="max-w-1/2 min-h-[200px] w-[47.4%] md:w-1/2 bg-[url('/images/back-category-2.svg')] bg-cover p-6 pb-4 text-white font-bold flex justify-end items-end"
          >
            <span className="text-white font-bold">Sandal</span>
          </Link>

          <Link
            href="/"
            className="max-w-1/2 min-h-[200px] w-[47.4%] md:w-1/2 bg-[url('/images/back-category-3.svg')] bg-cover p-6 pb-4 flex items-end"
          >
            <span className="text-white font-bold">Sepatu Wanita</span>
          </Link>

          <Link
            href="/"
            className="max-w-1/2 min-h-[200px] w-[47.4%] md:w-1/2 bg-[url('/images/back-category-4.svg')] bg-cover p-6 pb-4 text-white font-bold flex justify-end items-end"
          >
            <span className="text-white font-bold">Sepatu Pria</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
