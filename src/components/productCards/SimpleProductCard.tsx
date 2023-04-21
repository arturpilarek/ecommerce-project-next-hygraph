type item = {
    name: string
    imageSrc: string
    imageAlt: string
    href: string
}

type SimpleProductCardProps = {
    item: item
}
    

export default function SimpleProductCard({item} : SimpleProductCardProps) {
  return (
    <div  className="relative group">
    <div className="overflow-hidden bg-gray-100 rounded-md aspect-h-1 aspect-w-1 group-hover:opacity-75">
      <img
        src={item.imageSrc}
        alt={item.imageAlt}
        className="object-cover object-center"
      />
    </div>
    <a href={item.href} className="block mt-4 font-medium text-gray-900">
      <span className="absolute inset-0 z-10" aria-hidden="true" />
      {item.name}
    </a>
    <p aria-hidden="true" className="mt-1">
      Shop now
    </p>
  </div>
  )
}
