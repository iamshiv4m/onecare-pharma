import { businessConfig } from "@/config/business";
import type { FaqItem } from "@/lib/faq";

export type LocalLandingSection = {
  title: string;
  body: string;
};

export type LocalLandingPage = {
  path: "/bhajanpura-pharmacy" | "/medicine-delivery";
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: LocalLandingSection[];
  faqs: FaqItem[];
  priority: number;
  changeFrequency: "weekly" | "monthly";
};

export const localLandingPages: readonly LocalLandingPage[] = [
  {
    path: "/bhajanpura-pharmacy",
    title: "Medical Store in Bhajanpura | One Care Pharma, Wazirabad Road",
    description:
      "One Care Pharma is a medical store on Main Wazirabad Road, Bhajanpura, Delhi 110053. Open 8:30 AM to 11:00 PM every day. Call 8796654406 or order on WhatsApp.",
    h1: "Medical store in Bhajanpura, Delhi 110053",
    intro:
      "One Care Pharma Main Wazirabad Road pe hai — Shop No. 2, C-35, Ground Floor, Bhajanpura. Dawai, prescription check, aur aas-paas delivery jab ho sake. Raat 11 baje tak khula.",
    sections: [
      {
        title: "Wazirabad Road pe kahan hai",
        body: "Shop No. 2, C-35, Ground Floor, Main Wazirabad Road, Bhajanpura, Delhi 110053. Bhajanpura Chowk / red light ke aas-paas, ground floor shop. Google Maps pe ONE CARE PHARMA search karo, ya Directions dabao — walking, bike, ya auto se aa sakte ho.",
      },
      {
        title: "Raat 11 baje tak khula",
        body: "Roz 8:30 AM se 11:00 PM. Sunday bhi. Poori raat nahi khulte — lekin subah jaldi aur raat late tak dawai mil sakti hai. Emergency list ho to pehle WhatsApp ya call kar lo, stock confirm ho jaye.",
      },
      {
        title: "Aas-paas ke areas",
        body: "Bhajanpura ke saath Yamuna Vihar, Khajuri Khas, Sonia Vihar, Seelampur, aur Wazirabad Road ke nearby lanes se log aate hain. Pickup shop se, ya ghar delivery sirf aas-paas ho to try karte hain — pehle WhatsApp pe area likh dena.",
      },
    ],
    faqs: [
      {
        question: "Bhajanpura mein One Care Pharma kahan hai?",
        answer: `${businessConfig.addressDisplay}. Main Wazirabad Road, ground floor.`,
      },
      {
        question: "Kitne baje tak khula rehta hai?",
        answer: businessConfig.openingHours.display,
      },
      {
        question: "Sunday ko khula hai?",
        answer: "Haan, all days 8:30 AM to 11:00 PM.",
      },
    ],
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/medicine-delivery",
    title: "Medicine Delivery in Bhajanpura | One Care Pharma",
    description:
      "Nearby medicine delivery from One Care Pharma, Bhajanpura. Send your list or prescription on WhatsApp 8796654406. Delivery only around the shop when we can — confirm first.",
    h1: "Medicine delivery in Bhajanpura",
    intro:
      "List ya prescription WhatsApp pe bhejo. Stock check ke baad, agar aap shop ke aas-paas ho to delivery try karte hain. Pan-city courier nahi — pehle area confirm karo.",
    sections: [
      {
        title: "Kaise order karein",
        body: "WhatsApp pe dawai ke naam, quantity, aur apna area likho. Prescription wali dawai ke liye photo bhejo. Hum stock aur pickup vs delivery bata denge. Payment shop ke hisaab se — yahan online cart nahi hai.",
      },
      {
        title: "Delivery kahan hoti hai",
        body: "Bhajanpura, Main Wazirabad Road, aur nearby neighbourhoods in North East Delhi 110053. Doorstep tabhi jab distance aur time allow kare. Door nahi ho to shop se pickup better hai — 8:30 AM to 11:00 PM.",
      },
      {
        title: "Kitna time lagta hai",
        body: "Fixed 30-minute promise nahi. Pehle WhatsApp pe confirm. Late evening mein delivery possible ho bhi sakti hai, close 11 PM hai, isliye raat ko jaldi message karna better hai.",
      },
    ],
    faqs: [
      {
        question: "Ghar pe dawai aayegi?",
        answer:
          "Aas-paas ho to try karte hain. Area WhatsApp pe likh do, confirm kar denge. Poore Delhi mein nahi bhejte.",
      },
      {
        question: "Prescription WhatsApp pe bhej sakte hain?",
        answer:
          "Haan, photo bhej do. Prescription medicines tabhi denge jab prescription check ho jaye.",
      },
      {
        question: "Delivery charge kitna hai?",
        answer:
          "Distance aur order pe depend. WhatsApp pe pooch lo — pehle bata denge, hidden charge nahi.",
      },
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },
];

export function getLocalLandingPage(
  path: LocalLandingPage["path"],
): LocalLandingPage {
  const page = localLandingPages.find((item) => item.path === path);
  if (!page) {
    throw new Error(`Unknown local landing page: ${path}`);
  }
  return page;
}
