import React from 'react'

const Intro = () => {
    return (
      <>
           <div className="flex flex-col justify-center items-center p-4">
               <h1 className="text-lg font-extrabold text-gray-800">Introduction to React</h1>
               <p className="text-base text-gray-600 mt-2 text-center">React is a JavaScript library for building user interfaces with reusable components, JSX, and a virtual DOM. It helps create predictable, performant apps by managing state and rendering only what changes.</p>
            </div>
            <h1 className='font-bold text-black text-3xl'>React Theory Notes</h1>
            <main className='flex flex-1 flex-wrap flex-col'> 
            <section className='m-2'>
                <h3><span className='text-black font-black'>Question:</span> What is react?</h3>
                <p><span className='text-blue-700 font-semibold'>Answer:</span>React is a popular javascript library used for building ser interfaces,speciicaly for single-page applicaions.</p>
            </section>
                <section className='m-2'>
                    <h3 className='font-black'>1-Components In React:</h3>
                    <p>Copmonents are the fundamental building blocks of a React Application.They are independent, reusable pieces of code that serve the same puprpose as jvascript functiona but work in isolation and retrun html</p>
                    <h4 className='font-black'>Features of Components</h4>
                    <ul className='list-none m-1'>
                        <li><span className='font-bold'>Functional Components:</span>Modern React uses Javascript funtion that retrun jsx</li>
                        <li><span className='font-bold'>Reusabillity:</span>You can write a copmonents nce and reuse it across multipages</li>
                        <li><span className='font-bold'>Independent Peices:</span>Each components manages it own struture and logic, making code easier to maintain and test</li>
                    </ul>   
                </section>    
                <section className="m-2">
                    <h3 className='font-black'>2-JSX(Javascript XML)</h3>
                    <p>JSX is a struture extension for javascript that looks identical to html. it allows you to write HTML structure directly inside your javascript code.</p>
                    <ul className='list-none m-1'>
                        <li><span className='font-bold'>Not HTML:</span>While it looks like HTML, browser cannot reade JSX directly. React convet Javascript into standard Javascript background objects.</li>
                        <li><span className='font-bold'>Javascript Expression:</span>You can embed any valid Javascript expression(like variable,math or function call) indside JSC by wrapping it in curly braces</li>
                        <li><span className='font-bold'>Strict rules:</span>JSX must return a single root element. if you have multiple elements you must wrap them in a parent tag or n empty fragments.</li>
                    </ul>
                </section>
                <section className="m-2">
                    <h3 className='font-black'>3-Props(Properties)</h3>
                    <p>Props are shorthabd for 'properties'.They are arguments passed into react components functioning exactly like HTML atribute</p>
                    <ul className="m-1 list-none">
                        <li><span className='font-bold'>Data Passing:</span>Props are used to pass data from parents components to a child component.</li>
                        <li><span className='font-bold'>Ready Only:</span>Props are immutable. A component can never modify its own props; it can only read the data it recive</li>
                        <li><span className='font-bold'>Unidirectional Data flow:</span>Data in React flow in one direction-downwards from parent to child.</li>
                    </ul>
                </section>
                <section className="m-2">
                    <h3 className="font-black">4-State</h3>
                    <p>State is a built-in React object used to stire data or information about the component that can change over time</p>
                    <ul className="m-1 list-none">
                        <li><span className='font-bold'>Component Memory:</span>While props are passed from outside, state is manages internally by the components itself.</li>
                        <li><span className='font-bold'>Triggers Renders:</span>Whenever the state of a component changes, React autmatically re-renders that componeny and its children to update the UI.</li>
                        <li><span className='font-bold'>Dynaminc UI:</span>State is ehat makes a user interfaces interactive(e.g.tracking if a modal is open,holding input text)</li>
                    </ul>
                </section>
                <section className="m-2">
                    <h3 className="font-bold">5-Virtual DOM</h3>
                    <p>The DOM is the tree-like structure of HTML ements on a webpage.Modifying the real DOM directly is slow and performance-heavy.</p>
                    <p>React Solves thiswith the Virtual DOM</p>
                    <ul className="m-1 list-none">
                        <li><span className="font-bold">Lightweight Copy:</span>The virtual dom is a lightweight, virtual representation of DOM kept in memory</li>
                        <li><span className="font-bold">Diffing Algorithm:</span>When state or props changes, React creates a new virtual Dom tree and compares it with the previous one to find exaclty what changed</li>
                        <li><span className="font-bold">reconcilation:</span>Instead of reloading the whole page, React only updates the specific elements that changed in the real browser DOM. This makes React incredibly fast.</li>
                    </ul>
                </section>
                <section className="m-2">
                    <h3 className="font-bold">6-Hooks</h3>
                    <p>hook are built-in function introduced in React 16.8 that allow functional components to usestate and other react features without writing class components</p>
                    <ul className="list-none m-1">
                        <li><span className="font-bold">useSate:</span>The most common hook. it allows you to add state variables to functional components</li>
                        <li><span className="font-bold">useEffects:</span>Allow you to perform 'side effects' in your components, such as fetching data from api, setting up subscriptions, or manually changing the DOM</li>
                        <li><span className="font-bold">Rules of Hooks:</span>Hooks must only be called at the very top level of your loops,conditions or nested funcions. They must only be called from React functional components</li>
                    </ul>
                </section>
                
            </main>
    </> 
  )
}

export default Intro