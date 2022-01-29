export const state = () => ({
    isLoading: false,
});

export const mutations = {
    setIsLoading: (state, isLoading) => state.isLoading = isLoading,
}

// Initial data for the main page. Categories, lead post and rest of the posts.
export const actions = {
    async getHomepageData({getters, dispatch}, categorySlug = null) {
        try {
            await dispatch('categories/getCategories');
            const category = getters['categories/categories'].find(category => category.name === categorySlug);
            await dispatch('posts/getPosts', category);
        } catch (e) {
            console.error(e);
        }
    },
}

export const getters = {
    isLoading: (state) => state.isLoading,
}