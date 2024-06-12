import { collection, doc, getDocs, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';

const AppDev = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedMsg, seteditedMsg] = useState('');
    const [editedImg, setEditedImg] = useState('');
    const [activeId, setActiveId] = useState('');
    const [items, setItems] = useState([

    ]);
    const arr = [
        "UX/UI Design",
        "Android App Development",
        "IOS App Development",
        "Cross Platform App Development",
    ]



    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'app-development'), (querySnapshot) => {
            const itemsArray = [];
            querySnapshot.forEach((doc) => {
                itemsArray.push({ id: doc.id, ...doc.data() });
            });
            setItems(itemsArray.slice(0, 4)); // Show only the first 5 items
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const openModal = (item) => {
        setIsModalOpen(true);
        seteditedMsg(item.msg); // Set the current text as the initial value
        setEditedImg(item.imgUrl); // Set the current image URL as the initial value
        setActiveId(item.id); // Set the id of the document to update
    };

    const closeModal = () => {
        setIsModalOpen(false);
        seteditedMsg(''); // Clear the edited text
        setEditedImg(''); // Clear the edited image URL
        setActiveId(''); // Reset active item ID
    };

    const handleTextChange = (e) => {
        seteditedMsg(e.target.value);
    };

    const handleImageChange = (e) => {
        setEditedImg(e.target.value);
    };

    const handleUpdate = async () => {
        if (activeId) {
            // Update Firestore with the new text and image URL
            const docRef = doc(db, 'app-development', activeId);
            try {
                await updateDoc(docRef, {
                    text: editedMsg,
                    imgUrl: editedImg,
                });

                // Update the local state with the new text and image URL
                setItems(items.map(item =>
                    item.id === activeId ? { ...item, text: editedMsg, heading: data.heading, imgUrl: editedImg } : item
                ));
                closeModal();
            } catch (error) {
                console.error("Error updating document: ", error);
            }
        }
        setIsModalOpen(false);
    };
    return (
        <div class="grid lg:grid-cols-2 gap-10 p-10 sm:grid-cols-1">
            {
                items.map((item, index) => (
                    <div class="flex flex-col p-4 bg-blue-900 shadow-2xl rounded-lg">
                        <div class="pl-2 flex justify-between items-center text-white bg-blue-800 h-10 w-full rounded">
                            <h2 className="text-xl text-white">{arr[index]}</h2>
                            <button className="text-lg mr-5" onClick={() => openModal(item)}>Edit</button>

                        </div>
                        <div className='flex'>
                            <img src={item.imgUrl} alt="" className="my-10 sm:w-40 max-w-48 rounded-2xl" />
                            <p className="text-white m-4">{item.text}</p>
                        </div>
                        <p className='text-white text-end'>update</p>
                    </div>
                ))
            }

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50">
                    <div className="relative bg-white p-5 rounded max-w-lg w-full mx-auto">
                        <h3 className="text-lg mb-4">Edit Content</h3>
                        <textarea
                            className="w-full h-40 p-2 border border-gray-300 mb-4"
                            value={editedMsg}
                            onChange={handleTextChange}
                            placeholder="Edit text"
                        />
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 mb-4"
                            value={editedImg}
                            onChange={handleImageChange}
                            placeholder="Edit image URL"
                        />
                        <div className="flex justify-end mt-4 space-x-3">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleUpdate}
                            >
                                Save Changes
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>


    );
};

export default AppDev;