

<script>
    export default {

        props: [
            'links'
        ]

    }
</script>

<template>
    <div class="spotifyLinks" >
        <div v-for="link in links" class="spotifyLinks-item">
            <h2 class="spotifyLinks-title">{{ link.fields.title }}</h2>
            <h3 class="spotifyLinks-subtitle">{{ link.fields.subtitle }}</h3>
            <a :href="link.fields.spotifyLink" class="spotifyLinks-button" target="_blank">
                <div class="spotifyLinks-play">Play</div>
            </a>
            <div v-if="link.fields.iTunesLink" class="spotifyLinks-link"><a :href="link.fields.iTunesLink"  target="_blank">Buy on iTunes</a></div>
            <div v-if="link.fields.allMusicLink" class="spotifyLinks-link"> <a :href="link.fields.allMusicLink" target="_blank">All music by Pablo Nouvelle</a></div>
        </div>
    </div>
</template>
