import { JSX, useMemo } from 'react'

import RouteTile, { RouteTileProps } from '@src/views/mainView/components/RouteTile'
import tilesListDnDPicture from '@src/views/mainView/data/tilesListDnD.jpg'
import styles from '@src/views/mainView/view/MainView.module.scss'

const MainView = (): JSX.Element => {
  const routeTilesConfig: RouteTileProps[] = useMemo(
    () => [
      {
        imageSource: tilesListDnDPicture,
        title: 'Simple components',
        onClick: () => {}
      }
    ],
    []
  )

  return (
    <div className={styles.mainViewContainer}>
      {routeTilesConfig.map((config) => (
        <RouteTile key={`routeTile:${config.title}`} {...config} />
      ))}
    </div>
  )
}

export default MainView
