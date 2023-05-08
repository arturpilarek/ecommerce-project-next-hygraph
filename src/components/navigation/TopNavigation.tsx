import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Currency } from '../../../types/Currency'
import CurrencySelector from '../common/CurrencySelector'

type TopNavigationProps = {
    currencies: Currency[]
    }

export default function TopNavigation({currencies} : TopNavigationProps) {
  const { data: session, status } = useSession()
  
  return (
              <div className="bg-gray-900">
              <div className="flex items-center justify-between h-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Currency selector */}
                <CurrencySelector currencies={currencies} />
                <div className="flex items-center space-x-6">
                  { session?.user.firstName 
                  ? 
                  ( 
                  <>
                    <p className='text-sm font-medium text-white'>Hello {session.user.firstName}!</p>
                    <button className='text-sm font-medium text-white' onClick={() => signOut()}>Log out</button> 
                  </>
                  )
                  : (
                    <>
                    <Link href="/login" className="text-sm font-medium text-white hover:text-gray-100">
                    Sign in
                  </Link>
                  <Link href="/signup" className="text-sm font-medium text-white hover:text-gray-100">
                    Create an account
                  </Link>
                  </>
                  ) }
                </div>
              </div>
            </div>
  )
}
