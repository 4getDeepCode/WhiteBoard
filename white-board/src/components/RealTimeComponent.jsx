import { useSyncDemo } from '@tldraw/sync';
import React from 'react';
import { useParams } from 'react-router';
import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';

function RealTimeComponent() {
  let {roomId} = useParams()
  const store = useSyncDemo({ roomId: roomId })
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw store={store}  />
		</div>
  )
}

export default RealTimeComponent