const GET_CATEGORY = "category/GET_CATEGORY";
const EDIT_CATEGORY = "category/EDIT_CATEGORY";
const NEW_CATEGORY = "category/NEW_CATEGORY";
const DELETE_CATEGORY = "category/DELETE_CATEGORY";


// action creators
export const getCategory = ( category ) => ({
    type: GET_CATEGORY,
    payload: category
})

export const editCategory = ( category ) => ({
    type: EDIT_CATEGORY,
    payload: category
})

export const newCategory = ( category ) => ({
    type: NEW_CATEGORY,
    payload: category
})

export const deleteCategory = (data) => ({
    type: DELETE_CATEGORY,
    payload: data
})



export const deleteCategoryFunc = (catId) => async (dispatch) => {
    const response = await fetch(`/api/categories/${catId}/delete`, {method: "DELETE"});
    const data = await response.json();
    dispatch(deleteCategory(data))
    return data;
}



export const getCategoryFunc = (catId) => async (dispatch) => {
    const response = await fetch(`/api/categories/${catId}`);
    const data = await response.json();
    dispatch(getCategory(data))
    return data;
}

export const editCategoryFunc = (formData, catId) => async (dispatch) => {
    const response = await fetch(`/api/categories/${catId}/edit`, {
        method: "PUT",
        body: formData,
    });
    const data = await response.json();
    dispatch(getCategory(data))
    return data;
}

export const newCategoryFunc = (formData) => async (dispatch) => {
    const response = await fetch(`/api/categories/new`, {
        method: "POST",
        body: formData,
    });
    const data = await response.json();
    dispatch(getCategory(data))
    return data;
}




const initialState = {category: null}
export default function category(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORY:
            return {category: action.payload}
        case EDIT_CATEGORY:
            return {edited_category: action.payload}
        case NEW_CATEGORY:
            return {new_category: action.payload}
        case DELETE_CATEGORY:
            return {deleted_category:  action.payload}
        default:
            return state;
    }
}
