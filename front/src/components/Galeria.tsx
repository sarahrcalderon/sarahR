import React from 'react';
import { Box, Card, CardContent, Button, IconButton, AspectRatio, useTheme } from '@mui/joy';

const imagens = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f6fd49162017075.63ceea8065f1a.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5d1890209474117.66fff596bd94c.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/822524137566895.620d55893d8e3.png"
];

const Galeria: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, // três colunas em telas pequenas
        gap: 4,
        margin: '0 auto',
        maxWidth: '1200px',
        padding: 3,
      }}
    >
      {imagens.map((imagem, index) => (
        <Card 
          key={index}
          sx={{
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: theme.palette.mode === 'dark' ? '0px 4px 12px rgba(255, 255, 255, 0.1)' : '0px 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#ffffff',
            color: theme.palette.mode === 'dark' ? 'text.primary' : 'text.secondary',
            position: 'relative',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
            }
          }}
        >
          <Box sx={{ padding: 2, position: 'relative' }}>
            <IconButton
              aria-label="Bookmark Wallet Digital"
              variant="plain"
              color="neutral"
              size="sm"
              sx={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
              }}
              onClick={() => window.open("https://www.behance.net/sarahcalderonn", "_blank")}
            >
              <span role="img" aria-label="bookmark">⚡️</span>
            </IconButton>
          </Box>
          <AspectRatio minHeight="160px" maxHeight="200px">
            <img
              src={imagem}
              loading="lazy"
              alt={`Wallet Digital ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AspectRatio>
          
          <CardContent>
            <Button
              fullWidth
              variant="solid"
              color="neutral"
              onClick={() => window.open("https://www.behance.net/sarahcalderonn", "_blank")}
              sx={{
                fontWeight: 600,
                mt: 2,
                textTransform: 'none',
                backgroundColor:'#dad6d6', 
                color: '#a7a7a7',
              }}
            >
              Veja Mais
            </Button>
          </CardContent>
          
        </Card>
      ))}
    </Box>
  );
};

export default Galeria;
