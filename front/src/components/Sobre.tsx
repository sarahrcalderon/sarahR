import { Box, Grid, Typography, Button } from "@mui/joy";
import { useEffect } from "react";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Divider from '@mui/joy/Divider';

function Sobre() {
  useEffect(() => {
    const toggleDarkMode = () => {
      document.body.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    };

    toggleDarkMode();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", toggleDarkMode);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", toggleDarkMode);
    };
  }, []);

  const btnDownload = () => {
    const link = document.createElement("a");
    link.href = "/curriculo.pdf";
    link.setAttribute("download", "curriculo.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Grid container spacing={5} sx={{ alignItems: "center" }}>
      <Grid xs={12} sm={12}>
        <Box
          component="img"
          src="https://media.licdn.com/dms/image/v2/D4D03AQEqroRg6A83Kw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721738360681?e=1735776000&v=beta&t=Tohpmd2uSoU3DY2rynPibGFO36XC75lqKyP8ajz34RE"
          alt="Imagem descritiva"
          sx={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <Typography level="h4" sx={{ mb: 2, color: "var(--text-color)", marginTop:"30px" }}>
          Um Pouco Sobre Mim
        </Typography>
        <Typography sx={{ color: "var(--text-color)" }}>
          Meu nome é Sarah, sou estudante de Engenharia de Software, atuei como
          designer gráfico por três anos, o que me permitiu iniciar minha
          jornada no mundo da tecnologia. Minha formação em design não apenas
          abriu portas para o universo do front-end e experiência do usuário,
          mas também aprimorou significativamente minhas habilidades de
          comunicação e escrita. Além disso, possuo conhecimento em lógica de
          programação, sendo assim aplico a qualquer linguagem que seja
          necessária. Sou uma pessoa que está sempre em busca de aprimoramento,
          e acredito que minha abordagem multidisciplinar será um diferencial
          valioso em um cenário dinâmico entre design e tecnologia.
        </Typography>
      </Grid>
      <Button
          variant="solid"
          onClick={btnDownload}
          sx={{
            margin: "10px",
            padding: "8px 16px",
            backgroundColor: "var(--button-bg-color)",
            color: "var(--button-text-color)",
            "&:hover": {
              backgroundColor: "var(--button-hover-bg-color)",
            },
          }}
        >
          Baixar Currículo
        </Button>
        
    </Grid>
  );
}

export default Sobre;
