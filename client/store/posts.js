import {Post} from '../models/post';

export const state = () => ({
    leadPost: null,
    posts: [],
})

export const mutations = {
    setLeadPost(state, leadPost) {
        state.leadPost = leadPost;
    },
    setPosts(state, posts) {
        state.posts = posts;
    },
}

export const actions = {
    async getPosts({ commit, state}, category = null) {
        const url = category
            ? `/content/posts?category.name=${category.name}&_sort=id:desc`
            : `/content/posts?_sort=id:desc`;

        commit('categories/setCurrentCategory', category, {root: true});
        commit('setIsLoading', true, {root: true});

        const posts = await this.$axios.$get(url);

        const [leadPost, ...allPosts] = posts;

        commit('setLeadPost', leadPost);
        commit('setPosts', allPosts);
        commit('setIsLoading', false, {root: true});
    }
}

export const getters = {
    posts: state => state.posts.map(post => Post.fromRequest(post)),
    leadPost: state => Post.fromRequest(state.leadPost),
}