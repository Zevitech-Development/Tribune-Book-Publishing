import { FaPhoneAlt } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export const ContactMethodsContent = [
  {
    cardName: "Call Us",
    cardText: "Feel free to call anytime",
    cardIcon: <FaPhoneAlt />,
    cardButton: "Call Now",
    link: "tel:+14082145589",
    target: "_self",
  },

  {
    cardName: "Chat Live",
    cardText: "We're available 24/7 for our customer support",
    cardButton: "Chat Now",
    cardIcon: <IoChatboxEllipses />,
    link: "https://tawk.to/chat/5f8b8c4c6d3e2a0a0c1b2c3d/default",
    target: "_blank",
  },

  {
    cardName: "Ask a Question",
    cardText: "Just drop an email, we'll get back to you in 24 hours.",
    cardButton: "Emai Now",
    cardIcon: <MdEmail />,
    link: "mailto:info@tribunebookpublishing.com",
    target: "_self",
  },
];
