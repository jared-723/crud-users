const UserCard = ({user, deleteUser, handleClickUpdateUser}) => {
    return (
        <article className="bg-white py-2 grid border-[1px] border-solid border-black/10 gap-2">
            <ul className=" grid gap-4 px-4">
                <li className="justify-self-center font-[500]">{user.first_name} {user.last_name}</li>
                <hr />
                <li className="justify-self-start text-sm flex flex-col"><span className="font-[100]">Email</span> {user.email}</li>
                <li className="justify-self-start text-sm flex flex-col"><span className="font-[100]">Birthday</span> {user.birthday}</li>
            </ul>
            <hr />
            <div className="flex justify-end gap-2 pr-4">
                <button onClick={() => deleteUser(user.id)} 
                className="bg-red-500 py-2 px-3 text-white rounded-md"><i class='bx bxs-trash' ></i></button>
                <button onClick={()=> handleClickUpdateUser(user)}
                className="bg-gray-300 border-[1px] border-gray-500 py-2 px-3 text-gray-500 rounded-md"><i class='bx bxs-edit' ></i></button>
            </div>
        </article>
    )
}
export default UserCard