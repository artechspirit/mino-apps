"use client";
import { brands } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-minoPrimer">
      <div className="max-w-[1100px] mx-auto flex flex-wrap justify-between">
        <Image
          className="hidden md:inline cursor-pointer"
          src="/icons/search.svg"
          width={20}
          height={20}
          alt="Icon Search"
        />

        <Link href="/">
          <Image
            className="pl-5 md:pl-0 cursor-pointer"
            src="/icons/logo.svg"
            width={125}
            height={30}
            alt="Logo Mino"
          />
        </Link>

        <div className="flex flex-wrap pr-5 md:pr-0">
          <Image
            className="cursor-pointer mr-7"
            src="/icons/cart.svg"
            width={28}
            height={28}
            alt="Icon Users"
          />

          <Image
            className="cursor-pointer"
            src="/icons/users.svg"
            width={26}
            height={26}
            alt="Icon Users"
          />
        </div>
      </div>

      <div className="hidden md:flex flex-wrap gap-x-7 justify-center">
        <Link href="/" className="text-white font-bold uppercase text-sm pt-1">
          Beranda
        </Link>

        <div className="dropdown mino-dropdown dropdown-hover hover:bg-white hover:text-minoPrimer py-1 pl-4 pr-8">
          <div
            tabIndex={0}
            role="button"
            className="text-white font-bold uppercase text-sm relative"
          >
            Belanja{" "}
            <Image
              src="/icons/arrow-down.svg"
              width={14}
              height={14}
              alt="Arrow Icon"
              className="absolute right-[-20px] top-[6px]"
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu z-[100] bg-white p-2 shadow w-[100vw]"
          >
            <div className=" w-[1100px] mx-auto pt-1 pb-5">
              <h4 className="font-bold uppercase text[18px] pb-1">Belanja</h4>
              <hr />

              <div className="flex justify-between pt-4">
                <div className="item w-1/3">
                  {brands.map(({ name }, key) => (
                    <div
                      className="block text-base my-2 cursor-pointer hover:font-bold"
                      key={key}
                    >
                      {name}
                    </div>
                  ))}
                </div>

                <div className="item w-1/3">
                  {brands[0].type?.map((tipe, key) => (
                    <div
                      className="block text-base my-2 cursor-pointer hover:font-bold"
                      key={key}
                    >
                      {tipe}
                    </div>
                  ))}
                </div>

                <div className="item w-1/3">
                  <Image
                    src="/images/mega-menu-img.svg"
                    width={250}
                    height={250}
                    alt="Shoes Image"
                    className="ml-auto"
                  />
                </div>
              </div>
            </div>
          </ul>
        </div>

        <Link href="/" className="text-white font-bold uppercase text-sm pt-1">
          Bundel 1
        </Link>

        <Link href="/" className="text-white font-bold uppercase text-sm pt-1">
          Bundel 2
        </Link>

        <Link href="/" className="text-white font-bold uppercase text-sm pt-1">
          Promo
        </Link>

        <Link href="/" className="text-white font-bold uppercase text-sm pt-1">
          Blog
        </Link>
      </div>
    </nav>
  );
}
