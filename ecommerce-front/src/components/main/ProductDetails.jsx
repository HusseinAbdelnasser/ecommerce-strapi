import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const ProductDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex", mt: {xs: 1} }}>
        <img src="src/images/img-2.jpg" width={300} alt="" />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">Women's Fashion</Typography>
        <Typography
          my={0.4}
          fontSize={"22px"}
          color={"crimson"}
          variant="body1"
        >
          $12.99
        </Typography>
        <Typography 
          sx={{fontSize: {xs: "12px"}}}
          variant="body1" 
        >
          Lizards are a widespread group of squmate reptiles, with species,
          ranging across all contients except Antarctical
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {["src/images/img-2.jpg", "src/images/img-3.jpg"].map((item) => {
            return (
              <img
                key={item}
                style={{ borderRadius: 3 }}
                height={100}
                width={90}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>

        <Button
          sx={{ textTransform: "capitalize", mb: { xs: 1, sm: 0 } }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
