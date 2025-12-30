import { JSX } from 'react'

import styles from '@src/App.module.scss'

function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <div className={styles.view}>VIEW</div>
    </div>
  )
}

export default App
