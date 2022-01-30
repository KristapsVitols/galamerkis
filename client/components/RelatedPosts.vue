<template>
    <div class="bg-gray-200" id="app">
        <div class="container w-full max-w-6xl mx-auto px-2 pt-12">
            <div class="flex flex-wrap justify-center -mx-2">
                <div v-for="relatedPost in relatedPosts" class="w-full md:w-1/3 px-2 pb-12">
                    <router-link :to="{name: 'category-slug', params: {category: relatedPost.category.name, slug: relatedPost.slug}}" class="block bg-white rounded shadow-md hover:shadow-lg relative smooth">
                            <span class="no-underline hover:no-underline">
                                <img :src="getImageUrl(relatedPost, 'small')" class="h-48 w-full rounded-t shadow"/>
                                <div class="p-6 h-auto ">
                                    <p class="text-gray-600 text-xs md:text-sm">{{ relatedPost.category.displayName }}</p>
                                    <div class="font-bold text-xl text-gray-900">{{ relatedPost.title }}</div>
                                </div>
                                <div class="flex items-center justify-between inset-x-0 bottom-0 p-6">
                                    <img class="w-8 h-8 rounded-full mr-4" src="/keitija-krastina.jpg" alt="Keitija Krastina">
                                    <p class="text-gray-600 text-xs md:text-sm flex items-center">
                                        <span>{{ getReadTime(relatedPost.content) }}</span>
                                        <img src="/readme-brands.svg" alt="Grāmata" width="20" class="ml-2">
                                    </p>
                                </div>
                            </span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RelatedPosts',
    props: {
        relatedPosts: {
            type: Array,
            required: true,
        },
        getReadTime: {
            type: Function,
        },
        getImageUrl: {
            type: Function,
        },
    }
}
</script>