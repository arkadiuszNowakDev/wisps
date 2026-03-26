import { JSX, useMemo } from 'react'

import styles from '@src/common/components/iconButton/IconButton.module.scss'
import { mergeClasses } from '@src/common/helpers/stylesHelpers'

type IconButtonVariant = 'white'

type IconButtonProps = {
  iconName: string
  onClick: () => void
  variant?: IconButtonVariant
  className?: string
}

const IconButton = ({ iconName, onClick, variant, className }: IconButtonProps): JSX.Element => {
  const variantClassName = useMemo(() => {
    const currentVariant: IconButtonVariant = variant || 'white'
    return styles[`${currentVariant}IconButton`]
  }, [variant])

  return (
    <i
      className={mergeClasses(iconName, styles.iconButton, variantClassName, className)}
      onClick={onClick}
    />
  )
}

export default IconButton
