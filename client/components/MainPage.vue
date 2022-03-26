<template>
    <div>
        <Header/>

        <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
            <div class="mx-0 sm:mx-6 mb-16">
                <Categories/>
                <Posts/>
                <hr class="my-12 md:my-24 border-gray-300">
                <Subscribe/>
            </div>
        </div>

        <Footer/>
    </div>
</template>
<script>
export default {
    name: 'MainPage',
}
</script>