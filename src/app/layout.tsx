
import './globals.css'

export const metadata = {
  title: 'Kronario',
  description: 'Kronario es una aplicación para seleccionar tu horario universitario en la universidad del norte.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-roboto'>
        { children }
      </body>
    </html>
  )
}
