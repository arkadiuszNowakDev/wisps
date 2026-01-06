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

const IconButton = (props: IconButtonProps): JSX.Element => {
  const variantClassName = useMemo(() => {
    const variant: IconButtonVariant = props.variant || 'white'
    return styles[`${variant}IconButton`]
  }, [props.variant])

  return (
    <i
      className={mergeClasses(props.iconName, styles.iconButton, variantClassName, props.className)}
      onClick={props.onClick}
    />
  )
}

export default IconButton
