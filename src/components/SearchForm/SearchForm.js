import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button'
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearching, } from '../../redux/store';


const SearchForm = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState('')

    useEffect(() => {
        dispatch(updateSearching(''));
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearching(search))
        setSearch('')
    }
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder='search...' value={search} onChange={e => setSearch(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;