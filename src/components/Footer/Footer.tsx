import { Container } from "@mui/material";
import { useContext } from "react";



function Footer() {


  return (
    <Container className="site-footer  font-extralight  text-center  sticky bottom-0" maxWidth={false}
      sx={{
        padding: { xs: 0, sm: 0, lg: 3 },
        px: { lg: 20 },
        borderTop: "1px solid aquamarine",
      }}>
    </Container>
  );
}

export default Footer;
