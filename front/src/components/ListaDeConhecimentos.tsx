import React from 'react';
import { Box } from "@mui/joy";

function ListaDeConhecimentos() {
  const conhecimentos = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Protótipo",
    "TypeScript",
    "Docker",
    "Design de Interface (UI)",
    "SASS",
    "Experiência de usuário (UX)",
    "Bootstrap",
    "Wireframe",
  ];

  return (
    <Box className="containerSkill">
      <ul className="listaDeConhecimentos">
        {conhecimentos.map((conhecimento, index) => (
          <li key={index} className="glow-on-hover">
            {conhecimento}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default ListaDeConhecimentos;
