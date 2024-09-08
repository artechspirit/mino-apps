import Image from "next/image";
import React from "react";

const CardKeunggulan: React.FC = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 md:px-0">
      <div className="max-xs:basis-[45%] basis-[46.5%] text-center p-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 border-[1px] border-solid border-minoTextTersier">
        <div className="flex justify-center">
          <Image src="/icons/shoes.svg" width={100} height={100} alt="Icon" />
        </div>

        <h3 className="text-minoTextSekunder font-bold mt-6">
          Kualitas Terpercaya
        </h3>

        <p className="font-normal text-xs">
          Produk kami di buat dari bahan berkualitas. Kami bekerjasama dengan
          mereka yang paling berpengalaman dalam industri.
        </p>
      </div>

      <div className="max-xs:basis-[45%] basis-[46.5%] text-center p-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 border-[1px] border-solid border-minoTextTersier">
        <div className="flex justify-center">
          <Image src="/icons/gift.svg" width={100} height={100} alt="Icon" />
        </div>

        <h3 className="text-minoTextSekunder font-bold mt-6">
          Kirim sebagai Hadiah
        </h3>

        <p className="font-normal text-xs">
          Ingin memberi bingkisan pada orang tersayang dengan kemasan serta
          pesan khusus? Sampaikan saja, kami yang siapkan.
        </p>
      </div>

      <div className="max-xs:basis-[45%] basis-[46.5%] text-center p-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 border-[1px] border-solid border-minoTextTersier">
        <div className="flex justify-center">
          <Image src="/icons/return.svg" width={100} height={100} alt="Icon" />
        </div>

        <h3 className="text-minoTextSekunder font-bold mt-6">
          Pengembalian Mudah
        </h3>

        <p className="font-normal text-xs">
          Tidak puas dengan pembelian Anda (kualitas buruk atau salah ukuran)?
          Kami siap untuk melakukan retur barang kapanpun.
        </p>
      </div>

      <div className="max-xs:basis-[45%] basis-[46.5%] text-center p-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 border-[1px] border-solid border-minoTextTersier">
        <div className="flex justify-center">
          <Image src="/icons/cs.svg" width={100} height={100} alt="Icon" />
        </div>

        <h3 className="text-minoTextSekunder font-bold mt-6">
          Layanan Pelanggan
        </h3>

        <p className="font-normal text-xs">
          Untuk semua informasi, kami selalu siap untuk melayani kebutuhan dan
          pertanyaan Anda.
        </p>
      </div>
    </div>
  );
};

export default CardKeunggulan;
