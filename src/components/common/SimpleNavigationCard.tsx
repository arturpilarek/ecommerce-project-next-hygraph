import Image from "next/image"
import Link from "next/link"
import { HygraphImageLoader } from "../../../helper/hygraphImageLoader"

type SimpleNavigationtCardProps = {
    name: string
    imageSrc: string
    href: string
    buttonText: string
}

export default function SimpleNavigationCard({ name, href, imageSrc, buttonText } : SimpleNavigationtCardProps) {
  return (
    <div  className="relative group">
    <div className="overflow-hidden bg-gray-100 rounded-md aspect-h-1 aspect-w-1 group-hover:opacity-75">
          <Image
            loader={HygraphImageLoader}
            src={imageSrc}
            width={280}
            height={280}
            alt={name}
            className="object-cover object-center"
          />
    </div>
    <Link href={href} className="block mt-4 font-medium text-gray-900">
      <span className="absolute inset-0 z-10" aria-hidden="true" />
      {name}
    </Link>
    <p aria-hidden="true" className="mt-1">
      {buttonText}
    </p>
  </div>
  )
}
