/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Timeline } from "./ui/timeline";


export default function TimelineDemo() {
  const data = [
    {
      title: "05:30 WIB - 9:00 WIB",
      sub:"Start Dari Stasiun Cilegon - Gondangdia, Sengajaaa pagii biarr gak panasss",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Stasiun Cilegon - Stasiun Gondangdia
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Gondangdia_railway_station_enterance.jpg/1200px-Gondangdia_railway_station_enterance.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Cilegon_railway_station_front_side.jpg/1200px-Cilegon_railway_station_front_side.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
           
          </div>
        </div>
      ),
    },
    {
      title: "9:30 WIB - 13:00 WIB",
      sub: "Pergi Ke Museum Nasional, abis itu ke Monas cari kerak telor buat makan",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Museum Nasional - Monas
          </p>
     
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://asset.kompas.com/crops/-1qaDzh3KDPknMv6aHax-7tHXGg=/0x0:1000x667/1200x800/data/photo/2022/06/17/62ac673f71587.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Front_facade_-_National_Museum_Indonesia%2C_Jakarta_%282025%29_-_img_03.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Kerak_telor_Betawi.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          
          </div>
        </div>
      ),
    },
    {
      title: "13:30 WIB - 18:00 WIB",
      sub: "Ke blok M, kita jajan, dan photobooth, dan jangan lupa cari gultik yang bikin kamu penasaran ituu",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Blok M
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://kemenpar.go.id/_next/image?url=https%3A%2F%2Fapi.kemenpar.go.id%2Fstorage%2Fapp%2Fuploads%2Fpublic%2F672%2F865%2F0b9%2F6728650b9f1c5365917920.jpg&w=3840&q=75"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/1eee77b9-e7e2-4d76-9112-512bd4aa731d_Go-Biz_20230919_150019.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
           
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
