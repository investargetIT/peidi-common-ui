<script setup lang="ts">
import Introduction from "../../../utils/introduction.vue";
import introMarkdown from "./intro.md?raw";
</script>

<template>
  <div>
    <Introduction :markdownContent="introMarkdown" />
  </div>
</template>
