import { Container, Typography, Breadcrumbs, Link, Box } from '@mui/material';

export default function AboutHeader() {
  return (
    <Box
      sx={{
        backgroundColor: '#6a1b9a', // Purple background
        color: 'white',
        py: 5,
        alignItems: 'center',
        marginTop:"-1px"
      }}
    >
      <Container maxWidth="lg">
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'white' , fontSize:"12px", marginBottom:2}}>
          <Link href="/" color="inherit" underline="hover">
            Home
          </Link>
          <Typography color="inherit" fontSize={"12px"}>About</Typography>
        </Breadcrumbs>

        <Typography variant="h5" component="h1" >
          PM-Academy
        </Typography>

        <Typography variant="subtitle1">
          With one of our online Project Management courses, you can pass your PMP exam with ease.
        </Typography>
      </Container>
    </Box>
  );
}
