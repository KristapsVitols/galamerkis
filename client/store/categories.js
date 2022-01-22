import {Category} from '../models/category';

export const state = () => ({
    currentCategory: null,
    categories: [],
})

export const mutations = {
    setCurrentCategory(state, currentCategory) {
        state.currentCategory = currentCategory;
    },
    setCategories(state, categories) {
        state.categories = categories;
    },
}

export const getters = {
    currentCategory: state => Category.fromRequest(state.currentCategory),
    categories: state => state.categories.map(category => Category.fromRequest(category)),
}