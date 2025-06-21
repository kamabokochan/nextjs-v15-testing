import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";
import type { Vite } from "vitest/node";

const mockLocationPlugin: Vite.Plugin = {
	name: "mock-location",
	transform: (code, id) => {
		if (id.includes("/node_modules/")) return;
		return code.replaceAll("window.location", "__MOCK__LOCATION__");
	},
};

export default defineConfig({
	test: {
		projects: [
			{
				plugins: [tsconfigPaths(), react()],
				test: {
					name: "node",
					include: ["src/**/*.node.test.{ts,tsx}"],
					environment: "jsdom",
				},
			},
			{
				plugins: [tsconfigPaths(), react(), mockLocationPlugin],
				test: {
					name: "browser",
					include: ["src/**/*.browser.test.{ts,tsx}"],
					browser: {
						enabled: true,
						provider: "playwright",
						headless: true,
						instances: [{ browser: "chromium" }],
						screenshotFailures: false,
					},
				},
			},
		],
	},
});
