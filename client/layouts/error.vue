<template>
    <div class="flex flex-col h-screen justify-center">
        <Header height="10vh"/>

        <div class="flex flex-col justify-center items-center grow container px-4 md:px-0 max-w-6xl mx-auto" style="flex-grow: 1">
            <img src="/404-illustration.svg" style="max-width: 500px" class="mb-8"/>
            <p class="mb-2">Esi apmaldījies?</p>
            <router-link to="/" class="text-lg font-medium">Doties uz sākumu lapu</router-link>
        </div>

        <Footer/>
    </div>
</template>

<script>
export default {
    props: ['error'],
}
</script>