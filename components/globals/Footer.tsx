import { menu } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-wrap px-[15px] justify-center items-center pt-0 md:py-10 pb-8">
        <Image
          src="/images/list-bank.svg"
          width={465}
          height={70}
          alt="List Bank"
        />
      </div>

      <div className="min-h-[300px] bg-minoPrimer pt-7">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-wrap justify-between pb-[13px] md:pb-0">
            {menu.map(({ title, links }, key) => (
              <ul key={key} className="w-1/2 md:w-auto p-4">
                <li className="text-white font-bold text-base mb-1">{title}</li>

                {links.map(({ label, href }, id) => (
                  <li key={id} className="mb-1">
                    <Link
                      href={href}
                      className="text-white font-normal text-sm hover:text-minoSekunder"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-[40px] bg-minoSekunder flex justify-center items-center">
        <span className="text-white font-bold text-[12px]">
          (c) 2020 CV. MinoStore Minomartani
        </span>
      </div>
    </footer>
  );
}
