import { Outlet } from 'react-router-dom';

import NavMenu from 'components/NavMenu/NavMenu';

import { Container, Header } from './BasicLayout.styled';

const BasicLayout = () => {
  return (
    <Container>
      <Header>
        <NavMenu />
      </Header>
      <Outlet />
    </Container>
  );
};

export default BasicLayout;
