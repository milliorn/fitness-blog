import Link from "next/link";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props): JSX.Element {
  const { id, title, date } = post;
  return <div>ListItem</div>;
}
