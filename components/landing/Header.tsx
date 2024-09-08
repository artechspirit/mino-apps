import FullHeightCarousel from "../globals/Carousel";

export default function Header() {
  return (
    <section className="w-full mt-[-1px] md:mt-0 h-[50vh] md:h-[calc(100vh-106.26px)]">
      <div className="w-full">
        <FullHeightCarousel interval={6000}>
          <div className="h-[50vh] md:h-[calc(100vh-106.26px)] w-[100vw] flex justify-center items-center bg-[url('/images/banner-1.svg')] bg-no-repeat bg-cover"></div>
          <div className="h-[50vh] md:h-[calc(100vh-106.26px)] w-[100vw] flex justify-center items-center bg-[url('/images/banner-1.svg')] bg-no-repeat bg-cover"></div>
          <div className="h-[50vh] md:h-[calc(100vh-106.26px)] w-[100vw] flex justify-center items-center bg-[url('/images/banner-1.svg')] bg-no-repeat bg-cover"></div>
        </FullHeightCarousel>
      </div>
    </section>
  );
}
