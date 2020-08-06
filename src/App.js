import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'

import { StateProvider } from './toys/StateProvider'

import { CatsStoreProvider } from './exercises/14_mobx-local-examples/mobx/catsStore'

import './App.css'

const TITLES = [
  'Use state basics',
  'Use effect basics',
  'Use effect replacing lifecycle methods',
  'Use reducer basics',
  'Use memo basics',
  'Use callback basics',
  'Use context basics',
  'Custom local storage hook',
  'Testing <form />',
  'Custom will unmount hook',
  'Custom media query hook',
  'Custom formatted input hook',
  'Global Mobx with Hooks',
  'Local Mobx with Hooks',
]

const FILES = [
  '1_use-state',
  '2_use-effect',
  '3_use-effect-tidy-up',
  '4_use-reducer',
  '5_use-memo',
  '6_use-callback',
  '7_use-context',
  '8_local-storage-exercise',
  '9_html-form-exercise',
  '10_will-unmount',
  '11_custom-media-query',
  '12_custom-formatted-input',
  '13_mobx-global-examples',
  '14_mobx-local-examples',
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
        {`Exercise ${exerciseId}: ${TITLES[exerciseId - 1]} ${completed ? 'solution' : 'exercise'}`}
      </h1>
      { children }
    </div>
  )
}

/**
 * Async helper function used by exercise 9
 */
async function updateUsername(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username) {
        resolve()
      } else {
        reject({ message: 'No user name' })
      }
    }, 500)
  })
}

function New({ match }) {
  const { default: Exercise } = require(`./exercises/${FILES[match.params.exerciseId - 1]}`)

  return (
    <ExerciseContainer exerciseId={match.params.exerciseId}>
      <Exercise updateUsername={updateUsername} />
    </ExerciseContainer>
  )
}

function Completed({ match }) {
  const { default: CompletedExercise } = require(`./exercises/${FILES[match.params.exerciseId - 1]}/completed`)

  return (
    <ExerciseContainer exerciseId={match.params.exerciseId} completed>
      <CompletedExercise />
    </ExerciseContainer>
  )
}

function App() {
  return (
    <div className="App">
      <StateProvider>
        <CatsStoreProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/exercise/:exerciseId" exact component={New} />
              <Route path="/exercise/:exerciseId/completed" exact component={Completed} />
            </Switch>
          </BrowserRouter>
        </CatsStoreProvider>
      </StateProvider>
    </div>
  )
}

export default App
