import { UserInfo } from "@/types/data";

export async function getUserInfo(): Promise<UserInfo[]> {
	return [
		{
			id: 1,
			name: "user01",
		},
		{
			id: 2,
			name: "user02",
		},
	];
}
