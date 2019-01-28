import React from 'react';


import { rhythm, scale } from '../utils/typography';
import './Layout.css';
import Header from './Header';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div className="body-container">
        <Header />
        <div className="layout-container">
          {children}
          <footer>
            © {new Date().getFullYear()} fullstackkitchen.com
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout;
