import { businessConfig } from "@/config/business";

export type FaqItem = {
  question: string;
  answer: string;
};

export function getFaqs(): FaqItem[] {
  const { addressDisplay, openingHours, shortName } = businessConfig;

  return [
    {
      question: "Where is One Care Pharma?",
      answer: `${shortName} is a physical medical store at ${addressDisplay}.`,
    },
    {
      question: "Bhajanpura mein shop kahan hai?",
      answer: `Main Wazirabad Road, Shop No. 2, C-35, Ground Floor, Delhi 110053. Google Maps pe ${shortName} search karo ya Get Directions use karo.`,
    },
    {
      question: "Kitne baje tak khula rehta hai?",
      answer: openingHours.hoursConfirmed
        ? openingHours.display
        : "Store ya Google Maps pe confirm kar lo.",
    },
    {
      question: "Sunday ko khula hai?",
      answer: "Haan, all days 8:30 AM to 11:00 PM.",
    },
    {
      question: "Kya yeh online pharmacy hai?",
      answer:
        "Nahi. One Care Pharma Bhajanpura ka walk-in medical store hai. Website store ki jaankari, address, aur contact ke liye hai — yahan se prescription medicines order nahi hote.",
    },
    {
      question: "Call ya WhatsApp kis liye use karein?",
      answer: `Hours, directions, ya shop pe available healthcare products ke baare mein poochne ke liye ${businessConfig.phones.map((p) => p.display).join(" ya ")} pe call karo. WhatsApp general enquiry ke liye hai, prescription medicine order channel nahi.`,
    },
  ];
}
