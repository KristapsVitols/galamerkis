<template>
    <footer class="bg-gray-900">
        <div class="container max-w-6xl mx-auto flex items-center py-6 md:py-8">

            <div class="w-full mx-auto flex flex-col flex-col-reverse md:flex-row items-center">
                <div class="flex w-full md:w-1/3 justify-center md:justify-start text-white font-bold">
                    <router-link to="/" class="text-gray-900 no-underline hover:text-gray-900 hover:no-underline">
                        <span class="text-md text-gray-200">Galamērķis &copy; 2022</span>
                    </router-link>
                </div>
                <div class="flex w-full md:w-1/3 justify-center my-3 md:my-0">
                    <a class="text-white m-0 text-sm" target="_blank" href="https://www.bitflake.lv" rel="noopener">
                        Izstrādāja <span class="font-bold">bitflake</span>
                    </a>
                </div>
                <div class="flex w-full content-center justify-between md:w-1/3 md:justify-end">
                    <nav class="list-reset flex justify-center flex-1 md:flex-none items-center">
                        <router-link to="/par-mums" class="inline-block text-gray-200 no-underline hover:text-gray-200 pr-3">
                            Par mums
                        </router-link>
                        <a class="text-gray-200 inline-block no-underline hover:text-white hover:text-underline" href="https://www.facebook.com/Galamerkis.lv/" target="_blank" rel="noopener" aria-label="Facebook">
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