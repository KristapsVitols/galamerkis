export const state = () => ({
    isLoading: false,
});

export const mutations = {
    setIsLoading: (state, isLoading) => state.isLoading = isLoading,
}

// Initial data for the main page. Categories, lead post and rest of the posts.
export const actions = {
    async nuxtServerInit({ commit }, { $axios }) {
        try {
            const categories = await $axios.$get('/content/categories');
            commit('categories/setCategories', categories);

            const posts = await $axios.$get('/content/posts?_sort=id:desc');
            const [leadPost, ...allPosts] = posts;

            commit('posts/setLeadPost', leadPost);
            commit('posts/setPosts', allPosts);
        } catch (e) {
            console.error(e);
        }
    },
}

export const getters = {
    isLoading: (state) => state.isLoading,
}