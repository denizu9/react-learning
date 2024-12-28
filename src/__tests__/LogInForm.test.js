import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LogInForm from '../components//LogInForm';
import { LogInContext } from '../context/LogInContext';
import { useNavigate } from 'react-router-dom';
import LogInAPI from '../api/LogInAPI';

// Mock useNavigate from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

// Mock LogInAPI
jest.mock('../api/LogInAPI');

describe('LogInForm Component', () => {
  it('should handle login successfully and navigate to home', async () => {
    // Mock the navigate function
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    // Mock the LogInAPI and its logIn method
    LogInAPI.mockImplementation(() => {
      return {
        logIn: jest.fn().mockResolvedValue({ token: 'mockToken' }),
      };
    });

    // Set up mock context values
    const setIsLoggedIn = jest.fn();
    const setUserName = jest.fn();
    const contextValue = {
      isLoggedIn: false,
      setIsLoggedIn,
      userName: '',
      setUserName,
    };

    render(
      <LogInContext.Provider value={contextValue}>
        <LogInForm />
      </LogInContext.Provider>
    );

    // Simulate user input
    const usernameInput = screen.getByPlaceholderText('username');
    const passwordInput = screen.getByPlaceholderText('password');
    const submitButton = screen.getByText('Giriş Yap');

    fireEvent.change(usernameInput, { target: { value: 'testUser' } });
    fireEvent.change(passwordInput, { target: { value: 'testPass' } });

    // Verify that setUserName was called
    expect(setUserName).toHaveBeenCalledWith('testUser');

    // Click the submit button
    fireEvent.click(submitButton);

    // Wait for the API call and state updates
    await waitFor(() => {
      // Check that setIsLoggedIn was called with true
      expect(setIsLoggedIn).toHaveBeenCalledWith(true);
    });
  });
});
