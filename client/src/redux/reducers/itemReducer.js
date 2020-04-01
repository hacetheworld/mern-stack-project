import uuid from 'uuid/v4';
import { ItemsType } from '../actions/types';
const intialState = {
    items: [
        {
            _id: uuid(),
            name: 'Product 1'
        },
        {
            _id: uuid(),
            name: 'Product 2'
        }
        ,
        {
            _id: uuid(),
            name: 'Product 3'
        }
        ,
        {
            _id: uuid(),
            name: 'Product 4'
        }
    ]
};

const ItemReducer = (state = intialState, action) => {

    switch (action.type) {
        case ItemsType.GET_ITEMS:
            return {
                ...state
            }
        case ItemsType.Add_ITEM:
            return {
                items: [...state.items, action.payload]
            }

        case ItemsType.DELETE_ITEM:
            return {
                items: state.items.filter(item => item._id !== action.payload)
            }
        default:
            return state
    }
}

export default ItemReducer