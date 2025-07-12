import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
    },
    base: mode === "production" ? "/NMS-Planet-Types/" : "/",
}))
