import { ExportIcon, SearchIcon, UserIcon, AddMemberIcon } from "../components/Icons"
import { useState } from "react"

const Members = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="ml-64 mt-[105px] mr-8 mb-8 space-y-8">
            {showModal && <div className="fixed inset-0 bg-black opacity-50 z-40"></div>}
            <div className="flex justify-between items-center">
                <div className="space-y-2">
                    <h1 className="text-lg font-bold">Members</h1>
                    <h3 className="text-sm text-gray-400">To create a member and view the member report</h3>
                </div>

                <div className="flex gap-2 items-center justify-center">
                    <div className="flex items-center relative">
                        <SearchIcon className={"absolute mx-2"} />
                        <input type='text' placeholder={'Search Member'} className='border py-3 px-10 rounded-3xl w-96 text-sm' />
                    </div>

                    <button className="flex items-center bg-green-500 text-sm text-white px-4 rounded-3xl gap-1 h-10" type="button" onClick={() => setShowModal(true)}>
                        <UserIcon />
                        Add Member
                    </button>

                    {showModal ? (
                        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div className="relative p-4 w-full max-w-md max-h-full">
                                <div className="relative bg-white rounded-lg shadow">
                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-lg font-semibold text-gray-900 ">
                                            Add new member
                                        </h3>
                                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  dark:hover:text-white" onClick={() => setShowModal(false)}>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>

                                    <form className="p-4 md:p-5">
                                        <div className="grid gap-4 mb-4 grid-cols-2">
                                            <div className="col-span-2">
                                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                                            </div>
                                            <div className="col-span-2 sm:col-span-1">
                                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                                                <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                                            </div>
                                            <div className="col-span-2">
                                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Product Description</label>
                                                <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="text-white inline-flex items-center rounded-3xl text-sm px-5 py-2.5 text-center bg-green-500">
                                            <AddMemberIcon />
                                            Add new member
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    <button className="flex items-center text-sm text-gray-500 px-4 rounded-3xl gap-1 h-10 border">
                        <ExportIcon />
                        Export
                    </button>
                </div>
            </div>



            <div className="bg-white shadow-md px-4 py-3 rounded-md">
                <table className="table-auto text-left w-full text-xs">
                    <thead className="border-b">
                        <tr>
                            <th className="py-2">Member ID</th>
                            <th className="py-2">Register ID</th>
                            <th className="py-2">Member</th>
                            <th className="py-2">Email ID</th>
                            <th className="py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        <tr className="hover:bg-gray-200">
                            <td className="py-4 hover:rounded-tl-md hover:rounded-bl-md">#48964</td>
                            <td className="py-4">4245</td>
                            <td className="py-4">Alfredo Bergson</td>
                            <td className="py-4">alfredo.bergson@gmail.com</td>
                            <td className="py-4 hover:rounded-tr-md hover:rounded-br-md">sdff</td>
                        </tr>
                        <tr className="transition-all hover:bg-gray-200 hover:rounded-md">
                            <td className="py-4">#48964</td>
                            <td className="py-4">4245</td>
                            <td className="py-4">Alfredo Bergson</td>
                            <td className="py-4">alfredo.bergson@gmail.com</td>
                            <td className="py-4"></td>
                        </tr>
                        <tr className="transition-all hover:bg-gray-200 hover:rounded-md">
                            <td className="py-4">#48964</td>
                            <td className="py-4">4245</td>
                            <td className="py-4">Alfredo Bergson</td>
                            <td className="py-4">alfredo.bergson@gmail.com</td>
                            <td className="py-4"></td>
                        </tr>
                        <tr className="transition-all hover:bg-gray-200 hover:rounded-md">
                            <td className="py-4">#48964</td>
                            <td className="py-4">4245</td>
                            <td className="py-4">Alfredo Bergson</td>
                            <td className="py-4">alfredo.bergson@gmail.com</td>
                            <td className="py-4"></td>
                        </tr>
                        <tr className="transition-all hover:bg-gray-200 hover:rounded-md">
                            <td className="py-4">#48964</td>
                            <td className="py-4">4245</td>
                            <td className="py-4">Alfredo Bergson</td>
                            <td className="py-4">alfredo.bergson@gmail.com</td>
                            <td className="py-4"></td>
                        </tr>
                        <tr className="transition-all hover:bg-gray-200 hover:rounded-md">
                            <td className="py-4">#48964</td>
                            <td className="py-4">4245</td>
                            <td className="py-4">Alfredo Bergson</td>
                            <td className="py-4">alfredo.bergson@gmail.com</td>
                            <td className="py-4"></td>
                        </tr>
                        <tr className="transition-all hover:bg-gray-200 hover:rounded-md">
                            <td className="py-4">#48964</td>
                            <td className="py-4">4245</td>
                            <td className="py-4">Alfredo Bergson</td>
                            <td className="py-4">alfredo.bergson@gmail.com</td>
                            <td className="py-4"></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Members