<template>
    <nav class="mt-0 w-full">
        <div class="container mx-auto flex items-center">
            <div class="flex w-1/2 pl-4 mb-2">
                <ul class="list-reset flex justify-between flex-1 md:flex-none items-center text-base font-medium">
                    <li class="mr-2">
                        <router-link class="inline-block py-2 px-2 text-white hover:text-gray-200 no-underline"
                           :class="!currentCategory.name ? 'text-white' : 'text-gray-800'"
                           to="/">
                            Jaunākie
                        </router-link>
                    </li>
                    <li v-for="category in categories" class="mr-2">
                        <router-link class="inline-block no-underline hover:text-gray-200 py-2 px-2"
                           :class="[currentCategory.name === category.name ? 'text-white' : 'text-gray-800', category.name === 'mans-celojums' ? 'hidden sm:block' : '']"
                           :to="{name: 'category', params: {category: category.name}}">
                            {{ category.displayName }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'Categories',
    computed: {
        ...mapGetters({
            categories: 'categories/categories',
            currentCategory: 'categories/currentCategory',
        })
    },
    methods: {
        ...mapActions({
            getPosts: 'posts/getPosts',
        }),
    },
}
</script>