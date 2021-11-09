<script>
    // import moment from 'moment';
    // import _ from 'underscore';

    export default {

        // mounted() {
        //     this.$nextTick(() => {
        //         this.fEvents = _.filter(this.events, (event) => { return this.eventIsUpcoming(event); });
        //     });
        // },

        filters: {
            date: function (value) {
                if (!value) return '';
                return value;
                // return moment(value).format('ddd D MMM');
            },
        },

        props: {
            events: {
                type: Array,
                default: () => [],
            },
        },

        // methods: {
        //     eventIsUpcoming(event) {
        //         return moment(event.datetime).endOf('day').isAfter(moment());
        //     }
        // },
        //
        // computed: {
        //     filteredEvents() {
        //         return _.filter(this.events, (event) => { return this.eventIsUpcoming(event); });
        //     }
        // }
    };
</script>
<template>
    <div>
        <ul class="shows">
            <li
                v-for="event in events"
                :key="event.venue.name + event.datetime"
                class="shows-entry"
            >
                <a
                    :href="event.url"
                    class="shows-link"
                    target="_blank"
                >
                    {{ event.datetime | date }} <span class="shows-venue">{{ event.venue.name }}</span> {{ event.venue.city }}
                </a>
            </li>
        </ul>
    </div>
</template>
