import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../appbar/AppBar';

export default function Layout() {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}