import React from 'react';
import { render } from '@testing-library/react';
import UserDetails from './user';

const userInfo = {
    userName: 'Duong',
    email: 'Duong@gmail.com',
    phone: '0123456789',
};

test('Test khi dung username', () => {
    const { getByText } = render(<UserDetails info={userInfo} />);
    const usernameElement = getByText(`Username: ${userInfo.userName}`);
    expect(usernameElement).toBeInTheDocument();
});

test('Test khi dung email', () => {
    const { getByText } = render(<UserDetails info={userInfo} />);
    const emailElement = getByText(`Email: ${userInfo.email}`);
    expect(emailElement).toBeInTheDocument();
});

test('Test khi dung sdt', () => {
    const { getByText } = render(<UserDetails info={userInfo} />);
    const phoneElement = getByText(`Phone: ${userInfo.phone}`);
    expect(phoneElement).toBeInTheDocument();
});