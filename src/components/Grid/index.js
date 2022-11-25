import React from 'react';
import BookContext from '../../shared/BookContext';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Wrapper } from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default function Grid() {
    
    const value = React.useContext(BookContext);

    return (
        <Wrapper>
        <TableContainer component={Paper}>
            <Table sx={{ width: 900 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell align="right">Rank</TableCell>
                        <TableCell></TableCell>    
                        <TableCell></TableCell>    
                    </TableRow>
                </TableHead>
                <TableBody>
                {value.data.map((row) => (
                    <TableRow
                        key={row.primary_isbn10}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.author}</TableCell>
                        <TableCell align="right">{row.rank}</TableCell>
                        <TableCell><Link to={`/details/${row.primary_isbn10}`}><button><OpenInNewIcon fontSize="small"/></button></Link></TableCell>
                        <TableCell><button onClick={() => value.deleteRecord(row.primary_isbn10)}><DeleteIcon fontSize="small"/></button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Wrapper>
    )
}
