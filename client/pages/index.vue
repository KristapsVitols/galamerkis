<template>
  <MainPage/>
</template>

<script>
import MainPage from '../components/MainPage';
export default {
    name: 'Index',
    components: {MainPage},
    async asyncData({store}) {
        await store.dispatch('getHomepageData');
    },
}
</script>
