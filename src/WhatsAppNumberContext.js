import { createContext, useContext } from "react";

export const WhatsAppNumberContext = createContext("254111878523");

export const useWhatsAppNumber = () => useContext(WhatsAppNumberContext);
