<template>
    <div class="flex flex-col h-screen justify-center">
        <Header height="10vh"/>

        <div class="flex flex-col justify-center items-center grow container px-4 md:px-0 max-w-6xl mx-auto" style="flex-grow: 1">
            <template v-if="error.statusCode === 404">
                <img src="/404-illustration.svg" style="max-width: 500px" class="mb-8" loading="lazy"/>
                <p class="mb-2">Esi apmaldījies?</p>
                <router-link to="/" class="text-lg font-medium">Doties uz sākumu lapu</router-link>
            </template>
            <template v-else>
                <img src="/unexpected-error-illustration.svg" style="max-width: 500px" class="mb-8" loading="lazy"/>
                <p class="mb-2">Kaut kas nogāja greizi...</p>
                <router-link to="/" class="text-lg font-medium">Doties uz sākumu lapu</router-link>
            </template>
        </div>

        <Footer/>
    </div>
</template>

<script>
export default {
    props: ['error'],
}
</script>