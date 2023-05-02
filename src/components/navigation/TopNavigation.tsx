import { Currency } from '../../../types/Currency'
import CurrencySelector from '../common/CurrencySelector'

type TopNavigationProps = {
    currencies: Currency[]
    }

export default function TopNavigation({currencies} : TopNavigationProps) {
  
  return (
              <div className="bg-gray-900">
              <div className="flex items-center justify-between h-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Currency selector */}
                <CurrencySelector currencies={currencies} />
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
