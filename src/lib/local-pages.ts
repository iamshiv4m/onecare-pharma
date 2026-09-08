import { businessConfig } from "@/config/business";
import type { FaqItem } from "@/lib/faq";

export type LocalLandingSection = {
  title: string;
  body: string;
};

export type LocalLandingPage = {
  path: "/bhajanpura-pharmacy" | "/medical-store-110053";
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
      "One Care Pharma is a local medical store on Main Wazirabad Road, Bhajanpura, Delhi 110053. Open 8:30 AM to 11:00 PM every day. Visit the store or call 8796654406.",
    h1: "Pharmacy in Bhajanpura — One Care Pharma",
    intro:
      "One Care Pharma Main Wazirabad Road pe physical medical store hai — Shop No. 2, C-35, Ground Floor, Bhajanpura, Delhi 110053. Healthcare products, OTC, first-aid, aur wellness items counter pe milte hain. Raat 11 baje tak khula.",
    sections: [
      {
        title: "Wazirabad Road pe kahan hai",
        body: "Shop No. 2, C-35, Ground Floor, Main Wazirabad Road, Bhajanpura, Delhi 110053. Bhajanpura Chowk / red light ke aas-paas, ground floor shop. Google Maps pe ONE CARE PHARMA search karo, ya Get Directions dabao — walking, bike, ya auto se aa sakte ho.",
      },
      {
        title: "Raat 11 baje tak khula",
        body: "Roz 8:30 AM se 11:00 PM. Sunday bhi. Subah jaldi aur raat late tak walk-in customers ke liye khula. Hours confirm karne ke liye call kar lo.",
      },
      {
        title: "Aas-paas ke areas",
        body: "Bhajanpura ke saath Yamuna Vihar, Khajuri Khas, Sonia Vihar, Seelampur, aur Wazirabad Road ke nearby lanes se log store pe aate hain. Yeh neighbourhood medical store hai — online pharmacy nahi.",
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
    path: "/medical-store-110053",
    title: "Medical Store near 110053 | Pharmacy near Bhajanpura",
    description:
      "Local medical store near Delhi 110053. One Care Pharma, Main Wazirabad Road, Bhajanpura. Open daily 8:30 AM to 11:00 PM. Visit the shop or call 8796654406.",
    h1: "Medical store near 110053, Bhajanpura",
    intro:
      "Delhi 110053 ke paas walk-in medical store chahiye? One Care Pharma Bhajanpura, Main Wazirabad Road pe hai. Address, hours, aur Google Maps directions yahin milenge.",
    sections: [
      {
        title: "110053 pin code ke paas",
        body: "Shop No. 2, C-35, Ground Floor, Main Wazirabad Road, Bhajanpura, Delhi 110053. Ground floor, Wazirabad Road pe — Get Directions se rasta nikal aata hai.",
      },
      {
        title: "Yahan kya milta hai",
        body: "Healthcare products, OTC/general health items, first-aid, aur wellness products jo store pe stock mein hon. Prescription medicines in-store dispense hote hain, applicable law ke mutabik — yeh website se online order nahi hota.",
      },
      {
        title: "Kaise aayein",
        body: "Visit Store details dekho, Call Now se hours confirm karo, ya Google Maps pe Get Directions. WhatsApp general enquiry ke liye available hai, ordering channel nahi.",
      },
    ],
    faqs: [
      {
        question: "110053 mein medical store kahan hai?",
        answer: `${businessConfig.addressDisplay}.`,
      },
      {
        question: "Pharmacy near Bhajanpura kitne baje khulti hai?",
        answer: businessConfig.openingHours.display,
      },
      {
        question: "Directions kaise loon?",
        answer:
          "Get Directions CTA se Google Maps kholo, ya 8796654406 pe call karke rasta pooch lo.",
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
