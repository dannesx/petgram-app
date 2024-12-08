import MessageAvatar from "./MessageAvatar"

type Props = {
  username: string
  mine?: boolean
  children: React.ReactNode
}

const Message = ({ username, mine, children }: Props) => {
  return (
    <p
      className="flex gap-3 self-start w-3/4 data-[direction=right]:self-end data-[direction=right]:flex-row-reverse data-[direction=right]:text-right items-center"
      data-direction={mine && "right"}
    >
      <MessageAvatar username={username} />
      <span
        className="bg-muted rounded-lg p-3 data-[color=primary]:bg-primary data-[color=primary]:text-primary-foreground"
        data-color={mine && "primary"}
      >
        {children}
      </span>
    </p>
  )
}
export default Message
