import { Separator } from "./ui/separator"
import UserSuggestion from "./UserSuggestion"

const Trendings = () => {
  return (
    <div className="border rounded-lg w-full p-5">
      <h2 className="tracking-tight font-medium mb-4">Populares</h2>

      <ol className="list-decimal list-inside space-y-1">
        <li className="text-primary font-medium tracking-wide cursor-pointer">
          #petfriendly
        </li>
        <li className="text-primary font-medium tracking-wide cursor-pointer">
          #lovepets
        </li>
        <li className="text-primary font-medium tracking-wide cursor-pointer">
          #friends
        </li>
        <li className="text-primary font-medium tracking-wide cursor-pointer">
          #dogs
        </li>
        <li className="text-primary font-medium tracking-wide cursor-pointer">
          #cats
        </li>
      </ol>

      <Separator className="my-4" />

      <h2 className="tracking-tight font-medium mb-4">Sugestões para você</h2>
      <ul className="space-y-4">
        <UserSuggestion username="paw_prince" />
        <UserSuggestion username="meowtastic" />
        <UserSuggestion username="bunny_hops" />
      </ul>
    </div>
  )
}
export default Trendings
