import React from 'react';
import { withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import ArchiveIcon from '@material-ui/icons/Archive';
import theme from './Style';
import TransitionsModal from '../modal/Modal'



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'pink',
    color: theme.palette.common.black,
    opacity: '50%'
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,

    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        border: 0,
        color: 'black',
        padding: '0 40px',
        alignItems: 'center',
        justifyContent: 'center',
     },
    margin: {
      margin: theme.spacing(1),

    },
    extendedIcon: {
      marginRight: theme.spacing(5),
    },
  }));


function createData(cuil, cuit, solicitud, estado, ) {
  return { cuil, cuit, solicitud, estado, };
}

const rows = [
  createData(20330835868, 20330835868, 255654, "Pendiente"),
  createData(20330835868, 20330835868, 255654, "Pendiente"),
  createData(20330835868, 20330835868, 255654, "Pendiente"),
  createData(20330835868, 20330835868, 255654, "Pendiente"),
  createData(20330835868, 20330835868, 255654, "Pendiente"),

];



export default function Tabla() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}> 
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Cuil</StyledTableCell>
            <StyledTableCell align="center">Cuit</StyledTableCell>
            <StyledTableCell align="center">Solicitud#</StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
            <StyledTableCell align="center">Accion</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} align="center" >
              <StyledTableCell component="th" scope="row" align="center">{row.cuil}</StyledTableCell>
              <StyledTableCell align="center">{row.cuit}</StyledTableCell>
              <StyledTableCell align="center">{row.solicitud}</StyledTableCell>
              <StyledTableCell align="center">{row.estado}</StyledTableCell>
              <ThemeProvider  theme={theme} >
                <Fab color="primary" aria-label="descargar" size="small"  className={classes.margin}><CloudDownloadIcon /></Fab>
                <TransitionsModal color="primary" className={classes.margin} />
                <Fab color="default" aria-label="ver" size="small" className={classes.margin}><RemoveRedEyeIcon /></Fab>
                <Fab color="primary" aria-label="descargar" size="small" ><ArchiveIcon /></Fab>
              </ThemeProvider>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div> 
  );
}
