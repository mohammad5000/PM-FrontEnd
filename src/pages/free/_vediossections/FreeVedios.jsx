import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function FreeVediosSection() {


    return (
      <div className="flex flex-col items-center justify-center md:px-[144px] py-5">
        <Stack direction="column" sx={{ color: "black", width: "100%", pb: 5 }}>
          <Typography variant="h4" sx={{ color: "black" }}>
            Why Study With Us?
          </Typography>
          <Typography variant="p" sx={{ color: "black" }}>
            Why Study With Us?
          </Typography>
        </Stack>

  
        <br />
        <br />
        <br />
  
        <Stack
          spacing={2}
          direction="column"
          sx={{ color: "black", width: "100%", pb: 5 }}
        >
          <Typography variant="h4" sx={{ color: "black" }}>
            What Customers Says
          </Typography>
          <Typography variant="p" sx={{ color: "black" }}>
            Our Happy Customer says about us
          </Typography>
        </Stack>

      </div>
    );
  }