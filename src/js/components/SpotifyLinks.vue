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
    <div class="spotifyLinks">
        <div
            v-for="link in links"
            :key="link.title"
            class="spotifyLinks-item"
        >
            <h2 class="spotifyLinks-title">
                {{ link.title }}
            </h2>
            <h3 class="spotifyLinks-subtitle">
                {{ link.subtitle }}
            </h3>
            <a
                :href="link.spotify_link"
                class="spotifyLinks-button"
                target="_blank"
            >
                <div class="spotifyLinks-play">Play</div>
            </a>
            <div v-if="link.itunes_link" class="spotifyLinks-link">
                <a :href="link.itunes_link" target="_blank">Buy on iTunes</a>
            </div>
            <div v-if="link.all_music_link" class="spotifyLinks-link">
                <a :href="link.all_music_link" target="_blank">All music by Pablo Nouvelle</a>
            </div>
        </div>
    </div>
</template>
