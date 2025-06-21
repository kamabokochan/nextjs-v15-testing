import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Page from "./page";

describe("Page/locationTest handleReload", () => {
	test("Reloadボタンをクリックするとwindow.location.reloadが呼ばれる", async () => {
		const reload = vi.fn();
		vi.stubGlobal("__MOCK__LOCATION__", { reload });
		const screen = render(<Page />);
		const button = screen.getByTestId("button");
		await button.click();
		expect(reload).toHaveBeenCalled();
	});
});
