import './globals.css'
import { Navbar,Footer } from '@/components'
export const metadata = {
  title: 'Refined_Rides',
  description: 'Discover Your Refined Journey',
  metadataBase: new URL("http://localhost:3000/"),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-darkGrey'>
        <Navbar  />
        {children}
        <Footer  />
        </body>
    </html>
  )
}
