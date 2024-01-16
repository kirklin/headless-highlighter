<template>
  <div class="text-center mx-auto gap-5 max-w-7xl">
    <h1 class="text-2xl font-bold">Headless highlighter</h1>

    <!-- Keywords Input -->
    <div class="mb-4">
      <label for="keywords" class="block text-sm font-medium text-gray-700">Keywords:</label>
      <input
          id="keywords"
          class="border p-2 w-full rounded-md"
          v-model="words"
          type="text"
          placeholder="Enter keywords..."
      />
    </div>

    <!-- Text Input -->
    <div class="mb-4">
      <label for="text" class="block text-sm font-medium text-gray-700">Text:</label>
      <textarea
          id="text"
          class="border p-2 w-full rounded-md"
          v-model="text"
          rows="5"
          placeholder="Enter text..."
      ></textarea>
    </div>

    <!-- Output Section -->
    <div class="output">

      <!-- Default Highlighting -->
      <h3>Output:</h3>
      <h4>Default</h4>
      <Highlighter
          class="wrapper"
          highlight-class-name="highlight"
          highlight-tag="i"
          :search-words="keywords"
          :auto-escape="true"
          :text-to-highlight="text"
          :onWordClick="handleClick"
      />

      <!-- Custom Render with Slot -->
      <h4>Custom Render with Slot</h4>
      <Highlighter
          v-slot="items"
          highlight-class-name="highlight"
          :search-words="keywords"
          :auto-escape="true"
          :text-to-highlight="text"
          custom
      >
        <span>
          <template v-for="{ chunk, text, attrs } in items">
            <StrongProps
                v-if="chunk.highlight"
                v-bind="attrs"
                :key="attrs.key"
            >{{ text }}</StrongProps>
            <template v-else>{{ text }}</template>
          </template>
        </span>
      </Highlighter>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Highlighter, {TextChunk} from "../../../../src";
import StrongProps from "./components/StrongProps.vue";

const text = ref("In the vast cosmos, galaxies swirl and stars illuminate the cosmic tapestry. Perhaps within this celestial dance, unknown wonders are waiting to be discovered.");
const words = ref("galaxies cosmic stars");

// 使用 computed 计算属性获取关键词数组
const keywords = computed(() => {
  return words.value.split(" ");
});
const handleClick = (val:TextChunk) =>{
  console.log(val)
}
</script>

<style>
/* 使用 Tailwind CSS 样式 */
.wrapper {
  margin-top: 10px;
}

.highlight {
  background-color: #bfc;
  padding: 0 2px;
}

/* 添加其他样式，以适应页面的需要 */
</style>
