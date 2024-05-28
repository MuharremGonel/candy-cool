import { useTranslations } from 'next-intl';
import Logo from '../public/assets/Logo.svg'
import Image from 'next/image'
import Link from "next/link";


const navItems = [
    { title: "home", link: "/" },
    { title: "products", link: "/products" },
    { title: "ourStory", link: "/our-story" },
    { title: "production", link: "/production" },
    { title: "contact", link: "/contact" },
];


const Nav = () => {
    const t = useTranslations("Index");
    return (
        <>
            <div className='flex justify-between items-center py-5 z-30 absolute right-0 left-0'>
                <div className='bg-white h-[150px] ml-40 -mt-5 rounded-b-[80px]'>
                    <Image src={Logo} alt='logo' className='mx-5 mt-3' />
                </div>
            </div>
            <div className='bg-white px-10 py-5 rounded-l-3xl shadow-xl z-30 absolute right-0 top-10'>
                <ul className="flex space-x-4 mr-40 font-semibold text-[#FBAA19]">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link}>
                                <p>{t(item.title)}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Nav