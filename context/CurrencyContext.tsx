import { ReactNode, createContext, useState } from "react";

type currencyDefaultValues = {
    currency: string,
    setCurrency: (currency: string) => void
}

export const Currency_Data = createContext<currencyDefaultValues>({
    currency: "USD",
    setCurrency: () => {}
})

type childrenProps = {
    children: ReactNode
}

export const CurrencyContext = ({ children } : childrenProps) => {
    const [currency, setCurrency] = useState<string>("USD");

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
