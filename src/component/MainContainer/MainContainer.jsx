import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import PostCardList from "../PostCardList/PostCardList";
import UserList from "../UserList/UserList";



export default function MainContainer() {
  return (
    <Box container sx={{ mt: "2rem" }}>
      <Grid
        container
        alignItems="start"
        justify-container="center"
        rowSpacing={2}
        columnSpacing={{ xs: 10, sm: 10 , md: 4}}
      >
        <Grid>
          <UserList />
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          md={8}
        >
          <PostCardList />
        </Grid>
      </Grid>
    </Box>
  );
}
