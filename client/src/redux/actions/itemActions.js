import { ItemsType } from './types';
export const getItems = () => {
    return {
        type: ItemsType.GET_ITEMS
    }
}

export const addItem = (item) => {
    return {
        type: ItemsType.Add_ITEM,
        payload: item
    }
}

export const deleteItem = (id) => {
    return {
        type: ItemsType.DELETE_ITEM,
        payload: id
    }
}