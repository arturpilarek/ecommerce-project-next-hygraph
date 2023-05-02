import { Dialog, Tab, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Fragment } from 'react'

type MobileNavigationProps = {
    categories: any,
    openState: boolean,
    changeOpenState: any
}

function classNames(...classes :string[]) {
    return classes.filter(Boolean).join(' ')
  }

export default function MobileNavigation(props : MobileNavigationProps) {

    const changeOpenState = () => {
        props.changeOpenState(!props.openState)
    }
    
  return (
    <div>
      <Transition.Root show={props.openState} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={changeOpenState}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                    onClick={changeOpenState}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="flex px-4 -mb-px space-x-8">
                      {props.categories && props.categories.map((category : any) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {props.categories && props.categories.map((category : any) => (
                      <Tab.Panel key={category.name} className="px-4 py-6 space-y-12">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                            <div key={category.name} className="relative group">
                              <div className="overflow-hidden bg-gray-100 rounded-md aspect-h-1 aspect-w-1 group-hover:opacity-75">
                                <img src={category.categoryThumbnail.url} alt={category.name} className="object-cover object-center" />
                              </div>
                              <Link href={`/categories/${category.slug}`} className="block mt-6 text-sm font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {category.name}
                              </Link>
                              <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                Shop now
                              </p>
                            </div>
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  <div className="flow-root">
                    <a href="#" className="block p-2 -m-2 font-medium text-gray-900">
                      Create an account
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="block p-2 -m-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      </div>
  )
}
