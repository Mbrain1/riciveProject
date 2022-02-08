import Navbar from './navbar.js';
import Footer from './footer.js';

export default function Layout({ children }) {
  return (
     <div className="page-wrapper">
        <Navbar />
          {children}
        <Footer />
    </div>
  )
}