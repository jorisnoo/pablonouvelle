<template>
    <div class="spotifyLink">
        <h2>{{ link.title }}</h2>
    </div>
</template>

<script>
    export default {

        props: [
            'link'
        ],

        created() {
        }

    }
</script>
