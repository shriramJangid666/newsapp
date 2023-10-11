import './globals.css'
import Nav from './Nav'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
        </body>
    </html>
  )
}
