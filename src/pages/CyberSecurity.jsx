import React, { useState } from 'react';

const CyberSecurity = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedMsg, setEditedMsg] = useState('');
    const [editedImg, setEditedImg] = useState('');
    const [cards, setCards] = useState([
        {
            id: 1,
            title: 'Vulnerability Assessment and Penetration Testing (VAPT)',
            msg: 'Vulnerability Assessment (VA) finds security weaknesses, while Penetration Testing (Pen Testing) simulates attacks to test defenses. Both are crucial for improving cybersecurity..',
            imgUrl: 'https://intela-main.web.app/assets/cs-feature1-e0N9yy6a.png',
        },
        {
            id: 2,
            title: 'Security Audits and Assessments',
            msg: 'Security audits and assessments are evaluations of an organizations security measures. Audits typically involve checking compliance with policies and standards, while assessments focus on identifying vulnerabilities and risks...',
            imgUrl: 'https://intela-main.web.app/assets/cs-feature2-edJ8E7hw.png',
        },
        {
            id: 3,
            title: 'Security Incident Response and Management',
            msg: 'Security Incident Response and Management involves reacting to and handling cybersecurity breaches and threats. It includes identifying, mitigating, and recovering from incidents to minimize damage and restore normal operations swiftly...',
            imgUrl: 'https://intela-main.web.app/assets/cs-feature3-q7agk0Hl.png',
        },
        {
            id: 4,
            title: 'Security Awareness Training',
            msg: 'Security Awareness Training educates individuals about cybersecurity risks, best practices, and policies. It aims to enhance awareness and promote responsible behavior to protect against cyber threats...',
            imgUrl: 'https://intela-main.web.app/assets/cs-feature4-l2YI5hXk.png',
        },
        {
            id: 5,
            title: 'Security Architecture and Design',
            msg: 'Security Architecture and Design involves creating robust and effective security frameworks for IT systems. It focuses on designing structures and strategies to protect against cyber threats and ensure data confidentiality, integrity, and availability....',
            imgUrl: 'https://intela-main.web.app/assets/cs-feature5-NP43vvP0.png',
        },
        {
            id: 6,
            title: 'Security Risk Assessment and Management',
            msg: 'Security Risk Assessment and Management involves identifying, analyzing, and mitigating security risks to protect assets and data. It helps organizations understand threats and vulnerabilities to make informed decisions about security measures...',
            imgUrl: 'https://intela-main.web.app/assets/cs-feature6-qaGVBRM9.png',
        },
        {
            id: 7,
            title: 'Compliance and Regulatory Services',
            msg: 'Compliance and Regulatory Services ensure organizations adhere to legal and industry-specific standards and regulations related to security, privacy, and data protection....',
            imgUrl: 'https://intela-main.web.app/assets/cs-feature7-mInwDuVY.png',
        },
        // ... other card objects
    ]);
    const [activeCard, setActiveCard] = useState(null);

    const openModal = (card) => {
        setIsModalOpen(true);
        setEditedMsg(card.msg);
        setEditedImg(card.imgUrl);
        setActiveCard(card.id);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleMsgChange = (e) => {
        setEditedMsg(e.target.value);
    };

    const handleImgChange = (e) => {
        setEditedImg(e.target.value);
    };

    const handleUpdate = () => {
        setCards(cards.map(card =>
            card.id === activeCard
                ? { ...card, msg: editedMsg, imgUrl: editedImg }
                : card
        ));
        closeModal();
    };

    return (
        <div className="grid lg:grid-cols-2 gap-10 p-10 sm:grid-cols-1">
            {cards.map((card, index) => (
                <div key={index} className="flex flex-col p-4 bg-blue-900 shadow-2xl rounded-lg">
                    <div className="pl-2 flex justify-between items-center text-white bg-blue-800 h-16 w-full rounded">
                        <h2 className="text-xl">{card.title}</h2>
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