<script setup lang="ts">
import { ref } from "vue";
import Introduction from "../../../utils/introduction.vue";
import introMarkdown from "./intro.md?raw";

const channelDistributionCards = ref({
  name: "channelDistributionCards",
  title: "客户渠道占比（客户数量）",
  text: "",
  option: {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
    },
    series: [
      {
        type: "pie",
        radius: ["35%", "60%"],
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          formatter: "{b|{b}}\n{c} ({d}%)",
          fontSize: 12,
          rich: {
            b: {
              fontWeight: "bold",
            },
          },
        },
        labelLine: {
          smooth: true,
          minTurnAngle: 90,
          length: 55, // 增加第一段线长度，让引导线垂直延伸更远
          length2: 30, // 增加第二段线长度，控制弯曲后的水平距离
          lineStyle: {
            width: 1,
            type: "solid",
          },
        },
      },
    ],
  },
  style: {
    width: "100%",
    borderRadius: "10px",
  },
});
</script>

<template>
  <div>
    <h1>pd-EchartsContainer</h1>
    <pd-EchartsContainer
      :name="channelDistributionCards.name"
      :title="channelDistributionCards.title"
      :text="channelDistributionCards.text"
      :option="channelDistributionCards.option"
      :style="channelDistributionCards?.style"
    />
    <el-divider />
    <Introduction :markdownContent="introMarkdown" />
  </div>
</template>
