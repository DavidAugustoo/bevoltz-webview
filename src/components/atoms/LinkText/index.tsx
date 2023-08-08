import Link, { LinkProps } from 'next/link'
import React from 'react'

import { TextProps } from '../Text'
import { LinkTextContainer } from './styles'

interface LinkTextProps extends TextProps, LinkProps {}

export const LinkText: React.FC<LinkTextProps> = ({
  content,
  color,
  weight,
  size,
  maxWidth,
  mobileSize,
  ...rest
}) => {
  return (
    <Link {...rest} scroll={false}>
      <LinkTextContainer
        color={color}
        weight={weight}
        content={content}
        size={size}
        maxWidth={maxWidth}
        mobileSize={mobileSize}
      >
        {content}
      </LinkTextContainer>
    </Link>
  )
}
