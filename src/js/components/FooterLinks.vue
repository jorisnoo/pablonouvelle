
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
        <ul class="footerLinks">
            <!--            <li class="footerLinks-entry" v-for="link in links">-->
            <!--                {{ link.title }} <a :href="(link.email) ? 'mailto:' + link.email : link.url" target="_blank" class="footerLinks-link">{{ (link.text) ? link.text : ((link.email) ? link.email : link.url) }}</a>-->
            <!--            </li>-->
            <li class="footerLinks-entry">
                Booking
                <a
                    href="mailto:kilian@orangepeel-agency.ch"
                    target="_blank"
                    class="footerLinks-link"
                >kilian@orangepeel-agency.ch</a>
            </li>
            <li class="footerLinks-entry">
                Website By
                <a
                    href="https://www.noordermeer.ch"
                    target="_blank"
                    class="footerLinks-link"
                >Joris Noordermeer (Code)</a>
                <a
                    href="https://rubenfeurer.com"
                    target="_blank"
                    class="footerLinks-link"
                    rel="noopener"
                >Ruben Feurer (Design)</a>
            </li>
            <li class="footerLinks-entry">
                Management <a
                    href="mailto:rene.renner@lmeworldwide.com"
                    target="_blank"
                    class="footerLinks-link"
                >rene.renner@lmeworldwide.com</a>
            </li>
        </ul>
    </div>
</template>
