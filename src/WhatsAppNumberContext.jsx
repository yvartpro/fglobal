import { createContext, useContext } from "react";
import { useGlobalContext } from "./GlobalContext";

export const WhatsAppNumberContext = createContext("");

export const useWhatsAppNumber = () => useContext(WhatsAppNumberContext);

export function WhatsAppProvider({ children }) {
  const { phoneNumbers, loadingPhones } = useGlobalContext();

  let whatsappNumber = "";

  if (!loadingPhones && phoneNumbers && phoneNumbers.length > 0) {
    const wa = phoneNumbers.find(phone => phone.name === "WhatsApp");
    if (wa && wa.phone) {
      whatsappNumber = String(wa.phone);
    }
    console.log("Fetched Phone Numbers:", phoneNumbers);
    console.log("Selected WhatsApp Number:", whatsappNumber);
  }

  return (
    <WhatsAppNumberContext.Provider value={whatsappNumber}>
      {children}
    </WhatsAppNumberContext.Provider>
  );
}