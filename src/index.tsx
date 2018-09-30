import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const mountPoint: HTMLElement = document.getElementById('root') as HTMLElement

ReactDOM.render(
  <App />,
  mountPoint
)

registerServiceWorker()
