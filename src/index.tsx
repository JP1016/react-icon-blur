import * as React from 'react'
import './styles.scss'

interface IconProps {
  type: 'ROUNDED' | 'SQUARE' | 'CIRCLE'
  src: string
  size: number
  padding: number
  name?: string
  onClick?: Function
}

const IconBlur = (props: IconProps) => (
  <div
    className="icon-wrapper"
    onClick={() => props.onClick && props.onClick()}
  >
    <div className={`icon-container ${props.onClick ? 'pointer' : ''}`}>
      <div
        className={`icon ${props.type.toLowerCase()}`}
        style={{
          padding: props.padding ? `${props.padding}px` : '5px',
          width: props.size ? `${props.size}px` : '100px',
        }}
      >
        <img alt="" aria-hidden src={props.src} className="background" />
        <img alt={`icon-${props.name}`} src={props.src} width="100%" />
      </div>
    </div>
  </div>
)

export default IconBlur
