<template>
    <div>
        <Header/>
        <ProgressBar/>

        <div class="text-center pt-8 md:pt-32">
            <p class="text-sm md:text-base text-teal-500 font-bold">
                - {{ new Date(post.created_at).toISOString().split('T')[0] }} -
            </p>
            <h1 class="font-bold break-normal text-3xl md:text-5xl">
                {{ post.title }}
            </h1>
        </div>

        <div class="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
             :style="`background-image:url('/content/${post.image.url}'); height: 75vh;`">
        </div>

        <div class="container max-w-5xl mx-auto -mt-32">
            <div class="mx-0 sm:mx-6">
                <div class="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal shadow-md m-5">
                    <div class="font-serif">
                        {{ post.content }}
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-200" id="app">

            <div class="container w-full max-w-6xl mx-auto px-2 py-8">
                <div class=" flex flex-wrap -mx-2">
                    <div v-for="item in content" class="w-full md:w-1/3 px-2 pb-12">
                        <div  class=" bg-white rounded shadow-md hover:shadow-lg relative smooth">
						<span class="no-underline hover:no-underline">

              <template>
  <img :src=`https://source.unsplash.com/${item.unsplash}` class="h-48 w-full rounded-t shadow"/>
</template>

								<div class="p-6 h-auto " >
									<p class="text-gray-600 text-xs md:text-sm">{{item.category}}</p>
									<div class="font-bold text-xl text-gray-900">{{item.title}}</div>
									<p class="text-gray-800 font-serif text-base mb-5">
										{{item.article}}
									</p>
								</div>
								<div class="flex items-center justify-between inset-x-0 bottom-0 p-6">
									<img class="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar">
									<p class="text-gray-600 text-xs md:text-sm">{{item.min}} MIN READ</p>
								</div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/ProgressBar';
import {Post} from '../../models/post';
export default {
    components: {ProgressBar, Footer, Header},
    data: () => ({
        content: [{
            unsplash: "KqZ0rBcCYYg",
            category: "cosmos",
            title: "In city of millions",
            article: "A writer is an eerie plastic. Cold drip coffee the storm, street art naked for satan chopper read werribee wildlife richmond tigers, rooftop bars victory vs heart neatly trimmed moustaches warehouse chic aami park, dandenong rooftop cinema melb brunswick and brunswick st richmond tigers, graffiti trams don't paint over the banksy's.",
            min: 2.2
        }, {
            unsplash: "WxM465oM4j4",
            category: "asterisk",
            title: "Salamander",
            article: "Another world Vangelis network of wormholes laws of physics prime number descended from astronomers. Not a sunrise but a galaxyrise decipherment Drake Equation star stuff harvesting star light cosmic ocean ship of the imagination. Venture dream of the mind's eye inconspicuous motes of rock and gas great turbulent clouds cosmic ocean from which we spring? Dream of the mind's eye dream of the mind's eye gathered by gravity citizens of distant epochs as a patch of light are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
            min: 4.42
        }, {
            unsplash: "sF8j0Acen78",
            category: "raquo",
            title: "Cosmos",
            article: "Another world Vangelis network of wormholes laws of physics prime number descended from astronomers. Not a sunrise but a galaxyrise decipherment Drake Equation star stuff harvesting star light cosmic ocean ship of the imagination. Venture dream of the mind's eye inconspicuous motes of rock and gas great turbulent clouds cosmic ocean from which we spring? Dream of the mind's eye dream of the mind's eye gathered by gravity citizens of distant epochs as a patch of light are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions..",
            min: 4.42
        },

            { unsplash: "DEa8_vxKlEo/400x200",
                category: "ampersand",
                title: "Lorem forest",
                article: "Another world Vangelis network of wormholes laws of physics prime number descended from astronomers. Not a sunrise but a galaxyrise decipherment Drake Equation star stuff harvesting star light cosmic ocean ship of the imagination. Venture dream of the mind's eye inconspicuous motes of rock and gas great turbulent clouds cosmic ocean from which we spring? Dream of the mind's eye dream of the mind's eye gathered by gravity citizens of distant epochs as a patch of light are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
                min: 4.34
            },

            {
                unsplash: "IsK3BeLHobg",

                category: "ipsum",
                title: "Caisia Echo",
                article: "Another world Vangelis network of wormholes laws of physics prime number descended from astronomers. Not a sunrise but a galaxyrise decipherment Drake Equation star stuff harvesting star light cosmic ocean ship of the imagination. Venture dream of the mind's eye inconspicuous motes of rock and gas great turbulent clouds cosmic ocean from which we spring? Dream of the mind's eye dream of the mind's eye gathered by gravity citizens of distant epochs as a patch of light are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions. ",
                min: 4.47
            },

            {
                unsplash: "XA0v5hbb7HY",
                category: "laquo",
                title: "Quasia Echo",
                article: "Another world Vangelis network of wormholes laws of physics prime number descended from astronomers. Not a sunrise but a galaxyrise decipherment Drake Equation star stuff harvesting star light cosmic ocean ship of the imagination. Venture dream of the mind's eye inconspicuous motes of rock and gas great turbulent clouds cosmic ocean from which we spring? Dream of the mind's eye dream of the mind's eye gathered by gravity citizens of distant epochs as a patch of light are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.﻿",
                min: 4.42
            }]
    }),
    async asyncData({$axios, route, error}) {
        const [post] = await $axios.$get(`/content/posts?slug=${route.params.slug}&category.name=${route.params.category}`);

        if (!post) {
            return error({statusCode: 404, message: 'Raksts nav atrasts.'});
        }

        // Super weird bug here. If class is instantiated, it loses it after render and is re-fetching stuff..
        return {post}
    },
}
</script>