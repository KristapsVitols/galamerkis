<template>
    <div class="w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
        <LeadPost v-if="post.title" :post="post"/>
        <div class="flex flex-wrap justify-between pt-12 md:-mx-6">
            <template v-if="!isLoading && posts.length">
                <component v-if="posts[index]" :is="postComponent" :post="posts[index]" :key="Math.random()" v-for="(postComponent, index) in componentMap"/>
            </template>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
    name: 'Posts',
    data() {
        return {
            componentMap: [
                'OneThirdPost',
                'OneThirdPost',
                'OneThirdPost',
                'OneHalfPost',
                'OneHalfPost',
                'TwoThirdsPost',
                'OneThirdPost',
            ],
        }
    },
    computed: {
        ...mapGetters({
            post: 'posts/leadPost',
            posts: 'posts/posts',
            isLoading: 'isLoading',
        }),
    },
}
</script>