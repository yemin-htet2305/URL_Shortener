    import { Button } from "./ui/button"
    import { Input } from "./ui/input"
    

    export default function SearchBox() {
    return (
        <div className="block w-full gap-2 lg:mt-10 flex items-center justify-center p-5">
            <div
        className="w-full h-40 gap-5 flex flex-col lg:flex-row items-center justify-center p-10 border rounded-2xl
            bg-linear-to-r from-[#360137] to-black/40"
        >
            <Input type="email" placeholder="Shorten a link here!" className="text-white " />
            <Button type="submit" variant="outline" className="bg-[#00e7d5] text-white w-full lg:w-20">
                Shorten it!
            </Button>
        </div>
        </div>
    )
    }
