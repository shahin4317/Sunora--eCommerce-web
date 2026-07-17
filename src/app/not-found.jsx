import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
            <div className="text-center">
                <h1 className="text-8xl font-extrabold text-blue-600">404</h1>

                <h2 className="mt-4 text-3xl font-bold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-3 text-gray-500 max-w-md mx-auto">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>

                <Link
                    href={'/'}
                    className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;