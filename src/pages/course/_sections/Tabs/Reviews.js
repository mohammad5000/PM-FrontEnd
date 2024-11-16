import CustomerReview from "@/components/CustomerReview"
import { Grid, Container } from "@mui/material"

export default function CourseReviews({ reviews = [
    {
      id: 1,
      userName: "John Doe",
      userImage: "/assets/Images/IconCert.png",
      rating: 4,
      text: "Consequat ex aliqua veniam mollit ullamco. Esse adipisicing ea est ea nulla labore officia. Occaecat dolore et officia ea anim proident magna proident eiusmod ipsum do velit fugiat adipisicing. Esse est ea fugiat fugiat cillum.",
    },
    {
      id: 2,
      userName: "Mohamed Ali",
      userImage: "/assets/Images/IconCert.png",
      rating: 3,
      text: "Consequat ex aliqua veniam mollit ullamco. Esse adipisicing ea est ea nulla labore officia. Occaecat dolore et officia ea anim proident magna proident eiusmod ipsum do velit fugiat adipisicing. Esse est ea fugiat fugiat cillum.",
    },
    {
      id: 3,
      userName: "Ahmed Mohamed",
      userImage: "/assets/Images/IconCert.png",
      rating: 4,
      text: "Consequat ex aliqua veniam mollit ullamco. Esse adipisicing ea est ea nulla labore officia. Occaecat dolore et officia ea anim proident magna proident eiusmod ipsum do velit fugiat adipisicing. Esse est ea fugiat fugiat cillum.",
    },
    {
      id: 4,
      userName: "Sarah Smith",
      userImage: "/assets/Images/IconCert.png",
      rating: 5,
      text: "This course was fantastic! I learned so much and the instructor was amazing. Highly recommended for anyone looking to deepen their knowledge on the subject.",
    },
    {
      id: 5,
      userName: "James Bond",
      userImage: "/assets/Images/IconCert.png",
      rating: 2,
      text: "The course content was okay, but I felt the pace was too slow. The material could be more engaging and practical for real-life use cases.",
    },
    {
      id: 6,
      userName: "Emily Clark",
      userImage: "/assets/Images/IconCert.png",
      rating: 4,
      text: "Great course! The lessons were well-structured and easy to follow. I appreciate the real-world examples used throughout.",
    },
    {
      id: 7,
      userName: "Michael Jordan",
      userImage: "/assets/Images/IconCert.png",
      rating: 5,
      text: "I absolutely loved this course! The content was clear, concise, and engaging. I feel confident applying what I've learned.",
    },
    {
      id: 8,
      userName: "Jessica Lee",
      userImage: "/assets/Images/IconCert.png",
      rating: 3,
      text: "The course was good, but I wish there were more interactive elements like quizzes and exercises to help reinforce the learning.",
    },
    {
      id: 9,
      userName: "David Beckham",
      userImage: "/assets/Images/IconCert.png",
      rating: 4,
      text: "Very informative course. The instructor explained complex topics in an easy-to-understand way. However, the course could have been a bit shorter.",
    },
    {
      id: 10,
      userName: "Natalie Portman",
      userImage: "/assets/Images/IconCert.png",
      rating: 5,
      text: "This course exceeded my expectations! The material was thorough and covered every aspect in depth. I would definitely recommend it to anyone interested.",
    },
    {
      id: 11,
      userName: "Chris Hemsworth",
      userImage: "/assets/Images/IconCert.png",
      rating: 4,
      text: "Great overall experience. The course was well-organized and easy to follow. I would have liked more practical exercises to solidify my understanding.",
    },
    {
      id: 12,
      userName: "Scarlett Johansson",
      userImage: "/assets/Images/IconCert.png",
      rating: 3,
      text: "The course was decent, but there were a few sections that felt repetitive. More advanced material would have been helpful to challenge me further.",
    },
  ]}) {
    return (
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              display: 'flex',
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: 'space-between',
            }}
          >
            {reviews.map((review, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CustomerReview Review={review} MainColor="#6524D3"/>
              </Grid>
            ))}
          </Grid>
        </Container>
    );
}
