<script>
    export default {

        props: [
            'links'
        ],

    }
</script>
<template>
    <div class="album">
        <a :href="links[0].fields.link" target="_blank" class="album-cover" >
            <img src="/images/cover.png" alt="Wired">
        </a>

        <ul class="album-links">
            <li class="album-link" v-for="link in links">
                <a :href="link.fields.link" target="_blank">{{ link.fields.title }}</a>
            </li>
        </ul>


    </div>
</template>
