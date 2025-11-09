import { Button, Stack, Typography, Box } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";
import bgImage from "../assets/background.jpg";
function HomePage() {
   return (
      <Stack
         direction="row"
         justifyContent="center"
         minHeight="80vh"
         marginY="auto"
      >
         <Box padding={16}>
            <div>
               <Stack direction="row" alignItems="center" spacing={1}>
                  <AssignmentIcon />
                  <Typography variant="h4" fontWeight="medium">
                     Task Manager
                  </Typography>
               </Stack>

               <Stack marginY={10} spacing={2}>
                  <Typography variant="h3">
                     Welcome to my <br />
                     Task Manager Project!
                  </Typography>
                  <Typography variant="subtitle1" color="GrayText">
                     Built by Spiderman
                  </Typography>
               </Stack>

               <Button
                  size="large"
                  variant="contained"
                  component={Link}
                  to="/tasks"
               >
                  See my tasks
               </Button>
            </div>
         </Box>
         <Box
            sx={{
               backgroundImage: `url(${bgImage})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               width: "50%",
               margin: 8,
               borderRadius: 8,
            }}
         ></Box>
      </Stack>
   );
}

export default HomePage;
