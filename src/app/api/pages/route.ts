import { NextResponse } from 'next/server';

const pages = [
  {
    slug: 'about-us',
    title: "About Us",
    content: 'Welcome to our company! We specialize in creating delightful candies...',
  },
  {
    slug: 'contact',
    title: "Contact Us",
    content: 'Get in touch with us through the following methods...',
  },

];

export async function GET() {
  return NextResponse.json({ pages });
}
