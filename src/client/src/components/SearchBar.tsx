// Import modules
import { ChangeEventHandler, useState } from 'react';
// Import models/interfaces

// Variables
interface Props {
    searchWord: string;
    searchCategory: string;
    searchHandler: ChangeEventHandler;
    onSelectItem: (item: string) => void;
}

const searchOptions = ['Title', 'Description'];

const SearchBar = (search: Props) => {
    const [searchCategory, setSearchCategory] = useState('Category');

    return (
        <>
            <section className='searchBar'>
                <div className='input-group mb-3'>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Search'
                        aria-label='Search'
                        aria-describedby='basic-addon2'
                        value={search.searchWord}
                        onChange={search.searchHandler}
                    />
                    <div className='input-group-append'>
                        <button
                            className='btn btn-outline-secondary'
                            type='button'
                            onClick={() => {
                                search.searchHandler;
                            }}
                        >
                            Search
                        </button>
                    </div>
                    <div className='input-group-append'>
                        <div className='dropdown'>
                            <button
                                className='btn btn-secondary dropdown-toggle'
                                type='button'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                {searchCategory}
                            </button>
                            <ul className='dropdown-menu'>
                                {searchOptions.map((item) => {
                                    return (
                                        <li key={item}>
                                            <a
                                                className='dropdown-item'
                                                key={item}
                                                onClick={() => {
                                                    setSearchCategory(item);
                                                    search.onSelectItem(item);
                                                    console.log(
                                                        search.onSelectItem
                                                    );
                                                }}
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default SearchBar;
