import { describe, expect, test } from "vitest";
import { getProps } from "./getProps";

function Single() {
	return (
		<div id="hoge">
			<p className="fuga-hoge" />
		</div>
	);
}

describe("単一コンポーネントをネストしているケース", () => {
	test("divはhogeというidを持っている", () => {
		const el = Single();
		const result = getProps(el, "div").id;
		expect(result).toBe("hoge");
	});

	test("pはfuga-hogeというclassNameを持っている", () => {
		const el = Single();
		const result = getProps(el, "p").className;
		expect(result).toBe("fuga-hoge");
	});
});
