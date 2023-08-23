import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { EMPTY_FORM_VALUES } from "../shared/constants";

const UsersForm = ({isShowRegister, createUser, isUserToUpdate, updateUser, setIsShowRegister, setIsUserToUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

        const submit = (data) => {
            if(isUserToUpdate){
                updateUser(data, reset)
            }else{
                createUser(data, reset);
            }
        }

        const handleClickCloseRegister = () =>{
            setIsShowRegister(false);
            reset(EMPTY_FORM_VALUES);
            setIsUserToUpdate(null)
        }

        useEffect(()=>{
            if(isUserToUpdate){
                reset(isUserToUpdate)
            }
        },[isUserToUpdate])


    return (
        <section className={`bg-black/40 flex items-center justify-center 
        fixed top-0 right-0 left-0 bottom-0  ${isShowRegister ? "visible" : "invisible"}`}>
            <form className="grid gap-4 bg-white px-4 py-6 rounded-none relative md:w-[400px] md:px-6" onSubmit={handleSubmit(submit)}>
                <button type="button" onClick={handleClickCloseRegister} className="absolute top-1 right-2 font-bold text-[25px]">
                    <i class='bx bx-x'></i>
                </button>
                <h2 className="text-center justify-self-start font-bold md:text-2xl">{isUserToUpdate ?"Edit user" : "New user"}</h2>
                <div className="flex flex-col items-start">
                    <label htmlFor="name-user" className="font-[500] text-sm md:text-lg" >First and second name</label>
                    <input className="outline-none border-[1px] rounded-md text-sm p-2 bg-gray-200/50 border-1 border-gray-300 w-full" type="text" id="name-user" 
                    placeholder="jose" {...register("first_name", {
                        required: {
                            value: true,
                            message: "This field is required"
                        },
                        maxLength: {
                            value: 25,
                            message: "Length exceeded. Max 25"
                        },
                        minLength: {
                            value: 4,
                            message: "Min length 4 characters"
                        }
                    })}/>
                    {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name.message}</p>}
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="last-name-user" className="font-[500] text-sm md:text-lg" >Last names</label>
                    <input className="outline-none border-[1px] rounded-md text-sm p-2 bg-gray-200/50 border-1 border-gray-300 w-full" type="text" id="last-name-user" 
                    placeholder="perez" {...register("last_name",{
                        required: {
                            value: true,
                            message: "This field is requiresd"
                        },
                        maxLength: {
                            value: 25,
                            message: "Length exceeded. Max 25"
                        },
                        minLength: {
                            value: 4,
                            message: "Min length 4 characters"
                        }
                    })}/>
                    {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name.message}</p>}
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="email-user" className="font-[500] text-sm md:text-lg" >Email</label>
                    <input className="outline-none border-[1px] rounded-md text-sm p-2 bg-gray-200/50 border-1 border-gray-300 w-full" type="email" id="email-user" 
                    placeholder="joseperez@gmail.com" {...register("email",{
                        required: {
                            value:true,
                            message:"This field is required"
                        }
                    })}/>
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="email-user" className="font-[500] text-sm md:text-lg" >Password</label>
                    <input className="outline-none border-[1px] rounded-md text-sm p-2 bg-gray-200/50 border-1 border-gray-300 w-full" type="password" id="password"
                    {...register("password",{
                        pattern: {
                            value : "/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/",
                            message: "Min 1 upper and lowercase, 1 symbol and 1 number"
                        },
                        maxLength: {
                            value:125,
                            message:"Max length 125"
                        },
                        minLength: {
                            value: 8 ,
                            message: "Min length 8"
                        }
                    })}/>
                    {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="birthdate-user" className="font-[500] text-sm md:text-lg" >Birthday</label>
                    <input className="outline-none border-[1px] rounded-md text-sm p-2 bg-gray-200/50 border-1 border-gray-300 w-full" type="date" id="birthdate-user" 
                    {...register("birthday", {
                        required: {
                            value: true,
                            message: "This field is required"
                        }
                    })}/>
                    {errors.birthday && <p className="text-red-500 text-xs">{errors.birthday.message}</p>}
                </div>
                <button className="bg-red-900 rounded-xl p-2 text-white font-bold">{isUserToUpdate ? "Save changes" : "Create user"}</button>
            </form>
        </section>
    )
}
export default UsersForm