import { createContext, useContext } from "react";

export const WhatsAppNumberContext = createContext("254782025531");

export const useWhatsAppNumber = () => useContext(WhatsAppNumberContext);
