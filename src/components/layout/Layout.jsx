import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../appbar/appBar';

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