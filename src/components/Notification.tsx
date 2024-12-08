import { Heart, MessageSquare, UserPlus } from "lucide-react"

type Props = {
  username: string
  children: React.ReactNode
  type: "like" | "comment" | "follow"
}

const Notification = ({ username, children, type }: Props) => {
  const iconStyle = "text-muted-foreground h-4 w-4"
  return (
    <div className="w-full border  rounded-lg p-4 flex gap-2 items-center">
      {type === "like" && <Heart className={iconStyle} />}
      {type === "comment" && <MessageSquare className={iconStyle} />}
      {type === "follow" && <UserPlus className={iconStyle} />}
      <div>
        <span className="text-primary font-bold tracking-tight">
          {username}
        </span>{" "}
        {children}
      </div>
      <span className="text-muted-foreground text-xs">12 min</span>
    </div>
  )
}
export default Notification
