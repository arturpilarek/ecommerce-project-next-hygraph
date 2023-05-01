import { ReactNode, createContext, useState } from "react";
import { Currency } from "../types/Currency";

type currencyDefaultValues = {
    currency: Currency,
    setCurrency: (currency: Currency) => void
}

const defaults: Currency = {
    code: "USD",
    symbol: "$",
    rate: 1,
    default: true   
}

export const Currency_Data = createContext<currencyDefaultValues>({
    currency: defaults,
    setCurrency: () => {}
})

type childrenProps = {
    children: ReactNode
}

export const CurrencyContext = ({ children } : childrenProps) => {
    const [currency, setCurrency] = useState<Currency>(defaults);

    const values : currencyDefaultValues = {
        currency,
        setCurrency
    }

    return (
        <Currency_Data.Provider value={values}>
            {children}
        </Currency_Data.Provider>
    )
}
