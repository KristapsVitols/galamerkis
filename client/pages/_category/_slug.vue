<template>
    <div>
        {{ post.title }}
        {{ $route.path }}
    </div>
</template>
<script>
export default {
    transition: 'fade',
    async asyncData({$axios, route, error}) {
        const [post] = await $axios.$get(`/content/posts?slug=${route.params.slug}&category.name=${route.params.category}`);

        if (!post) {
            return error({statusCode: 404, message: 'Raksts nav atrasts.'});
        }

        return {
            post,
        }
    },
}
</script>