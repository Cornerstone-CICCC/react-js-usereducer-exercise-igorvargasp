import { useReducer } from 'react'
import './App.css'

type State = {
  isDark: boolean
  fSize: number
}

type Action =
  | { type: 'toggle' }
  | { type: 'increase' }
  | { type: 'decrease' }

const initialState: State = {
  isDark: false,
  fSize: 16,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'toggle':
      return { ...state, isDark: !state.isDark }
    case 'increase':
      return { ...state, fSize: state.fSize + 1 }
    case 'decrease':
      return { ...state, fSize: Math.max(10, state.fSize - 1) }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { isDark, fSize } = state

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '2rem',
        backgroundColor: isDark ? '#111' : '#fff',
        color: isDark ? '#fff' : '#111',
        transition: 'background-color 0.25s ease, color 0.25s ease',
      }}
    >
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: `${fSize + 8}px`, marginBottom: '1rem' }}>
          useReducer Exercise
        </h1>
        <p style={{ fontSize: `${fSize}px`, lineHeight: 1.6 }}>
          This is some dummy text to demonstrate the current font size and theme
          state. Use the buttons below to toggle dark mode or change the font size.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem', justifyContent: 'center' }}>
          <button
            type="button"
            onClick={() => dispatch({ type: 'toggle' })}
            style={{ padding: '0.75rem 1rem', cursor: 'pointer' }}
          >
            Toggle Dark Mode
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: 'increase' })}
            style={{ padding: '0.75rem 1rem', cursor: 'pointer' }}
          >
            Increase Font Size
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: 'decrease' })}
            style={{ padding: '0.75rem 1rem', cursor: 'pointer' }}
          >
            Decrease Font Size
          </button>
        </div>

        <div style={{ marginTop: '1.5rem', fontSize: '0.95rem', opacity: 0.8 }}>
          Current theme: <strong>{isDark ? 'Dark' : 'Light'}</strong>
          <br />
          Current font size: <strong>{fSize}px</strong>
        </div>
      </div>
    </div>
  )
}

export default App
