import React from 'react';
import { Link } from 'gatsby';
import { css } from 'glamor';
import { theme } from '../theme';

const Header = () => (
  <div
    {...css({ display: 'flex', alignItems: 'center', padding: '1rem 2rem' })}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        {...css({
          textDecoration: 'none',
          fontWeight: 300,
          textTransform: 'uppercase',
          letterSpacing: '.05em',
          fontSize: '1rem',
          color: theme.colors.indigo(3),
          transition: `color 200ms ease-in-out`,
          '&:hover': {
            color: theme.colors.indigo(6),
          },
        })}
      >
        City Therapy Collective
      </Link>
    </h1>
  </div>
);

export default Header;
