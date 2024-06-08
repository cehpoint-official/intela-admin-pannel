import React, { useState, useEffect } from 'react';
import { doc, updateDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const WebDev = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedText, setEditedText] = useState('');
    const [editedImage, setEditedImage] = useState('');
    const [activeEditId, setActiveEditId] = useState('');

    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, 'web-development'));
            const itemsArray = [];
            querySnapshot.forEach((doc) => {
                itemsArray.push({ id: doc.id, ...doc.data() });
            });
            setItems(itemsArray.slice(0, 5)); // Show only the first 5 items
        };

        fetchData();
    }, []);

    const openModal = (item) => {
        setIsModalOpen(true);
        setEditedText(item.text); // Set the current text as the initial value
        setEditedImage(item.imgUrl); // Set the current image URL as the initial value
        setActiveEditId(item.id); // Set the id of the document to update
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditedText(''); // Clear the edited text
        setEditedImage(''); // Clear the edited image URL
        setActiveEditId(''); // Reset active item ID
    };

    const handleTextChange = (e) => {
        setEditedText(e.target.value);
    };
    const arrr = [
        "Custom Website Development",
        "E-Commerce Website",
        "Wordpress Website",
        "Portfolio Website",
        "Mern-stack Website"
    ]
    const handleImageChange = (e) => {
        setEditedImage(e.target.value);
    };

    const handleUpdate = async () => {
        if (activeEditId) {
            // Update Firestore with the new text and image URL
            const docRef = doc(db, 'web-development', activeEditId);
            try {
                await updateDoc(docRef, {
                    message: editedText,
                    imageUrl: editedImage,
                });

                // Update the local state with the new text and image URL
                setItems(items.map(item =>
                    item.id === activeEditId ? { ...item, text: editedText, imgUrl: editedImage } : item
                ));
                closeModal();
            } catch (error) {
                console.error("Error updating document: ", error);
            }
        }
    };

    return (
        <>
            <div className="grid lg:grid-cols-2 gap-10 p-10 sm:grid-cols-1">

                {items && items.map((item, index) => (
                    <div key={item.id} className="flex flex-col p-4 bg-blue-900 shadow-2xl rounded-lg">
                        <div className="pl-2 flex justify-between items-center text-white bg-blue-800 h-10 w-full rounded">
                            <h2 className="text-xl text-white">
                                {arrr[index]}
                            </h2>
                            <button className="text-lg mr-5" onClick={() => openModal(item)}>Edit</button>
                        </div>
                        <div className='flex'>
                            <img src={item.imageUrl} alt={item.name} className="my-10 sm:w-40 max-w-48 rounded-2xl" />
                            <p className="text-white m-4">{item.message}</p>
                        </div>
                        <p className="text-white text-end">Updated</p>
                    </div>
                ))}


            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50">
                    <div className="relative bg-white p-5 rounded max-w-lg w-full mx-auto">
                        <h3 className="text-lg mb-4">Edit Content</h3>
                        <textarea
                            className="w-full h-40 p-2 border border-gray-300 mb-4"
                            value={editedText}
                            onChange={handleTextChange}
                            placeholder="Edit text"
                        />
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 mb-4"
                            value={editedImage}
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
        </>
    );
};

export default WebDev;