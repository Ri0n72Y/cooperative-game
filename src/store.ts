import { createContext, useContext } from "react";

export const initialValue = {
  farm: 5,
  "light-industry": 5,
  "heavy-industry": 10,
  "heavy-industry-tesla": 15,
  service: 10,
  "service-plus": 15,
  cbd: 20,
};
const context = createContext<{
  state: Record<string, number>;
  setState: (state: Record<string, number>) => void;
}>({ state: initialValue, setState: () => {} });
export const DataProvider = context.Provider;
export const useData = () => useContext(context);
