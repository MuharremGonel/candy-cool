import Slider from "@/components/Slider";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Index');

  return (
    <>
      <Slider />
      <div>
        {
          t("title")
        }
      </div>
    </>
  );
}
