import React, { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box, Grid, Paper, Typography, Button, Container, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ItemType = "MATCH_ITEM";

const correctAnswers = [
  { id: 1, question: "Apple", answer: "Fruit A" },
  { id: 2, question: "Banana", answer: "Fruit B" },
  { id: 3, question: "Cherry", answer: "Fruit C" },
];

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function MatchingQuestion() {
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);
  const [matches, setMatches] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const shuffledAnswers = shuffleArray(correctAnswers);
    setLeftItems(shuffledAnswers.map(item => item.question));
    setRightItems(shuffledAnswers.map(item => item.answer));
  }, []);

  useEffect(() => {
    console.log(matches);
  }, [matches]);

  const handleDrop = (draggableId, droppableId) => {
    setMatches(prev => {
      const newMatches = prev.filter(match => match.Question !== draggableId && match.customerAnswer !== droppableId);

      newMatches.push({
        Question: draggableId,
        customerAnswer: droppableId,
      });

      return newMatches;
    });
  };

  const handleItemClick = (draggableId) => {
    const emptySlotId = rightItems.find(item => !matches.some(match => match.customerAnswer === item));
    if (emptySlotId) {
      handleDrop(draggableId, emptySlotId);
    }
  };

  const handleClearSlot = (droppableId) => {
    setMatches(prev => {
      const matchToRemove = prev.find(match => match.customerAnswer === droppableId);
      if (matchToRemove) {
        return prev.filter(match => match.customerAnswer !== droppableId);
      }
      return prev;
    });
  };

  const checkAnswers = () => {
    const isAllCorrect = matches.every(match =>
      correctAnswers.some(answer => answer.question === match.Question && answer.answer === match.customerAnswer)
    );
    setIsCorrect(isAllCorrect);
    alert(isAllCorrect ? "Correct!" : "Try Again!");
  };

  const showCorrectAnswers = () => {
    setShowAnswers(true);
    const correctMatches = correctAnswers.map(answer => ({
      Question: answer.question,
      customerAnswer: answer.answer,
    }));
    setMatches(correctMatches);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Typography variant="h5" gutterBottom>
          Match the items
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {rightItems.length > 0 ? (
              rightItems.map((item) => (
                <Box key={item} display="flex" flexDirection="column" justifyContent="flex-start">
                  <Typography variant="body1" fontSize="12px">
                    {item}
                  </Typography>
                  <DroppableSlot
                    id={item}
                    onDrop={handleDrop}
                    onClear={handleClearSlot}
                    isSlotOccupied={matches.some(match => match.customerAnswer === item)}
                  >
                    {matches.some(match => match.customerAnswer === item) && (
                      <DraggableItem
                        id={matches.find(match => match.customerAnswer === item).Question}
                        content={matches.find(match => match.customerAnswer === item).Question}
                        onClick={handleItemClick}
                      />
                    )}
                  </DroppableSlot>
                </Box>
              ))
            ) : (
              <Typography variant="body1">Loading right items...</Typography>
            )}
          </Grid>
          <Grid item xs={6}>
            {leftItems.length > 0 ? (
              <DroppableContainer onDrop={handleDrop}>
                {leftItems.map((item) => (
                  <DraggableItem
                    key={item}
                    id={item}
                    content={item}
                    onClick={handleItemClick}
                  />
                ))}
              </DroppableContainer>
            ) : (
              <Typography variant="body1">Loading left items...</Typography>
            )}
          </Grid>
        </Grid>
        <Button variant="contained" onClick={checkAnswers} sx={{ mt: 2 }}>
          Check Answers
        </Button>
        <Button variant="contained" onClick={showCorrectAnswers} sx={{ mt: 2, ml: 2 }}>
          Show Answers
        </Button>
        {matches.length > 0 && (
          <Typography variant="body1" sx={{ mt: 2 }}>
            {isCorrect ? "Correct!" : "Incorrect, please try again."}
          </Typography>
        )}
      </Container>
    </DndProvider>
  );
}

function DraggableItem({ id, content, onClick }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemType,
    item: { id, content },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Paper
      ref={dragRef}
      onClick={() => onClick(id)}
      style={{
        padding: "16px",
        width: "100%",
        marginBottom: "8px",
        cursor: "grab",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {content}
    </Paper>
  );
}

function DroppableSlot({ id, onDrop, children, onClear, isSlotOccupied }) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: ItemType,
    drop: (item) => {
      onDrop(item.id, id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <Box
      ref={dropRef}
      style={{
        border: isOver ? "2px dashed green" : "1px solid #ccc",
        padding: "16px",
        minHeight: "60px",
        minWidth: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: isOver ? "#f0fff0" : "#fff",
        position: "relative",
      }}
    >
      {children}
      {isSlotOccupied && (
        <IconButton
          size="small"
          style={{ position: "absolute", top: "5px", right: "5px" }}
          onClick={() => onClear(id)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
}

function DroppableContainer({ onDrop, children }) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: ItemType,
    drop: (item) => onDrop(item.id, null),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <Box
      ref={dropRef}
      style={{
        border: isOver ? "2px dashed blue" : "1px solid #ccc",
        padding: "16px",
        minHeight: "200px",
        backgroundColor: isOver ? "#e0f7fa" : "#fff",
      }}
    >
      {children}
    </Box>
  );
}
