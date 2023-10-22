import React, { useState } from 'react';
import './CreateForm.css'; // Import your CSS file for styling
import DefaultQuestion from './DefaultQuestion';

const CreateForm = () => {
    const [questions, setQuestions] = useState([]);
  const [editingQuestionId, setEditingQuestionId] = useState(null);

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      text: 'Question',
      type: 'text', // You can have different question types like text, multiple choice, etc.
    //   response: <DefaultQuestion/>
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleQuestionChange = (e, questionId) => {
    const updatedQuestions = questions.map(question =>
      question.id === questionId ? { ...question, text: e.target.value } : question
    );
    setQuestions(updatedQuestions);
  };

  const startEditingQuestion = questionId => {
    setEditingQuestionId(questionId);
  };

  const stopEditingQuestion = () => {
    setEditingQuestionId(null);
  };

  return (
    <div className="form-builder">
    <h1>Form Builder</h1>
    {questions.map(question => (
      <div key={question.id} className="question">
        {editingQuestionId === question.id ? (
            <>
            <input
                type="text"
                value={question.text}
                onChange={e => handleQuestionChange(e, question.id)}
                onBlur={stopEditingQuestion}
                autoFocus
            />
            <DefaultQuestion/>
            </>
          
        ) : (
          <div onClick={() => startEditingQuestion(question.id)}>{question.text}  <DefaultQuestion/></div>
        )}
      </div>
    ))}
    <button className="add-question-button" onClick={addQuestion}>
      Add Question
    </button>
  </div>

  );
};

export default CreateForm;
