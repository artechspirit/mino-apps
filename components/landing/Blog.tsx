import { blogs } from "@/constant";
import CardBlog from "../globals/CardBlog";
import Button from "../globals/Button";

const Blog = () => {
  return (
    <section className="mt-[21px] md:mt-0 pb-0 md:py-9">
      <div className="max-w-[90vw] md:max-w-[1100px] mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h3 className="font-bold text-[28px]">Blog</h3>

          <Button size="sm" type="sekunder" label="Lihat Semua" />
        </div>

        <div className="flex flex-wrap justify-between">
          {blogs.map((blog, key) => (
            <CardBlog key={key} data={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
