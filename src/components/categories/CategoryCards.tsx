    import { Category } from "../../../types/Category"

    type CategoryCardsProps = {
        categories: Category[]
    }
  
  export default function CategoryCards({categories} : CategoryCardsProps) {
    
    return (
      <div className="bg-white">
        <div className="max-w-xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Collection</h2>
          <p className="mt-4 text-base text-gray-500">
            Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
          </p>
  
          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {categories.map((category) => (
              <a key={category.name} href={`${category.slug}`} className="block group">
                <div
                  aria-hidden="true"
                  className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3 lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                >
                  <img
                    src={category.categoryThumbnail.url}
                    alt={category.name}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{category.shortDescription}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  