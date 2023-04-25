import {
    Bars3Icon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon
} from '@heroicons/react/24/outline'
import FlytoutMenus from './FlytoutMenus'

type BottomNavigationProps = {
categories: any,
openState: boolean,
changeOpenState: any
}

export default function BottomNavigation(props : BottomNavigationProps) {

    const changeOpenState = () => {
        props.changeOpenState(!props.openState)
    }
    
  return (
    <div className="bg-white">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="flex items-center justify-between h-16">
          {/* Logo (lg+) */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
            <FlytoutMenus categories={props.categories} />

          {/* Mobile menu and search (lg-) */}
          <div className="flex items-center flex-1 lg:hidden">
            <button
              type="button"
              className="p-2 -ml-2 text-gray-400 bg-white rounded-md"
              onClick={changeOpenState}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>

            {/* Search */}
            <a href="#" className="p-2 ml-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Search</span>
              <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
            </a>
          </div>

          {/* Logo (lg-) */}
          <a href="#" className="lg:hidden">
            <span className="sr-only">Your Company</span>
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
              className="w-auto h-8"
            />
          </a>

          <div className="flex items-center justify-end flex-1">
            <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
              Search
            </a>

            <div className="flex items-center lg:ml-8">
              {/* Help */}
              <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                <span className="sr-only">Help</span>
                <QuestionMarkCircleIcon className="w-6 h-6" aria-hidden="true" />
              </a>
              <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                Help
              </a>

              {/* Cart */}
              <div className="flow-root ml-4 lg:ml-8">
                <a href="#" className="flex items-center p-2 -m-2 group">
                  <ShoppingBagIcon
                    className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
