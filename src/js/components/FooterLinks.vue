
<script>
    export default {

        props: {
            links: {
                type: Array,
                default: () => [],
            },
        }

    }
</script>

<template>
    <div>
        <ul class="footerLinks">
            <li class="footerLinks-entry" v-for="link in links">
                {{ link.title }} <a :href="(link.email) ? 'mailto:' + link.email : link.url" target="_blank" class="footerLinks-link">{{ (link.text) ? link.text : ((link.email) ? link.email : link.url) }}</a>
            </li>
        </ul>
    </div>
</template>
