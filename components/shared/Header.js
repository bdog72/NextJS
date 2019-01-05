import React from 'react';
import Link from 'next/link';

import '../../styles/main.scss';

class Header extends React.Component {
  render() {
    const title = this.props.title;

    return (
      <React.Fragment>
        <p> {title} </p>
        {this.props.children}

        <p className="customClass">I am a custom p element</p>
        <p className="customClassFromFile">I am a custom p element</p>

        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
        <Link href="/cv">
          <a>Cv</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolios</a>
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
export default Header;
