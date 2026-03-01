import React, { useState } from 'react';

const UrlShortener = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [history, setHistory] = useState(() => {
        try {
            const stored = localStorage.getItem('tinyHistory');
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;

        const code = Math.random().toString(36).substring(2, 8);
        const short = `${window.location.origin}/${code}`;

        const newItem = { original: input, short };
        setResult(short);
        setHistory((prev) => {
            const updated = [newItem, ...prev];
            try {
                localStorage.setItem('tinyHistory', JSON.stringify(updated));
            } catch { }
            return updated;
        });
        setInput('');
    };

    const handleDeleteHistory = (index) => {
        setHistory((prev) => {
            const updated = prev.filter((_, i) => i !== index);
            try {
                localStorage.setItem('tinyHistory', JSON.stringify(updated));
            } catch { }
            return updated;
        });
    };

    const handleClearHistory = () => {
        setHistory([]);
        try {
            localStorage.removeItem('tinyHistory');
        } catch { }
    };

    return (
        <div className="max-w-2xl mx-auto mt-16 p-4 bg-white rounded shadow text-gray-800">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                    type="url"
                    placeholder="Enter a URL to shorten"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border px-2 py-2 rounded text-black focus:outline-none focus:ring-1 focus:ring-red-500"
                    required
                />
                <button
                    type="submit"
                    className="bg-[#0004ffe8] w-[120px] mx-auto   text-white px-4 py-2 rounded transition duration-300 relative group hover:bg-[#0000cc]"
                >
                    Shorten
                    <span className="absolute left-0 bottom-0 w-0 h-[2px]  bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
                </button>
            </form>

            {result && (
                <div className="mt-4">
                    <p>Your shortened URL:</p>
                    <div className="flex items-center gap-2">
                        <a href={result} className="text-blue-600 break-all">
                            {result}
                        </a>
                        <button
                            onClick={() => navigator.clipboard.writeText(result)}
                            className="text-sm text-gray-600 hover:text-gray-800"
                            title="Copy to clipboard"
                        >
                            📋
                        </button>
                    </div>
                </div>
            )}

            {history.length > 0 && (
                <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold">History</h3>
                        <button
                            onClick={handleClearHistory}
                            className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                            Clear All

                        </button>
                    </div>
                    <ul>
                        {history.map((item, i) => (
                            <li key={i} className="mt-2 p-2 border rounded flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="text-sm">
                                        Original:{' '}
                                        <a href={item.original} className="text-blue-600">
                                            {item.original}
                                        </a>
                                    </div>
                                    <div className="text-sm">
                                        Short:{' '}
                                        <a href={item.short} className="text-blue-600">
                                            {item.short}
                                        </a>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDeleteHistory(i)}
                                    border border-red-700
                                    px-4 py-2 rounded-lg
                                    className="bg-red-600 text-white  hover:bg-red-700  px-2 py-1 rounded-lg" title="Delete this entry"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UrlShortener;
