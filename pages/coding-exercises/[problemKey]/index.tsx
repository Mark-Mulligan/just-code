import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { codingExercisesData } from '../../../data/codingExercisesData';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import axios from 'axios';
import styles from '../../../styles/practiceProblem.module.scss';
import {
  CodingExerciseOverview,
  TestCodeRouteResponse,
  CodingExerciseStaticPath,
  TestResult,
  IParams,
} from '../../../types';
import TestInfoPanel from '../../../components/TestInfoPanel';
import { Modal, Header, Icon, Button } from 'semantic-ui-react';
import { saveToLocalStorage } from '../../../utils/localStorage';

interface PracticeProblemProps {
  codingExerciseData: CodingExerciseOverview;
}

const PracticeProblem: NextPage<PracticeProblemProps> = ({ codingExerciseData }) => {
  const router = useRouter();

  const [userCode, setUserCode] = useState(codingExerciseData?.startingCode || '');
  const [testResults, setTestResults] = useState([] as TestResult[]);
  const [numTestsPassed, setNumTestsPassed] = useState(0);
  const [overallResult, setOverallResult] = useState('');
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCodeSubmit = () => {
    setIsFetchingData(true);
    setErrorMessage('');

    axios
      .post(`/api/testcode/${router.query.problemKey}`, { userCode })
      .then(({ data }: TestCodeRouteResponse) => {
        setTestResults(data.testResults);
        setNumTestsPassed(data.numTestsPassed);
        setOverallResult(data.overallResult);
        setIsFetchingData(false);
        console.log(data);

        if (data.overallResult === 'passed' && typeof router.query.problemKey === 'string') {
          setShowModal(true);
          saveToLocalStorage(router.query.problemKey);
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setErrorMessage(err.response.data.message);
        } else {
          console.log(err);
          setErrorMessage('There was a server error while processing your code. Try again');
        }

        setIsFetchingData(false);
      });
  };

  return (
    <>
      <Head>
        <title>Just Code - {codingExerciseData.title}</title>
        <meta name="description" content={codingExerciseData.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal basic onClose={() => setShowModal(false)} onOpen={() => setShowModal(true)} open={showModal} size="small">
        <Header icon>
          <Icon name="check circle" />
          <h2>All Tests Passed!</h2>
        </Header>
        <Modal.Content></Modal.Content>
        <Modal.Actions style={{ textAlign: 'center' }}>
          <Button basic inverted onClick={() => setShowModal(false)}>
            <Icon name="remove" /> Stay Here
          </Button>
          <Link href="/coding-exercises" passHref>
            <Button color="blue" inverted onClick={() => setShowModal(false)}>
              <Icon name="checkmark" /> More challenges
            </Button>
          </Link>
        </Modal.Actions>
      </Modal>

      <div className={styles.codingPracticeContainer}>
        <TestInfoPanel
          codingExerciseOverview={codingExerciseData}
          testResults={testResults}
          numTestsPassed={numTestsPassed}
          overallResult={overallResult}
          errorMessage={errorMessage}
          isRunningTests={isFetchingData}
          handleCodeSubmit={handleCodeSubmit}
        />
        <div className={styles.codeContainer}>
          <CodeMirror
            theme={'dark'}
            value={userCode}
            height="auto"
            extensions={[javascript({ jsx: true })]}
            onChange={(value, viewUpdate) => {
              setUserCode(value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default PracticeProblem;

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
