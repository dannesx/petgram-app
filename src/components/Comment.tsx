import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import type { ReactNode } from "react"

type Props = {
  username: string
  createdAt: string
  children: ReactNode
}

const Comment = ({ username, createdAt, children }: Props) => {
  return (
    <p className="text-sm">
      <span className="font-bold text-primary">{username}</span> {children}
      <p className="text-xs text-muted-foreground font-light">
        {formatDistanceToNow(createdAt, { addSuffix: true, locale: ptBR })}
      </p>
    </p>
  )
}
export default Comment
