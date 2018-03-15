
<script>
    export default {

        props: [
            'links'
        ]

    }
</script>
<template>
    <div>
        <ul class="socialLogos">
            <li v-for="link in links" class="socialLogos-entry" :class="'socialLogos-entry--' + link.fields.title.toLowerCase()">
                    <a class="socialLogos-link" :href="link.fields.url" target="_blank"></a>
            </li>
        </ul>
    </div>
</template>

