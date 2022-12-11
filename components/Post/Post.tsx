import { FC } from "react";
import styles from "./Post.module.scss";
import { PostProps } from "./Post.props";
import PostImage from "../../assets/images/post-image.jpeg";
import Image from "next/image";
import UserPhoto from "../../assets/images/user-photo.png";
import cn from "classnames";

const Post: FC = () => {
	return (
		<div className={styles.block}>
			<div className={styles.heading}>
				<Image
					src={UserPhoto}
					alt="user-photo"
					width={40}
					height={40}
				/>
				<div className={styles.userInfo}>
					<p className={cn(styles.text, styles.textName)}>
						Robert Phan
					</p>
					<p className={cn(styles.text, styles.textSubtitle)}>
						Designer
					</p>
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>This so amazing</p>
				<Image
					src={PostImage}
					alt="post image"
					width={327}
					height={204}
				/>
			</div>
			<div className={styles.footer}></div>
		</div>
	);
};

export default Post;
