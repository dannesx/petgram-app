import { Avatar, AvatarFallback } from "../ui/avatar"

type Props = {
  username: string
}

const MessageAvatar = ({ username }: Props) => {
  return (
    <Avatar className="h-9 w-9">
      <AvatarFallback className="bg-primary text-primary-foreground select-none text-sm">
        {username.slice(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  )
}
export default MessageAvatar
