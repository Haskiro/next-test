import Post from "@components/Post";
import { FC } from "react";
import styles from "./PostList.module.scss";
import { PostListProps } from "./PostList.props";

const PostList: FC = () => {
	return (
		<ul className={styles.list}>
			<li className={styles.item}>
				<Post />
			</li>
			<li className={styles.item}>
				<Post />
			</li>
		</ul>
	);
};

export default PostList;
