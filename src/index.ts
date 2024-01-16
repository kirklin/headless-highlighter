import type { App } from "vue";
import { VueHighlighter } from "./VueHighlighter";
import type { TextChunk, VueHighlighterProps } from "./VueHighlighter";

function install(app: App, options = { name: "" }) {
  app.component(options.name || "VueHighlighter", VueHighlighter);
}

export default VueHighlighter;
export { install, VueHighlighter, VueHighlighterProps, TextChunk };
