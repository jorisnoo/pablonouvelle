<template>
    <div class="spotifyLink">
        <h2 class="spotifyLink-title">{{ link.title }}</h2>
        <h3 class="spotifyLink-subtitle">{{ link.subtitle }}</h3>
        <a :href="link.spotifyLink" class="spotifyLink-button" target="_blank">
            <div class="spotifyLink-play">Play</div>
        </a>
        <div v-if="link.iTunesLink" class="spotifyLink-link"><a :href="link.iTunesLink"  target="_blank">Buy on iTunes</a></div>
        <div v-if="link.allMusicLink" class="spotifyLink-link"> <a :href="link.allMusicLink" target="_blank">All music by Pablo Nouvelle</a></div>
    </div>
</template>

<script>
    export default {

        props: [
            'link'
        ]

    }
</script>
