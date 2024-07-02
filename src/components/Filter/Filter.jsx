import React, { useState } from "react";
import { TextInput, Label, Select } from "flowbite-react";
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
                            className="text-md inline-block mb-2"
                        />
                        <Select
                            id="sort"
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
                        </Select>
                    </div>
                </form>
            </div>

            <div className="md:hidden fixed">
                <FaSearch
                    className="h-7 w-7 cursor-pointer ml-4"
                    onClick={() => setSearchBar(!searchBar)}
                />
                <AnimatePresence>
                    {searchBar && (
                        <motion.div
                            className=" mt-5 bg-gray-50 rounded-lg p-4 z-50"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                        >
                            <form>
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
                                        className="mt-2 bg"
                                        {...fieldKeyword}
                                    />
                                </div>
                                <div className="mt-3">
                                    <Label
                                        htmlFor="sort"
                                        value="Sort by"
                                        className="text-md inline-block mb-2"
                                    />
                                    <Select
                                        id="sort"
                                        sizing="sm"
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
                                    </Select>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default Filter;
