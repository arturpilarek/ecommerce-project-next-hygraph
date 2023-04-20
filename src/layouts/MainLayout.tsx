import TheNavigation from "@/components/navigation/TheNavigation"

type LayoutProps = {
    children: React.ReactNode
}

export default function MainLayout({ children } : LayoutProps) {
  return (
    <>
      <TheNavigation />
      <main>{children}</main>
    </>
  )
}