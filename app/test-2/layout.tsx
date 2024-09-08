import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaMicrosoft, FaTachometerAlt, FaChevronRight } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Main content */}
      <div className="drawer-content">
        <header className="bg-minoDashboardPrimer fixed w-[calc[100vw-300xp]] right-0 left-0 h-[56.42px] shadow-lg border-l border-l-minoPrimer">
          <div className="flex pl-5 ml-[300px] items-center h-full">
            <FaMicrosoft size={25} color="#ffffff" className="mr-5" />

            <div className="breadcrumbs text-sm text-white">
              <ul>
                <li>
                  <Link href="/test-2/">Home</Link>
                </li>

                <li className="font-bold">Data User</li>
              </ul>
            </div>
          </div>
        </header>

        <section className="bg-[#f4f6f9] mt-[56.42px] p-4 min-h-[calc(100vh-56.42px)] overflow-y-scroll">
          {children}
        </section>
      </div>

      {/* Drawer Side */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-minoDashboardPrimer text-white min-h-full w-[300px] p-0">
          <Image
            src="/icons/logo-dashboard.png"
            width={110}
            height={40}
            className="py-2 block mx-auto"
            alt="Hero Dashboard"
          />

          <div className="bg-minoPrimer h-[1px]" />

          <div className="menu-content p-4">
            <div className="mb-2">AMANAH ELEMENTS</div>
            <Link
              href="/test-2/"
              className="flex relative hover:bg-minoPrimer rounded-[4px] py-2 pl-2 pr-[6px]"
            >
              <FaTachometerAlt size={20} color="#ffffff" className="mr-3" />{" "}
              <span>Data User</span>
              <FaChevronRight
                size={17}
                className="absolute right-1 top-[9px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
