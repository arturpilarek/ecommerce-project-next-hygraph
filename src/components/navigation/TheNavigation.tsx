
import { request } from 'graphql-request'
import { useEffect, useState } from 'react'
import BottomNavigation from './BottomNavigation'
import MobileNavigation from './MobileNavigation'
import TopNavigation from './TopNavigation'

const GET_CATEGORIES = ` 
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
}
      `
      
const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']


type category = {
  id: string
  name: string
  categoryThumbnail: {
    url: string
  }
  slug: string
}

type categories = {
  categories: category[]
}

export default function TheNavigation() {
  const [open, setOpen] = useState(false)
  const [categories, setCategories] = useState<category[] | null>(null)

    useEffect(() => {
      const fetchCategories = async () => {
        const categories: categories = await request(
          `${process.env.hygraph_url}`,
          GET_CATEGORIES
        )
        setCategories(categories.categories)
      }
      fetchCategories()
      
    }, [])


  const setNavigationOpen = (data : boolean) => {
    setOpen(data)
  }

  return (
    <div className="bg-white">
        <MobileNavigation categories={categories} currencies={currencies} openState={open} changeOpenState={setNavigationOpen} />
      <header className="relative">
        <nav aria-label="Top">
        <TopNavigation currencies={currencies} />
        <BottomNavigation categories={categories} openState={open} changeOpenState={setNavigationOpen} />
        </nav>
      </header>
    </div>
  )
}
