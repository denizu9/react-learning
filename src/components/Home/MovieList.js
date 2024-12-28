import { useEffect, useState } from 'react'
import { TableRow, TableHeaderCell, TableHeader, TableFooter,TableCell,TableBody,MenuItem,Icon,Label,Menu,Table,Container,} from 'semantic-ui-react'
import getMoviesAPI from '../../api/GetMoviesAPI';


const MovieList = (props) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let api = new getMoviesAPI();
        api.getMovies().then(movie => setMovies(movie.data))

    }, []);

    return (
        <div>
            <Container className='movieList-container'>
                <Table celled>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Title</TableHeaderCell>
                            <TableHeaderCell>Genre</TableHeaderCell>
                            <TableHeaderCell>Year</TableHeaderCell>
                            <TableHeaderCell>Main Character Name</TableHeaderCell>
                            <TableHeaderCell>Description</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {
                            movies.map(movie => (
                                <TableRow key={movie.id}>
                                    <TableCell>{movie.title}</TableCell>
                                    <TableCell>{movie.genre}</TableCell>
                                    <TableCell>{movie.year}</TableCell>
                                    <TableCell>{movie.mainCharacterName}</TableCell>
                                    <TableCell>{movie.description}</TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TableHeaderCell colSpan='5'>
                                <Menu floated='right' pagination>
                                    <MenuItem as='a' icon>
                                        <Icon name='chevron left' />
                                    </MenuItem>
                                    <MenuItem as='a'>1</MenuItem>
                                    <MenuItem as='a'>2</MenuItem>
                                    <MenuItem as='a'>3</MenuItem>
                                    <MenuItem as='a'>4</MenuItem>
                                    <MenuItem as='a' icon>
                                        <Icon name='chevron right' />
                                    </MenuItem>
                                </Menu>
                            </TableHeaderCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Container>
        </div>
    )
}

export default MovieList