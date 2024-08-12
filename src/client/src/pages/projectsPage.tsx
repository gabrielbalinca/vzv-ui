// Import components
import { ChangeEventHandler, EventHandler, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import SearchBar from '../components/SearchBar';
// Import stylesheet
import '../styles/projects.css';

const Projects = () => {
    const [searchWord, setSearchWord] = useState('');
    const [searchCategory, setSearchCategory] = useState('Category');
    const searchWordHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        setSearchWord(e.currentTarget.value);
    };

    return (
        <>
            <section className='projectsPage'>
                <SearchBar
                    searchWord={searchWord}
                    searchCategory={searchCategory}
                    searchHandler={searchWordHandler}
                    onSelectItem={setSearchCategory}
                />
                <section className='projectsList'>
                    <section className='filterProjects'>Filters!</section>
                    <section className='projects'>
                        <ProjectCard />
                    </section>
                </section>
            </section>
        </>
    );
};

export default Projects;
