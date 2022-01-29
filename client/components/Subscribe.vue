<template>
    <div class="container font-sans rounded text-center mb-24">
        <h2 class="font-bold break-normal text-2xl md:text-3xl">Saņem jaunākos rakstus ēpastā</h2>
        <div class="w-full text-center pt-4">
            <form action="#">
                <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                    <input type="email" placeholder="tavs@epasts.com" class="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none">
                    <button type="submit" class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">
                        Abonēt
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Subscribe',
}
</script>