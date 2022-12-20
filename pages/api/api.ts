// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { set, ref, child, get, DataSnapshot } from "firebase/database";
import { IUser } from "@interfaces/user.interface";
import { db } from "../../firebase";
import { IPost } from "@interfaces/post.interface";

export const createUser = ({
	userId,
	name,
	email,
	description,
	imageUrl,
}: IUser): void => {
	set(ref(db, "users/" + userId), {
		userId,
		name,
		email,
		description,
		imageUrl,
	});
};

export const createPost = ({
	postId,
	author,
	text,
	likesCount,
	repostsCount,
	commentsCount,
	imageUrl,
}: IPost): void => {
	set(ref(db, "posts/" + postId), {
		postId,
		author,
		text,
		likesCount,
		repostsCount,
		commentsCount,
		imageUrl,
	});
};

export const getItemList = async (table: string) => {
	const dbRef = ref(db);
	let res: (IPost | IUser)[] | null = null;
	try {
		const snapshot: DataSnapshot = (await get(
			child(dbRef, `${table}`)
		)) as DataSnapshot;
		if (!snapshot.exists()) {
			console.log(`No such ${table} exists`);
		} else {
			console.log(Object.values(snapshot.val()));
			res = Object.values(snapshot.val());
			return res;
		}
	} catch (err) {
		console.error(err);
	}

	return res;
};

export const getItemById = (table: string, itemId: string) => {
	const dbRef = ref(db);
	let res: IPost | IUser | undefined;
	get(child(dbRef, `${table}s/${itemId}`))
		.then((snapshot) => {
			if (!snapshot.exists()) console.log(`No such ${table} exists`);
			res = snapshot.val();
		})
		.catch((error) => {
			console.error(error);
		});
	return res;
};
