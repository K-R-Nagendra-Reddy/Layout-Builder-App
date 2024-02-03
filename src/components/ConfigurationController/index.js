// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="layout-element">
          <h1 className="heading-layout">Layout</h1>
          <div className="checkbox-element">
            <label className="color">
              <input
                type="checkbox"
                defaultChecked={showContent}
                onChange={onToggleShowContent}
              />{' '}
              Content
            </label>
          </div>
          <div className="checkbox-element">
            <label className="color">
              <input
                type="checkbox"
                defaultChecked={showLeftNavbar}
                onChange={onToggleShowLeftNavbar}
              />{' '}
              Left Navbar
            </label>
          </div>
          <div className="checkbox-element">
            <label className="color">
              <input
                type="checkbox"
                defaultChecked={showRightNavbar}
                onChange={onToggleShowRightNavbar}
              />{' '}
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
