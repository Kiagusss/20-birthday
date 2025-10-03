import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Bayar Pake Duit siapa?",
      answer:
        "Kamuuu jangann keluarinn duitt banyak, akuu yang palingg banyakk bayarr pokoknyaa, kaloo gamauuu aku ngambekkk bodoo, pokoknyaa sebagian besar duitnya dari akuuu okeyy, karna ini hari spesial kamuu",
    },
    {
      question: "Barang apa aja yang dipersiapkan?",
      answer:
        "Bawa payung biar gak panas, obat pribadi, sunscreen, dan juga kartu e-money buat naik tj, bisa sie pake aplikasii jugaa",
    },
    {
      question: "kapan berangkatnya?",
      answer:
        "akuu gatauu kamu free kapan, jadi aku saranin hari selasa depan aja, cuman iot doang, palingan juga online, kalo misal offline kita bolos ajaa berdua ehheheeheh",
    },
    {
      question: "Kenapa aku pilih ke jakarta dan explore?",
      answer:
        "Karena aku tahuuu kamu pengen bangett buat kita sehariann berduaaa, dann aku mau wujudin ituu di hari spesial kamu inii, dan karnaaa gak mungkin aku rayainnya pas hari h, jadii akuu rayainn kamuu setelahnyaa yaa, dan banyak banget wishlist yang pengen kamu makan, jadinya aku akan wujudin nantii",
    },
  ]

  return (
    <section id="faq" className="container mx-auto px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-center mb-12 text-lg">Everything you need to know about our platform</p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-[#21262d] rounded-lg px-6 bg-[#161b22] hover:bg-[#1c2128] transition-colors"
            >
              <AccordionTrigger className="text-white text-left text-lg font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
