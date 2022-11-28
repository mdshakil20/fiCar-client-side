import React from 'react';

const Blogs = () => {
    return (
        <div className="max-w-[1200px] mx-auto my-3 ">
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {/* --------artical 1 ----------- */}
                    <div className="max-w-md mx-auto m-3 p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
                        <article>
                            <h2 className="text-xl font-bold">What are the different ways to manage a state in a React application?</h2>
                            <p className="mt-4 text-gray-400">
                                There are four main types of state you need to properly manage in your React apps:<br />

                                1.Local state<br />
                                2.Global state<br />
                                3.Server state<br />
                                4.URL state<br />
                            </p>
                            <div className="flex items-center mt-8 space-x-4">
                                <img src="https://i.ibb.co/N1ZwcPT/Shakil.png" alt="" className="w-10 h-10 rounded-full bg-gray-500" />
                                <div>
                                    <h3 className="text-sm font-medium">Shakil</h3>
                                    <time datetime="2021-02-18" className="text-sm text-gray-400">Nov 28th 2022</time>
                                </div>
                            </div>
                        </article>
                    </div>
                    {/* --------artical 2 ----------- */}

                    <div className="max-w-md mx-auto m-3 p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
                        <article>
                            <h2 className="text-xl font-bold">React vs. Angular vs. Vue?</h2>
                            <p className="mt-4 text-gray-400">
                                React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.<br />
                                They can be used almost interchangeably to build front-end applications, but they're not 100 percent the same, so it makes sense to compare them and understand their differences.
                                Each framework is component-based and allows the rapid creation of UI features.

                                However, they all have a different structure and architecture — so first, we'll look into their architectural differences to understand the philosophy behind them.
                            </p>
                            <div className="flex items-center mt-8 space-x-4">
                                <img src="https://i.ibb.co/N1ZwcPT/Shakil.png" alt="" className="w-10 h-10 rounded-full bg-gray-500" />
                                <div>
                                    <h3 className="text-sm font-medium">Shakil</h3>
                                    <time datetime="2021-02-18" className="text-sm text-gray-400">Nov 28th 2022</time>
                                </div>
                            </div>
                        </article>
                    </div>
                    {/* --------artical 3 ----------- */}

                    <div className="max-w-md mx-auto m-3 p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
                        <article>
                            <h2 className="text-xl font-bold">What is a unit test? Why should we write unit tests?</h2>
                            <p className="mt-4 text-gray-400">
                                A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system.<br />
                                Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. It simplifies the debugging process. Unit testing is an integral part of extreme programming.
                            </p>
                            <div className="flex items-center mt-8 space-x-4">
                                <img src="https://i.ibb.co/N1ZwcPT/Shakil.png" alt="" className="w-10 h-10 rounded-full bg-gray-500" />
                                <div>
                                    <h3 className="text-sm font-medium">Shakil</h3>
                                    <time datetime="2021-02-18" className="text-sm text-gray-400">Nov 28th 2022</time>
                                </div>
                            </div>
                        </article>
                    </div>
                    {/* --------artical 4 ----------- */}

                    <div className="max-w-md mx-auto m-3 p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
                        <article>
                            <h2 className="text-xl font-bold">How does prototypical inheritance work?</h2>
                            <p className="mt-4 text-gray-400">
                                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                            </p>
                            <div className="flex items-center mt-8 space-x-4">
                                <img src="https://i.ibb.co/N1ZwcPT/Shakil.png" alt="" className="w-10 h-10 rounded-full bg-gray-500" />
                                <div>
                                    <h3 className="text-sm font-medium">Shakil</h3>
                                    <time datetime="2021-02-18" className="text-sm text-gray-400">Nov 28th 2022</time>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
      
    );
};

export default Blogs;