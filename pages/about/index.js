import React, { Fragment, useEffect } from "react";
import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";
import CustomFooter from "../../components/footer/index";
import Contact from "../../components/contacts/index";
import Sidebar from "../../components/sidebar/index";
import Fade from "react-reveal/Fade";
const MissionSvg = "./assets/svg/mission.svg";
const VisionSvg = "./assets/svg/vision.svg";
const ContainerSvg = "./assets/svg/container.svg";
const useStyle = makeStyles((theme) => ({
  rootMargin: {
    margin: theme.spacing(6),
  },
  customCard: {
    textAlign: "right",
    margin: theme.spacing(10),
    boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
  },
  cicleCard: {
    margin: theme.spacing(2),
    borderRadius: "50%",
    boxShadow: "0px 60px 20px 0px rgba(0,0,0,.1)",
  },
}));

export default function Main(props) {
  const classes = useStyle();

  const cards = [
    {
      svg: MissionSvg,
      title: "Misión",
      text: `Facilitar las operaciones de nuestros clientes de manera que
      estos dispongan de un servicio impecable con unidades en buen
      estado, personal calificado, seguridad e información oportuna
      proveniente de un Socio Comercial confiable.`,
    },
    {
      svg: VisionSvg,
      title: "Visión",
      text: `Ser reconocidos por nuestros Clientes como un aliado
      estratégico y un referente en cuanto a servicio, puntualidad y
      cumplimiento.`,
    },
    {
      svg: ContainerSvg,
      title: "Valores",
      text: `Transparencia; Honestidad; Sentido de la urgencia;
      Anticipación; Correcta ejecución; enfoque al Cliente; Atención
      Personalizada.`,
    },
  ];

  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <Sidebar>
      <div className={classes.rootMargin}>
        {cards.map((item, index) => (
          <Fade bottom key={index}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {index % 2 === 0 && (
                <img
                  style={{ width: "300px", height: "300px" }}
                  src={item.svg}
                />
              )}

              <Card className={classes.customCard}>
                <CardContent>
                  <Fade right>
                    <Typography variant="h5" color="primary">
                      {item.title}
                    </Typography>
                  </Fade>
                  <Fade left>
                    <Typography>{item.text}</Typography>
                  </Fade>
                </CardContent>
              </Card>
              {index % 2 !== 0 && (
                <img
                  style={{ width: "300px", height: "300px" }}
                  src={item.svg}
                />
              )}
            </div>
          </Fade>
        ))}
        <br />
        <br />
        <br />
        <Contact />
      </div>

      <CustomFooter />
    </Sidebar>
  );
}
