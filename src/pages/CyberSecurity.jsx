import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase'; // Adjust the path to your Firebase configuration

const CyberSecurity = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedMsg, setEditedMsg] = useState('');
    const [editedImg, setEditedImg] = useState('');
    const [cards, setCards] = useState([]);

    const arr = [
        'Vulnerability Assessment and Penetration Testing (VAPT)',
        'Security Audits and Assessments',
        'Security Incident Response and Management',
        'Security Awareness Training',
        'Security Architecture and Design',
        'Security Risk Assessment and Management',
        'Compliance and Regulatory Services',
    ];

    const [activeCard, setActiveCard] = useState(null);

    // useEffect(() => {
    //     const unsubscribe = onSnapshot(collection(db, 'cyber-security'), (snapshot) => {
    //         const itemsArray = [];
    //         snapshot.forEach((doc) => {
    //             itemsArray.push({ id: doc.id, ...doc.data() });
    //         });
    //         setItems(itemsArray.slice(0, 7));
    //     });

    //     return () => unsubscribe();
    // }, []);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'cyber-security'), (querySnapshot) => {
            const itemsArray = [];
            querySnapshot.forEach((doc) => {
                itemsArray.push({ id: doc.id, ...doc.data() });
            });
            setCards(itemsArray.slice(0, 7)); // Show only the first 5 items
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const openModal = (card) => {
        setIsModalOpen(true);
        setEditedMsg(card.msg);
        setEditedImg(card.imgUrl);
        setActiveCard(card.id);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditedMsg('');
        setEditedImg('');
        setActiveCard(null);
    };

    const handleMsgChange = (e) => {
        setEditedMsg(e.target.value);
    };

    const handleImgChange = (e) => {
        setEditedImg(e.target.value);
    };

    const handleUpdate = async () => {
        if (activeCard) {
            const docRef = doc(db, 'cyber-security', activeCard);
            try {
                await updateDoc(docRef, {
                    msg: editedMsg,
                    imgUrl: editedImg,
                });
                setCards(cards.map(card =>
                    card.id === activeCard ? { ...card, msg: editedMsg, imgUrl: editedImg } : card
                ));
                closeModal();
            } catch (error) {
                console.error("Error updating document: ", error);
            }
        }
    };

    return (
        <div className="grid lg:grid-cols-2 gap-10 p-10 sm:grid-cols-1">
            {cards.map((card, index) => (
                <div key={card.id} className="flex flex-col p-4 bg-blue-900 shadow-2xl rounded-lg">
                    <div className="pl-2 flex justify-between items-center text-white bg-blue-800 h-16 w-full rounded">
                        <h2 className="text-xl">{arr[index]}</h2>
                        <button className="text-lg mr-5" onClick={() => openModal(card)}>Edit</button>
                    </div>
                    <div className='flex'>
                        <img src={card.imgUrl} alt="Placeholder Image" className="my-6 sm:w-40 max-w-60 rounded-2xl" />
                        <p className='my-10 text-white m-4'>{card.msg}</p>
                    </div>
                    <p className='text-white text-end'>Update</p>
                </div>
            ))}

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50">
                    <div className="relative bg-white p-5 rounded max-w-lg w-full mx-auto">
                        <h3 className="text-lg mb-4">Edit Content</h3>
                        <textarea
                            className="w-full h-40 p-2 border border-gray-300 mb-4"
                            value={editedMsg}
                            onChange={handleMsgChange}
                            placeholder="Edit text"
                        />
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 mb-4"
                            value={editedImg}
                            onChange={handleImgChange}
                            placeholder="Edit image URL"
                        />
                        <div className="flex justify-end mt-4">
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

export default CyberSecurity;