<template>
    <div>
        <ul>
            <li v-for="link in links">
                <a :href="link.fields.url">{{ link.fields.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

        props: [
            'links'
        ],

        created() {
            console.log(this.links)
        }

    }
</script>
