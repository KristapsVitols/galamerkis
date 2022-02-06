<template>
  <MainPage/>
</template>

<script>
import MainPage from '../components/MainPage';
export default {
    name: 'Index',
    components: {MainPage},
    async asyncData({store}) {
        try {
            await store.dispatch('getHomepageData');
        } catch (e) {
            console.error(e);
        }
    },
}
</script>
