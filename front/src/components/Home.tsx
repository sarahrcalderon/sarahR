import {Link} from "@mui/joy";
import Breadcrumbs from "@mui/joy/Breadcrumbs";






const Home = () => {
  return (
    <> 
      <Breadcrumbs aria-label="breadcrumbs"   
        sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            my: 2,
         }}>
        {["Design", "Desenvolvimento", "Artigos"].map((item: string) => (
          <Link key={item} color="neutral" href="#basics">
            {item}
          </Link>
        ))}     
      </Breadcrumbs>

    

   
    </>
  );
};

export default Home;
