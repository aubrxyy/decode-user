"use client";

import { useState, useEffect } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import Link from "next/link";
import "../css/globals.css";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "home", href: "/" },
  { name: "menu", href: "/menu" },
  { name: "lokasi", href: "/lokasi" },
  { name: "tentang kami", href: "/about" }, 
  { name: "kontak", href: "/kontak" },
];

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header(props: HeaderProps) {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scroll down hide the header
        setShowHeader(false);
      } else { // if scroll up show the header
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <Disclosure as="nav" className={`z-100 sticky top-0 bg-[#f5f5f5] transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
      {({ open }) => (
        <>
          <div className="z-100 mx-auto max-w-[95%] px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#d4e0c5] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#85A460]">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center xl:items-stretch xl:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Logo />
                </div>
                <div className="hidden pt-2 lg:ml-auto mr-8 xl:block my-auto">
                  <div className="flex space-x-16">
                    {navigation.map((item) => {
                      const isActive = pathname.endsWith(item.href);
                      return (
                        <Link key={item.name} href={item.href} className={`${isActive ? "text-gray-900 border-b-2 border-green-900" : "text-gray-500 border-green-800 hover:text-black lg:border-0 lg:hover:border-b-2 max-lg:active:text-black text-nowrap"} text-2xl block px-3 py-2 mx-3 transition-all lg:p-0`}>
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DisclosurePanel className="xl:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const isActive = pathname.endsWith(item.href);
                return (
                  <Link key={item.name} href={item.href} className={`${isActive ? "bg-dgreen text-white rounded-lg border-green-900" : "text-gray-500 border-green-800 hover:text-black lg:border-0 lg:hover:border-b-2 max-lg:active:text-black text-nowrap"} text-2xl block px-3 py-2 mx-3 transition-all lg:p-0`}>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </DisclosurePanel>
          {props.children}
        </>
      )}
    </Disclosure>
  );
}

