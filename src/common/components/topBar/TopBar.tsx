import { JSX, useMemo } from 'react'

import IconButton from '@src/common/components/iconButton/IconButton'
import styles from '@src/common/components/topBar/TopBar.module.scss'

const TopBar = (): JSX.Element => {
  const iconsPanel = useMemo(() => {
    // TODO: set according to the routing
    const isGoToMainViewIconVisible = true

    return (
      <div className={styles.iconsPanel}>
        {isGoToMainViewIconVisible && (
          <IconButton
            iconName="bi-house"
            onClick={() => {
              // TODO: add go to the main view callback
            }}
          />
        )}
      </div>
    )
  }, [])

  const viewTitle = useMemo(() => {
    // TODO: get title from slice or object according to the view type
    const title = 'Arkadiusz Nowak'

    return <span>{title}</span>
  }, [])

  return (
    <div className={styles.topBar}>
      {iconsPanel}
      {viewTitle}
    </div>
  )
}

export default TopBar
