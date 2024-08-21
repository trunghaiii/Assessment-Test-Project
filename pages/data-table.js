

import { useEffect, useState } from "react"
import EditDataModal from "./edit-data-modal";


export default function DataTable() {

    const [data, setData] = useState([]);
    const [sortingColumn, setSortingColumn] = useState([]);
    const [sortingData, setSortingData] = useState(data);
    const [openEditModal, setOpenEditModal] = useState(false)

    const [updateText, setUpdateText] = useState("")
    const [updateTranslation, setUpdateTranslation] = useState("")
    const [id, setId] = useState("")


    const pullData = async () => {

        // Retreive data from data.json in db then assign these data to data state
        fetch('/db/data.json')
            .then((response) => response.json())
            .then((jsonData) => {
                setData(jsonData)
                setSortingData(jsonData)
            })
            .catch((error) => console.error('Error fetching JSON:', error));

    }

    const sortByColumn = (column) => {

        if (sortingColumn?.includes(column)) {
            const sortData = data
                .slice()
                .sort((a, b) =>
                    b[column].toString().localeCompare(a[column].toString())
                );
            setSortingData(sortData);
            setSortingColumn([]);
        } else {
            const sortData = data
                .slice()
                .sort((a, b) =>
                    a[column].toString().localeCompare(b[column].toString())
                );

            setSortingData(sortData);
            setSortingColumn([`${column}`]);
        }

    };

    useEffect(() => {
        pullData()
    }, []);



    return (
        <>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    {/*  ============== TABLE-HEADER ===============*/}
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Text
                                <a
                                    onClick={() => sortByColumn("text")}
                                    href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg></a>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Translation
                                    <a
                                        onClick={() => sortByColumn("translation")}
                                        href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg></a>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Original Language
                                    <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg></a>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Target Language
                                    <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg></a>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    {/*  ============== END-OF-TABLE-HEADER ===============*/}


                    {/*  ============== TABLE-BODY ===============*/}


                    <tbody>

                        {sortingData.map((item, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">
                                    {item.text}
                                </td>
                                <td className="px-6 py-4">
                                    {item.translation}
                                </td>
                                <td className="px-6 py-4">
                                    {item.original_language}
                                </td>
                                <td className="px-6 py-4">
                                    {item.target_language}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a
                                        onClick={() => {
                                            setOpenEditModal(true)
                                            setUpdateText(item.text)
                                            setUpdateTranslation(item.translation)
                                            setId(item._id)
                                        }}
                                        href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                    {/*  ============== END-OF-TABLE-BODY ===============*/}

                </table>
            </div>

            {openEditModal
                ?
                <EditDataModal
                    openEditModal={openEditModal}
                    setOpenEditModal={setOpenEditModal}

                    updateText={updateText}
                    setUpdateText={setUpdateText}

                    updateTranslation={updateTranslation}
                    setUpdateTranslation={setUpdateTranslation}

                    id={id}
                />
                :
                null
            }

        </>

    )
}