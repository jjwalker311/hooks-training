import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'

import './App.css'

const titles = [
  'Use state basics',
  'Use effect basics',
  'Use effect replacing lifecycle methods',
  'Use reducer basics',
  'Use memo basics',
  'Use callback basics',
  'Custom local storage hook',
]

function Home() {
  return (
    <div>
      <Link to="/exercise/1">Please start at exercise 1</Link>
    </div>
  )
}

function ExerciseContainer({ children, exerciseId, completed }) {
  return (
    <div style={{
      padding: 20,
      height: '100%',
      display: 'grid',
      gridGap: '20px',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '30px 1fr 30px',
    }}
    >
      <h1 style={{ gridColumn: 'span 2', textAlign: 'center' }}>
        {`Exercise ${exerciseId}: ${titles[exerciseId - 1]} ${completed ? 'solution' : 'exercise'}`}
      </h1>
      { children }
    </div>
  )
}

function New({ match }) {
  const { default: Exercise } = require(`./exercises/${match.params.exerciseId}`)

  return (
    <ExerciseContainer exerciseId={match.params.exerciseId}>
      <Exercise />
    </ExerciseContainer>
  )
}

function Completed({ match }) {
  const { default: CompletedExercise } = require(`./exercises/${match.params.exerciseId}/completed`)

  return (
    <ExerciseContainer exerciseId={match.params.exerciseId} completed>
      <CompletedExercise />
    </ExerciseContainer>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/exercise/:exerciseId" exact component={New} />
          <Route path="/exercise/:exerciseId/completed" exact component={Completed} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
