import shortid from "shortid";

export const getFavoriteCards = ({ cards }) => cards.filter(card => card.isFavorite === true);

const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD')

export const toggelCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });
export const addCard = payload => ({ type: ADD_CARD, payload });
export const removeCard = payload => ({ type: REMOVE_CARD, payload })


const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    case REMOVE_CARD:
      return [...statePart.filter(card => card.id !== action.payload)]
    default:
      return statePart;
  }
}

export default cardsReducer;