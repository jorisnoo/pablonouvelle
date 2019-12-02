<script>
    export default {

        props: {
            link: {
                type: String,
                default: () => '',
            },
            name: {
                type: String,
                default: () => '',
            },
            cover: {
                type: String,
                default: () => '',
            },
        },

    }
</script>
<template>
    <div class="album">
        <a :href="link" target="_blank" class="album-cover" >
            <img
                data-sizes="auto"
                :data-lowsrc="'/images/album/' + cover + '?nf_resize=fit&w=120'"
                :data-src="'/images/album/' + cover + '?nf_resize=fit&w=640'"
                :data-srcset="
                '/images/album/' + cover + '?nf_resize=fit&w=960 960w, ' +
                '/images/album/' + cover + '?nf_resize=fit&w=640 640w, ' +
                '/images/album/' + cover + '?nf_resize=fit&w=480 480w, ' +
                '/images/album/' + cover + '?nf_resize=fit&w=320 320w'
                "
                class="lazyload"
                :alt="name"
            />
        </a>

<!--        <ul class="album-links">-->
<!--            <li class="album-link" v-for="link in links">-->
<!--                <a :href="link.fields.link" target="_blank">{{ link.fields.title }}</a>-->
<!--            </li>-->
<!--        </ul>-->

    </div>
</template>
