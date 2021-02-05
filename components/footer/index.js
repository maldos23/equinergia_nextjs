import React, { Fragment } from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  ListItemAvatar,
  Avatar,
  CardContent,
} from "@material-ui/core";
import { MailRounded, PhoneRounded } from "@material-ui/icons";
import  Link  from "next/link";
const useStyle = makeStyles((theme) => ({
  card: {
    color: "#FFF",
    position: "relative",
    background: "#8D8D8D",
    width: "100%",
    height: "auto",
  },
  margin: {
    margin: theme.spacing(1),
  },
  links: {
    color: "#FFF",
    textDecoration: "none",
  },
}));
export default function Main(props) {
  const classes = useStyle();
  return (
    <Fragment>
      <footer>
        <div className={classes.card}>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="center" justify="center">
              <Grid item xs={12} sm={4}>
                <List>
                  <ListItem>
                    <a className={classes.links} href="/">
                      Nosotros
                    </a>
                  </ListItem>
                  <ListItem>
                    <a className={classes.links} href="/services.html">
                      Servicios
                    </a>
                  </ListItem>
                  <ListItem>
                    <a className={classes.links} href="/about.html">
                      Cultura
                    </a>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={4}>
                <CardContent>
                  <Typography variant="h6">©Equinergia Logística</Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography>Contacto</Typography>
                <div>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <PhoneRounded />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Teléfono" secondary="5543171730" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <MailRounded />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Correo"
                        secondary="ventas@equinergia.com"
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div>
          <Typography align="center" variant="subtitle2">
            Created by <a href="https://www.workana.com/freelancer/f5b133747faff75c17ff14defd905582?ref=user_dropdown">Gino Missael</a>
          </Typography>
        </div>
      </footer>
    </Fragment>
  );
}
