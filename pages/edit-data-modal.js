

import { useEffect, useState } from "react"


export default function EditDataModal(props) {

    const { openEditModal, setOpenEditModal,
        updateText, setUpdateText,
        updateTranslation, setUpdateTranslation,
        id
    } = props

    const handleChange = (target) => {

        if (target.name === "text") {
            setUpdateText(target.value)
        } else {
            setUpdateTranslation(target.value)
        }

    };

    const handleSubmit = async (e) => {
        // When we hit the Save button, we will update the data in the database in here
        // but in this case, I just log the updated data to the console

        console.log("ID of the updated object", id)
        console.log("New Updated Text", updateText);
        console.log("New Updated Translation", updateTranslation);


    };


    return (
        <>

            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div>


                                <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Data</h2>
                                <form onSubmit={handleSubmit}>
                                    {/* Text Field */}
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Text</label>
                                        <input
                                            type="text"
                                            // id="name"
                                            name="text"
                                            value={updateText}
                                            onChange={(event) => handleChange(event.target)}
                                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Translaton Field */}
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Translation</label>
                                        <input
                                            type="text"
                                            // id="name"
                                            name="translation"
                                            value={updateTranslation}
                                            onChange={(event) => handleChange(event.target)}
                                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>


                                </form>


                            </div>



                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    onClick={handleSubmit}
                                    type="button" class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Save</button>
                                <button
                                    onClick={() => setOpenEditModal(false)}
                                    type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}