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
    };
</script>
<template>
    <div class="album">
        <a
            :href="link"
            target="_blank"
            class="album-cover"
        >
            <img
                data-sizes="auto"
                :data-src="cover + '?nf_resize=fit&w=640'"
                :data-srcset="
                    cover + '?nf_resize=fit&w=960 960w, ' +
                        cover + '?nf_resize=fit&w=640 640w, ' +
                        cover + '?nf_resize=fit&w=480 480w, ' +
                        cover + '?nf_resize=fit&w=320 320w'
                "
                class="lazyload"
                :alt="name"
            >
        </a>

        <!--        <ul class="album-links">-->
        <!--            <li class="album-link" v-for="link in links">-->
        <!--                <a :href="link.fields.link" target="_blank">{{ link.fields.title }}</a>-->
        <!--            </li>-->
        <!--        </ul>-->
    </div>
</template>
