import MessageAvatar from "./MessageAvatar"

type Props = {
  username: string
}

const MessageAccount = ({ username }: Props) => {
  return (
    <div className="flex border-b w-full h-14 items-center p-4 gap-2 cursor-pointer">
      <MessageAvatar username={username} />
      <span className="font-medium tracking-tight">{username}</span>
    </div>
  )
}
export default MessageAccount
