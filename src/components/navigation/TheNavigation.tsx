
import { request } from 'graphql-request'
import { useEffect, useState } from 'react'
import { Category } from '../../../types/Category'
import { Currency } from '../../../types/Currency'

import BottomNavigation from './BottomNavigation'
import MobileNavigation from './MobileNavigation'
import TopNavigation from './TopNavigation'

const GET_CATEGORIES_AND_CURRENCIES = ` 
{
  categories {
    id
    name
    categoryThumbnail {
      url
    }
    slug
    products {
      ... on Product {
        name
        featured
        images(first: 1) {
          url
        }
        slug
      }
    }
  }
  currencies {
    code
    rate
    default
    symbol
  }
}
      `

type graphData = {
  categories: Category[]
  currencies: Currency[]
}

export default function TheNavigation() {
  
  const [open, setOpen] = useState(false)
  const [categories, setCategories] = useState<Category[] | null>(null)
  const [currencies, setCurrencies] = useState<Currency[]>([])

    useEffect(() => {
      const fetchGraphData = async () => {
        const graphData: graphData = await request(
          `${process.env.hygraph_url}`,
          GET_CATEGORIES_AND_CURRENCIES
        )
        setCategories(graphData.categories)
        setCurrencies(graphData.currencies)
      }
      fetchGraphData()
    }, [])
  


  const setNavigationOpen = (data : boolean) => {
    setOpen(data)
  }

  return (
    <div className="bg-white">
        <MobileNavigation categories={categories} openState={open} changeOpenState={setNavigationOpen} />
      <header className="relative">
        <nav aria-label="Top">
        <TopNavigation currencies={currencies} />
        <BottomNavigation categories={categories} openState={open} changeOpenState={setNavigationOpen} />
        </nav>
      </header>
    </div>
  )
}
