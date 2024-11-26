import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
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

const CustomRadio = styled((props) => <Radio {...props} />)(({ theme }) => ({
    color: 'black',
    '&.Mui-checked': {
        color: '#fff',
    },
    '&.Mui-checked + .MuiFormControlLabel-label': {
        color: 'white',
    },
}));

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
    const { value, checked, label, onChange, ...rest } = props;

    return (
        <StyledFormControlLabel
            value={value}
            checked={checked}
            label={label}
            control={<CustomRadio />}
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

export default function SingleChoice({ answers = [], correct = "", showAnswer = false, saveUserAnswer , selectedAnswer = "" }) {
    // State to manage the selected answer
    const [selectedValue, setSelectedValue] = useState(selectedAnswer);
    const [items, setItems] = useState(answers);

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value) ;

        if (value && saveUserAnswer) {
            saveUserAnswer(value);
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
        <Container>
            <RadioGroup
                name="use-radio-group"
                value={selectedValue}
                onChange={handleChange}
            >
                {items.map((answer, index) => {
                    const isCorrect = answer === correct;
                    const isSelected = selectedValue === answer;

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
                    //   if (isSelected) {
                    //     labelStyle.backgroundColor = '#6524D3'; // Correct answer: green, incorrect: red
                    //     labelStyle.color = 'white'; // White text for visibility on colored background
                    //   }

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
            </RadioGroup>
        </Container>
    );
}

SingleChoice.propTypes = {
    answers: PropTypes.arrayOf(PropTypes.string),
    correct: PropTypes.string,
    onCorrectAnswer: PropTypes.func,
};
