import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
     <div className="page-wrapper">
        <Navbar />
          {children}
        <Footer />
    </div>
  )
}