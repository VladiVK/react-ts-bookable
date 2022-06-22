import React from 'react';
import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';

export const links = [
  { id: 1, title: 'bookings', url: '/', icon: <FaCalendarAlt /> },
  { id: 2, title: 'bookable', url: '/bookable', icon: <FaDoorOpen /> },
  { id: 3, title: 'users', url: '/users', icon: <FaUsers /> },
];
