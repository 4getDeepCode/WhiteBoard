import React from 'react'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

function TestComponent() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw persistenceKey="test" />
    </div>
  )
}

export default TestComponent