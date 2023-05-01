import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useContext, useRef } from 'react'
import { Currency_Data } from '../../../context/CurrencyContext'
import { sortAfterChosenCurrency } from '../../../helper/sorters'

type TopNavigationProps = {
    currencies: string[]
    }

export default function TopNavigation({currencies} : TopNavigationProps) {

  const {currency: chosenCurrency, setCurrency: setChosenCurrency} = useContext(Currency_Data);
  const currencySelectorRef = useRef<HTMLSelectElement>(null);

  const sortedCurrencies = sortAfterChosenCurrency(currencies, chosenCurrency);
  
  const setChosenCurrencyHandler = (event : any) => {
    event.preventDefault();
    setChosenCurrency(currencySelectorRef.current!.value);
  }
  
  return (
              <div className="bg-gray-900">
              <div className="flex items-center justify-between h-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Currency selector */}
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
  
                <div className="flex items-center space-x-6">
                  <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                    Sign in
                  </a>
                  <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                    Create an account
                  </a>
                </div>
              </div>
            </div>
  )
}
