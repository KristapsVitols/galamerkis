<template>
    <div v-if="currentCategory.name === 'mans-celojums'">
        <Header/>
        <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
            <div class="mx-0 sm:mx-6 mb-16">
                <Categories/>
                <div class="flex h-full bg-white rounded overflow-hidden shadow-lg">
                    <div class="w-full rounded-t p-8 flex flex-col items-center">
                        <img src="/travel-together.svg" loading="lazy" style="max-width: 250px" alt="Ceļo kopā">
                        <p class="font-medium text-xl text-gray-900 mb-0 mt-8 text-center w-full md:w-1/2">
                            Šajā sadaļā varēsi iepazīties ar galamerkis.lv lasītāju un mūsu pašu skaistāko ceļojumu atmiņām stāstos un attēlos.
                        </p>
                    </div>
                </div>
                <hr class="mt-16 mb-24 border-gray-300">
                <Subscribe/>
            </div>
        </div>
        <Footer/>
    </div>
    <MainPage v-else/>
</template>

<script>
import {mapGetters} from 'vuex';
import MainPage from '../../components/MainPage';
import {NotFoundError} from '../../errors/NotFoundError';
export default {
    name: 'Index',
    head() {
        return {
            title: `${this.currentCategory.displayName} | Galamērķis`,
            meta: [
                {hid: 'description', name: 'description', content: this.currentCategory.description},
                // Social sharing tags
                {hid: 'og:title', property: 'og:title', content: `${this.currentCategory.displayName} | Galamērķis`},
                {hid: 'og:type', property: 'og:type', content: 'website'},
                {hid: 'og:site_name', property: 'og:site_name', content: 'Galamērķis'},
                {hid: 'og:url', property: 'og:url', content: `https://www.galamerkis.lv/${this.currentCategory.name}`},
                {hid: 'og:description', property: 'og:description', content: this.currentCategory.description},
                {hid: 'og:image', name: 'og:image', content: `/content${this.currentCategory.image?.url}`},
                {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
                {hid: 'twitter:description', name: 'twitter:description', content: this.currentCategory.description},
                {hid: 'twitter:image', name: 'twitter:image', content: `/content${this.currentCategory.image?.url}`},
            ],
        }
    },
    components: {MainPage},
    async asyncData({store, route, error}) {
        try {
            await store.dispatch('getHomepageData', route.params.category);
        } catch (e) {
            if (e instanceof NotFoundError) {
                return error({statusCode: e.statusCode});
            }
        }
    },
    computed: {
        ...mapGetters({
            currentCategory: 'categories/currentCategory',
        }),
    },
}
</script>
