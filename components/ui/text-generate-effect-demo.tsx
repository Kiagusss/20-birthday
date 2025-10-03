"use client";

import { TextGenerateEffect } from "../text-generate-effect";

const words = `Manisssss, happy birthdayy yaaaaa, hope you have a grateful birthday and a great year aheaddd. Wish you all the bestttt. Maaff yaa kalo websitenyaa sederhanaaa, inii akuu baru bangett buat jam 8:23, buru-buru buatnya biarr gak  telatt ucapinnya. Oh iyaa akuu mungkin gak bakal ngasih kado barangg yaaaa buat tahunn iniii, dan akuuu akan ajakk kamuu pergii ke jakartaaa, karnaa akuu tahuuu kamu pengen bangett buat kita sehariann berduaaa, dann aku mau wujudin ituu di hari spesial kamu inii, dan karnaaa gak mungkin aku rayainnya pas hari h, jadii akuu rayainn kamuu setelahnyaa yaa, dan untuk rundown acara akan aku kasih dibawah ini
`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} duration={5}/>;
}
