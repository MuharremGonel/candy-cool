"use client"
import { useTranslations } from "next-intl";
import { usePathname  } from "next/navigation";
import Logo from "../public/assets/candy-cool.svg";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { title: "home", link: "/" },
  { title: "products", link: "products" },
  { title: "ourStory", link: "about-us" },
  { title: "production", link: "production" },
  { title: "contact", link: "contact" },
];

const Nav = () => {
  const t = useTranslations("Index");
  const pathname = usePathname();

  const pathSegments = pathname.split('/');
  const locale = pathSegments[1]; // Default locale 'en'

  return (
    <>
      <div className="flex justify-between items-center z-30 absolute top-0 right-0 left-0">
        <div className="bg-white h-[120px] ml-40 rounded-b-[20px] shadow-xl">
          <Link href="/">
            {" "}
            <Image src={Logo} alt="logo" className="mx-5 mt-3 w-56" />
          </Link>
        </div>
      </div>
      <div className="hidden md:flex lg:w-[50%] w-[30%] justify-start bg-white px-10 py-5 rounded-l-xl shadow-xl z-30 absolute right-0 top-10">
        <ul className="flex space-x-4 text-[#FBAA19]">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={`/${locale}/${item.link}`}>
                <p>{t(item.title)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
