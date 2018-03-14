<script>
    export default {

        props: [
            'links'
        ],

    }
</script>
<template>
    <div class="album">
        <img class="album-cover" src="/images/cover.png" alt="WIRED">

        <ul class="album-links">
            <li class="album-link" v-for="link in links">
                <a  :href="link.fields.link">{{ link.fields.title }}</a>
            </li>
        </ul>


    </div>
</template>
