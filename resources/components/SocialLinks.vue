<template>
    <div>
        <ul class="socialLinks">
            <li v-for="link in links">
                <a class="socialLinks-link" :href="link.fields.url">{{ link.fields.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

        props: [
            'links'
        ]

    }
</script>
