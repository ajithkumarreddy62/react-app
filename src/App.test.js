import React from 'react';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import Display from './components/display';
import userEvent from '@testing-library/user-event'




afterEach(cleanup);

const simulateChangeOnInput = (wrapper, inputSelector, newvalue) => {
  const input = wrapper.find(inputSelector)
  input.simulate('change', {
    target: { value: newvalue },
  })
  return wrapper.find(inputSelector)
}

describe("Testing user form component", () => {

  test('Renders User form successfully', () => {
    render(<App />);
    screen.debug();
  })


  test('Testing user form input fields', () => {
    render(<App />);
    const firstInput = screen.getByRole('textbox', {
      name: /first name\*/i
    });
    expect(firstInput).toBeInTheDocument();

    const lastInput = screen.getByRole('textbox', {
      name: /last name\*/i
    });
    expect(lastInput).toBeInTheDocument();

    const emailInput = screen.getByRole('textbox', {
      name: /email\*/i
    });
    expect(emailInput).toBeInTheDocument();

    const radioInput = screen.getByRole('radio', {
      name: /female/i
    });
    expect(radioInput).toBeInTheDocument();

    const button = screen.getByRole('button', {
      name: /submit/i
    });
    expect(button).toBeInTheDocument();

  })



  test('Testing user form input field values', async () => {

    render(<App />)

    const firstInput = screen.getByRole('textbox', {
      name: /first name\*/i
    });
    fireEvent.input(firstInput, { target: { value: "Sam" } });
    expect(firstInput).toHaveValue("Sam");

    const lastInput = screen.getByRole('textbox', {
      name: /last name\*/i
    });
    fireEvent.input(lastInput, { target: { value: "Julie" } });
    expect(lastInput).toHaveValue("Julie");

    const emailInput = screen.getByRole('textbox', {
      name: /email\*/i
    });
    fireEvent.input(emailInput, { target: { value: "Julie@yahoo.in" } });
    expect(emailInput).toHaveValue("Julie@yahoo.in");

    const radioInput = screen.getByRole('radio', {
      name: /female/i
    });
    fireEvent.click(radioInput);
    expect(radioInput).toBeChecked("female");

  })




})

describe("Test display component", () => {
  test("Renders display component successfully", () => {
    render(<Display />);
    screen.debug();
  })

  test("Testing create user button", () => {
    const handleClick = jest.fn()
    const { getByRole } = render(<Display onClick={handleClick} />)
    fireEvent.click(getByRole('button', { name: /create user/i }))

  })


})





