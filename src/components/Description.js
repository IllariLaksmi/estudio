import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
          <p>Estefanía Simich, candidata a doctorado en Sexualidad Humana en el centro de estudios
California Institute of Integral Studies (CIIS) ubicado en San Francisco, California, está
conduciendo un estudio de investigación sobre la conceptualización de la ciudadanía sexual de
las mujeres migrantes peruanas. La investigación actual sobre la ciudadanía sexual de las
mujeres migrantes es limitada. Por lo tanto, esta investigación tiene como objetivo honrar las
experiencias migratorias y la visión de las mujeres que participan en este estudio de
investigación. La participación en este estudio proporcionará información valiosa en el campo de
la sexualidad humana y al concepto de ciudadanía sexual.</p>
      </Container>
    </React.Fragment>
  );
}
