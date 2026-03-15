

import { type FC } from 'react';

const About: FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">About New Mart</h1>
                    <p className="text-xl text-gray-600">Your Premier Destination for Quality Products</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
                    <div className="px-6 py-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Founded in 2020, New Mart has been committed to providing customers with high-quality products
                            at competitive prices. What started as a small local store has grown into a trusted online
                            marketplace serving thousands of satisfied customers worldwide.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We believe in the power of choice and convenience. Our carefully curated selection of products
                            spans from electronics and home goods to fashion and lifestyle items, ensuring that every customer
                            finds exactly what they need.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To deliver exceptional value through quality products, outstanding customer service,
                                and innovative shopping experiences that exceed expectations.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To be the leading e-commerce platform where customers discover, explore, and purchase
                                products with confidence and ease.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-6 py-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Choose New Mart?</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                                <p className="text-gray-600 text-sm">Every product undergoes rigorous quality checks before reaching our customers.</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h4>
                                <p className="text-gray-600 text-sm">We offer the best value for money with transparent pricing and no hidden costs.</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
                                <p className="text-gray-600 text-sm">Our dedicated customer support team is always ready to assist you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;