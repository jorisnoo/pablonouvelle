<script>
    import moment from 'moment'

    export default {

        props: [
            'events'
        ],
//
//        created() {
//            console.log(this.events);
//        },

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
    }
</script>
<template>
    <div>
        <ul class="shows">
            <li
                v-for="event in events"
                class="shows-entry"
                v-if="eventIsUpcoming(event)"
            >
                <a :href="event.url" class="shows-link" target="_blank">
                    {{ event.datetime | date }} <span class="shows-venue">{{ event.venue.name }}</span> {{
                    event.venue.city }}
                </a>
            </li>
        </ul>
    </div>
</template>
