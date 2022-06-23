import React from 'react';
import { UserPickerWrapper } from './style';
const UserPicker = () => {
  return (
    <UserPickerWrapper>
      <select className='picker'>
        <option value=''>Users</option>
      </select>
    </UserPickerWrapper>
  );
};

export default UserPicker;
