import { DateSpecs } from "@/types/datespecs.type";
import { Context, createContext } from "react";

export const DateSpecsContext: Context<DateSpecs> = createContext({
    timeZone: { timeZone: "UTC" },
    locale: "pt-BR",
});
