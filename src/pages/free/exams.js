import { useEffect, useState } from "react";
import MainLayout from "@/layout/MainLayout";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import Image from "next/image";
import HeroSectionPrime from "@/components/HeroSectionPrime";
import Link from "next/link";
import SingleChoise from "./_QuistionAnswers/SingleChoise";
import MultipleChoice from "./_QuistionAnswers/MultibleChoise";
import MatchingQuestion from "./_QuistionAnswers/Matching";

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const initQuistions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin"],
    correct: "Paris",
    answerType: "single",
  },
  {
    question: "Which of the following are prime numbers?",
    answers: ["2", "3", "4", "5"],
    correct: ["2", "3", "5"],
    answerType: "multiple",
  },
  {
    question: "Match the following elements with their symbols:",
    image: "/assets/Images/elements.jpg",
    correctAnswers: [
      { id: 1, question: "Hydrogen", answer: "H" },
      { id: 2, question: "Oxygen", answer: "O" },
      { id: 3, question: "Nitrogen", answer: "N" },
    ],
    answerType: "matching",
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    answers: ["Harper Lee", "Mark Twain", "J.K. Rowling"],
    correct: "Harper Lee",
    answerType: "single",
  },
  {
    question: "Which planets are known as gas giants?",
    answers: ["Mercury", "Venus", "Jupiter", "Saturn"],
    correct: ["Jupiter", "Saturn"],
    answerType: "multiple",
  },
  {
    question: "Match the following countries with their capitals:",
    image: "/assets/Images/countries.jpg",
    correctAnswers: [
      { id: 1, question: "Italy", answer: "Rome" },
      { id: 2, question: "Spain", answer: "Madrid" },
      { id: 3, question: "Japan", answer: "Tokyo" },
    ],
    answerType: "matching",
  },
  {
    question: "What is the powerhouse of the cell?",
    answers: ["Mitochondria", "Nucleus", "Ribosome"],
    correct: "Mitochondria",
    answerType: "single",
  },
  {
    question: "Which of the following are programming languages?",
    answers: ["Python", "HTML", "JavaScript", "CSS"],
    correct: ["Python", "JavaScript"],
    answerType: "multiple",
  },
  {
    question: "Match the following authors with their books:",
    image: "/assets/Images/books.jpg",
    correctAnswers: [
      { id: 1, question: "J.R.R. Tolkien", answer: "The Hobbit" },
      { id: 2, question: "George Orwell", answer: "1984" },
      { id: 3, question: "Jane Austen", answer: "Pride and Prejudice" },
    ],
    answerType: "matching",
  },
  {
    question: "What is the chemical formula for water?",
    answers: ["H2O", "CO2", "O2"],
    correct: "H2O",
    answerType: "single",
  },
  {
    question: "Which of the following are mammals?",
    answers: ["Shark", "Elephant", "Crocodile", "Whale"],
    correct: ["Elephant", "Whale"],
    answerType: "multiple",
  },
  {
    question: "Match the following languages with their countries:",
    image: "/assets/Images/languages.jpg",
    correctAnswers: [
      { id: 1, question: "French", answer: "France" },
      { id: 2, question: "Spanish", answer: "Spain" },
      { id: 3, question: "Japanese", answer: "Japan" },
    ],
    answerType: "matching",
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Mars", "Jupiter"],
    correct: "Jupiter",
    answerType: "single",
  },
  {
    question: "Which of the following are types of clouds?",
    answers: ["Cumulus", "Stratus", "Cirrus", "Nimbus"],
    correct: ["Cumulus", "Stratus", "Cirrus", "Nimbus"],
    answerType: "multiple",
  },
  {
    question: "Match the following artists with their famous works:",
    image: "/assets/Images/artists.jpg",
    correctAnswers: [
      { id: 1, question: "Leonardo da Vinci", answer: "Mona Lisa" },
      { id: 2, question: "Vincent van Gogh", answer: "Starry Night" },
      { id: 3, question: "Pablo Picasso", answer: "Guernica" },
    ],
    answerType: "matching",
  },
  {
    question: "What is the boiling point of water?",
    answers: ["100°C", "50°C", "0°C"],
    correct: "100°C",
    answerType: "single",
  },
  {
    question: "Which of the following are input devices?",
    answers: ["Keyboard", "Monitor", "Mouse", "Printer"],
    correct: ["Keyboard", "Mouse"],
    answerType: "multiple",
  },
  {
    question: "Match the following movies with their directors:",
    image: "/assets/Images/movies.jpg",
    correctAnswers: [
      { id: 1, question: "Steven Spielberg", answer: "Jurassic Park" },
      { id: 2, question: "James Cameron", answer: "Avatar" },
      { id: 3, question: "Christopher Nolan", answer: "Inception" },
    ],
    answerType: "matching",
  },
  {
    question: "Who painted the Sistine Chapel ceiling?",
    answers: ["Michelangelo", "Raphael", "Donatello"],
    correct: "Michelangelo",
    answerType: "single",
  },
  {
    question: "Which of the following are renewable energy sources?",
    answers: ["Solar", "Wind", "Coal", "Natural Gas"],
    correct: ["Solar", "Wind"],
    answerType: "multiple",
  },
  {
    question: "Match the following scientists with their discoveries:",
    image: "/assets/Images/scientists.jpg",
    correctAnswers: [
      { id: 1, question: "Isaac Newton", answer: "Law of Gravity" },
      { id: 2, question: "Albert Einstein", answer: "Theory of Relativity" },
      { id: 3, question: "Marie Curie", answer: "Radioactivity" },
    ],
    answerType: "matching",
  },
];

export default function Freeexam() {
  const [questions, setQuestions] = useState(initQuistions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [result, setResult] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const showResults = () => {
    let tempResult = 0;

    questions.map((question, index) => {
      if (question.answerType === "matching") {
        const userAnswerForIndex = userAnswers[index] || [];
        const isCorrect = checkMatchingAnswers(
          question.correctAnswers,
          userAnswerForIndex
        );
        if (isCorrect) {
            tempResult += 1;
        }
      }
      else if (question.answerType === "single") {
        if (question.correct === (userAnswers[index] || null)) {
          tempResult += 1;
        }
      } else if (question.answerType === "multiple") {
        const userAnswerForIndex = userAnswers[index] || []
        const isCorrect = question.correct.every((answer) =>
            userAnswerForIndex.includes(answer)
        );
        if (isCorrect) {
          tempResult += 1;
        }
      }
    });
    setResult(tempResult); 
    alert(
      `You have completed the exam! Result is ${tempResult} out of ${questions.length}`
    );
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowCorrectAnswer(false);
    }
    if (currentQuestionIndex === questions.length - 1) {
      showResults();
    }
  };

  // const handleSingleUserAnswers = (answer) => {
  //   setUserAnswers((prevAnswers) => {
  //     const newAnswers = [...prevAnswers];
  //     newAnswers[currentQuestionIndex] = answer;
  //     return newAnswers;
  //   });
  // }

  // const handleMultipleUserAnswers = (answer) => {
  //   setUserAnswers((prevAnswers) => {
  //       const newAnswers = [...prevAnswers];
  //       newAnswers[currentQuestionIndex] = answer; // Push the entire 'answer' array
  //       return newAnswers;
  //   });
  // }

  const handleUserAnswer = (answer) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = answer; // Push the entire 'answer' array
      return newAnswers;
    });
  };

  ///check result

  //matchingResult

  function checkMatchingAnswers(correctAnswers, userAnswers) {
    if (!userAnswers || userAnswers.length === 0) {
      return false; // Return false for empty answers
    }

    const correctAnswersMap = new Map();
    correctAnswers.forEach(({ question, answer }) => {
      correctAnswersMap.set(question, answer);
    });

    for (let { question, answer } of userAnswers) {
      if (correctAnswersMap.get(question) !== answer) {
        return false; // Return false if any answer doesn't match
      }
    }
    return true;
  }

  useEffect(() => {
    if (questions[0] == initQuistions[0]) {
      setQuestions(shuffleArray(initQuistions));
    }
  }, []);

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <MainLayout>
      <HeroSectionPrime
        bgColor={"rgba(101, 36, 211, 0.27)"}
        content={
          <div className="h-screen py-5">
            <Breadcrumbs aria-label="breadcrumb">
              <Link href={"#"}> Home </Link>
              <Link href={"#"}> Free Exams </Link>
            </Breadcrumbs>

            <Typography
              variant="h3"
              className=" font-bold mt-[20vh] w-full leading-snug md:leading-relaxed text-4xl md:text-[48px] md:max-w-[750px]"
            >
              Investing in yourself does not always have to come at a cost
            </Typography>
            <br />
            <Typography
              variant="body2"
              className=" mt-[10vh] w-full md:max-w-[750px] text-[20px]"
            >
              We have created a number of free courses to aid and support your
              growth throughout your career. Refresh your skills or explore new
              areas of learning to better adapt in our ever-evolving profession.
            </Typography>
          </div>
        }
      />
      <br />
      <Container className="min-h-screen flex items-center justify-center">
        <Box
          sx={{
            border: "2px solid #6524D3",
            width: "100%",
            borderRadius: "10px",
          }}
        >
          <Container sx={{ paddingBlock: "20px" }}>
            <Stack
              direction={"row"}
              className="flex items-center justify-between"
            >
              <Stack
                direction={"row"}
                className="flex items-center justify-start"
              >
                <Image
                  width={50}
                  height={50}
                  src={"/assets/Images/IconExam.png"}
                  alt="h"
                  className="me-5"
                />
                <Typography variant="h6" fontWeight={"bold"}>
                  Planning
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                className="flex items-center justify-start"
              >
                <Typography
                  variant="h6"
                  className="text-[#6524D3]"
                  fontWeight={"bold"}
                >
                  <TimerOutlinedIcon /> 00:50:00
                </Typography>
              </Stack>
            </Stack>
            <br />
            <Divider />
            <br />
            <Box sx={{ padding: 2 }}>
              <Typography
                variant="P"
                className="text-[#6524D3]"
                fontWeight={"bold"}
              >
                Question {currentQuestionIndex + 1}
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#6524D3",
                  padding: 2,
                  marginBlock: 1,
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  className="text-[#ffffff]"
                  sx={{ flex: 1 }}
                >
                  {currentQuestion.question}
                </Typography>
                {currentQuestion.image && (
                  <Image
                    width={200}
                    height={200}
                    src={currentQuestion.image}
                    alt="icon"
                    className="mx-5 w-[50%]"
                  />
                )}
              </Box>
            </Box>
            <Box className="my-5">
              {currentQuestion.answerType === "single" && (
                <SingleChoise
                  key={currentQuestionIndex}
                  showAnswer={showCorrectAnswer}
                  answers={currentQuestion.answers}
                  correct={currentQuestion.correct}
                  saveUserAnswer={handleUserAnswer}
                  selectedAnswer={userAnswers[currentQuestionIndex]}
                />
              )}

              {currentQuestion.answerType === "multiple" && (
                <MultipleChoice
                  key={currentQuestionIndex}
                  answers={currentQuestion.answers}
                  correct={currentQuestion.correct}
                  showAnswer={showCorrectAnswer}
                  saveUserAnswer={handleUserAnswer}
                  selectedAnswer={userAnswers[currentQuestionIndex]}
                />
              )}
              {currentQuestion.answerType === "matching" && (
                <MatchingQuestion
                  key={currentQuestionIndex}
                  correctAnswers={currentQuestion.correctAnswers}
                  showAnswers={showCorrectAnswer}
                  saveUserAnswer={handleUserAnswer}
                  selectedAnswer={userAnswers[currentQuestionIndex]}
                />
              )}
            </Box>
            <Divider />
          </Container>
          <Stack
            direction={"row"}
            className="flex items-center justify-between p-5"
          >
            <Button
              variant="contained"
              size="large"
              className="bg-[#6524D3] w-32"
              onClick={handlePrevious}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "white",
                border: "2px solid #6524D3 ",
                color: "#6524D3",
              }}
              onClick={() => setShowCorrectAnswer(!showCorrectAnswer)}
            >
              {showCorrectAnswer ? "Hide Answer" : "Show Answer"}
            </Button>
            <Button
              variant="contained"
              size="large"
              className="bg-[#6524D3] w-32"
              onClick={handleNext}
            >
              Next
            </Button>
          </Stack>
        </Box>
      </Container>
    </MainLayout>
  );
}
