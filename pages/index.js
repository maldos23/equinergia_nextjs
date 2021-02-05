import React, { Fragment, useEffect } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Card,
  CardContent,
  Hidden,
  CardMedia,
} from "@material-ui/core";
import CustomFooter from "../components/footer/index";
import Contact from "../components/contacts/index";
import Sidebar from "../components/sidebar/index";
import Fade from "react-reveal/Fade";
const Wallpaper_index = "./assets/images/wallpaper_index.jpg";
const Wallpaper_secondary = "./assets/images/wallpaper2.jpg";
const Wallpaper_slogan = "./assets/images/wallpaper_slogan.png";
const ContainerImagen = "./assets/images/flat_rack.png";

const cardBackground = "linear-gradient(to right, #2F97F2,#3DD8E4)";
const backgroundForms = "#2e4da1";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "calc(100%)",
  },
  margin: {
    margin: theme.spacing(1),
  },
  box: {
    display: "inline-block",
  },
  slogan: {
    position: "absolute",
  },
  container_contacts: {
    margin: theme.spacing(4),
  },
  cards: {
    margin: theme.spacing(1),
    width: "calc(100% + 100px )",
    color: "#FFF",
    textAlign: "center",
    background: backgroundForms,
    boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
  },
}));
export default function Main(props) {
  const classes = useStyle();
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <Sidebar>
      <div className={classes.root}>
        <TemplatePrincipal />
        <div className={classes.margin}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#6B6B6B",
                  width: "100%",
                  display: "flex",
                  textAlign: "center",
                }}
              ></div>
            </Grid>
          </Grid>
        </div>
        <WhoWereSection />
        {/* Card seccion */}
        <div
          style={{
            position: "relative",
          }}
        >
          <CardSeccion />
        </div>

        <div
          style={{
            display: "flex",
          }}
        ></div>

        <div className={classes.container_contacts}>
          <Contact />
        </div>

        <CustomFooter />
      </div>
    </Sidebar>
  );
}

// ------------------------ Conetent oage -----------------

//Estilos de primera seccion
const useStyleTemplatePrincipal = makeStyles((theme) => ({
  wallpaper: {
    width: "100%",
    borderBottomRightRadius: "calc(40%)",
  },
  wallpaperContainer: {
    textAlign: "center",
    position: "relative",
  },
  wallpaperContent: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate( -50% , -50%)",
  },
}));

//Animaciones de la primera seccion

function TemplatePrincipal(props) {
  const classes = useStyleTemplatePrincipal();

  return (
    <Fragment>
      <div className={classes.wallpaperContainer}>
        <img className={`${classes.wallpaper}`} src={Wallpaper_index} />
        <div className={classes.wallpaperContent}>
          <div className="animate__animated  animate__fadeInDown">
            <img width="70%" src={Wallpaper_slogan} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// ------------------ Cards Seccions -------------------

const useStyleCardSeccion = makeStyles((theme) => ({
  container: {
    padding: "30px",
  },
  cards: {
    width: "calc(100% )",
    color: "#FFF",
    height: "650px",
    textAlign: "center",
    background: cardBackground,
    boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
  },
}));

function CardSeccion(props) {
  const classes = useStyleCardSeccion();
  return (
    <div className={classes.container}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Grid item xs={12} md={3} sm={6}>
          <Fade bottom>
            <Card className={classes.cards}>
              <CardContent>
                <Typography variant="h4">
                  <b>Calidad</b>
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body1">
                  Verificamos que cada parte sepa anticipadamente lo que se
                  espera de ella respondiendo a las siguientes preguntas:
                  <br />
                  ¿Qué?
                  <br />
                  ¿Cómo?
                  <br />
                  ¿Cuándo?
                  <br />
                  ¿Dónde?
                  <br />
                  ¿A qué hora?
                  <br />
                  ¿Existe algún requerimiento especial?
                </Typography>
              </CardContent>
              <div
                style={{
                  position: "relative",
                  height: "250px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50% , -50%)",
                    background: backgroundForms,
                    color: "#FFFFFF",
                    height: "170px",
                    width: "170px",
                    marginBottom: "15px",
                    borderRadius: "100px",
                  }}
                ></div>
              </div>
            </Card>
          </Fade>
        </Grid>
        <Grid item md={6}>
          <Hidden smDown>
            <img
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50% , -50%)",
              }}
              src={ContainerImagen}
              width="45%"
            />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Fade bottom>
            <Card className={classes.cards}>
              <CardContent>
                <Typography variant="h4">
                  <b>Compromiso</b>
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body1">
                  Cotejamos cada etapa del proceso de prestación de servicio a
                  fin de que se desarrolle con normalidad. En caso de no ser
                  así, se realizan los avisos correspondientes a fin de no
                  generar desfases de ningún tipo
                </Typography>
              </CardContent>
              <div
                style={{
                  position: "relative",
                  height: "250px",
                  width: "100%",
                }}
              >
                <Fade right>
                  <div
                    style={{
                      position: "absolute",
                      left: "30%",
                      background: backgroundForms,
                      color: "#FFFFFF",
                      height: "170px",
                      width: "100%",
                      marginTop: "15px",
                      marginBottom: "15px",
                      borderTopLeftRadius: "100px",
                      borderBottomLeftRadius: "100px",
                    }}
                  ></div>
                </Fade>
              </div>
            </Card>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyleWhoWereSection = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  marginCard: {
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(40),
    marginRight: theme.spacing(40),
  },
}));

function WhoWereSection() {
  const classes = useStyleWhoWereSection();

  let contentComponent = {
    title: "¿Quiénes somos?",
    img: Wallpaper_secondary,
  };

  return (
    <div>
      <Hidden mdDown>
        <div
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <img src={contentComponent.img} width="100%" />
          <div
            style={{
              textAlign: "center",
              width: "100%",
              left: "50%",
              top: "50%",
              transform: "translate( -50% , -30%)",
              position: "absolute",
            }}
          >
            <Card
              style={{
                background: cardBackground,
                boxShadow: "none",
                borderRadius: 0,
                width: "calc( 100% )",
              }}
            >
              <CardContent>
                <Typography
                  style={{
                    color: "#FFF",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "montserrat",
                  }}
                  variant="h4"
                >
                  {contentComponent.title}
                </Typography>
              </CardContent>
            </Card>
            <Fade bottom>
              <Card
                style={{
                  background: backgroundForms,
                  boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
                }}
                className={classes.marginCard}
              >
                <CardContent>
                  <Typography
                    style={{
                      color: "#FFF",
                      fontFamily: "montserrat",
                      textAlign: "justify",
                    }}
                    variant="body1"
                  >
                    La compañía fue creada en el año 2018 con la intención de
                    proveer servicios de integración de transporte en distintas
                    modalidades; con un servicio diferenciado que proporcione
                    cumplimiento, transparencia, información anticipada,
                    certidumbre y relaciones de largo plazo. <br />
                    <br />
                    Equinergia es el acrónimo de las palabras equipo y energía y
                    resume en sí misma el espíritu que perseguimos: alinear a
                    los distintos actores de la cadena de suministro como son
                    Clientes, Proveedores, Transportes, Prestadores de
                    Servicios, Agencias Aduanales, entre otros para asegurar un
                    suministro ágil, seguro y eficaz
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </div>
        </div>
      </Hidden>
      <Hidden lgUp>
        <Fade bottom>
          <Card
            style={{
              boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
              borderRadius: 0,
              textAlign: "center",
            }}
          >
            <CardMedia style={{ height: 140 }} image={contentComponent.img} />
            <br />
            <Typography
              variant="h3"
              style={{ color: "#9B9B9B", fontFamily: "montserrat" }}
            >
              {contentComponent.title}
            </Typography>
            <CardContent
              style={{
                color: "#9B9B9B",
                fontFamily: "montserrat",
                textAlign: "justify",
              }}
            >
              {contentComponent.text}
            </CardContent>
          </Card>
        </Fade>
      </Hidden>
      <br />
      <br />
    </div>
  );
}
