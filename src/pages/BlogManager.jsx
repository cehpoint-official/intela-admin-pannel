import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from '../config/firebase';

const BlogManager = () => {
    const [articles, setArticles] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeArticle, setActiveArticle] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const [newImgUrl, setNewImgUrl] = useState('');
    const [newContent, setNewContent] = useState('');

    const articlesCollectionRef = collection(db, 'blog-manager');

    const fetchArticles = async () => {
        const data = await getDocs(articlesCollectionRef);
        setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const openModal = (article) => {
        setActiveArticle(article);
        setNewTitle(article.title);
        setNewImgUrl(article.imgUrl);
        setNewContent(article.content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setActiveArticle(null);
        setNewTitle('');
        setNewImgUrl('');
        setNewContent('');
    };

    const handleTitleChange = (e) => setNewTitle(e.target.value);
    const handleImgUrlChange = (e) => setNewImgUrl(e.target.value);
    const handleContentChange = (e) => setNewContent(e.target.value);

    const handleSave = async () => {
        const articleDoc = doc(db, 'blog-manager', activeArticle.id);
        await updateDoc(articleDoc, {
            title: newTitle,
            imgUrl: newImgUrl,
            content: newContent
        });
        fetchArticles();
        closeModal();
    };

    const handleDelete = async (id) => {
        const articleDoc = doc(db, 'blog-manager', id);
        await deleteDoc(articleDoc);
        fetchArticles();
    };

    const handleAddArticle = async () => {
        await addDoc(articlesCollectionRef, {
            title: "New Article Title",
            imgUrl: "https://via.placeholder.com/150",
            content: "New article content."
        });
        fetchArticles();
    };

    return (
        <div className="p-10">
            <button onClick={handleAddArticle} className="mb-10 p-2 bg-blue-800 text-white rounded">Add New Article</button>
            <div className="grid lg:grid-cols-2 gap-10 sm:grid-cols-1">
                {articles.map(article => (
                    <div key={article.id} className="flex flex-col p-4 bg-blue-900 shadow-2xl rounded-lg">
                        <div className="pl-2 flex justify-between items-center text-white bg-blue-800 h-10 sm:h-auto w-full rounded">
                            <h2 className="text-lg sm:text-base">{article.title}</h2>
                            <button className="text-lg mr-4" onClick={() => openModal(article)}>Edit</button>
                        </div>
                        <div className='flex'>
                            <img src={article.imgUrl} alt="Placeholder Image" className="my-6 sm:w-40 max-w-60 rounded-2xl" />
                            <p className='my-10 text-white m-4'>{article.content}</p>
                        </div>
                        <div className='text-end'>
                            <button type='button' className='w-28 py-2 text-center rounded-lg text-white justify-end bg-blue-800' onClick={() => handleDelete(article.id)}>Delete Article</button>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50">
                    <div className="relative bg-white p-5 rounded max-w-lg w-full mx-auto">
                        <h3 className="text-lg mb-4">Edit Article</h3>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 mb-4"
                            value={newTitle}
                            onChange={handleTitleChange}
                            placeholder="Edit title"
                        />
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 mb-4"
                            value={newImgUrl}
                            onChange={handleImgUrlChange}
                            placeholder="Edit image URL"
                        />
                        <textarea
                            className="w-full h-40 p-2 border border-gray-300 mb-4"
                            value={newContent}
                            onChange={handleContentChange}
                            placeholder="Edit content"
                        />
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleSave}
                            >
                                Save Changes
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
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

export default BlogManager;