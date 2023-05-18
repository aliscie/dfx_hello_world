import {defineConfig} from 'vite';
import wasmPack from 'vite-plugin-wasm-pack';
import EnvironmentPlugin from "vite-plugin-environment";


export default defineConfig({
    publicDir: './src/hello_world_frontend/assets',
    server: {
        watch: {
            usePolling: true,
            // path: "./src",
        }
    },
    build: {
        minify: true,
        outDir: "./dist",
        emptyOutDir: true,
        copyPublicDir: true,
    },
    plugins: [
        // wasmPack(["./src/hello_world_frontend/pkg/hello_world_frontend_bg.wasm
        EnvironmentPlugin("all", {prefix: "CANISTER_"}),
        EnvironmentPlugin("all", {prefix: "DFX_"}),
        EnvironmentPlugin({BACKEND_CANISTER_ID: ""}),
    ],
});