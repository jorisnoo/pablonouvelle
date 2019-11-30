<script>
    import moment from 'moment'
    import _ from 'underscore'

    export default {

        data() {
            return {
                fEvents: []
            }
        },

        props: [
            'events'
        ],
//
//        created() {
//            console.log(this.events);
//        },

        mounted() {
            this.$nextTick(() => {
                this.fEvents = _.filter(this.events, (event) => { return this.eventIsUpcoming(event); });
            });
        },

        filters: {
            date: function (value) {
                if (!value) return ''
                return moment(value).format('ddd D MMM')
            }
        },

        methods: {
            eventIsUpcoming(event) {
                return moment(event.datetime).endOf('day').isAfter(moment());
            }
        },

        computed: {
            filteredEvents() {
                return _.filter(this.events, (event) => { return this.eventIsUpcoming(event); });
            }
        }
    }
</script>
<template>
    <div>
        <ul class="shows">
            <li
                v-for="event in fEvents"
                class="shows-entry"
            >
                <a :href="event.url" class="shows-link" target="_blank">
                    {{ event.datetime | date }} <span class="shows-venue">{{ event.venue.name }}</span> {{ event.venue.city }} {{ dater }}
                </a>
            </li>
        </ul>
    </div>
</template>
