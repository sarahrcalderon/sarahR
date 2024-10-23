import { Grid, Typography } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";

import * as React from "react";

const Home = () => {
  return (
    <>
      <Grid container spacing={1} sx={{ justifyContent: "center" }}>
        <Typography>Sarah Calderon</Typography>
        <Avatar alt="Sarah" src="" size="lg" />
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          my: 8,
        }}
      >
        {[
          "Experiência de usuário",
          "Design de Interface",
          "Typescript",
          "CSS",
        ].map((text) => (
          <Box
            key={text}
            sx={{
              height: 150,
              width: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
              border: "2px solid grey",
              color: "#fff",
              backgroundColor: "#111", // Fundo escuro para destacar o efeito neon
              transition: "all 0.3s",
              "&:hover": {
                borderColor: "transparent",
                borderImage:
                  "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet) 1",
                boxShadow:
                  "0 0 20px rgba(255, 0, 0, 0.8), 0 0 30px rgba(0, 255, 0, 0.8), 0 0 40px rgba(0, 0, 255, 0.8)", // Efeito neon colorido
                color: "#fff",
                textShadow:
                  "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 0, 0, 0.8), 0 0 30px rgba(0, 255, 0, 0.8)", // Efeito neon no texto
              },
            }}
          >
            {text}
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {["Javascript", "React", "Protótipo", "Material UI"].map((text) => (
          <Box
            key={text}
            sx={{
              height: 150,
              width: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
              border: "2px solid grey",
              color: "#fff",
              backgroundColor: "#111",
              transition: "all 0.3s",
              "&:hover": {
                borderColor: "transparent",
                borderImage:
                  "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet) 1",
                boxShadow:
                  "0 0 20px rgba(255, 0, 0, 0.8), 0 0 30px rgba(0, 255, 0, 0.8), 0 0 40px rgba(0, 0, 255, 0.8)",
                color: "#fff",
                textShadow:
                  "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 0, 0, 0.8), 0 0 30px rgba(0, 255, 0, 0.8)",
              },
            }}
          >
            {text}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Home;
