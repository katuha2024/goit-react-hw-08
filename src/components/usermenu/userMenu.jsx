import React from 'react';
import styles from './userMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <div style={styles.container}>
      <span style={styles.name}>Вітаю, {user.name}</span>
      <button onClick={handleLogout} style={styles.button}>Вийти</button>
    </div>
  );
}
