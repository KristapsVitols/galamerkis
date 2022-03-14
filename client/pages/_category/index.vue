<template>
    <MainPage/>
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
            link: [
                {rel: 'canonical', href: `https://www.galamerkis.lv/${this.currentCategory.name}`},
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
