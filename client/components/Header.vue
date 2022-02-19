<template>
    <div class="w-full m-0 p-0 bg-cover bg-bottom" :style="`background-image:url('/hero-background.jpg'); height: ${this.height}; max-height:460px;`">
        <div class="container px-4 md:px-0 max-w-6xl mx-auto">
            <div class="text-white flex justify-between pt-6">
                <h1 class="text-2xl font-semibold tracking-wider font-serif antialiased flex items-center">
                    <img src="/mountain-icon.svg" width="35" class="inline-block mr-2" alt="Galamerkis">
                    <router-link to="/">| Galamērķis</router-link>
                </h1>
                <nav class="flex items-center text-lg font-medium">
                    <router-link to="/par-mums" class="mr-4">Par mums</router-link>
                    <a class="inline-block no-underline hover:text-white hover:text-underline" href="https://www.facebook.com/Galamerkis.lv/" target="_blank" rel="noopener">
                        <svg class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        height: {
            type: String,
            required: false,
            default: '35vh',
        }
    }
}
</script>