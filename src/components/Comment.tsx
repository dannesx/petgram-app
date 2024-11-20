import type { ReactNode } from "react"

type Props = {
  username: string
  children: ReactNode
}

const Comment = ({ username, children }: Props) => {
  return (
    <p className="text-sm">
      <span className="font-bold text-primary">{username}</span> {children}
      <p className="text-xs text-muted-foreground font-light">30 min</p>
    </p>
  )
}
export default Comment
