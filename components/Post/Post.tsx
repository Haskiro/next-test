import { FC } from "react";
import styles from "./Post.module.scss";
import { PostProps } from "./Post.props";
import PostImage from "@assets/images/post-image.jpeg";
import Image from "next/image";
import UserPhoto from "@assets/images/user-photo.png";
import cn from "classnames";
import Heart from "./icons/heart.svg";
import Chat from "./icons/chat.svg";
import Repost from "./icons/repost.svg";

const Post: FC = () => {
	return (
		<div className={styles.block}>
			<div className={styles.heading}>
				<Image
					src={UserPhoto}
					alt="user-photo"
					width={40}
					height={40}
					className={styles.userPhoto}
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
					className={styles.postImage}
				/>
			</div>
			<div className={styles.footer}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Heart className={cn(styles.icon, styles.iconLiked)} />
						<p
							className={cn(
								styles.text,
								styles.textFooter,
								styles.textFooterLiked
							)}
						>
							25
						</p>
					</li>
					<li className={styles.item}>
						<Chat className={styles.icon} />
						<p className={cn(styles.text, styles.textFooter)}>68</p>
					</li>
					<li className={styles.item}>
						<Repost className={styles.icon} />
						<p className={cn(styles.text, styles.textFooter)}>2</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Post;
