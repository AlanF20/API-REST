export function FetchData(data) {
  const { user } = data
  console.log(user)
  return (
    <div className="user_container">
      <h1 className="user__first">{user.first_name}</h1>
      <img className="user__img" src={user.avatar} />
      <p className="user__city">{user.address.city}, {user.address.state}</p>
      <p className="user__email">{user.email}</p>
    </div>
  )
}