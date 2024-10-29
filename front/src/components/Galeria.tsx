import React from 'react';
import { Box, Card, CardContent, Typography, Button, IconButton, AspectRatio } from '@mui/joy';


const imagens = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f6fd49162017075.63ceea8065f1a.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5d1890209474117.66fff596bd94c.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/822524137566895.620d55893d8e3.png"
  ];

const Galeria: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: 2,
      }}
    >
      {[1, 2, 3].map((_, index) => (
        <Card key={index} sx={{ width: { xs: '100%', sm: '320px' }, mx: 'auto', position: 'relative' }}>
          <div>
            <Typography level="title-lg">Wallet Digital</Typography>
            <IconButton
              aria-label="bookmark Wallet Digital"
              variant="plain"
              color="neutral"
              size="sm"
              sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
              onClick={() => window.open("https://www.behance.net/sarahcalderonn", "_blank")}
            >
            </IconButton>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={imagens[index]}
              loading="lazy"
              alt={`Wallet Digital ${index + 1}`}
              style={{ borderRadius: '4px' }} 
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <Button
              variant="solid"
              size="md"
              color="neutral"
              aria-label="Explore Wallet Digital"
              sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
              onClick={() => window.open("https://www.behance.net/sarahcalderonn", "_blank")}
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
