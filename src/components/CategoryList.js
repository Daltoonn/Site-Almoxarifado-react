import React from 'react'
import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Paper } from '@mui/material'

function CategoryList(props) {

  const rows = [
    {
      id: '1',
      name:'informatica'
    }
  ];
  
  return (
    <div>
      <h4>{props.texto}</h4>

       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default CategoryList
