import { Box, Typography, Grid } from "@mui/joy";

function Habilidades() {
  return (
    <Box
      sx={{ mt: 10, display: "flex", justifyContent: "center" }}
      className="containerSkill"
    >
      <Box
        className="habilidadeTitulo"
        sx={{
          mt: 22,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          color: "#2b2b2b",
          fontFamily: "Poppins, sans-serif",
        }}
      ></Box>
      <Grid
        container
        spacing={2}
        sx={{ mt: 4, mb: 12 }}
        className="listaDeConhecimentos"
      >
        {[
          "Design Interface",
          "Desenvolvimento",
          "Experiência do Usuário",
          "Prototipagem",
          "React",
          "Typescript",
          "Javascript",
          "CSS",
        ].map((skill, index) => (
          <Grid
            xs={6}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="li"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                cursor: "pointer",
                width: "100%",
                maxWidth: 500,
                fontSize: "1rem",
                textAlign: "center",
                textDecoration: "none",
                color: "white",
                backgroundColor: "#333",
                borderRadius: "5px",
                boxSizing: "border-box",
                fontFamily: "Montserrat, sans-serif",
                transition: "background-color 0.2s, transform 0.2s",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  backgroundColor: "#444",
                  transform: "scale(1.05)",
                  "&:before": { opacity: 1 },
                },
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: -2,
                  left: -2,
                  width: "calc(100% + 4px)",
                  height: "calc(100% + 4px)",
                  borderRadius: "5px",
                  backgroundSize: "400%",
                  zIndex: -1,
                  filter: "blur(5px)",
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
                  animation: "glowing 20s linear infinite",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#333",
                  top: 0,
                  left: 0,
                  borderRadius: "5px",
                  zIndex: -1,
                },
                "&:active": { color: "#000" },
              }}
            >
              {skill}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Habilidades;
