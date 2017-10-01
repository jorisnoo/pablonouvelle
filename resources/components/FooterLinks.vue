<template>
    <div>
        <ul class="footerLinks">
            <li class="footerLinks-entry" v-for="link in links">
                {{ link.fields.title }} <a :href="(link.fields.email) ? 'mailto:' + link.fields.email : link.fields.url" target="_blank" class="footerLinks-link">{{ (link.fields.linkText) ? link.fields.linkText : ((link.fields.email) ? link.fields.email : link.fields.url) }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

        props: [
            'links'
        ],

    }
</script>
