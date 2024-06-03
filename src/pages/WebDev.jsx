import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const WebDev = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedText, setEditedText] = useState('');
    const [activeEditId, setActiveEditId] = useState('');
    const [items, setItems] = useState([
        // Example items array - you would fetch these from Firestore normally
        { id: '1', text: 'Lorem ipsum...', imgUrl: 'url-to-your-image-1' },
        { id: '2', text: 'Dolor sit amet...', imgUrl: 'url-to-your-image-2' },
        { id: '3', text: 'Dolor sit amet...', imgUrl: 'url-to-your-image-3' },
        { id: '4', text: 'Dolor sit amet...', imgUrl: 'url-to-your-image-4' },
        { id: '5', text: 'Dolor sit amet...', imgUrl: 'url-to-your-image-5' },
        // ... other items
    ]);

    const openModal = (item) => {
        setIsModalOpen(true);
        setEditedText(item.text); // Set the current text as the initial value
        setActiveEditId(item.id); // Set the id of the document to update
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditedText(''); // Clear the edited text
        setActiveEditId(''); // Reset active item ID
    };

    const handleTextChange = (e) => {
        setEditedText(e.target.value);
    };

    const handleUpdate = async () => {
        if (activeEditId) {
            // Update the local state with the new text
            setItems(items.map(item =>
                item.id === activeEditId ? { ...item, text: editedText } : item
            ));

            // Update Firestore with the new text
            const docRef = doc(db, 'web-development', activeEditId);
            try {
                await updateDoc(docRef, {
                    text: editedText,
                });
                closeModal();
            } catch (error) {
                console.error("Error updating document: ", error);
            }
        }
    };

    return (
        <>
            <div className="grid lg:grid-cols-2 gap-10 p-10 sm:grid-cols-1">
                {items.map((item) => (
                    <div key={item.id} className="flex flex-col p-4 bg-blue-900 shadow-2xl rounded-lg">
                        <div className="pl-2 flex justify-between items-center text-white bg-blue-800 h-10 w-full rounded">
                            <h2 className="text-xl">Custom Website Development</h2>
                            <button className="text-lg mr-5" onClick={() => openModal(item)}>Edit</button>
                        </div>
                        <div className='flex'>
                            <img src="https://intela-main.web.app/assets/image%202-DYOG4NK_.png" alt="Placeholder" className="my-6 sm:w-40 max-w-60 rounded-2xl" />
                            <p className="my-10 text-white m-4">{item.text}</p>
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
                            className="w-full h-40 p-2 border border-gray-300"
                            value={editedText}
                            onChange={handleTextChange}
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