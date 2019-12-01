
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
        <ul class="socialLogos">
            <li v-for="link in links" class="socialLogos-entry" :class="'socialLogos-entry--' + link.title.toLowerCase().replace(' ', '')">
                <a class="socialLogos-link" :href="link.url" target="_blank"></a>
            </li>
        </ul>
    </div>
</template>

