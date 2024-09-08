"use client";
import useWindowSize from "@rooks/use-window-size";
import Button from "../globals/Button";

export default function HeroBottom() {
  const { innerWidth } = useWindowSize();
  return (
    <section className="mt-[18px] md:mt-0 bg-[url('/images/hero-background.svg')] bg-cover">
      <div className="max-w-[90vw] md:max-w-[1100px] mx-auto">
        <div className="flex flex-wrap justify-between items-center py-5 min-h-[175px] md:min-h-[300px]">
          <div className="item">
            <h2 className="text-white font-bold text-[24px]">
              Diskon Nggak Pakai Tanggung.
            </h2>
            <p className="text-white font-normal text-sm mt-[-2px]">
              Plus bonus ongkir ke seluruh Indonesia
            </p>
          </div>

          <div className="item pr-6 mt-[10px] md:mt-0">
            {innerWidth && innerWidth <= 767 ? (
              <Button size="xs" label="Info Selengkapnya" />
            ) : (
              <Button size="md" label="Info Selengkapnya" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
