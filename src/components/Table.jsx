import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Table = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const limit = 5;
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `https://api.escuelajs.co/api/v1/products?offset=${page * itemsPerPage}&limit=${itemsPerPage}&search=${search}`
                );
                setProducts(response.data);


                const totalResponse = await axios.get(
                    `https://api.escuelajs.co/api/v1/products`
                );
                setTotalItems(totalResponse.data.length);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [page, itemsPerPage, search]); //

    const filteredProducts = products.filter(
        (product) =>
            product.title.toLowerCase().includes(search.toLowerCase()) ||
            product.category.name.toLowerCase().includes(search.toLowerCase())
    );

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const truncateDescription = (description) => {
        if (!description) return "";
        const words = description.split(" ");
        return words.length > 15 ? `${words.slice(0, 15).join(" ")}....` : description;
    };

    return (
        <div className="p-0 md:p-4 xl:p-5">

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by name or category..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 border rounded w-full sm:w-1/2"
                />
            </div>
            <div className="mb-4">
                <label className="mr-2">Items per page:</label>
                <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="p-2 border rounded"
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                </select>
            </div>


            <div className="overflow-y-auto">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-200 text-xs lg:text-base">
                            <th className="p-1 border">SNO</th>
                            <th className="p-1 border">ID</th>
                            <th className="p-1 border">Name</th>
                            <th className="p-1 border hidden lg:table-cell">Creation</th>
                            <th className="p-1 border hidden lg:table-cell">Description</th>
                            <th className="p-1 border">Price</th>
                            <th className="p-1 border">Category</th>
                            <th className="p-1 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product, index) => (
                            <tr
                                key={product.id}
                                className="hover:bg-gray-100 xs:text-xs md:text-base items-center text-center"
                            >
                                {/* <td className="p-2 border">{index + 1}</td>  */}
                                <td className=" border">{page * limit + index + 1}</td>
                                <td className="p-2 border text-blue-400">{product.id}</td>
                                <td className=" border">{product.title}</td>
                                <td className=" border hidden lg:table-cell">
                                    {formatDate(product.creationAt)}
                                </td>
                                <td className="p-2 border hidden lg:table-cell">{truncateDescription(product.description)}</td>
                                <td className=" border">${product.price}</td>
                                <td className=" border">{product.category.name}</td>
                                <td className="border">
                                    
                                    <button className="text-green-400 hover:underline">
                                        <FaRegEdit />
                                    </button>
                                    <button className="text-red-500 hover:underline ml-2">
                                        <MdDeleteOutline />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div className="flex justify-between mt-4 items-center">

                <button
                    disabled={page === 0}
                    onClick={() => setPage(page - 1)}
                    className={`px-4 py-2 rounded ${page === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
                        }`}
                >
                    Previous
                </button>


                <span className=" bg-gray-100 xs:text-xs md:text-base">
                    Page {page + 1} of {totalPages}
                </span>


                <button
                    disabled={page + 1 === totalPages}
                    onClick={() => setPage(page + 1)}
                    className={`px-4 py-2 rounded ${page + 1 === totalPages
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-blue-500 text-white"
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Table;
