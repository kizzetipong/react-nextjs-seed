import Meta from './components/Meta'
import Header from './components/Header'
import Footer from './components/Footer'

const LayoutMain = ({ children }) => (
  <div>
    <Meta />
    <Header />
    { children }
    <Footer />
  </div>
)

export default LayoutMain