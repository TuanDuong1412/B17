import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './login';
test('Test khong nhap username', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    const errorMessage = getByText('nhập tên đăng nhập');
    expect(errorMessage).toBeInTheDocument();
});

test('Test khong nhap password', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    const usernameInput = getByLabelText('Username');
    const submitButton = getByText('Submit');

    fireEvent.change(usernameInput, { target: { value: 'username' } });
    fireEvent.click(submitButton);

    const errorMessage = getByText('Nhập mật khẩu');
    expect(errorMessage).toBeInTheDocument();
});

test('Test khi sai username va password', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(usernameInput, { target: { value: 'incorrectUsername' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    const errorMessage = getByText('Sai tên đăng nhập hoặc mật khẩu');
    expect(errorMessage).toBeInTheDocument();
});

test('Test khi nhap sai username va password', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(usernameInput, { target: { value: 'username' } });
    fireEvent.change(passwordInput, { target: { value: 'incorrectPassword' } });
    fireEvent.click(submitButton);

    const errorMessage = getByText('Sai tên đăng nhập hoặc mật khẩu');
    expect(errorMessage).toBeInTheDocument();
});

test('Test khi nhap dung username va password', () => {
    const { getByLabelText, getByText, queryByText } = render(<LoginForm />);
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(usernameInput, { target: { value: 'admin' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    const errorMessage = queryByText('Sai tên đăng nhập hoặc mật khẩu');
    expect(errorMessage).toBeNull();
});