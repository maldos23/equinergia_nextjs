import React, { Fragment, useEffect } from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Hidden,
  CardMedia,
} from "@material-ui/core";

import CustomFooter from "../../components/footer/index";
import Contact from "../../components/contacts/index";
import Sidebar from "../../components/sidebar/index";
import { ExpandMoreRounded } from "@material-ui/icons";
import Fade from "react-reveal/Fade";

const Wallpaper_Services = "./assets/images/wallpaper_services.jpg";
const Wallpaper_slogan = "./assets/images/wallpaper_slogan_2.png";
const Ship = "./assets/images/portShip.jpg";
const Truck = "./assets/images/volvoTruck.jpg";
const TruckPng = "./assets/images/truckpng.png";
const CoolerPng = "./assets/images/cooler.png";
const Cooler = "./assets/images/coolercontainer.jpg";
const ContainerPng = "./assets/images/domestic.png";
const Container = "./assets/images/domestic.png";
const ShipPng = "./assets/images/barco.png";

const useStyle = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(4),
  },
  customCardDesktop: {
    width: "50%",
    boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
  },
  contentCard: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  container: {
    position: "relative",
    margin: theme.spacing(10),
  },
}));

export default function Main(props) {
  const classes = useStyle();
  const servicesTemplates = [
    {
      name: "Carga contenerizada",
      slogan: "EFICAZ",
      text:
        "Servicio de arrastre de contenedores marítimos desde y hacia los puertos de Manzanillo y Veracruz en modalidad full y sencillo (Carga General y Peligroso).",
      case: {
        company: "",
        expirence: "",
      },
      img: Ship,
      png: ShipPng,
    },

    {
      name: "Dedicado",
      slogan: "CONFIABLE",
      text:
        "Solución a la medida de sus necesidades de transporte, cajas de 48' y 53' secas, rabones y unidades pequeñas.",
      case: {
        company: "",
        expirence: "",
      },
      img: Truck,
      png: TruckPng,
    },

    {
      name: "Refrigerado",
      slogan: "FRESCO",
      text:
        "Termos de triple zona para temperatura diferenciada en una misma unidad.",
      case: {
        company: "",
        expirence: "",
      },
      img: Cooler,
      png: CoolerPng,
    },
    {
      name: "Doméstico",
      slogan: "SEGURO",
      text: `Servicio de transporte terrestre en caja seca dentro del territorio nacional.
      Nos especializamos en llevar sus mercancias seguras a la frontera Sur con salidas diarias a Ciudad Hidalgo, Chiapas.`,
      case: {
        company: "",
        expirence: "",
      },
      img: Container,
      png: ContainerPng,
    },
  ];

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <Sidebar>
      <TemplatePrincipal />
      <div
        style={{
          textAlign: "center",
          boxShadow: "0px 20px 20px 0px rgba(0,0,0,.1)",
        }}
      >
        <Typography
          style={{ width: "100%" }}
          variant="h3"
          color="textSecondary"
        >
          Servicios
        </Typography>
        <ExpandMoreRounded />
      </div>

      <div>
        {servicesTemplates.map((service, index) => (
          <div>
            <ServicesCards key={index} index={index} {...service} />
          </div>
        ))}
      </div>
      <div className={classes.margin}>
        <Contact />
      </div>
      <CustomFooter />
    </Sidebar>
  );
}

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
        <img
          className={`${classes.wallpaper}`}
          src={Wallpaper_Services}
        />
        <div className={classes.wallpaperContent}>
          <div className="animate__animated  animate__fadeInDown">
            <img width="90%" src={Wallpaper_slogan} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

//--------------------------------------------

const useStyleServicesCards = makeStyles((theme) => ({
  container: {
    position: "relative",
    margin: theme.spacing(6),
  },
  customCardDesktop: {
    position: "absolute",
    boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
    top: "50%",
    left: "50%",
    transform: "translate( -50%, -50%)",
  },
  customCardMobile: {
    boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
  },
  imgService: {
    borderRadius: "15px",
  },
  media: {
    height: "140px",
  },
  contentCard: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
}));

function ServicesCards(props) {
  const classes = useStyleServicesCards();

  useEffect(() => {
    console.log(props.index % 2 ? "inpar" : "Par");
  }, []);

  return (
    <Fragment>
      <div className={classes.container}>
        <Hidden lgUp>
          <MobileVersionCard {...props} />
        </Hidden>
        <Hidden mdDown>
          <div
            style={
              props.index % 2
                ? {
                    textAlign: "end",
                  }
                : {
                    textAlign: "start",
                  }
            }
          >
            <ServicesCardsPng {...props} />
          </div>
        </Hidden>
      </div>
    </Fragment>
  );
}

function MobileVersionCard(props) {
  const classes = useStyleServicesCards();
  return (
    <Fragment>
      <Fade bottom>
        <Card className={classes.customCardMobile}>
          <CardMedia className={classes.media} image={props.img.toString()} />
          <CardContent>
            <Typography component="h2" color="textSecondary" variant="h4">
              {props.name}
            </Typography>
            <br />
            <Fade left>
              <Typography component="p" color="textSecondary" variant="body1">
                {props.text}
              </Typography>
            </Fade>
          </CardContent>
        </Card>
      </Fade>
    </Fragment>
  );
}

const useStyleServicePng = makeStyles((theme) => ({
  container: {
    position: "relative",
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
  },

  imageStart: {
    position: "absolute",
    textAlign: "center",
    width: "40%",
    top: "50%",
    left: "50%",
    transform: "translate( 0%, -40%)",
  },
  imageEnd: {
    position: "absolute",
    textAlign: "center",
    width: "40%",
    top: "50%",
    left: "50%",
    transform: "translate( -100%, -50%)",
  },
  customCardDesktop: {
    width: "50%",
    boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
  },
}));

function ServicesCardsPng(props) {
  const classes = useStyleServicePng();

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: props.index % 2 ? "flex-end" : "flex-start",
        }}
        className={classes.container}
      >
        <div className={classes[props.index % 2 ? "imageEnd" : "imageStart"]}>
          {typeof props.slogan === "string" && (
            <Fade top>
              <Typography
                color="primary"
                variant="h1"
                style={{
                  fontWeight: "bold",
                  top: "-40%",
                  left: "-20%",
                }}
              >
                {props.slogan}
              </Typography>
            </Fade>
          )}
          <Fade bottom>
            <img src={props.png} width="450px" />
          </Fade>
        </div>

        <Card className={classes.customCardDesktop}>
          <CardContent className={classes.contentCard}>
            <Typography color="textSecondary" variant="h4">
              {props.name}
            </Typography>
            <br />
            <Typography color="textSecondary" variant="body1">
              {props.text}
            </Typography>
            <br />
            {typeof props.case === "object" && (
              <div>
                <Typography variant="body2" color="primary">
                  {props.case.expirence}
                </Typography>
                <Typography variant="subtitle2" color="primary">
                  {props.case.company}
                </Typography>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <br />
    </Fragment>
  );
}
