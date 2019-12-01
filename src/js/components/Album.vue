<script>
    export default {

        props: {
            link: {
                type: String,
                default: '',
            },
            name: {
                type: String,
                default: '',
            },
            cover: {
                type: String,
                default: '',
            },
        },

        data() {
            return {
            }
        },


    }
</script>
<template>
    <div class="album">
<!--        TODO: use lazysizes -->
        <a :href="link" target="_blank" class="album-cover" >
            <img :src="'./images/album/' + cover" :alt="name">
        </a>

<!--        <ul class="album-links">-->
<!--            <li class="album-link" v-for="link in links">-->
<!--                <a :href="link.fields.link" target="_blank">{{ link.fields.title }}</a>-->
<!--            </li>-->
<!--        </ul>-->

    </div>
</template>
