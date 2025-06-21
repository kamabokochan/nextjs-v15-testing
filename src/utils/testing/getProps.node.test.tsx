import { describe, expect, test } from "vitest";
import { getProps } from "./getProps";

function Single() {
	return (
		<div id="hoge">
			<p className="fuga-hoge">fuga-hoge</p>
		</div>
	);
}

describe("単一要素のケース", () => {
	test("ルート要素のpropsを取得", () => {
		const el = Single();
		const result = getProps(el, "div").id;
		expect(result).toBe("hoge");
	});

	test("子要素のpropsを取得", () => {
		const el = Single();
		const result = getProps(el, "p").className;
		expect(result).toBe("fuga-hoge");
	});
});

function Multiple() {
	return (
		<div id="hoge">
			<p className="fuga-hoge">fuga-hoge</p>
			<h1 className="title">タイトル</h1>
			<a href="#">
				<span id="link-text">リンク</span>
			</a>
		</div>
	);
}

describe("兄弟要素のケース", () => {
	test("兄弟要素のpropsを取得", () => {
		const el = Multiple();
		const result = getProps(el, "h1").className;
		expect(result).toBe("title");
	});
	test("兄弟要素配下の孫要素のpropsを取得", () => {
		const el = Multiple();
		const result = getProps(el, "span").id;
		expect(result).toBe("link-text");
	});
});

function Profile({ name, age }: { name: string; age: number }) {
	return (
		<>
			<p>{name}</p>
			<p>{age}</p>
		</>
	);
}

function UserList() {
	return (
		<ul>
			<li>ユーザー1</li>
			<li>ユーザー2</li>
			<li>ユーザー3</li>
		</ul>
	);
}
function Custom() {
	return (
		<>
			<Profile name="太郎" age={10} />
			<Profile name="花子" age={7} />
			<UserList />
		</>
	);
}

describe("カスタムコンポーネントのケース", () => {
	test("同じコンポーネントが並列している場合は、最初の要素のpropsを取得", () => {
		const el = Custom();
		const result = getProps(el, Profile);
		expect(result).toEqual({ name: "太郎", age: 10 });
	});
	test("propsがない要素は空オブジェクトが返る", () => {
		const el = Custom();
		const result = getProps(el, UserList);
		expect(result).toEqual({});
	});
});
