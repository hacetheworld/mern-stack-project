import axios from 'axios';
import { ItemsType } from './types';
export const getItems = () => dispatch => {
    dispatch(setItemLoading());
    axios.get('/api/items/')
        .then(items => dispatch({
            type: ItemsType.GET_ITEMS,
            payload: items.data
        }));
}

export const addItem = (item) => dispatch => {
    dispatch(setItemLoading());
    axios.post('/api/items/', item)
        .then(res => dispatch({
            type: ItemsType.Add_ITEM,
            payload: res.data.resCreatedItem
        }));
}
export const setItemLoading = () => {
    return {
        type: ItemsType.ITEMS_LOADING,
    }
}
export const deleteItem = (id) => dispatch => {
    dispatch(setItemLoading());
    axios.delete(`/api/items/${id}`)
        .then(res => dispatch({
            type: ItemsType.DELETE_ITEM,
            payload: id
        }));
}