import { useState } from "react";
import "./Bodypt5.css";

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
    <section className="bodypt5-container">
      <div className="bodypt5-inner">
        <div className="bodypt5-left">
          <h2 className="bodypt5-heading">
            Frequently <br /> Asked <br /> Questions
          </h2>
        </div>

        <div className="bodypt5-right">
          <div className="faq-accordion">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                  key={item.question}
                >
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() => handleToggle(index)}
                  >
                    <span className="faq-question">{item.question}</span>
                    <span
                      className={`faq-icon ${isOpen ? "faq-icon-open" : ""}`}
                      aria-hidden="true"
                    >
                      <span className="faq-icon-line faq-icon-line-vertical" />
                      <span className="faq-icon-line faq-icon-line-horizontal" />
                    </span>
                  </button>
                  <div className="faq-panel" aria-hidden={!isOpen}>
                    <p className="faq-answer">{item.answer}</p>
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
