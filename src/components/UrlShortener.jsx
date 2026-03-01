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
        <div className="max-w-2xl mx-auto mt-16 p-6 bg-[#0f0f0f] border-2 border-red-500 rounded shadow text-[#E5E5E5] border border-[#222]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                    type="url"
                    placeholder="Enter a URL to shorten"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border border-[#333] bg-[#141414] px-3 py-2 rounded text-white focus:outline-none focus:ring-1 focus:ring-[#E50914]"
                    required
                />
                <button
                    type="submit"
                    className="w-35 mx-auto text-white px-4 py-2 rounded relative group bg-transparent border border-transparent hover:border-[#333] transition duration-300"
                >
                    Shorten
                    <span className="absolute left-0 bottom-0 w-0 h-0.5  bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
                </button>
            </form>

            {result && (
                <div className="mt-4">
                    <p>Your shortened URL:</p>
                    <div className="flex items-center gap-2">
                        <a href={result} className="text-[#E50914] break-all">
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
                                        <a href={item.original} className="text-[#cbd5e1]">
                                            {item.original}
                                        </a>
                                    </div>
                                    <div className="text-sm">
                                        Short:{' '}
                                        <a href={item.short} className="text-[#E50914]">
                                            {item.short}
                                        </a>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDeleteHistory(i)}
                                    className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg"
                                    title="Delete this entry"
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
