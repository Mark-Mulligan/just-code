import { codingExercisesData } from '../../../data/codingExercisesData';
import { useState } from 'react';
import Head from 'next/head';
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
    <>
      <Head>
        <title>Just Code - {codingExerciseData.title} Help</title>
        <meta name="description" content={codingExerciseData.problemExplanation} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.helpContainer}>
        <h1 className="text-center">{codingExerciseData.title}</h1>
        <h2>Problem Explanation</h2>
        <p>{codingExerciseData.problemExplanation}</p>
        <h2>Hints</h2>
        <ul>
          {codingExerciseData.hints?.map((hint, index) => {
            return <li key={`hint-${index}`}>{hint}</li>;
          })}
        </ul>
        <h2>Solution</h2>
        {showSolution ? (
          <CodeMirror
            theme={'dark'}
            value={codingExerciseData.solutionCode}
            height="auto"
            editable={false}
            extensions={[javascript({ jsx: true })]}
          />
        ) : (
          <Button onClick={handleShowSolution}>Show Solution</Button>
        )}
      </Container>
    </>
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
