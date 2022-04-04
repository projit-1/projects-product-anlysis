import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='question'>
            <div className="question-01">
                <h2>What is Contex API</h2>
                <p>The React Context API is a process for making a React app to efficiently produce global variables that is able to pass around. This is the alternative to "prop drilling" or moving props from grandparent component to child component to parent component, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                <p>
                    Context API is one of the best new features added in version 16.3 of React that allows one to share state across the entire app or part of it lightly and with ease. React.createContext() is very much needed and all you need. It returns receiver and provider just like a consumer and a provider. Generally, Provider is a component that as it's names commonly suggests provides the state to its children this auto-suggestion makes you effective as a developer.</p>
            </div>
            <div className="question-02">
                <h2>What is Semantic Tag</h2>
                <p>An important rule in web design and development is the idea of using HTML elements to show what they generally are, rather than how they may be appeared in the browser by default. It is known as the most popularly used semantic HTML.
                    Semantic HTML or semantic markup is HTML actually introduces the meaning to the web page rather than just presentation which is the better solution for SEO as well as code reading for an external code reader.</p>
                <p>
                    For example, a tag indicates that the enclosed text is a paragraph. This is both semantic and presentational structure because people commonly know what paragraphs are, and browsers know how to display them or we see them on screen.
                    If we find out the most uses of semantic HTML tags these will include: Header tags h1 through h6 , blockquote , code, em, p, and ul .  There are many more semantic HTML tags to use as you build a standards-compliant website.</p>
            </div>
            <div className="question-03">
                <h2>What is Inline-Block, and Inline-Block element</h2>
                <p>ans</p>
            </div>
        </div>
    );
};

export default Blogs;