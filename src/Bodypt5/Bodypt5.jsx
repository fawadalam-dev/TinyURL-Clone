import { useState } from "react";

const faqs = [
  {
    question: "What Is a URL Shortener?",
    answer:
      "A URL shortener turns a long web address into a shorter, easier to share link that redirects to the original page.",
  },
  {
    question: "How Does a URL Shortener Work?",
    answer:
      "When you create a short link, we generate a unique key and store it with your long URL. Anyone visiting the short link is instantly redirected to the original address.",
  },
  {
    question: "What Are the Benefits of Using a Short URL?",
    answer:
      "Short URLs are easier to share, track, and manage across campaigns, social media, email, and printed materials.",
  },
  {
    question: "What Is a Custom URL Shortener?",
    answer:
      "A custom URL shortener lets you create branded short links using your own domain instead of a generic one.",
  },
  {
    question: "How Do I Shorten a URL for Free?",
    answer:
      "Paste your long link into the shortener, click the shorten button, and share the generated short URL anywhere you like.",
  },
  {
    question: "How Do I Know Your Service Is Reliable and Scalable?",
    answer:
      "Our infrastructure is built with redundancy and auto-scaling so your links stay fast and available, even during high-traffic campaigns.",
  },
  {
    question: "Can I Use a Domain I Already Own?",
    answer:
      "Yes, you can connect a custom domain you already own so all of your short URLs use your brand’s name.",
  },
];

function Bodypt5() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="bg-[#f8f9fa] w-full py-[50px]">
      <div className="max-w-[1120px] mx-auto p-[30px_5%] flex gap-16">
        <div className="flex-[0_0_260px]">
          <h2 className="text-[1.75rem] font-black leading-[1.3] m-0 mb-3 pt-[150px]">
            Frequently <br /> Asked <br /> Questions
          </h2>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-[0_10px_30px_rgba(15,23,42,0.06)] border border-[#e5e7eb]">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`${index !== 0 ? "border-t border-[#e5e7eb]" : ""}`}
                  key={item.question}
                >
                  <button
                    type="button"
                    className="w-full p-[18px_24px] bg-transparent border-none flex items-center justify-between cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <span className="text-[0.98rem] font-semibold text-left">{item.question}</span>
                    <span
                      className="relative w-[18px] h-[18px] inline-flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className={`absolute w-[14px] h-0.5 bg-[#6b7280] rounded-full transition-all duration-200 ${isOpen ? "opacity-0" : ""}`} />
                      <span className="absolute w-[14px] h-0.5 bg-[#6b7280] rounded-full transition-all duration-200" style={{transform: isOpen ? "rotate(0deg)" : "rotate(90deg)", opacity: isOpen ? "0" : "1"}} />
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-250 ${isOpen ? "max-h-[200px]" : "max-h-0"}`} aria-hidden={!isOpen}>
                    <p className="p-[0_24px_18px] text-[0.95rem] leading-[1.6] text-[#4b5563] m-0">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bodypt5;
