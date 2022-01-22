<template>
    <nav class="mt-0 w-full">
        <div class="container mx-auto flex items-center">
            <div class="flex w-1/2 pl-4 mb-2">
                <ul class="list-reset flex justify-between flex-1 md:flex-none items-center text-lg">
                    <li class="mr-2">
                        <a class="inline-block py-2 px-2 text-white no-underline"
                           :class="!currentCategory.name ? 'text-white' : 'text-gray-800'"
                           href="javascript:"
                           @click="handleCategoryChange()">
                            Jaunākie
                        </a>
                    </li>
                    <li v-for="category in categories" class="mr-2">
                        <a class="inline-block no-underline hover:text-gray-200 py-2 px-2"
                           :class="currentCategory.name === category.name ? 'text-white' : 'text-gray-800'"
                           href="javascript:" @click="handleCategoryChange(category)">
                            {{ category.displayName }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';

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
            getPostsByCategory: 'posts/getPostsByCategory',
        }),
        ...mapMutations({
            setCurrentCategory: 'categories/setCurrentCategory',
        }),
        handleCategoryChange(category = null) {
            this.setCurrentCategory(category);
            this.getPostsByCategory(category);
        },
    },
}
</script>