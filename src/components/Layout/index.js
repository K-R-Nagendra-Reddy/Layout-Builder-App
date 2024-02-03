// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'
import Header from '../Header'
import Footer from '../Footer'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="layout-container">
          <Header />
          <div className="body-container">
            {showLeftNavbar && (
              <div>
                <h1>Left Navbar Menu</h1>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            )}
            {showContent && (
              <div>
                <h1>Content</h1>
                <p className="description">
                  Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                  eilusmod tempor incididunt ut labore et dolore manga aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            )}
            {showRightNavbar && (
              <div>
                <h1>Right Navbar</h1>
                <p> Ad 1</p>
                <p> Ad 2</p>
              </div>
            )}
          </div>
          <Footer />
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Layout
