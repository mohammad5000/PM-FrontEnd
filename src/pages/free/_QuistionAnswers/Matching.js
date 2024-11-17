import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box, Grid2, Paper, Typography, Button, Container } from "@mui/material";
import { Margin } from "@mui/icons-material";

// Constants for Drag-and-Drop
const ItemType = "MATCH_ITEM";

// Sample Data
const leftItems = [
  { id: "1", content: "Apple" },
  { id: "2", content: "Banana" },
  { id: "3", content: "Cherry" },
];

const rightItems = [
  { id: "a", content: "Fruit A" },
  { id: "b", content: "Fruit B" },
  { id: "c", content: "Fruit C" },
];

const correctAnswers = {
  "1": "a",
  "2": "b",
  "3": "c",
};

// Draggable Component
function DraggableItem({ id, content }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemType,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Paper
      ref={dragRef}
      style={{
        padding: "16px",
        marginBottom: "8px",
        cursor: "grab",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {content}
    </Paper>
  );
}

// Droppable Component
function DroppableSlot({ id, onDrop, children }) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: ItemType,
    drop: (item) => onDrop(item.id, id),
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
        justifyContent: "center",
        backgroundColor: isOver ? "#f0fff0" : "#fff",
      }}
    >
      {children}
    </Box>
  );
}

// Main Component
export default function MatchingQuestion() {
  const [matches, setMatches] = useState({});

  const handleDrop = (draggableId, droppableId) => {
    setMatches((prev) => ({
      ...prev,
      [draggableId]: droppableId,
    }));
  };

  const checkAnswers = () => {
    const isCorrect = Object.entries(matches).every(
      ([draggableId, droppableId]) => correctAnswers[draggableId] === droppableId
    );
    alert(isCorrect ? "Correct!" : "Try Again!");
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
        <Typography variant="h5" gutterBottom>
          Match the items
        </Typography>
       
        <Grid2 container spacing={2}>
          {/* Left Column */}
          <Grid2 item xs={6}>
            {leftItems.map((item) => (
              <DraggableItem key={item.id} id={item.id} content={item.content} />
            ))}
          </Grid2>

          {/* Right Column */}
          <Grid2 item xs={6}>
            {rightItems.map((item) => (
            <Box key={item.id} display={'flex'} flexDirection={'column'} justifyContent={"flex-start"}>
             <Typography variant="body1" fontSize={"12px"} sx={{marginBottom:''}}>{item.content}</Typography>

              <DroppableSlot
                key={item.id}
                id={item.id}
                onDrop={handleDrop}
              >
                
                {Object.keys(matches).find(
                  (key) => matches[key] === item.id
                ) &&
                  leftItems.find((i) => i.id === Object.keys(matches).find(
                    (key) => matches[key] === item.id
                  ))?.content}
                  
              </DroppableSlot>
              </Box>
            ))}
          </Grid2>
        </Grid2>
        <Button variant="contained" onClick={checkAnswers} sx={{ mt: 2 }}>
          Check Answers
        </Button>
      </Box>

    </DndProvider>

  );
}
