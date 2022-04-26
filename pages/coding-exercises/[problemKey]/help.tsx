import { codingExercisesData } from '../../../data/codingExercisesData';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { CodingExerciseStaticPath, IParams, CodingExerciseOverview } from '../../../types';

interface PracticeProblemHelpProps {
  codingExerciseData: CodingExerciseOverview;
}

const PracticeProblemHelp: NextPage<PracticeProblemHelpProps> = ({ codingExerciseData }) => {
  return (
    <div>
      <h1>Help</h1>
    </div>
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
