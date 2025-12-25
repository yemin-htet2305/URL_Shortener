    import { Button } from "./ui/button"
    import { Input } from "./ui/input"
    import {useForm,type SubmitHandler} from 'react-hook-form'
    
    type FormFields={
        email: string;
    }

    export default function SearchBox() {
        const {register,handleSubmit,formState:{errors}} = useForm<FormFields>()
        const onSubmit : SubmitHandler<FormFields> = (data)=>{
            console.log(data)
            
        }
            
        
    return (
        <div className="block w-full gap-2 lg:mt-10 items-center justify-center p-5">
         
            <form onSubmit={handleSubmit(onSubmit)} className="w-full h-40 gap-5 flex flex-col lg:flex-row items-center justify-center p-10 border rounded-2xl
            bg-linear-to-r from-[#360137] to-black/40"
        >
                <Input {...register('email',{
                    required:"Email is required",
                    pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                })} type="email" placeholder="Shorten a link here!" className="text-white" 
                   />
                   {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                <Button type="submit" className="bg-[#00e7d5] text-white w-full lg:w-20">
                    Shorten it!
                </Button>
            </form>
        </div>
    )
}
