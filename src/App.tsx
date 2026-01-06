import { JSX } from 'react'

import styles from '@src/App.module.scss'
import TopBar from '@src/common/components/topBar/TopBar'

function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <TopBar />
      <div className={styles.view}>VIEW</div>
    </div>
  )
}

export default App
