<template>
    <div class="container font-sans rounded text-center mb-24">
        <div v-if="hasSubmitted" class="flex flex-col items-center">
            <h3 class="mb-8 text-2xl md:text-3xl text-gray-800 font-bold">Paldies, ka abonēji!</h3>
            <img style="max-width: 400px;" src="/subscribe-success.svg" alt="" loading="lazy"/>
        </div>
        <template v-else>
            <h2 class="font-bold break-normal text-2xl md:text-3xl">Saņem jaunākos rakstus e-pastā</h2>
            <div class="w-full text-center pt-4">
                <form @submit.prevent="subscribe">
                    <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                        <input v-model="email" @input="error = ''" name="email" type="text" placeholder="tavs@epasts"
                               class="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none">
                        <button :disabled="!canSubmit"
                                type="submit"
                                :class="{'opacity-50': !canSubmit}"
                                class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">
                            Abonēt
                        </button>
                    </div>
                    <p v-if="error" class="text-red-800	font-medium mt-2 mb-0">{{ error }}</p>
                </form>
            </div>
        </template>
    </div>
</template>
<script>
import emailValidator from 'email-validator';

export default {
    name: 'Subscribe',
    data: () => ({
        email: '',
        error: '',
        canSubmit: true,
        hasSubmitted: false,
    }),
    methods: {
        async subscribe() {
            if (!this.canSubmit) {
                return;
            }

            if (!emailValidator.validate(this.email)) {
                this.error = 'Nepareizs e-pasts!';
                return;
            }

            this.canSubmit = false;

            try {
                await this.$axios.$post('/content/subscribe', {email: this.email});
            } catch (e) {
                // ohwell
            }

            this.hasSubmitted = true;
            this.canSubmit = true;
        },
    }
}
</script>