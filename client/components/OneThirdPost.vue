<template>
    <div class="w-full md:w-1/3 md:px-6 py-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <router-link :to="{name: 'category-slug', params: {category: post.category.name, slug: post.slug}}" class="flex flex-wrap no-underline hover:no-underline">
                <img :src="post.getImageUrl('medium')" :alt="post.imageAlt" class="h-64 w-full rounded-t object-cover" loading="lazy">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6 pt-6">{{ post.category.displayName }}</p>
                <div class="w-full font-bold text-xl text-gray-900 px-6">{{ post.title }}</div>
            </router-link>
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div class="flex items-center justify-between">
                <img class="w-8 h-8 rounded-full mr-4 avatar" src="/keitija-krastina.jpg" alt="Keitija Krastina" loading="lazy">
                <p class="text-gray-600 text-xs md:text-sm flex items-center">
                    <span>{{ post.readTime }}</span>
                    <img src="readme-brands.svg" alt="Grāmata" width="20" class="ml-2" loading="lazy">
                </p>
            </div>
        </div>
    </div>
</template>
<script>

import {Post} from '../models/post';

export default {
    name: 'OneThirdPost',
    props: {
        post: {
            type: Post,
            required: true,
        }
    },
}
</script>