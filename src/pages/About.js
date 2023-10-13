import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:650px)": {
            mt: 0,
            "": {
              mt: 0,
              "& h4": {
                fontSize: "1.5rem",
              },
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to my Restaurant!</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat
          deserunt, quas quam cupiditate voluptas velit, reprehenderit culpa
          modi voluptatum asperiores iste incidunt facere facilis nihil, ipsam
          quisquam amet! Eius voluptatibus voluptatem sunt quis voluptates fugit
          saepe, quos, esse animi eos, recusandae unde eum? Quibusdam dicta
          totam rerum dolores impedit, fugit animi adipisci beatae iusto sunt
          odit vitae laboriosam labore, culpa maxime vel. Cum tempora soluta
          nulla quasi sed vitae magnam, adipisci, enim perspiciatis perferendis
          ut tempore eaque fugiat sit animi illo, repellendus distinctio. Quae
          illo dolor sit culpa doloremque, mollitia consectetur nulla vero vel
          id dolorum, recusandae, placeat dolorem.
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, iste
          ullam quas est odio natus recusandae mollitia dolorum eius fuga.
          Itaque quisquam ullam veritatis ad deleniti, ducimus accusantium
          blanditiis ab nemo, asperiores repellat et reprehenderit vero. Saepe
          officiis quis magnam, aliquam numquam nostrum dolore soluta, atque
          deserunt nihil provident voluptate, necessitatibus culpa qui. Voluptas
          assumenda recusandae eveniet dolor maiores vitae esse dolore dolores
          facilis cumque quidem quo dicta explicabo nulla doloremque, incidunt
          aut maxime animi excepturi? Necessitatibus qui hic tenetur minus illum
          consequatur est beatae velit, minima ducimus, quia similique
          dignissimos eaque assumenda commodi aperiam, quam mollitia ipsum.
          Inventore, id!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
