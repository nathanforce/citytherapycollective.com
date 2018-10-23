import React from 'react';
import { Link, graphql } from 'gatsby';
import { theme } from '../theme';
import { css } from 'glamor';
import Layout from '../components/layout';

const IndexPage = props =>
  console.log({ props }) || (
    <Layout>
      <div
        {...css({
          display: 'flex',
          flexDirection: 'column',
          [theme.media.medium]: { flexDirection: 'row', alignItems: 'center' },
        })}
      >
        <div
          {...css({
            marginRight: '2rem',
            marginBottom: '2rem',
            mixBlendMode: 'darken',
            transform: 'scale(1.5)',
            maxWidth: '30%',
          })}
        >
          <img
            {...css({ width: '100%', display: 'block' })}
            src="https://cdn.dribbble.com/users/283119/screenshots/4440167/attachments/1008518/pop.jpg"
          />
        </div>
        <div>
          <h1
            {...css({
              fontSize: theme.fontSize.large,
              [theme.media.medium]: {
                fontSize: theme.fontSize.xlarge,
              },
              color: theme.colors.indigo(1),
              marginBottom: 0,
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
              color: theme.colors.indigo(4),
              maxWidth: '75%',
              lineHeight: 1.5,
            })}
          >
            {props.data.contentfulHome.body.content[0].content[0].value}
          </p>
        </div>
      </div>
    </Layout>
  );

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    contentfulHome {
      header
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
