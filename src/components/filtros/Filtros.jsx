import React from 'react';
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {MuiPickersUtilsProvider, KeyboardDatePicker,} from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import Tooltip from '@material-ui/core/Tooltip';
import theme from './Style';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: 0,
    color: 'black',
    padding: '0 40px',
    alignItems: 'center',
    justifyContent: 'center',
     
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    
  },
  icon: {
    verticalAlign: 'bottom',
    height: 40,
    width: 300,
    alignItems: 'left',
    marginTop: 80,

  },
  select: {
    height: 40,
    width: '75%',
    alignItems: 'left',


  },
  details: {
    alignItems: 'center',
    margin: '0 20px',
    
  },
  column: {
    flexBasis: '100%',
  },
  row: {
    flexBasis: '100%',
  },
}));


export default function DetailedExpansionPanel() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  //funcion para la fecha
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //funcion para el select 
  const [valor, setValor] = React.useState('');

  const handleChange = (event) => {
    setValor(event.target.value);
  };
  
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content" id="panel1c-header">
          <div >
            <Typography className={classes.details}>Filtros</Typography>
          </div>

        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
        <div className={classes.column} >
            <div className={classes.row}>
                <Typography className={classes.heading} >Tramite fecha desde</Typography>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container >
                        <KeyboardDatePicker
                        margin="normal"
                        placeholder="Seleccionar"
                        id="date-picker-dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                    <div className={classes.row} >
                        <Typography className={classes.heading}>Cuit</Typography>
                        <TextField id="standard-textarea" placeholder="Completar" multiline />
                    </div>
            </div>
            <div className={classes.row}>
                <Typography className={classes.heading} >Solicitud fecha desde</Typography>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container >
                        <KeyboardDatePicker
                        margin="normal"
                        placeholder="Seleccionar"
                        id="date-picker-dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </div>            
        </div>
        <div className={classes.column} >
            <div className={classes.row}>
                <Typography className={classes.heading} >Tramite fecha hasta</Typography>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container >
                        <KeyboardDatePicker
                        margin="normal"
                        placeholder="Seleccionar"
                        id="date-picker-dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                    <div className={classes.row} >
                        <Typography className={classes.heading}>Cuil</Typography>
                        <TextField id="standard-textarea" placeholder="Completar" multiline />
                    </div>
            </div>
            <div className={classes.row}>
                <Typography className={classes.heading} >Solicitud fecha hasta</Typography>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container >
                        <KeyboardDatePicker
                        margin="normal"
                        placeholder="Seleccionar"
                        id="date-picker-dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={date => handleDateChange(date)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </div>            
        </div>        
        <div className={classes.column} >
            <br />            
            <div>
                <Typography className={classes.heading}>Estado</Typography>
                <container>
                <FormControl className={classes.select} >
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value="{age}" placeholder="Seleccionar" onChange={handleChange}>
                            <MenuItem value={10}>Pendiente de validacion</MenuItem>
                            <MenuItem value={20}>Aprobado y cerrado</MenuItem>
                            <MenuItem value={30}>Control</MenuItem>
                            <MenuItem value={30}>Rechazado</MenuItem>
                        </Select>
                </FormControl>
                </container>  
                <div >
                <Tooltip title="Filtrar">
                    <Button className={classes.icon} variant="contained" size="large" color="primary" >Filtrar</Button>
                </Tooltip>

                </div>  
            </div>   
         
        </div>               
         </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    </ThemeProvider>  
  );
}
