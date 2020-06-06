import React from "react";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import CancelSharpIcon from "@material-ui/icons/CancelSharp";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

export const Login= () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <Paper>
        <Grid container>
          <Grid item md={5}>
            <img src="/logo_ase.png" alt="nacional" style={{ width: "100%" }} />
          </Grid>
          <Grid style={{ background: "orange" }} item md={1} />
          <Grid item md={6}>
            <form noValidate autoComplete="off">
              <div>
                <h6>Acceso al sistema</h6>
                <TextField label="usuario" id="usuario" InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        {" "}
                        <PeopleAlt />{" "}
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <div>
                <TextField label="contraseña" id="contraseña" type="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        {" "}
                        <CancelSharpIcon />{" "}
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <div style={{ padding: 20 }}>
                <Button variant="contained" color="primary">
                  Ingresar{" "}
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
