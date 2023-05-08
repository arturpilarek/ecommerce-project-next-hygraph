import Image from "next/image"
import promoSectionImage from '../../public/promo-section.avif'

export default function PromoSection() {
    return (
      <div className="bg-white">
        <div className="relative bg-gray-900">
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <Image
              src={promoSectionImage}
              alt="Promo section image"
              width={2340}
              height={1560}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
  
          <div className="relative flex flex-col items-center px-6 py-32 mx-auto text-center sm:py-64 lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">Meme-commerce arrived</h1>
            <p className="mt-4 text-xl text-white">
            Why not make your work station truly yours with our awesome meme-products?
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100"
            >
              Shop featured products
            </a>
          </div>
        </div>
      </div>
    )
  }
  