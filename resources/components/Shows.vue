<template>
    <div>
        <ul>
            <li
                v-for="event in upcomingEvents"
            >
                {{ event.venue.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {

        props: [
            'events'
        ],

        created() {
        },

        computed: {
            upcomingEvents() {
                if(!this.events) return []
                return this.events.filter(function (event) {
                    return moment(event.datetime).isAfter(moment())
                });
            }
        },
    }
</script>
