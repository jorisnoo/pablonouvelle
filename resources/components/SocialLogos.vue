
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
            <li v-for="link in links">
                <a class="socialLogos-link" :href="link.fields.url">{{ link.fields.title }}</a>
            </li>
        </ul>
    </div>
</template>

