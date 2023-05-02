import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Currency } from "../../../types/Currency"
import { useContext, useRef } from "react"
import { Currency_Data } from "../../../context/CurrencyContext"
import { sortAfterChosenCurrency } from "../../../helper/sorters"

type CurrencySelectorProps = {
    currencies: Currency[]
    }


export default function CurrencySelector({currencies} : CurrencySelectorProps) {

    const {currency: chosenCurrency, setCurrency: setChosenCurrency} = useContext(Currency_Data);
    const currencySelectorRef = useRef<HTMLSelectElement>(null);
  
    const currencyCodes = currencies.map((currency : Currency) => currency.code);
  
    const sortedCurrencies = sortAfterChosenCurrency(currencyCodes, chosenCurrency.code);
    
    const setChosenCurrencyHandler = (event : any) => {
      event.preventDefault();
      const getCurrencyObjectBasedOnSelect : Currency = currencies.find((currency : Currency) => currency.code === currencySelectorRef.current?.value)!
      setChosenCurrency(getCurrencyObjectBasedOnSelect);
    }

  return (
    <form>
    <div>
      <label htmlFor="desktop-currency" className="sr-only">
        Currency
      </label>
      <div className="relative -ml-2 bg-gray-900 border-transparent rounded-md group focus-within:ring-2 focus-within:ring-white">
        <select
          ref={currencySelectorRef}
          onChange={setChosenCurrencyHandler}
          id="desktop-currency"
          name="currency"
          className="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
        >
          {sortedCurrencies.map((currency : any) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
          <ChevronDownIcon className="w-5 h-5 text-gray-300" aria-hidden="true" />
        </div>
      </div>
    </div>
  </form>
  )
}
