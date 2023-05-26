import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const CardDataContext = createContext();

const initialState = {
  cardholderName: 'Jane Appleseed',
  cardNumber: '1234 5678 9123 0000',
  mm: '00',
  yy: '00',
  cvc: '123',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.updateCardholderName = (item) => {
    dispatch({ type: 'UPDATE_CARDHOLDER_NAME', payload: item });
  };

  value.updateCardNumber = (item) => {
    dispatch({ type: 'UPDATE_CARD_NUMBER', payload: item });
  };

  value.updateMM = (item) => {
    dispatch({ type: 'UPDATE_MM', payload: item });
  };

  value.updateYY = (item) => {
    dispatch({ type: 'UPDATE_YY', payload: item });
  };

  value.updateCVC = (item) => {
    dispatch({ type: 'UPDATE_CVC', payload: item });
  };

  value.clearForm = () => {
    dispatch({ type: 'CLEAR_FORM' });
  };

  return (
    <CardDataContext.Provider value={value}>
      {children}
    </CardDataContext.Provider>
  );
};
