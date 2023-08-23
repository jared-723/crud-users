import UserCard from "./UserCard"

const Userslist = ({users, deleteUser, handleClickUpdateUser}) => {
    return (
        <section className="grid grid-cols-[repeat(auto-fill,_minmax(250px,1fr))] ml-0 mr-0 mx-auto pt-4 gap-6 px-4">
            {
                users.map((user)=> <UserCard key={user.id} user={user} deleteUser={deleteUser} handleClickUpdateUser={handleClickUpdateUser}/>)
            }
        </section>
    )
}
export default Userslist