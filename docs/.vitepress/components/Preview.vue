<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const props = defineProps(["height"]);
const slotRef = ref();
const iframeRef = ref();
const content = ref("");

function onMessage(e) {
    if (e.data?.iframeHeight && iframeRef.value) {
        iframeRef.value.style.height = e.data.iframeHeight + "px";
    }
}

onMounted(() => {
    window.addEventListener("message", onMessage);
});
onBeforeUnmount(() => {
    window.removeEventListener("message", onMessage);
});

watch(
    () => slotRef.value?.innerHTML,
    (html) => {
        content.value = `
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Termeh Demo</title>
                    <link rel="stylesheet" href="/assets/termeh.css" />
                    <script>
                        function resizeIframe() {
                            const height = document.documentElement.scrollHeight;
                            window.parent.postMessage({ iframeHeight: height }, "*");
                        }

                        window.addEventListener("load", () => {
                            resizeIframe();
                            window.addEventListener("resize", resizeIframe);
                            if (document.body) {
                                new MutationObserver(resizeIframe).observe(document.body, {
                                    childList: true,
                                    subtree: true
                                });
                            }
                        });
                    <\/script>
                </head>
                <body>${html}</body>
            </html>`;
    },
    { immediate: true }
);
</script>

<template>
    <div class="demo-container">
        <div style="display: none" ref="slotRef"><slot /></div>
        <iframe
            ref="iframeRef"
            :srcdoc="content"
            class="responsive-iframe"
            frameborder="0"
            sandbox="allow-same-origin allow-scripts"
            :style="{ width: '100%', border: 0, height: height || 'unset' }"
        ></iframe>
    </div>
</template>

<style lang="scss" scoped>
.demo-container {
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 1rem;

    .responsive-iframe {
        width: 100%;
        min-height: 0;
        overflow: visible;
    }
}
</style>
