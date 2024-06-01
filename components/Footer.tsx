import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Tiktok from '../public/assets/tiktok.svg';
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSelector from "./LanguageSelector";
import Mascot from '../public/assets/mascot.svg';

const footerItems = [
    { title: "contact", link: "/" },
    { title: "faq", link: "/products" },
    { title: "codeOfConduct", link: "/our-story" },
    { title: "informantSystem", link: "/production" },

];

const footerItems2 = [
    { title: "imprint", link: "/contact" },
    { title: "privacy", link: "/contact" },
    { title: "ccpaPrivacyNotice", link: "/contact" },
    { title: "termOfUse", link: "/contact" },
    { title: "EeoStatement", link: "/contact" },
]

const footerItems3 = [
    { title: "termOfUse", link: "/" },
    { title: "privacyPolice", link: "/" },
    { title: "cookies", link: "/" },
    { title: "supplyChainAct", link: "/" },
    { title: "countries", link: "/" },
    { title: "contact", link: "/" },
]

const Footer = () => {

    const t = useTranslations("Index");

    return (
        <>
            <div className="bg-[#740287]">
                <div className="container mx-auto py-16 px-10 text-white">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <div className="flex gap-5">
                                <div className="background-fb">
                                    <Facebook size={30} className="text-black m-3" />
                                </div>
                                <div className="background-fb">
                                    <Instagram size={30} className="text-black m-3" />
                                </div>
                                <div className="background-fb">
                                    <Youtube size={30} className="text-black m-3" />
                                </div>
                                <div className="background-tiktok">
                                    <Image src={Tiktok} alt="tiktok" className="text-black m-3" />
                                </div>
                            </div>
                            <div className="flex gap-20 mt-20">
                                <ul className="flex flex-col space-y-4  text-[#FBAA19]">
                                    {footerItems.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.link}>
                                                <p>{t(item.title)}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="flex flex-col space-y-4  text-[#FBAA19]">
                                    {footerItems2.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.link}>
                                                <p>{t(item.title)}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <LanguageSelector />
                        </div>
                        <div>
                            <Image src={Mascot} alt="mascot" />
                        </div>
                    </div>
                    <div className="text-sm mt-5">
                        © 2024 Candy Cool
                    </div>
                </div>
            </div>
            <div className="background-footer">
                <ul className="flex items-center space-x-4 py-3 text-sm justify-center text-white">
                    <li className="text-sm">
                        © 2024 Candy Cool |
                    </li>
                    {footerItems3.map((item, index) => (
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

export default Footer