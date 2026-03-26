import { JSX } from 'react'

import styles from '@src/App.module.scss'
import TopBar from '@src/common/components/topBar/TopBar'
import MainView from '@src/views/mainView/view/MainView'

// TODO: main vertical scroll margin?
// TODO: hide home icon when main view
// TODO: redux and view type, bar title according to the view type
// TODO: icon or image in the route tile

function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <TopBar />
      <div className={styles.view}>
        <MainView />
      </div>
    </div>
  )
}

export default App
