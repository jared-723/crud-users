
import './App.css'
import UsersForm from './components/UsersForm'
import Userslist from './components/Userslist'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { EMPTY_FORM_VALUES } from './shared/constants';

const BASE_URL = "http://users-crud.academlo.tech/"

function App() {
  const [isShowRegister, setIsShowRegister] = useState(false)
  const [isUserToUpdate, setIsUserToUpdate] = useState(null)
  const [users, setUsers] = useState([])

  const getAllUser = () =>{
  axios
    .get(BASE_URL + "users/")
    .then(({data}) => setUsers(data))
    .catch((err) => console.log(err))
  }

  const createUser = (newUser, reset) =>{
  axios
    .post(BASE_URL + "users/", newUser)
    .then(() =>{
      getAllUser();
      setIsShowRegister(false);
      reset(EMPTY_FORM_VALUES)
    })
    .catch((err) => console.log(err))
  }

  const deleteUser = (idUser) =>{
      axios
        .delete(BASE_URL + `users/${idUser}/`)
        .then(({data}) => getAllUser())
        .catch((err) => console.log(err))
  }

  const updateUser = (userUpdated ,reset) =>{
    axios
    .patch(BASE_URL + `users/${isUserToUpdate.id}/`, userUpdated)
    .then(({data}) => {
      getAllUser();
      setIsShowRegister(false);
      reset(EMPTY_FORM_VALUES)
      setIsUserToUpdate(null)
    })
    .catch((err) => console.log(err))
  }

    const handleClickOpenRegister =() =>{
      setIsShowRegister(true)
    }


    const handleClickUpdateUser = (user) =>{
      setIsShowRegister(true);
      setIsUserToUpdate(user)
    }

  useEffect(()=>{
    getAllUser();
  },[])
  
  

  return (
    <>
    <header className='flex flex-col items-center pb-4 px-8 pt-8 md:flex-row md:justify-between'>
      <h2 className='font-bold text-[50px]'>Users</h2>
        <button className="px-4 py-2 rounded-md bg-red-900 text-white font-bold flex items-center gap-2" 
        onClick={handleClickOpenRegister}><i class='bx bx-plus'></i>Create new user
        </button>
    </header>
      <Userslist users={users} deleteUser={deleteUser} handleClickUpdateUser={handleClickUpdateUser}/>
      <UsersForm isShowRegister={isShowRegister} createUser={createUser} isUserToUpdate={isUserToUpdate} 
      updateUser={updateUser} setIsShowRegister={setIsShowRegister} setIsUserToUpdate={setIsUserToUpdate}/>
    </>
  )
}

export default App
