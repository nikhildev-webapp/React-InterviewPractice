import React from 'react'

const TopicCard = () => {
   const ReactTopics = [ 
  { id: 1, heading: 'What is React.js?', expl: 'React is a Javascript Library used to create UI for website.' }, 
  { id: 2, heading: 'What is Components?', expl: 'Components are fundamental building blocks of react application.' },
  { id: 3, heading: 'What is Virtual DOM?', expl: 'Virtual DOM is lightweight copy of Actual DOM.' },
  { id: 4, heading: 'What is State?', expl: 'State is the components memory.' },
  { id: 5, heading: 'What is useState?', expl: 'useState is the react hook used to mangae components memory.' },
  { id: 6, heading: 'What are Props?', expl: 'Props are read-only properties used to pass data between components.' },
  { id: 7, heading: 'What is JSX?', expl: 'JSX is a syntax extension that lets you write HTML-like code inside JavaScript.' },
  { id: 8, heading: 'What is useEffect?', expl: 'useEffect is a hook used to perform side effects like fetching data or updating the DOM.' },
  { id: 9, heading: 'What is Keys in React?', expl: 'Keys are unique identifiers used by React to track which list items changed, were added, or removed.' },
  { id: 10, heading: 'What is useContext?', expl: 'useContext is a hook that allows components to share global data without explicit prop drilling.' },
  { id: 11, heading: 'What is Prop Drilling?', expl: 'Prop drilling is the process of passing data through multiple layers of components to reach a deeply nested child.' },
  { id: 12, heading: 'What is React Router?', expl: 'React Router is a standard library used to handle navigation and routing in single-page React apps.' },
  { id: 13, heading: 'What is Redux?', expl: 'Redux is an external state management library used for managing complex global state in large React apps.' },
  { id: 14, heading: 'What is a Custom Hook?', expl: 'A custom hook is a reusable JavaScript function that starts with "use" and encapsulates shared hook logic.' },
  { id: 15, heading: 'What is Conditional Rendering?', expl: 'Conditional rendering is a way to display different UI elements based on specific conditions or state.' }
];

  return (
      <>
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ReactTopics.map((topic) => (
          <div className="border rounded-lg shadow-sm p-4 bg-white" key={topic.id}>
            <h1 className="font-bold text-lg mb-2 text-blue-600">{topic.heading}</h1>
            <p className="text-gray-600 text-sm">{topic.expl}</p>
          </div>
        ))}
      </div>     
    </div>
      </>
  )
}

export default TopicCard