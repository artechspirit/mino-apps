import React from "react";

import Image from "next/image";
import Button from "./Button";

interface Data {
  image: string;
  category: string[];
  title: string;
  postDate: string;
  postedBy: string;
  commentCount: number;
  description: string;
}

type CardBlogProps = {
  data: Data;
  key: number;
};

const CardBlog: React.FC<CardBlogProps> = ({ data }) => {
  const {
    image,
    category,
    title,
    postDate,
    postedBy,
    commentCount,
    description,
  } = data;
  return (
    <div className="w-full mb-8 md:mb-0 md:max-w-1/3 cursor-pointer">
      <Image
        src={image}
        width={357}
        height={200}
        alt="Blog Post Banner"
        className="w-full"
      />

      <div className="mt-3 mb-1 font-bold text-sm uppercase text-minoPrimer">
        {category}
      </div>

      <h3 className="font-bold text-[18px] mb-2">{title}</h3>

      <div className="flex flex-wrap">
        <div className="font-OpenSans font-normal uppercase text-[12px] text-minoAcdentTersier">
          {postDate}
        </div>

        <div className="font-OpenSans font-normal uppercase text-[12px] text-minoAcdentTersier px-5">
          oleh <span className="text-minoPrimer">{postedBy}</span>
        </div>

        <div className="font-OpenSans font-normal uppercase text-[12px] text-minoPrimer">
          {commentCount} comments
        </div>
      </div>

      <p className="text-minoAcdentTersier font-OpenSans font-normal text-sm my-2 min-h-[80px]">
        {description}
      </p>

      <Button label="Baca Selengkapnya" />
    </div>
  );
};

export default CardBlog;
