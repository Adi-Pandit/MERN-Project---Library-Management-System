import { BellIcon, CalendarIcon, LibraryAppIcon } from "./Icons"

const Header = () => {
    return (
        <header className='fixed flex justify-between border-b py-4 z-40 bg-white w-full'>
            <h1 className="text-lg font-medium flex gap-3 items-center ml-4">
                <LibraryAppIcon />
                Library App
            </h1>

            <div className='flex gap-3'>
                <div className='relative'>
                    <select name='data' className='border rounded-3xl py-2 text-sm pl-8 pr-2'>
                        <option defaultValue={"choose a timeline"}>Choose a timeline</option>
                        <option value="last 6 months">Last six months</option>
                    </select>
                    <CalendarIcon />
                </div>

                <div className='flex items-center'>
                    <BellIcon />
                </div>

                <div className='flex items-center gap-2 text-gray-700 mr-4'>
                    <img className="w-10 h-10 rounded-full" src="https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532" alt="Rounded avatar" />
                    <div className='text-sm'>Aditya Pandit</div>
                </div>
            </div>
        </header>
    )
}

export default Header