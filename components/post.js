import Link from "next/link"

const Post = props => (
  <div className="grid grid-cols-118-auto">
    <p className=" text-tertiary">{props.date}</p>
    <Link as={`posts/${props.href}`} href="posts/[slug]">
      <a className="text-secondary">{props.title}</a>
    </Link>
  </div>
)

export default Post
