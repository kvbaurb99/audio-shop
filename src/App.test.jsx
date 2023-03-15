import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import Authentication from './components/Authentication';
import UserOrders from './components/UserOrders';

jest.mock('axios');

describe('createAccount', () => {
  it('should send a post request to the server with the username and password', async () => {
    const usernameReg = 'testuser';
    const passwordReg = 'testpassword';
    const mockResponse = { data: {} };
    axios.post.mockResolvedValueOnce(mockResponse);

    render(<Authentication usernameReg={usernameReg} passwordReg={passwordReg}  />);

    const usernameInput = await screen.findByLabelText('Username');
    const passwordInput = await screen.findByLabelText('Password');
    const submitButton = await screen.findByRole('button', { name: 'CREATE ACCOUNT' });

    fireEvent.change(usernameInput, { target: { value: usernameReg } });
    fireEvent.change(passwordInput, { target: { value: passwordReg } });
    fireEvent.click(submitButton);

    expect(axios.post).toHaveBeenCalledWith(
      'https://audiophile-kvbaurb99.herokuapp.com/register',
      { username: usernameReg, password: passwordReg }
    );
  });
});

