<template>
    <MainPage/>
</template>

<script>
import MainPage from '../../components/MainPage';
export default {
    name: 'Index',
    components: {MainPage},
    async asyncData({store, route}) {
        console.log(route);
        await store.dispatch('getHomepageData', route.params.category);
    }
}
</script>
