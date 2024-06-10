import { NextRequest, NextResponse } from 'next/server';
import Mascot from '../../../../../public/assets/mascot.svg';


const products = [
    {
      id: 1,
      title: "Snail's Meter",
      image: Mascot,
      boxSize: '430 × 360 x 372',
      display: 12,
      masterCase: 72,
      netWeight: '4,90 Kg',
      grossWeight: '6,80 Kg',
      volume: '0,058 m³',
      shelfLife: '24 Months',
      description: 'snailsMeterDescription',
    },
    {
      id: 2,
      title: "Glown Gel",
      image: Mascot,
      boxSize: '572 x 260 x 300',
      display: 12,
      masterCase: 72,
      netWeight: '4,32 Kg',
      grossWeight: '6,20 Kg',
      volume: '0,045 m³',
      shelfLife: '24 Months',
      description: 'snailsMeterDescription',
    },
    {
      id: 3,
      title: "Candy Burge Dipper",
      image: Mascot,
      boxSize: '510 x 248 x 282',
      display: 12,
      masterCase: 72,
      netWeight: '4,20 Kg',
      grossWeight: '6,10 Kg',
      volume: '0,036 m³',
      shelfLife: '24 Months',
      description: 'snailsMeterDescription',
    },
    {
      id: 4,
      title: "Soury Diplick",
      image: Mascot,
      boxSize: '572 x 260 x 300',
      display: 12,
      masterCase: 72,
      netWeight: '4,32 Kg',
      grossWeight: '6,20 Kg',
      volume: '0,045 m³',
      shelfLife: '24 Months',
      description: 'snailsMeterDescription',
    },
    {
      id: 5,
      title: "Rolli Sour Rocket",
      image: Mascot,
      boxSize: '480 x 285 x 390',
      display: 12,
      masterCase: 72,
      netWeight: '3,80 Kg',
      grossWeight: '5,70 Kg',
      volume: '0,054 m³',
      shelfLife: '24 Months',
      description: 'snailsMeterDescription',
    },
    {
      id: 6,
      title: "Ice Lolly",
      image: Mascot,
      boxSize: '572 x 260 x 300',
      display: 12,
      masterCase: 72,
      netWeight: '4,32 Kg',
      grossWeight: '6,20 Kg',
      volume: '0,045 m³',
      shelfLife: '24 Months',
      description: 'snailsMeterDescription',
    },
    {
      id: 7,
      title: "Mega Lollipop",
      image: Mascot,
      boxSize: '350 x 350 x 570',
      display: 12,
      masterCase: 72,
      netWeight: '2,90 Kg',
      grossWeight: '4,30 Kg',
      volume: '0,07 m³',
      shelfLife: '24 Months',
      description: 'snailsMeterDescription',
    },
  ];

export async function GET(req: NextRequest) {
  const { pathname } = new URL(req.url);
  const id = parseInt(pathname.split('/').pop() || '0', 10);

  const product = products.find(p => p.id === id);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json({ product });
}