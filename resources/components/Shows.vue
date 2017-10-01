<template>
    <div>
        <ul class="shows">
            <li
                v-for="event in upcomingEvents"
                class="shows-entry"
            >
                <a :href="event.url" class="shows-link">
                    {{ event.datetime | date }} <span class="shows-venue">{{ event.venue.name }}</span> {{ event.venue.city }}
                </a>
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

        filters: {
            date: function (value) {
                if (!value) return ''
                return moment(value).format('ddd D MMM')
            }
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
