<template>
    <div>
        <Header height="25vh"/>
        <div class="container w-full max-w-6xl mx-auto -mt-12 text-base font-medium">
            <router-link :to="{name: 'category', params: {category: post.category.name}}"
                         class="inline-block py-2 px-2 text-gray-800 no-underline hover:text-gray-200">
                {{ post.category.displayName }}
            </router-link>
            <span class="text-gray-800">/</span>
            <router-link :to="{name: 'category-slug', params: {category: post.category.name, slug: post.slug}}"
                         class="inline-block py-2 px-2 text-white no-underline">
                {{ post.title }}
            </router-link>
        </div>
        <ProgressBar :post="post"/>

        <div class="text-center pt-8 md:pt-16">
            <p class="text-sm md:text-base text-teal-500 font-bold">
                {{ new Date(post.created_at).toISOString().split('T')[0] }}
            </p>
            <h1 class="font-bold break-normal text-3xl md:text-5xl">
                {{ post.title }}
            </h1>
        </div>

        <div class="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
             :style="`background-image:url('${getImageUrl(post, 'large')}'); height: 75vh;`">
        </div>

        <div class="container max-w-5xl mx-auto -mt-32">
            <div class="mx-0 sm:mx-6">
                <div class="bg-white w-full p-8 md:p-24 text-xl text-gray-800 leading-normal shadow-md m-5">
                    <div id="content" v-html="post.content" class="font-serif">
                    </div>
                </div>
            </div>
        </div>

        <RelatedPosts v-if="relatedPosts.length" :related-posts="relatedPosts" :get-image-url="getImageUrl" :get-read-time="getReadTime"/>

        <div class="container px-4 md:px-0 max-w-6xl mx-auto">
            <div class="mx-0 sm:mx-6 mb-16 my-24">
                <Subscribe/>
            </div>
        </div>

        <Footer/>
    </div>
</template>
<script>
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/ProgressBar';
import {Post} from '../../models/post';
import RelatedPosts from '../../components/RelatedPosts';

export default {
    components: {RelatedPosts, ProgressBar, Footer, Header},
    head() {
        return {
            title: `${this.post.title} | Galamērķis`,
            meta: [
                {hid: 'description', name: 'description', content: this.post.description},
                // Social sharing tags
                {hid: 'og:title', property: 'og:title', content: `${this.post.title} | Galamērķis`},
                {hid: 'og:type', property: 'og:type', content: 'website'},
                {hid: 'og:site_name', property: 'og:site_name', content: 'Galamērķis'},
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: `https://www.galamerkis.lv/${this.post.category.name}/${this.post.slug}`
                },
                {hid: 'og:description', property: 'og:description', content: this.post.description},
                {hid: 'og:image', name: 'og:image', content: `/content${this.post.image?.url}`},
                {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
                {hid: 'twitter:description', name: 'twitter:description', content: this.post.description},
                {hid: 'twitter:image', name: 'twitter:image', content: `/content${this.post.image?.url}`},
            ],
        }
    },
    data: () => ({
        relatedPosts: [],
    }),
    async asyncData({$axios, route, error}) {
        const [post] = await $axios.$get(`/content/posts?slug=${route.params.slug}&category.name=${route.params.category}`);

        if (!post) {
            return error({statusCode: 404, message: 'Raksts nav atrasts.'});
        }

        const relatedPosts = await $axios.$get(`/content/posts?category.name=${route.params.category}&id_ne=${post.id}&_limit=3`);

        // Super weird bug here. If class is instantiated, it loses it after render and is re-fetching stuff..
        return {post, relatedPosts}
    },
    methods: {
        getReadTime(content) {
            // average read time for a human 225 words per minute
            const wpm = 225;
            const words = content.trim().split(/\s+/).length;
            const minutes = Math.ceil(words / wpm);

            return minutes === 1 ? `${minutes} minūte` : `${minutes} minūtes`;
        },
        getImageUrl(post, imageSize = '') {
            const defaultImage = `/content/${post.image.url}`;
            if (!imageSize) {
                return defaultImage;
            }

            const sizedImage = post.image.formats[imageSize]?.url;

            if (!sizedImage) {
                return defaultImage;
            }

            return `/content/${sizedImage}`;
        },
    }
}
</script>
<style>
#content a {
    color: #11998e;
}
</style>