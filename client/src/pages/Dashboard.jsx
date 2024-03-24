import LineChart from "../components/Dashboard/LineChart"

const Dashboard = () => {
    return (
        <div className="ml-64 mt-[105px] mr-8 mb-8 space-y-4">
            <div className="grid grid-cols-4 gap-4">
                {/* Row 1 */}
                <div className="col-span-1 bg-white rounded-md shadow-md">
                    <h3 className=" text-gray-400 text-sm p-3">Borrowed Books</h3>
                    <div className="flex p-3 gap-2">
                        <div className="text-2xl font-medium">2405</div>
                        <div className="flex bg-green-100 bg-opacity-75 items-center rounded-2xl text-sm p-1 text-green-400 border border-green-100">+23%</div>
                    </div>
                </div>
                <div className="col-span-1 bg-white rounded-md shadow-md">
                    <h3 className=" text-gray-400 text-sm p-3">Returned Books</h3>
                    <div className="flex p-3 gap-2">
                        <div className="text-2xl font-medium">783</div>
                        <div className="flex bg-red-100 bg-opacity-75 items-center rounded-2xl text-sm p-1 text-red-400 border border-red-100">-14%</div>
                    </div>
                </div>
                <div className="col-span-1 bg-white rounded-md shadow-md">
                    <h3 className=" text-gray-400 text-sm p-3">Overdue Books</h3>
                    <div className="flex p-3 gap-2">
                        <div className="text-2xl font-medium">45</div>
                        <div className="flex bg-green-100 bg-opacity-75 items-center rounded-2xl text-sm p-1 text-green-400 border border-green-100">+11%</div>
                    </div>
                </div>
                <div className="col-span-1 bg-white rounded-md shadow-md">
                    <h3 className=" text-gray-400 text-sm p-3">Missing Books</h3>
                    <div className="flex p-3 gap-2">
                        <div className="text-2xl font-medium">12</div>
                        <div className="flex bg-green-100 bg-opacity-75 items-center rounded-2xl text-sm p-1 text-green-400 border border-green-100">+11%</div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="col-span-1 bg-white rounded-md shadow-md">
                    <h3 className=" text-gray-400 text-sm p-3">Total Books</h3>
                    <div className="flex p-3 gap-2">
                        <div className="text-2xl font-medium">32345</div>
                        <div className="flex bg-green-100 bg-opacity-75 items-center rounded-2xl text-sm p-1 text-green-400 border border-green-100">+11%</div>
                    </div>
                </div>
                <div className="col-span-1 bg-white rounded-md shadow-md">
                    <h3 className=" text-gray-400 text-sm p-3">Visitors</h3>
                    <div className="flex p-3 gap-2">
                        <div className="text-2xl font-medium">1504</div>
                        <div className="flex bg-green-100 bg-opacity-75 items-center rounded-2xl text-sm p-1 text-green-400 border border-green-100">+3%</div>
                    </div>
                </div>
                <div className="col-span-1 bg-white rounded-md shadow-md">
                    <h3 className=" text-gray-400 text-sm p-3">New Members</h3>
                    <div className="flex p-3 gap-2">
                        <div className="text-2xl font-medium">34</div>
                        <div className="flex bg-red-100 bg-opacity-75 items-center rounded-2xl text-sm p-1 text-red-400 border border-red-100">-10%</div>
                    </div>
                </div>
                <div className="col-span-1 bg-white rounded-md shadow-md">
                    <h3 className=" text-gray-400 text-sm p-3">Pending Fees</h3>
                    <div className="flex p-3 gap-2">
                        <div className="text-2xl font-medium">$765</div>
                        <div className="flex bg-green-100 bg-opacity-75 items-center rounded-2xl text-sm p-1 text-green-400 border border-green-100">+56%</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 bg-white rounded-md shadow-md px-3 py-1">
                    <LineChart />
                </div>
                <div className="col-span-1 bg-white rounded-md shadow-md p-3">
                    <h3 className="font-bold text-sm">Overdue History</h3>
                    <table className="my-3 table-auto text-left w-full text-xs">
                        <thead className="border-b">
                            <tr>
                                <th className="py-2">Member ID</th>
                                <th className="py-2">Title</th>
                                <th className="py-2">ISBN</th>
                                <th className="py-2">Due Date</th>
                                <th className="py-2">Fine</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr>
                                <td className="py-2">#48964</td>
                                <td className="py-2">Magnolia Palace</td>
                                <td className="py-2">1961</td>
                                <td className="py-2">10/12/23</td>
                                <td className="py-2">$4</td>
                            </tr>
                            <tr>
                                <td className="py-2">#48965</td>
                                <td className="py-2">The Eagles</td>
                                <td className="py-2">1972</td>
                                <td className="py-2">12/12/23</td>
                                <td className="py-2">$6</td>
                            </tr>
                            <tr>
                                <td className="py-2">#48966</td>
                                <td className="py-2">Wind</td>
                                <td className="py-2">1975</td>
                                <td className="py-2">31/12/23</td>
                                <td className="py-2">$3</td>
                            </tr>
                            <tr>
                                <td className="py-2">#48967</td>
                                <td className="py-2">Fire</td>
                                <td className="py-2">1975</td>
                                <td className="py-2">23/12/23</td>
                                <td className="py-2">$5</td>
                            </tr>
                            <tr>
                                <td className="py-2">#48968</td>
                                <td className="py-2">Earth</td>
                                <td className="py-2">1975</td>
                                <td className="py-2">20/12/23</td>
                                <td className="py-2">$6</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3 bg-white rounded-md shadow-md p-3">
                    <h3 className="font-bold text-sm">Recent Check-outs</h3>
                    <table className="my-3 table-auto text-left w-full text-xs">
                        <thead className="border-b">
                            <tr>
                                <th className="py-2">ID</th>
                                <th className="py-2">ISBN</th>
                                <th className="py-2">Title</th>
                                <th className="py-2">Author</th>
                                <th className="py-2">Member</th>
                                <th className="py-2">Issued Date</th>
                                <th className="py-2">Return Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr>
                                <td className="py-2">#48964</td>
                                <td className="py-2">1961</td>
                                <td className="py-2">Magnolia Palace</td>
                                <td>Fiora Davis</td>
                                <td>Philip Workman</td>
                                <td className="py-2">10/12/23</td>
                                <td className="py-2">15/12/23</td>
                            </tr>
                            <tr>
                                <td className="py-2">#48965</td>
                                <td className="py-2">1972</td>
                                <td className="py-2">The Eagles</td>
                                <td>Migul De Servantus</td>
                                <td>Kanna Doein</td>
                                <td className="py-2">12-12-23</td>
                                <td className="py-2">15/12/23</td>
                            </tr>
                            <tr>
                                <td className="py-2">#48966</td>
                                <td className="py-2">1975</td>
                                <td className="py-2">Wind</td>
                                <td>Lewis Caroll</td>
                                <td>Cristofer Butor</td>
                                <td className="py-2">31-12-23</td>
                                <td className="py-2">15/12/23</td>
                            </tr>
                            <tr>
                                <td className="py-2">#48967</td>
                                <td className="py-2">1975</td>
                                <td className="py-2">Fire</td>
                                <td>Hanna Gouse</td>
                                <td>Livia Kentor</td>
                                <td className="py-2">23-12-23</td>
                                <td className="py-2">15/12/23</td>
                            </tr>
                            <tr>
                                <td className="py-2">#48968</td>
                                <td className="py-2">1975</td>
                                <td className="py-2">Earth</td>
                                <td>Philip Island</td>
                                <td>Tatiana Arcand</td>
                                <td className="py-2">20-12-23</td>
                                <td className="py-2">15/12/23</td>
                            </tr>
                            <tr>
                                <td className="py-2">#48969</td>
                                <td className="py-2">1975</td>
                                <td className="py-2">Earth</td>
                                <td>Philip Island</td>
                                <td>Tatiana Arcand</td>
                                <td className="py-2">20-12-23</td>
                                <td className="py-2">15/12/23</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-span-1 bg-white rounded-md shadow-md p-3">
                    <div className="space-x-2 mb-4">
                        <button className="text-xs bg-green-500 py-1 px-2 text-white rounded-2xl">Top books</button>
                        <button className="text-xs py-1 px-2 text-gray-500 rounded-2xl border border-gray-500">New arrivals</button>
                    </div>
                    <div className="grid grid-cols-1 m-1 space-y-1 border-b pb-3">
                        <h3 className="text-xs font-bold">Mangnolia Palace</h3>
                        <h4 className="text-xs text-gray-700">Cristofer Bator</h4>
                        <div className="bg-green-100 bg-opacity-75 items-center rounded-2xl text-xs px-2 py-1/2 text-green-400 border border-green-100 max-w-fit">Available</div>
                    </div>
                    <div className="grid grid-cols-1 m-1 space-y-1 border-b pb-3">
                        <h3 className="text-xs font-bold">Mangnolia Palace</h3>
                        <h4 className="text-xs text-gray-700">Cristofer Bator</h4>
                        <div className="bg-green-100 bg-opacity-75 items-center rounded-2xl text-xs px-2 py-1/2 text-green-400 border border-green-100 max-w-fit">Available</div>
                    </div>
                    <div className="grid grid-cols-1 m-1 space-y-1">
                        <h3 className="text-xs font-bold">Mangnolia Palace</h3>
                        <h4 className="text-xs text-gray-700">Cristofer Bator</h4>
                        <div className="bg-green-100 bg-opacity-75 items-center rounded-2xl text-xs px-2 py-1/2 text-green-400 border border-green-100 max-w-fit">Available</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard