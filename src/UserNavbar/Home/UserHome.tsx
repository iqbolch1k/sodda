import './UserHome.css'
function UserHome({ email, last_name, first_name }: {
  email: string | undefined,
  last_name: string | undefined,
  first_name: string | undefined
}) {
  return (
    <div className="continer UserHome">
      <div>
        <h1>{last_name}</h1>
        <h1>{first_name}</h1>
        <h1>{email}</h1>
      </div>
    </div>
  )
}

export default UserHome