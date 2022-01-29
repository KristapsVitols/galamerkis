<template>
    <footer class="bg-gray-900">
        <div class="container max-w-6xl mx-auto flex items-center px-2 py-8">

            <div class="w-full mx-auto flex flex-wrap items-center">
                <div class="flex w-full md:w-1/3 justify-center md:justify-start text-white font-bold">
                    <router-link to="/" class="text-gray-900 no-underline hover:text-gray-900 hover:no-underline">
                        <span class="text-lg text-gray-200">Galamērķis &copy; 2022</span>
                    </router-link>
                </div>
                <div class="flex w-full md:w-1/3 justify-center">
                    <p class="text-white m-0 text-sm">
                        Izstrādāja <a class="font-bold" target="_blank" href="https://www.bitflake.lv">bitflake.lv</a>
                    </p>
                </div>
                <div class="flex w-full content-center justify-between md:w-1/3 md:justify-end">
                    <nav class="list-reset flex justify-center flex-1 md:flex-none items-center">
                        <a class="inline-block text-gray-200 no-underline hover:text-gray-200 py-2 px-3" href="#">Par mums</a>
                        <a class="text-gray-200 inline-block no-underline hover:text-white hover:text-underline" href="https://www.facebook.com/Galamerkis.lv/" target="_blank">
                            <svg class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
}
</script>