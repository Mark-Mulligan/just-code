import { codingExercisesData } from '../../../data/codingExercisesData';
import { useState } from 'react';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Button, Container } from 'semantic-ui-react';
import { CodingExerciseStaticPath, IParams, CodingExerciseOverview } from '../../../types';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import styles from '../../../styles/PracticeProblemHelp.module.scss';

interface PracticeProblemHelpProps {
  codingExerciseData: CodingExerciseOverview;
}

const PracticeProblemHelp: NextPage<PracticeProblemHelpProps> = ({ codingExerciseData }) => {
  const [showSolution, setShowSolution] = useState(false);

  const handleShowSolution = () => {
    setShowSolution(true);
  };

  return (
    <Container className={styles.helpContainer}>
      <h1 className="text-center">{codingExerciseData.title}</h1>
      <h2>Problem Explaination</h2>
      <p>The goal here is to add two numbers together. Make sure you are returning the result.</p>
      <h2>Hints</h2>
      <ul>
        <li>The % operator let gives the remainder after a dividing operation. For example, 4 % 2 = 0. 5 % 2 = 1.</li>
      </ul>
      <h2>Solution</h2>
      {showSolution ? (
        <CodeMirror
          theme={'dark'}
          value={'const evenOrOdd = (num) => {};'}
          height="auto"
          editable={false}
          extensions={[javascript({ jsx: true })]}
        />
      ) : (
        <Button onClick={handleShowSolution}>Show Solution</Button>
      )}
    </Container>
  );
};

export default PracticeProblemHelp;

export const getStaticPaths: GetStaticPaths = async () => {
  const codingExercises = Object.keys(codingExercisesData);

  let staticPaths: CodingExerciseStaticPath[] = [];
  codingExercises.forEach((exercise) => {
    staticPaths.push({ params: { problemKey: exercise } });
  });

  return {
    paths: staticPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { problemKey } = context.params as IParams;
  const codingExerciseData = codingExercisesData[problemKey];

  return {
    props: {
      codingExerciseData,
    },
  };
};
