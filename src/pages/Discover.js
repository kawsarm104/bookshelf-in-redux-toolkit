import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';
import { fetchBooks } from '../redux/slices/bookSlices';
const Discover = () => {
    // getting data from redux 
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchBooks())
    },[])
    const books = useSelector(state => state.book.discover)
    return (
        <PageLayout>
            {
                books.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;