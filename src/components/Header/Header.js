import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import cigImg from '../../assets/img/ciggrette_icon.png';
import Container from '@mui/material/Container';

function Header(props) {
  const { sections, title } = props;

  return (
    <Container>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <img
          style={{
            paddingLeft: '24px',
            height: '50px',
            width: 'auto',
            transform: 'rotate(45deg)',
          }}
          alt="cigaratte icon"
          src={cigImg}
        ></img>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <RouterLink
            color="inherit"
            key={section.title}
            variant="body2"
            sx={{ p: 1, flexShrink: 0 }}
            to={section.url}
          >
            {section.title}
          </RouterLink>
        ))}
      </Toolbar>
    </Container>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
