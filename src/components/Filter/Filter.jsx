import React, { useState } from "react";
import { TextInput, Label, Checkbox } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useFilter } from "../../hooks/Filter.hook";

function Filter() {
    const [searchBar, setSearchBar] = useState(false);

    const { fieldKeyword, fieldSort } = useFilter();

    return (
        <>
            <div className="md:block lg:w-[20%] px-10 py-5 h-[15%] border rounded-r-lg hidden sticky top-0">
                <div className="text-center">
                    <h2 className="font-semibold text-xl">Filter Products</h2>
                    <br />
                    <hr />
                </div>
                <form className="mt-4">
                    <div>
                        <Label
                            htmlFor="search"
                            value="Search By Name"
                            className="text-md"
                        />
                        <TextInput
                            id="search"
                            sizing="md"
                            placeholder="Search here..."
                            className="mt-2"
                            {...fieldKeyword}
                        />
                    </div>
                    <div className="mt-3">
                        <Label
                            htmlFor="sort"
                            value="Sort by"
                            className="text-md"
                        />
                        <select
                            id="sort"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            {...fieldSort}
                        >
                            <option
                                value=""
                                defaultValue
                            >
                                Name, Id, Price
                            </option>
                            <option value="id">Id</option>
                            <option value="name">Name</option>
                            <option value="hToL">Price High to Low</option>
                            <option value="lToH">Price Low to High</option>
                        </select>
                    </div>
                </form>
            </div>

            <div className="md:hidden fixed">
                <FaSearch
                    className="h-7 w-7 cursor-pointer ml-4 absolute"
                    onClick={() => setSearchBar(!searchBar)}
                />
                {searchBar && (
                    <div className=" mt-5">
                        <form className="mt-4">
                            <div>
                                <Label
                                    htmlFor="search"
                                    value="Search By Name"
                                    className="text-md"
                                />
                                <TextInput
                                    id="search"
                                    sizing="sm"
                                    placeholder="Search here..."
                                    className="mt-2"
                                    {...fieldKeyword}
                                />
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}

export default Filter;

{
    /* <p className="text-md font-semibold mt-3">Category</p>
                <div className="flex flex-col justify-center p-2">
                    <div className="flex items-center">
                        <Checkbox id="men" />
                        <Label
                            htmlFor="men"
                            value="Men's clothing"
                            className="ml-3"
                        />
                    </div>
                    <div className="flex mt-2 items-center">
                        <Checkbox id="women" />
                        <Label
                            htmlFor="women"
                            value="Women's clothing"
                            className="ml-3"
                        />
                    </div>
                    <div className="flex mt-2 items-center">
                        <Checkbox id="electrics" />
                        <Label
                            htmlFor="electrics"
                            value="Electrics"
                            className="ml-3"
                        />
                    </div>
                    <div className="flex mt-2 items-center">
                        <Checkbox id="jewelery" />
                        <Label
                            htmlFor="jewelery"
                            value="Jewelery"
                            className="ml-3"
                        />
                    </div>
                </div> */
}
