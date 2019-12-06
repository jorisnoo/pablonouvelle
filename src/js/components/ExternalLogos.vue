
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
        <ul class="externalLogos">
            <li
                v-for="link in links"
                class="externalLogos-entry"
                :class="'externalLogos-entry--' + link.title.toLowerCase().replace(' ', '')"
            >
                <a
                    class="externalLogos-link"
                    :href="link.url"
                    target="_blank"
                    rel="noopener"
                ></a>
            </li>
        </ul>
    </div>
</template>

