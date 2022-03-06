<template>
    <div class="header-background w-full m-0 p-0 bg-cover bg-bottom" :style="`height: ${this.height}; max-height:460px;`">
        <div class="container px-4 md:px-0 max-w-6xl mx-auto">
            <div class="text-white flex justify-between pt-6">
                <h1 class="text-2xl font-semibold tracking-wider font-serif antialiased flex items-center">
                    <img src="/mountain-icon.svg" width="35" class="inline-block mr-2" alt="Galamerkis" loading="lazy">
                    <router-link to="/">| Galamērķis</router-link>
                </h1>
                <nav class="flex items-center text-md font-medium">
                    <router-link to="/notikumu-kalendars" class="mr-4">Notikumu kalendārs</router-link>
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
<style>
.header-background {
    background: #11998e;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #15ba88, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #15ba88, #11998e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>