import '../App.css';
// import { type } from 'os'
import React from 'react'
// types
import { AnswerObject } from '../App';
// styles
import {Wrapper,ButtonWrapper} from './QuestionCard.styles'
// types of props
type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = (
    // destructring the props
    { question,
        answers,
        callback,
        userAnswer,
        questionNr,
        totalQuestions }) => {
    return (
        
        <Wrapper className='wrapperr'>
            <p className='number' >
                Question: {questionNr} / {totalQuestions}
            </p>
            <p className='quiz__questionn' dangerouslySetInnerHTML={{ __html: question }} />
            <div >
                {answers.map(answer => (
                    <ButtonWrapper className='quesion__buttonn'
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                    >
                        <button   disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span style={{fontSize:15}} dangerouslySetInnerHTML={{ __html: answer }}></span>

                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard
