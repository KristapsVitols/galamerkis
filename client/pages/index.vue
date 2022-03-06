<template>
  <MainPage/>
</template>

<script>
import MainPage from '../components/MainPage';
export default {
    name: 'Index',
    components: {MainPage},
    head() {
        return {
            link: [
                {rel: 'canonical', href: 'https://www.galamerkis.lv/'},
            ],
        }
    },
    async asyncData({store}) {
        try {
            await store.dispatch('getHomepageData');
        } catch (e) {
            console.error(e);
        }
    },
}
</script>
