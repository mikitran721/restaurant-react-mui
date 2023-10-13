import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

function Contact() {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact my Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum
          quo, eum odio aperiam est libero nihil, doloribus tempora sed autem
          hic? Odit beatae ab modi? Tenetur veritatis fuga aliquid!
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "650px",
          ml: 10,
          "@media (max-width:650px)": { width: "300px" },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-aria-label="contact label">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1200-00-0000
                  (Poo Phoong)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> poo@abc.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}

export default Contact;
