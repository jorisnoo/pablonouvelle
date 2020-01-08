<template>
    <div>
        <ul class="socialLinks">
            <li
                v-for="link in links"
                :key="link.title"
            >
                <a class="socialLinks-link" :href="link.url">{{ link.title }}</a>
            </li>
        </ul>
    </div>
</template>

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
