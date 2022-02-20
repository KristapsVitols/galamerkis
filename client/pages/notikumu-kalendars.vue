<template>
    <div class="flex flex-col h-screen">
        <Header height="25vh"/>

        <div class="container w-full max-w-6xl mx-auto -mt-12 text-base font-medium">
            <router-link to="/"
                         class="inline-block py-2 px-2 text-gray-800 no-underline hover:text-gray-200">
                Sākums
            </router-link>
            <span class="text-gray-800">/</span>
            <router-link to="/notikumu-kalendars"
                         class="inline-block py-2 px-2 text-white no-underline">
                Notikumu kalendārs
            </router-link>
        </div>

        <p class="my-8">Notikumu kalendārs</p>
        <Footer/>
    </div>
</template>
<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
    components: {Footer, Header}
}
</script>