import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
// import { Toaster } from 'react-hot-toast';
import { Container } from './Container/Container';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null} >
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </Container>
  );
};
