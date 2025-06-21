import type { ComponentProps, JSX, JSXElementConstructor } from "react";

function isElement(prop: unknown): prop is JSX.Element {
	if (
		typeof prop !== "object" ||
		prop == undefined ||
		!Object.hasOwn(prop, "$$typeof")
	) {
		return false;
	}
	if (
		"type" in prop &&
		Object.hasOwn(prop, "type") &&
		(typeof prop.type === "function" ||
			typeof prop.type === "string" ||
			typeof prop.type === "symbol")
	) {
		return true;
	}
	return false;
}

function flattenChildren(children: unknown): JSX.Element[] {
	if (!children) {
		return [];
	}
	const elements: JSX.Element[] = [];

	const exploreChild = (child: unknown) => {
		if (isElement(child)) {
			elements.push(child);
			Object.values(child.props).forEach(exploreChild); // 再帰的に子を探索
		} else if (Array.isArray(child)) {
			child.forEach(exploreChild);
		}
	};
	exploreChild(children);
	return elements;
}

export function getProps<
	T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
>(
	element: JSX.Element,
	componentType: Function | string,
): ComponentProps<T> | undefined {
	// 渡されたelement.typeが一致する場合は、そのpropsを返す
	if (element.type === componentType) {
		return element.props;
	}
	// 兄弟を含む子要素を一次元配列にする
	const children = flattenChildren(element.props.children);
	const foundProps = children.find((child) => {
		if (child.type === componentType) {
			return child;
		}
	});

	return foundProps?.props;
}
