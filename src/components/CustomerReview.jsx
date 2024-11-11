import { Box, Stack } from "@mui/material";
import StarRating from "./StarRate";
import UserTag from "./UserTag";

const CustomerReview = ({ImageSource="/assets/Images/defultImage.png",Text=""}) => (
    <Stack direction="column" className='flex flex-col items-center justify-center'>
            <Stack spacing={2} direction="row" className='flex flex-row items-center justify-between w-full px-3 mb-2'>
            <UserTag userImage={"/assets/Images/IconCert.png"} userName={"Ali Mohammed"} size={30}/>

      <StarRating rating={3}/>
</Stack>

    <Box 
      sx={{
        width: "100%",
        height: 200,
        borderRadius: 5,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '4px solid white',
        paddingX:4,
        paddingY:4,
        marginX:5
      }}
    >
    <h3 className='text-white'>Consequat ex aliqua veniam mollit ullamco. Esse adipisicing ea est ea nulla labore officia. Occaecat dolore et officia ea anim proident magna proident eiusmod ipsum do velit fugiat adipisicing. Esse est ea fugiat fugiat cillum.</h3>
    </Box>
    </Stack>
  );
export default CustomerReview;