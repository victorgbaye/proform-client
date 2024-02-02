import { PageHeader } from "../assets/wrappers/PageHeader.styles";
import { ExtendedButton } from "../components/elements/Button/Button.styles";
import shareW from '../assets/images/shareW.svg';
import eye from '../assets/images/eye.svg';
import FormQuestion from "../components/patterns/FormQuestion";
import { useState, useRef } from "react";
import BackButton from "../components/patterns/BackButton";

const Form = () => {
  const [questions, setQuestions] = useState([
    { id: 1, content: 'default' },
    // Add more questions as needed
  ]);

  const dragQuestion = useRef<number | null>(null);
  const draggedOverQuestion = useRef<number | null>(null);

  const handleQuestionTypeChange = (id: number, type: string) => {
    console.log(`Selected question type: ${type} for question with id: ${id}`);
    // You can perform any other actions based on the selected question type here
  };

  const handleAddQuestion = () => {
    const newId = questions.length + 1;
    setQuestions([...questions, { id: newId, content: '' }]);
  };

  const handleSortQuestions = () => {
    if (dragQuestion.current !== null && draggedOverQuestion.current !== null) {
      const questionsClone = [...questions];
      const dragIndex = questionsClone.findIndex((q) => q.id === dragQuestion.current);
      const dropIndex = questionsClone.findIndex((q) => q.id === draggedOverQuestion.current);
  
      if (dragIndex !== -1 && dropIndex !== -1) {
        const draggedQuestion = questionsClone[dragIndex];
        questionsClone.splice(dragIndex, 1); // Remove the dragged question from its original position
        questionsClone.splice(dropIndex, 0, draggedQuestion); // Insert the dragged question at the new position
        setQuestions(questionsClone);
      }
  
      dragQuestion.current = null;
      draggedOverQuestion.current = null;
    }
  };
  

  return (
    <div style={{ position: 'relative' }}>
      <PageHeader>
        <BackButton />
        <div className="page-header-right">
          <ExtendedButton backgroundColor="none" color="#404040" border="none">
            <img src={eye} alt="Preview Eye" />
            <p>Preview</p>
          </ExtendedButton>
          <ExtendedButton color="#EDF1FF">
            <img src={shareW} alt="Share Icon" />
            <p>Share</p>
          </ExtendedButton>
        </div>
      </PageHeader>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginTop: '60px',
        }}
      >
        {questions.map(({ id }) => (
          <div
            key={id}
            draggable
            onDragStart={() => (dragQuestion.current = id)}
            onDragEnter={() => (draggedOverQuestion.current = id)}
            onDragEnd={handleSortQuestions}
            onDragOver={(e) => e.preventDefault()}
          >
            <FormQuestion id={id} onQuestionTypeChange={handleQuestionTypeChange} />
          </div>
        ))}
      </section>
      <ExtendedButton
        style={{ position: 'absolute', bottom: 20, right: 20 }}
        color="#EDF1FF"
        onClick={handleAddQuestion}
      >
        <img src={shareW} alt="Add Question Icon" />
        <p>Add Question</p>
      </ExtendedButton>
    </div>
  );
};

export default Form;
