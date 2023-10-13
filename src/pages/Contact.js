import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Paper, TableContainer, Typography } from "@mui/material";

function Contact() {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact my Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum
          quo, eum odio aperiam est libero nihil, doloribus tempora sed autem
          hic? Odit beatae ab modi? Tenetur veritatis fuga aliquid!
        </p>
      </Box>
      <Box>
        <TableContainer component={Paper}></TableContainer>
      </Box>
    </Layout>
  );
}

export default Contact;
