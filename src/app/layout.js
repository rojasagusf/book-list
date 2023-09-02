import './globals.css'

export const metadata = {
  title: 'Book List',
  description: 'A book list',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
