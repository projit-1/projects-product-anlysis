import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='question'>
            <div className="question-01">
                <h2>(i)What is Contex API</h2>
                <p>The React Context API is a process for making a React app to efficiently produce global variables that is able to pass around. This is the alternative to "prop drilling" or moving props from grandparent component to child component to parent component, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                <p>
                    Context API is one of the best new features added in version 16.3 of React that allows one to share state across the entire app or part of it lightly and with ease. React.createContext() is very much needed and all you need. It returns receiver and provider just like a consumer and a provider. Generally, Provider is a component that as it's names commonly suggests provides the state to its children this auto-suggestion makes you effective as a developer.</p>
            </div>
            <div className="question-02">
                <h2>(ii)What is Semantic Tag</h2>
                <p>An important rule in web design and development is the idea of using HTML elements to show what they generally are, rather than how they may be appeared in the browser by default. It is known as the most popularly used semantic HTML.
                    Semantic HTML or semantic markup is HTML actually introduces the meaning to the web page rather than just presentation which is the better solution for SEO as well as code reading for an external code reader.</p>
                <p>
                    For example, a tag indicates that the enclosed text is a paragraph. This is both semantic and presentational structure because people commonly know what paragraphs are, and browsers know how to display them or we see them on screen.
                    If we find out the most uses of semantic HTML tags these will include: Header tags h1 through h6 , blockquote , code, em, p, and ul .  There are many more semantic HTML tags to use as you build a standards-compliant website.</p>
            </div>
            <div className="question-03">
                <h2>(iii)Difference Between Block Elements And Inline Elements</h2>
                <p>
                    There are some significant differences between the inline and block elements of HTML. Which are one of the important areas where a new web developer often gets confused because he/she is unable to know which are inline and block elements. The thinking is very simple one has a closing tag but on the other hand, another has no closing tag.  </p>

                <p> So let us see the differences between the inline and block elements in HTML-5 and the different frequently used inline and block HTML elements.
                    Block elements consume the entire width available irrespective of their sufficiency. They always start in a new line and have top and bottom margins. It does not contain any other elements next to it.   </p>

                <h5>Examples of Block Elements: </h5>
                <p> h1 to h6, nav, footer, section, main, article, div, hr, li, ul, ol, p, table, etc. tags are block elements tags. </p>

                <h5>  Examples of Inline Elements: </h5>

                <p> a, strong, em,b, I, q, mark, etc are inline element tags
                    To be a perfect web developer we need to know all these types of tags or elements clearly. </p>

            </div>
        </div>
    );
};

export default Blogs;