type breadcrumb = {
    name: string
    href: string
    }

export default function Breadcrumbs({breadcrumbsArray} : {breadcrumbsArray: breadcrumb[]}) {
  return (
    <nav aria-label="Breadcrumb">
    <ol role="list" className="flex items-center space-x-2">
      {breadcrumbsArray.map((breadcrumb, breadcrumbIdx) => (
        <li key={breadcrumbIdx}>
          <div className="flex items-center text-sm">
            <a href={breadcrumb.href} className="font-medium text-gray-500 hover:text-gray-900">
              {breadcrumb.name}
            </a>
            {breadcrumbIdx !== breadcrumbsArray.length - 1 ? (
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 ml-2 text-gray-300"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  </nav>
  )
}
