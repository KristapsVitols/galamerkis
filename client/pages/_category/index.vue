<template>
    <MainPage/>
</template>

<script>
import {mapGetters} from 'vuex';
import MainPage from '../../components/MainPage';
export default {
    name: 'Index',
    head() {
        return {
            title: `${this.currentCategory.title} | Galamērķis`,
            meta: [
                {hid: 'description', name: 'description', content: this.currentCategory.description},
                // Social sharing tags
                {hid: 'og:title', property: 'og:title', content: `${this.currentCategory.title} | Galamērķis`},
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
    async asyncData({store, route}) {
        await store.dispatch('getHomepageData', route.params.category);
    },
    computed: {
        ...mapGetters({
            currentCategory: 'categories/currentCategory',
        }),
    },
}
</script>
