import type { NextPage } from 'next';
import React, { SyntheticEvent, useState } from 'react';
import Head from 'next/head';
import { Container, Button, Form, Dropdown, DropdownProps } from 'semantic-ui-react';
import { codingExercisesData } from '../../data/codingExercisesData';
import { getItemsComplete } from '../../utils/localStorage';
import ExerciseList from '../../components/ExerciseList';
import { AllExerciseOverviewData } from '../../types';
import styles from '../../styles/codingExercises.module.scss';

type CodingExercisesProps = {
  codingExercisesOverviews: AllExerciseOverviewData;
};

const CodingExercises: NextPage<CodingExercisesProps> = ({ codingExercisesOverviews }) => {
  const [itemsComplete, setItemsComplete] = useState(getItemsComplete());
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const resetCompletedClick = () => {
    localStorage.clear();
    setItemsComplete({});
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.value) {
      setSearch(e.target.value);
      return;
    }

    setSearch('');
  };

  const handleStatusFilterChange = (event: SyntheticEvent<HTMLElement, Event>, { value }: DropdownProps) => {
    if (typeof value === 'string') {
      setStatusFilter(value);
    }
  };

  return (
    <>
      <Head>
        <title>Just Code - Coding Exercises</title>
        <meta name="description" content="Javascript practice problems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <h1 className={styles.title}>Coding Exercises</h1>

        <p className={styles.completedTracker}>
          {Object.keys(itemsComplete).length} / {Object.keys(codingExercisesOverviews).length} Completed
        </p>

        <Form className={styles.searchContainer}>
          <Form.Field style={{ marginRight: 20, marginBottom: 20 }} inline>
            <input
              style={{ minWidth: 196 }}
              type="text"
              placeholder="Search exercises..."
              value={search}
              onChange={handleSearchInputChange}
            />
          </Form.Field>

          <Dropdown
            value={statusFilter}
            selection
            style={{ marginRight: 20, marginBottom: 20, alignSelf: 'start' }}
            onChange={handleStatusFilterChange}
            options={[
              { key: 'all', value: 'all', text: 'All' },
              { key: 'notCompleted', value: 'notCompleted', text: 'Not Completed' },
              { key: 'completed', value: 'completed', text: 'Completed' },
            ]}
          />

          <Button onClick={resetCompletedClick} inverted className={styles.resetCompletedBtn}>
            Reset Completed
          </Button>
        </Form>

        <ExerciseList
          codingExercisesOverviews={codingExercisesOverviews}
          itemsComplete={itemsComplete}
          statusFilter={statusFilter}
          search={search}
        />
      </Container>
    </>
  );
};

export default CodingExercises;

export const getStaticProps = async () => {
  return {
    props: {
      codingExercisesOverviews: codingExercisesData,
    },
  };
};
