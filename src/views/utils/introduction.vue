<script setup lang="ts">
import MarkdownIt from "markdown-it";
//@ts-ignore
import "github-markdown-css";

const props = defineProps({
  markdownContent: {
    type: String,
    default: "",
  },
});
const md = new MarkdownIt();
const renderedHtml = md.render(props.markdownContent);
</script>

<template>
  <div v-html="renderedHtml" class="markdown-body"></div>
</template>
