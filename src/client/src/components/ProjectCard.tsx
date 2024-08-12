// Import models/interfaces
import { iProject } from '../_models/project';

// Test Data
const proj1: iProject = {
    id: 1,
    title: 'Title 1',
    description: 'Discripton 1',
    image: 'https://cdn.pixabay.com/photo/2016/03/29/08/48/project-1287781_640.jpg',
};

const proj2: iProject = {
    id: 2,
    title: 'Title 2',
    description: 'Discripton 2',
    image: 'https://st4.depositphotos.com/1842549/20767/i/450/depositphotos_207679818-stock-photo-projects-icon-internet-button-white.jpg',
};

const proj3: iProject = {
    id: 3,
    title: 'Title 3',
    description: 'Discripton 3',
    image: 'https://media.licdn.com/dms/image/C4E12AQG2pj4JkZG0Yw/article-cover_image-shrink_600_2000/0/1520115601955?e=2147483647&v=beta&t=15dJ3ErnJfshcaCF1pn0x_PZO4-UeIeYayT1JR_1HY8',
};

const proj4: iProject = {
    id: 4,
    title: 'Title 4',
    description: 'Discripton 4',
    image: 'https://cdn.pixabay.com/photo/2016/03/29/08/48/project-1287781_640.jpg',
};

const proj5: iProject = {
    id: 5,
    title: 'Title 5',
    description: 'Discripton 5',
    image: 'https://st4.depositphotos.com/1842549/20767/i/450/depositphotos_207679818-stock-photo-projects-icon-internet-button-white.jpg',
};

const proj6: iProject = {
    id: 6,
    title: 'Title 6',
    description: 'Discripton 6',
    image: 'https://media.licdn.com/dms/image/C4E12AQG2pj4JkZG0Yw/article-cover_image-shrink_600_2000/0/1520115601955?e=2147483647&v=beta&t=15dJ3ErnJfshcaCF1pn0x_PZO4-UeIeYayT1JR_1HY8',
};

const projects: iProject[] = [proj1, proj2, proj3, proj4, proj5, proj6];

const ProjectCard = () => {
    return projects.map((item) => {
        return (
            <div className='projectCard' key={item.id}>
                <div>
                    <img src={item.image} />
                </div>
                <div>{item.title}</div>
                <div>{item.description}</div>
            </div>
        );
    });
};

export default ProjectCard;
