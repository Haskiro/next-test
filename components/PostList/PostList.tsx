import Post from "@components/Post";
import { IPost } from "@interfaces/post.interface";
import { FC } from "react";
import styles from "./PostList.module.scss";

const PostList: FC<{ posts: IPost[] }> = ({ posts }) => {
	return (
		<ul className={styles.list}>
			{posts
				? posts.map((post) => (
						<li key={post.postId} className={styles.item}>
							<Post {...post} />
						</li>
				  ))
				: null}
		</ul>
	);
};

export default PostList;
