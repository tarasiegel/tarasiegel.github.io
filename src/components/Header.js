import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image';
import titleLogo from './../../content/assets/fullstackkitchen_logo.svg';
import ReactVivus from 'react-vivus';
import { rhythm } from '../utils/typography';
import Vivus from 'vivus';

class Header extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      start: false
    };
  }
  
  componentDidMount() {
  }

  render() {
    return (
      <div className="header">
        <div className={`header-image`} style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}>
            <ReactVivus id="header-logo" 
              option={{
                file: titleLogo,
                animTimingFunction: 'EASE',
                type: 'delayed',
                delay: 200,
                duration: 500,
                onReady: console.log
              }}
              style={{ height: 'auto', width: '600px' }}
              callback={console.log}
              />
        </div>
      </div>
    );
  }
}

export default Header;