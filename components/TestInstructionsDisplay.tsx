import { codingExerciseOverview } from '../types';

interface testCriteriaDisplayProps {
  codingExerciseOverview: codingExerciseOverview;
}

const TestInstructionsDisplay = ({ codingExerciseOverview }: testCriteriaDisplayProps) => {
  return (
    <>
      <h2>{codingExerciseOverview.title}</h2>
      <p>{codingExerciseOverview.instructions}</p>
      <h3>Test Criteria</h3>
      <ul style={{ paddingInlineStart: 20 }}>
        {codingExerciseOverview.testCriteria.map((test, index) => {
          return (
            <li key={`test-${index}`} style={{ whiteSpace: 'pre-line', marginBottom: 5 }}>
              <code>{test}</code>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TestInstructionsDisplay;
