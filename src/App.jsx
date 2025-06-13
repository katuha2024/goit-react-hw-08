
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

import Layout from './components/layout/Layout';
import HomePage from './pages/homepage/HomePage';
import RegisterPage from './pages/regestrationpage/regestrationPage';
import LoginPage from './pages/loginpage/loginPage';
import ContactsPage from './pages/contactpage/contactPage';

import PrivateRoute from './components/privateroute/privateRoute';
import RestrictedRoute from './components/restrictedroute/restrictedRoute';
import { toast } from 'react-hot-toast';


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    toast.success('Toast is working!');
  }, []);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" element={<RegisterPage />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" element={<LoginPage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" element={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;