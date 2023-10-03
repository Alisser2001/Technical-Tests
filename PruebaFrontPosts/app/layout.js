import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import NavigationBar from './components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PostHub',
  description: 'Prueba front end sobre aplicación para posts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <NavigationBar/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
