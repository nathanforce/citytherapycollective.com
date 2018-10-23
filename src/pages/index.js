import React from 'react';
import { graphql } from 'gatsby';
import { theme } from '../theme';
import { css } from 'glamor';

const IndexPage = props => (
  <div
    {...css({
      transform: `scaleX(-1)`,
      background: `url(${
        props.data.contentfulHome.backgroundImage.file.url
      }) no-repeat center center fixed`,
      backgroundSize: 'cover',
      minHeight: '100vh',
    })}
  >
    <div
      {...css({
        transform: `scaleX(-1)`,
      })}
    >
      <div
        {...css({
          padding: '10rem 4rem',
          maxWidth: 1200,
        })}
      >
        <h1
          {...css({
            fontSize: theme.fontSize.large,
            [theme.media.medium]: {
              fontSize: theme.fontSize.xlarge,
            },
            color: props.data.contentfulHome.headingTextColor,
            lineHeight: 1,
            margin: 0,
          })}
        >
          {props.data.contentfulHome.header}
        </h1>
        <p
          {...css({
            fontSize: theme.fontSize.medium,
            [theme.media.medium]: {
              fontSize: theme.fontSize.large,
            },
            color: props.data.contentfulHome.bodyTextColor,
            maxWidth: '75%',
            lineHeight: 1.5,
          })}
        >
          {props.data.contentfulHome.body.content[0].content[0].value}
        </p>
      </div>
    </div>
  </div>
);

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    contentfulHome {
      header
      bodyTextColor
      headingTextColor
      backgroundImage {
        file {
          url
        }
      }
      body {
        content {
          content {
            value
          }
        }
      }
    }
  }
`;
