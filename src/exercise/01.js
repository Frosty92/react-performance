// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import {readOnlySelector} from 'recoil'
// 💣 remove this import
//import Globe from '../globe'

const Globe = React.lazy(() => import('../globe'))

const renderGlobe = () => (
  <React.Suspense fallback={<div>loadin...</div>}>
    <Globe />
  </React.Suspense>
)

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label style={{marginBottom: '1rem'}}>
        <input
          onMouseOver={() => import('../globe')}
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      <div style={{width: 400, height: 400}}>
        {showGlobe ? renderGlobe() : null}
      </div>
    </div>
  )
}
// 🦉 Note that if you're not on the isolated page, then you'll notice that this
// app actually already has a React.Suspense component higher up in the tree
// where this component is rendered, so you *could* just rely on that one.

export default App
