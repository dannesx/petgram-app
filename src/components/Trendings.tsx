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
    </div>
  )
}
export default Trendings
