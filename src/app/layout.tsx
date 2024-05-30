import localFont from "next/font/local";
import { Metadata } from 'next'

const myFont = localFont({
  src: "../../public/fonts/vag-rounded.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Candy Cool',
  description: 'Double the fun with sweet candies & cool toys',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}
