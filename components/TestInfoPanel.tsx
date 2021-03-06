import { Resizable } from 're-resizable';
import { useState, useEffect } from 'react';
import { Button, Loader, Dimmer } from 'semantic-ui-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CodingExerciseOverview, TestResult } from '../types';
import TestResultsDisplay from './TestResultsDisplay';
import TestInstructionsDisplay from './TestInstructionsDisplay';
import styles from '../styles/testInfoPanel.module.scss';

type TestInfoPanelProps = {
  codingExerciseOverview: CodingExerciseOverview;
  testResults: TestResult[];
  numTestsPassed: number;
  overallResult: string;
  errorMessage: string;
  isRunningTests: boolean;
  handleCodeSubmit: () => void;
};

const TestInfoPanel = ({
  codingExerciseOverview,
  testResults,
  numTestsPassed,
  overallResult,
  errorMessage,
  isRunningTests,
  handleCodeSubmit,
}: TestInfoPanelProps) => {
  const [windowWidth, setWindowWidth] = useState(1400);
  const router = useRouter();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  });

  if (windowWidth >= 800) {
    return (
      <Resizable
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
        defaultSize={{ width: 500, height: 'auto' }}
        style={{
          borderRight: '4px solid rgb(50, 50, 50)',
          padding: '1rem 10px 2rem 10px',
          background: 'rgb(30, 30, 30)',
        }}
        className={styles.testInfoPanel}
      >
        <TestInstructionsDisplay codingExerciseOverview={codingExerciseOverview} />

        <TestResultsDisplay
          testResults={testResults}
          overallResult={overallResult}
          errorMessage={errorMessage}
          numTestsPassed={numTestsPassed}
        />

        <Dimmer active={isRunningTests}>
          <Loader>Running Tests</Loader>
        </Dimmer>

        <Button className="mb-10" fluid inverted color="blue" onClick={handleCodeSubmit}>
          Submit Code
        </Button>

        <Link href="/coding-exercises" passHref>
          <Button fluid inverted className="mb-10">
            Back To Exercises
          </Button>
        </Link>

        <a href={`${router.asPath}/help`} target="_blank" rel="noreferrer">
          <Button fluid inverted>
            Help
          </Button>
        </a>
      </Resizable>
    );
  }

  return (
    <div style={{ padding: '1rem 10px 2rem 10px', background: 'rgb(30, 30, 30)' }}>
      <TestInstructionsDisplay codingExerciseOverview={codingExerciseOverview} />

      <TestResultsDisplay
        testResults={testResults}
        overallResult={overallResult}
        errorMessage={errorMessage}
        numTestsPassed={numTestsPassed}
      />

      <Dimmer active={isRunningTests}>
        <Loader>Running Tests</Loader>
      </Dimmer>

      <Button className="mb-10" fluid inverted color="blue" onClick={handleCodeSubmit}>
        Submit Code
      </Button>

      <Link href="/coding-exercises" passHref>
        <Button className="mb-10" fluid inverted>
          Back To Exercises
        </Button>
      </Link>

      <a href={`${router.asPath}/help`} target="_blank" rel="noreferrer">
        <Button fluid inverted>
          Help
        </Button>
      </a>
    </div>
  );
};

export default TestInfoPanel;
