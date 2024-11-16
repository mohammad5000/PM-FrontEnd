// components/StudyPlanCard.jsx
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  CardActions,
} from "@mui/material";
import VideoPopup from "./VideoPopup";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

function VideoCard({ video }) {
  return (
    <Card elevation={1} sx={{ maxWidth: 250 , borderRadius:"10px" }}>
      {/* Image */}
      <Box position="relative">
        <CardMedia
          component="img"
          height="140"
          image={video.image} // Replace with the path to your image
          alt="Video Thumbnail"
        />
        <Chip
          icon={<CalendarMonthOutlinedIcon fontSize="small" color="#ffffff" />}
          label={video.date}
          sx={{
            position: "absolute",
            bottom: 10,
            left: 10,
            fontSize: "10px",
            fontWeight: "bold",
            backgroundColor: "#6524D3",
            color: "white",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -5,
            right: 0,
          }}
        >
          <VideoPopup video={video.url} />
        </Box>
      </Box>
      {/* Content */}
      <CardContent sx={{ p: "8px 16px 3px", flexDirection: "row" }}>
      <Box sx={{ display: "inline-flex", flexDirection: "row" }}>
          <AccessTimeIcon color="action" sx={{ fontSize: 16, mr: 0.5, mt: "2px" }} />
          <Typography variant="body2" color="text.secondary">{video.duration}</Typography>
        </Box>
        {/* Title */}
        <Typography variant="h6" component="h3" sx={{fontSize:"18px", color:"#6524D3"}}>
          {video.title}
        </Typography>
        
      </CardContent>

      <CardActions>
        {video.categories.map((category, index) => (
          <Chip
            key={index}
            label={category}
            sx={{
              marginLeft: "1px",
              backgroundColor: "#e0e0e0",
              color: "#000",
            }}
          />
        ))}
      </CardActions>
    </Card>
  );
}

export default VideoCard;
