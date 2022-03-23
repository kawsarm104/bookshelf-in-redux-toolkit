import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleBook from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';

const ReadingList = () => {
    
    const readingList = useSelector(state => state.book.ReadingList)
    return (
        <PageLayout>
            {
            readingList.length===0 && <p>Looks like you've finished all your books! Check them out in your <Link to="finish">finished books</Link> or <Link to="/">discover more</Link>.</p>
             
             }
             {
                readingList.map((book) => (<SingleBook key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default ReadingList;