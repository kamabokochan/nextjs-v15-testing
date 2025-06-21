import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

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
				plugins: [tsconfigPaths(), react()],
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
