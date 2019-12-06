<template>
    <div class="mountain">
        <img
            data-sizes="auto"
            :data-src="'/images/mountain.png'"
            :data-srcset="
                '/images/mountain.png 1142w, ' +
                '/images/mountain.png?nf_resize=fit&w=960 960w, ' +
                '/images/mountain.png?nf_resize=fit&w=640 640w, ' +
                '/images/mountain.png?nf_resize=fit&w=480 480w, ' +
                '/images/mountain.png?nf_resize=fit&w=320 320w'
                "
            class="lazyload"
        >
    </div>
</template>
