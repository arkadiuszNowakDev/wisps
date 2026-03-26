import { JSX } from 'react'

import styles from '@src/views/mainView/components/routeTile/RouteTile.module.scss'

export type RouteTileProps = {
  imageSource: string
  title: string
  onClick: () => void
}

const RouteTile = ({ imageSource, title, onClick }: RouteTileProps): JSX.Element => {
  return (
    <div className={styles.routeTile} onClick={onClick}>
      <img src={imageSource} alt={title} draggable="false" />
      <p>{title}</p>
    </div>
  )
}

export default RouteTile
