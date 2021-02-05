import React, { Fragment, useState } from "react";
import {
  Typography,
  Button,
  Grid,
  makeStyles,
  InputBase,
  Paper,
  Divider,
} from "@material-ui/core";
import {
  AccountBoxRounded,
  PhoneRounded,
  EmailRounded,
  BusinessCenterRounded,
  MessageRounded,
} from "@material-ui/icons";
import Fade from "react-reveal/Fade";

const useStyle = makeStyles((theme) => ({
  textfields: {
    width: "100%",
  },
  magin: {
    margin: theme.spacing(1),
  },
  customCardMobile: {
    boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
  },
  input: {
    margin: theme.spacing(1),
    flex: 1,
  },
  paper: {
    display: "flex",
    padding: "2px 4px",
    alignItems: "center",
    boxShadow: "0px 40px 10px 0px rgba(0,0,0,.1)",
  },
  iconField: {
    padding: 15,
    color: theme.palette.primary.main,
  },
  superMargin:{
    [theme.breakpoints.up("sm")]:{
      margin:theme.spacing(10)
    }
    
  }
}));

export default function Main(props) {
  const classes = useStyle();
  return (
    <Fragment>
      <div className={classes.margin}>
      <div className={classes.superMargin}>
      <FromContact />
      </div>
            
         
      </div>
    </Fragment>
  );
}

function FromContact() {
  const classes = useStyle();
  const [values, setValues] = useState({});

  function sendEmailClient() {
    const email = "ventas@equinergia.com";
    var contentEmail = `mailto:${email}?cc=${values.email}&subject=${escape(" Empresa: ")}${escape(values.company)}&body=${escape("Nombre de contacto: ")}${escape(values.name)}${escape("\n\nMensaje: " + values.msj)}${escape("\nTelefono -> ")}${escape(values.phone)}`;
    window.location.href = contentEmail;
  }

  async function handleChange(e) {
    const { name, value } = e.currentTarget;
    await setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form
      onSubmit={(e) => {
        sendEmailClient();
        e.preventDefault();
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div
            style={{
              background: "linear-gradient(to right, #2F97F2,#3DD8E4)",
              borderRadius: "55px",
              color: "#FFFFFF",
              width: "250px",
              textAlign: "center",
            }}
          >
            <Typography variant="h4">Contacto</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            baseinputProps={{
              name: "name",
              required:true
            }}
            type="text"
            icon={<AccountBoxRounded />}
            label="Nombre completo"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            baseinputProps={{
              name: "phone",
              required:true
            }}
            type="tel"
            icon={<PhoneRounded />}
            label="Teléfono"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            baseinputProps={{
              name: "company",
              required:true
            }}
            type="text"
            icon={<BusinessCenterRounded />}
            label="Empresa"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            baseinputProps={{
              name: "email",
              required:true
            }}
            type="email"
            icon={<EmailRounded />}
            label="Correo electrónico"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            type="text"
            icon={<MessageRounded />}
            label="Mensaje"
            baseinputProps={{
              fullWidth:true,
              name: "msj",
              multiline: true,
              rows: 5,
              required:true
            }}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid style={{ textAlign: "end" }} item xs={12}>
          <Button
            type="submit"
            variant="contained"
            style={{
              background: "linear-gradient(to right, #2F97F2,#3DD8E4)",
              color: "#FFF",
              boxShadow: "none",
              borderRadius: "40px",
            }}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

function CustomTextField(props) {
  const classes = useStyle();
  return (
    <Fragment>
      <Fade bottom>
        <Paper className={classes.paper}>
          {props.icon && <div className={classes.iconField}>{props.icon}</div>}

          <Divider
            orientation="vertical"
            style={{
              height: "28",
            }}
          />
          <Fade right>
            <InputBase
              {...props.baseinputProps}
              type={props.type}
              onChange={(e) => props.onChange(e)}
              className={classes.input}
              placeholder={props.label}
            />
          </Fade>
        </Paper>
      </Fade>
    </Fragment>
  );
}
