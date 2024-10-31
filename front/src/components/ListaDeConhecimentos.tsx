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
    "Automação front-end com NPM",
    "Experiência de usuário (UX)",
    "Git e GitHub",
    "Sass",
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
