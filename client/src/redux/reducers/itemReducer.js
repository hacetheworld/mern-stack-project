import { ItemsType } from '../actions/types';
const intialState = {
    items: [],
    loading: false
};

const ItemReducer = (state = intialState, action) => {

    switch (action.type) {
        case ItemsType.GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case ItemsType.Add_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
                loading: false
            }
        case ItemsType.ITEMS_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case ItemsType.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        default:
            return state
    }
}

export default ItemReducer