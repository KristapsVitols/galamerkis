<template>
    <div class="flex flex-col h-screen">
        <Header height="25vh"/>

        <div class="container w-full max-w-6xl mx-auto -mt-12 text-base font-medium">
            <router-link to="/"
                         class="inline-block py-2 px-2 text-gray-800 no-underline hover:text-gray-200">
                Sākums
            </router-link>
            <span class="text-gray-800">/</span>
            <router-link to="/par-mums"
                         class="inline-block py-2 px-2 text-white no-underline">
                Par mums
            </router-link>
        </div>

        <div id="content" class="container px-4 md:px-0 max-w-4xl mx-auto my-4 flex items-center" style="flex-grow: 1">
            <div class="mx-0 sm:mx-6 grid grid-cols-2">
                <img src="/keitija-krastina.jpg" class="rounded-full avatar" alt="Keitija Krastina" loading="lazy"/>
                <div>
                <h3 class="text-2xl font-bold mb-6">Keitija Krastiņa</h3>
                <p class="mb-4">
                    Tūrisma bloga “Galamērķis” radītāja un satura veidotāja. Veido saturu arī Latvijas vadošajā tehnoloģiju blogā
                    <a href="https://www.kursors.lv/author/keitija" target="_blank">Kursors.lv</a> un biznesa tehnoloģiju platformā
                    <a href="http://www.bismart.lv" target="_blank">“BiSMART”</a>.
                </p>
                <p>
                    Kaislību pret rakstīšanu un ceļošanu nolēmu apvienot. Šādi radies mans pirmais lielais projekts - tūrisma blogs "Galamērķis". Ceru, ka šis būs labs palīgs ikvienam - gan tiem, kuriem patīk ceļot uz tuviem un tāliem galamērķim, gan tiem, kuriem vienkārši interesē tūrisms.
                </p>
                </div>
            </div>
        </div>
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
<style>
#content a {
    color: #11998e;
}
</style>