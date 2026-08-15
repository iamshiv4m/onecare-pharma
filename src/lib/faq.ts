import { businessConfig } from "@/config/business";

export type FaqItem = {
  question: string;
  answer: string;
};

export function getFaqs(): FaqItem[] {
  const { addressDisplay, offersDelivery, openingHours, shortName } =
    businessConfig;

  const faqs: FaqItem[] = [
    {
      question: "Where is the shop?",
      answer: `${shortName}, ${addressDisplay}.`,
    },
    {
      question: "WhatsApp pe order kaise karein?",
      answer:
        "Order on WhatsApp dabao, dawai ke naam ya prescription ki photo bhejo. Hum stock dekh ke bata denge.",
    },
    {
      question: "Prescription WhatsApp pe bhej sakte hain?",
      answer:
        "Haan, photo bhej do. Prescription wali dawai tabhi denge jab prescription check ho jaye.",
    },
    {
      question: "Kitne baje band hota hai?",
      answer: openingHours.hoursConfirmed
        ? openingHours.display
        : "Store ya Google Maps pe confirm kar lo.",
    },
    {
      question: "Stock poochne ke liye call kar sakte hain?",
      answer: `Haan. ${businessConfig.phones.map((p) => p.display).join(" ya ")} pe call karo.`,
    },
  ];

  if (offersDelivery) {
    faqs.splice(3, 0, {
      question: "Ghar pe delivery hoti hai?",
      answer:
        "Aas-paas ho to try karte hain. Area WhatsApp pe likh do, confirm kar denge.",
    });
  }

  return faqs;
}
