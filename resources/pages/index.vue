<template>
    <section class="container">
        <div>
            <logo/>

            <h1 class="title">
                {{ name }}
            </h1>

            <h2 class="subtitle">
                {{ description }}
            </h2>

            <ul>
                <li
                    v-for="event in upcomingEvents"
                >
                    {{ event.venue.name }}
                </li>
            </ul>

        </div>
    </section>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import axios from 'axios'
    import moment from 'moment'

    export default {

        data() {
            return {
                name: 'hoi',
                description: 'hoi',
            }
        },

        components: {
            Logo
        },

        methods: {
        },

        computed: {
            upcomingEvents() {
                return this.events.filter(function (event) {
                    return moment(event.datetime).isAfter(moment())
                });
            }
        },

        asyncData(context) {
            return axios.get('https://rest.bandsintown.com/artists/Pablo Nouvelle/events?app_id=pablonouvelle').then(json => {
                let events = json.data;
                events.push({
                    datetime: '2017-10-01T15:43:00',
                    venue: {
                        name: 'test'
                    }
                })
                return { events: json.data }
            })
        }
    }
</script>

