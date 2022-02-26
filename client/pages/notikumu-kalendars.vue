<template>
    <div>
        <Header height="25vh"/>

        <div class="container w-full max-w-6xl mx-auto">
            <div class="-mt-12 text-base font-medium">
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

            <div class="my-16">
                <div v-if="isLoading" class="flex justify-center">
                    <img src="/calendar-illustration.svg" alt="Kalendārs" style="max-width: 400px;">
                </div>
                <client-only>
                    <div v-if="!isLoading" class="grid grid-cols-4 gap-6 flex items-stretch content-center font-serif">
                        <date-picker
                            v-for="month in 12"
                            :value="new Date(new Date().getFullYear(), month - 1, new Date().getDate())"
                            :calendar-class="['shadow-lg p-2 rounded h-full w-full', {'active': isCurrentMonth(month)}]"
                            :highlighted="getHighlightedDates()"
                            @selected="showEventDetails"
                            maximum-view="day"
                            inline
                            :language="lv"
                            full-month-name
                        />
                    </div>
                </client-only>
            </div>
        </div>

        <div v-if="showModal && selectedEvents.length" class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-25"
             @click="closeModal">
            <!-- modal -->
            <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3">
                <div class="border-b px-4 py-2 flex justify-between items-center">
                    <h3 class="font-semibold text-lg">Notikumi {{ selectedEvents[0].eventDate }}</h3>
                    <button @click="closeModal" class="text-black close-modal">&cross;</button>
                </div>
                <div v-for="selectedEvent in selectedEvents">
                    <div class="p-3" v-html="selectedEvent.content"></div>
                    <div class="flex justify-end items-center w-100 border-t p-3">
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import {lv} from 'vuejs-datepicker/dist/locale';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
    components: {Footer, Header},
    data: () => ({
        lv,
        isLoading: true,
        events: [],
        showModal: false,
        selectedEvents: [],
    }),
    mounted() {
        this.getEvents();
    },
    methods: {
        isCurrentMonth(month) {
            return month - 1 === new Date().getMonth();
        },
        async getEvents() {
            this.isLoading = true;
            this.events = await this.$axios.$get('/content/events');
            this.isLoading = false;
        },
        getHighlightedDates() {
            return {
                dates: this.events.map(event => new Date(event.eventDate)),
            }
        },
        showEventDetails(date) {
            const events = this.events.filter(event =>
                new Date(event.eventDate).getDate() === date.getDate()
                && new Date(event.eventDate).getMonth() === date.getMonth());

            // Event not found
            if (!events.length) {
                return;
            }

            // Event found, lets render something here.
            this.selectedEvents = events;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.selectedEvents = [];
        }
    },
}
</script>
<style>
.next, .prev {
    opacity: 0;
    pointer-events: none;
}
.selected {
    background: none !important;
    border: 1px solid transparent !important;
}

.active .selected {
    background: #11998e !important;
    border: 1px solid #11998e !important;
}

.vdp-datepicker__calendar {
    border: none !important;
    width: 100% !important;
}
</style>