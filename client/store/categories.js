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

export const actions = {
    async getCategories({commit}) {
        const categories = await this.$axios.$get('/content/categories?_sort=id:asc');
        commit('setCategories', categories);
    }
}

export const getters = {
    currentCategory: state => Category.fromRequest(state.currentCategory),
    categories: state => state.categories.map(category => Category.fromRequest(category)),
}