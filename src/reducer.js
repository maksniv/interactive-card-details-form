export function reducer(state, { type, payload }) {
  switch (type) {
    case 'UPDATE_CARDHOLDER_NAME':
      return {
        ...state,
        cardholderName: payload,
      };
    case 'UPDATE_CARD_NUMBER':
      return {
        ...state,
        cardNumber: payload,
      };
    case 'UPDATE_MM':
      return {
        ...state,
        mm: payload,
      };
    case 'UPDATE_YY':
      return {
        ...state,
        yy: payload,
      };
    case 'UPDATE_CVC':
      return {
        ...state,
        cvc: payload,
      };
    case 'CLEAR_FORM':
      return {
        ...state,
        cardholderName: 'Jane Appleseed',
        cardNumber: '1234 5678 9123 0000',
        mm: '00',
        yy: '00',
        cvc: '123',
      };
    default:
      return state;
  }
}
