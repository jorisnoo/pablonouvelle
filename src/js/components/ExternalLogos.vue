<script>
    export default {
        props: {
            links: {
                type: Array,
                default: () => [],
            },
        },
    };
</script>

<template>
    <div>
        <ul class="externalLogos">
            <li
                v-for="link in links"
                :key="link.title.toLowerCase().replace(' ', '')"
                class="externalLogos-entry"
                :class="'externalLogos-entry--' + link.title.toLowerCase().replace(' ', '')"
            >
                <a
                    class="externalLogos-link"
                    :href="link.url"
                    target="_blank"
                    rel="noopener"
                />
            </li>
        </ul>
    </div>
</template>


