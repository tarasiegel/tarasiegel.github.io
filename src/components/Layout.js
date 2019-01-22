import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import './Layout.css';
import Header from './Header';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header = '';

    if (location.pathname === rootPath) {
      header = (
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <Header />
          </Link>
      )
    } else {
      header = (
        <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
             <Header />
        </Link>
      )
    }


    return (
      <div className="layout-container">
        {header}
        {children}
        <footer>
          © {new Date().getFullYear()} fullstackkitchen.com
        </footer>
      </div>
    )
  }
}

export default Layout;
