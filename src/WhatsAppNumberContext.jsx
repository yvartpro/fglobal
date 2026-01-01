import { createContext, useContext } from "react";
import { useGlobalContext } from "./GlobalContext";

export const WhatsAppNumberContext = createContext("254799244113");

export const useWhatsAppNumber = () => useContext(WhatsAppNumberContext);

export function WhatsAppProvider({ children }) {
  const { phoneNumbers, loadingphones } = useGlobalContext();

  let whatsappNumber = "254799244113";
  
  if (!loadingphones && phoneNumbers && phoneNumbers.length > 0) {
    const wa = phoneNumbers.find(phone => phone.name === "WhatsApp");
    if (wa && wa.number) {
      whatsappNumber = wa.number;
    }
  }

  return (
    <WhatsAppNumberContext.Provider value={whatsappNumber}>
      {children}
    </WhatsAppNumberContext.Provider>
  );
}