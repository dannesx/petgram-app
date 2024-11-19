import { Avatar, AvatarFallback } from "./ui/avatar"
import { Plus } from "lucide-react"
import { Button } from "./ui/button"

type Props = {
  username: string
}

const UserSuggestion = ({ username }: Props) => {
  return (
    <li className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Avatar className="h-8 w-8 text-xs">
          <AvatarFallback className="bg-primary">
            {username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="font-medium text-sm">{username}</span>
      </div>

      <Button size="xs">
        <Plus className="h-3 w-3" />
        Seguir
      </Button>
    </li>
  )
}
export default UserSuggestion
