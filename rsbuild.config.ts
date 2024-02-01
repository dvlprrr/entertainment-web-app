import { defineConfig } from "@rsbuild/core"
import { pluginReact } from "@rsbuild/plugin-react"
import { pluginSvgr } from "@rsbuild/plugin-svgr"

export default defineConfig({
  plugins: [pluginReact(), pluginSvgr()],
  html: { title: "Entertainment web app" },
  dev: {
    startUrl: true,
  },
  server: {
    port: 3001,
  },
})
