"use client";
import React from "react";
import Button from "../globals/Button";
import Carousel from "../globals/Carousel";
import { products } from "@/constant";

const ThisWeekProduct: React.FC = () => {
  return (
    <section id="weeklyproduct" className="py-0 md:py-9">
      <div className="max-w-[90vw] md:max-w-[1100px] mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h3 className="font-bold text-[28px]">Pilihan Minggu Ini</h3>

          <div className="hidden md:inline">
            <Button size="md" type="sekunder" label="Produk Lainnya" />
          </div>
        </div>

        <Carousel useDots={false}>
          <div className="relative hidden md:flex flex-wrap justify-between ">
            {products.map(({ category, name, discount, price }, key) => (
              <div key={key} className="card-item w-[252px]">
                {key === 0 && (
                  <figure
                    className={`mb-1 h-[252px] border border-minoTextTersier bg-[url('/images/product-image-1.svg')]`}
                  ></figure>
                )}

                {key === 1 && (
                  <figure
                    className={`mb-1 h-[252px] border border-minoTextTersier bg-[url('/images/product-image-2.svg')]`}
                  ></figure>
                )}

                {key === 2 && (
                  <figure
                    className={`mb-1 h-[252px] border border-minoTextTersier bg-[url('/images/product-iamge-3.svg')]`}
                  ></figure>
                )}

                {key === 3 && (
                  <figure
                    className={`mb-1 h-[252px] border border-minoTextTersier bg-[url('/images/product-image-4.svg')]`}
                  ></figure>
                )}

                <span className="font-bold text-xs text-minoTextTersier uppercase">
                  {category}
                </span>
                <h3 className="font-bold text-base text-minoAccentSekunder">
                  {name}
                </h3>
                <div className="rating">
                  <img src="/icons/stars.svg" alt="Rating Star" />
                </div>
                <div className="flex gap-2 flex-wrap mb-1">
                  {discount ? (
                    <>
                      <span className="font-normal text-sm text-minoTextTersier line-through">
                        Rp. 387.000,-
                      </span>
                      <span className="font-bold text-minoPrimer">{price}</span>
                    </>
                  ) : (
                    <span className="font-bold text-minoPrimer">{price}</span>
                  )}
                </div>
                <Button size="xs" label="ADD TO CART" />
              </div>
            ))}
          </div>

          <div className="relative hidden md:flex flex-wrap justify-between">
            {products.map(({ category, name, discount, price }, key) => (
              <div key={key} className="card-item w-[252px]">
                {key === 0 && (
                  <figure
                    className={`mb-1 h-[252px] border border-minoTextTersier bg-[url('/images/product-image-1.svg')]`}
                  ></figure>
                )}

                {key === 1 && (
                  <figure
                    className={`mb-1 h-[252px] border border-minoTextTersier bg-[url('/images/product-image-2.svg')]`}
                  ></figure>
                )}

                {key === 2 && (
                  <figure
                    className={`mb-1 h-[252px] border border-minoTextTersier bg-[url('/images/product-iamge-3.svg')]`}
                  ></figure>
                )}

                {key === 3 && (
                  <figure
                    className={`mb-1 h-[252px] border border-minoTextTersier bg-[url('/images/product-image-4.svg')]`}
                  ></figure>
                )}

                <span className="font-bold text-xs text-minoTextTersier uppercase">
                  {category}
                </span>
                <h3 className="font-bold text-base text-minoAccentSekunder">
                  {name}
                </h3>
                <div className="rating">
                  <img src="/icons/stars.svg" alt="Rating Star" />
                </div>
                <div className="flex gap-2 flex-wrap mb-1">
                  {discount ? (
                    <>
                      <span className="font-normal text-sm text-minoTextTersier line-through">
                        Rp. 387.000,-
                      </span>
                      <span className="font-bold text-minoPrimer">{price}</span>
                    </>
                  ) : (
                    <span className="font-bold text-minoPrimer">{price}</span>
                  )}
                </div>
                <Button size="xs" label="ADD TO CART" />
              </div>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ThisWeekProduct;
