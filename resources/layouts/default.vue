<template>
    <div>
        <nuxt/>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Pablo Nouvelle',
                meta: [
                    {charset: 'utf-8'},
                    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                    {hid: 'description', name: 'description', content: '{{ description }}'}
                ],
                link: [
                    {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
                ]
            }
        }
    }
</script>
