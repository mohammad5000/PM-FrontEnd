import { Box, Stack } from "@mui/material";
import StarRating from "./StarRate";
import UserTag from "./UserTag";
import TruncateText from "@/utilites/TextTrancate";

const CustomerReview = ({Review,MainColor="white"}) => (
    <Stack direction="column" className='flex flex-col items-center justify-center'>
            <Stack spacing={2} direction="row" className='flex flex-row items-center justify-between w-full px-3 mb-2'>
            <UserTag userImage={Review.userImage} userName={TruncateText(Review.userName , 16)} size={30}/>

      <StarRating rating={Review.rating}/>
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
        border: `2px solid ${MainColor}`,
        paddingX:4,
        paddingY:4,
        marginX:5
      }}
    >
    <h3 style={{color:MainColor}} className="md:text-md text-sm">{Review.text}</h3>
    </Box>
    </Stack>
  );
export default CustomerReview;