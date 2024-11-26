import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';

// Styled component to add custom styles based on state
const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ theme }) => ({
    '& .MuiFormControlLabel-label': {
      transition: 'background-color 0.3s ease',
    },
  })
);

const CustomCheckbox = styled((props) => <Checkbox {...props} />)(({ theme }) => ({
  color: '#6524D3',
  '&.Mui-checked': {
    color: '#fff',
  },
  '&.Mui-checked + .MuiFormControlLabel-label': {
    color: 'white',
  },
}));

function MyFormControlLabel(props) {
  const { value, checked, label, onChange, ...rest } = props;

  return (
    <StyledFormControlLabel
      value={value}
      checked={checked}
      label={label}
      control={<CustomCheckbox />}
      onChange={onChange}
      {...rest}
    />
  );
}

MyFormControlLabel.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

  export default function MultipleChoice({ answers = [], correct = [], showAnswer = false , selectedAnswer = [], saveUserAnswer }) {
    // State to manage the selected answers
    const [selectedValues, setSelectedValues] = useState(selectedAnswer);
    const [items, setItems] = useState(answers);

    const handleChange = (event) => {
      const value = event.target.value;
      const updatedSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
  
    setSelectedValues(updatedSelectedValues);
  
    if (saveUserAnswer) {
      saveUserAnswer(updatedSelectedValues); // Use the updated values
    }
    };

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    useEffect(() => {
      const shuffledItems = shuffleArray([...items]);
      setItems(shuffledItems);
    }, []);

    return (
      <Container className='w-full flex flex-col'>
        {items.map((answer, index) => {
          const isCorrect = correct.includes(answer);
          const isSelected = selectedValues.includes(answer);

          // Define background color based on selection and correctness
          let labelStyle = {
            border: "1px solid #6524D3",
            backgroundColor: showAnswer
              ? isCorrect
                ? 'green'
                : isSelected
                  ? 'red'
                  : ''
              : isSelected
                ? '#6524D3'
                : '',
            color: showAnswer && (isCorrect || isSelected) ? 'white' : isSelected ? 'white' : '',
          };

          return (
            <MyFormControlLabel
              key={index}
              value={answer}
              label={answer}
              checked={isSelected}
              onChange={handleChange}
              style={labelStyle} // Apply dynamic styling
              className="py-2"
            />
          );
        })}
      </Container>
    );
  }

  MultipleChoice.propTypes = {
    answers: PropTypes.arrayOf(PropTypes.string),
    correct: PropTypes.arrayOf(PropTypes.string),
    showAnswer: PropTypes.bool,
  };
