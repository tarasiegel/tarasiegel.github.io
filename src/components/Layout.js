import React from 'react';


import { rhythm, scale } from '../utils/typography';
import './Layout.css';
import Header from './Header';
import { Link } from 'gatsby';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div className="body-container">
        <Header />
        <div className="layout-container">
          {children}
        </div>
          <footer>
            <div className="footer__container">
              <div className="footer__navigation">
                <div className="footer__link"><Link to={'/'}>home</Link></div>
                <div className="footer__link"><Link to={'/about'}>about</Link></div>
                <div className="footer__link"><Link to={'/recipes'}>recipes</Link></div>
              </div>
              <div className="footer__text">© {new Date().getFullYear()} fullstackkitchen.com</div>
            </div>
          </footer>
      </div>
    )
  }
}

export default Layout;
