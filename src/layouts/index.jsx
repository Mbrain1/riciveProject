import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <section>
        <Navbar />
        <section className="relative inset-y-28">
          {children}
        </section>
        <Footer />
    </section>
  )
}