import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import 'sanitize.css';
import '../global.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'City Therapy Collective, New York City',
            },
            { name: 'keywords', content: 'therapy, therapist' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            minHeight: 'calc(100vh-68px)',
          }}
        >
          <div
            style={{
              margin: '0 auto',
              maxWidth: 1200,
              padding: '2rem',
              paddingTop: '6rem',
            }}
          >
            {children}
          </div>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
