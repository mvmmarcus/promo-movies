import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Percentage } from '@styled-icons/fa-solid'
import theme from 'styles/theme'
import * as S from './styles'
import { getProgressColor } from 'utils/general/getProgressColor'

export type ProgressBarProps = {
  size: number
  progress: number
  strokeWidth: number
}

const ProgressBar = ({ size, progress, strokeWidth }: ProgressBarProps) => {
  const [offset, setOffset] = useState(0)
  const circleRef = useRef(null)

  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference
    setOffset(progressOffset)
  }, [setOffset, circumference, progress, offset])

  return (
    <S.Wrapper width={size} height={size}>
      <Percentage size={10} color={theme.colors.white} />
      <S.Svg data-testid="svg" width={size} height={size}>
        <circle
          data-testid="svg-circle-bg"
          className="svg-circle-bg"
          stroke={getProgressColor(progress).objColor.secondary}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
        />
        <circle
          data-testid="svg-circle"
          className="svg-circle"
          stroke={getProgressColor(progress).objColor.primary}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          ref={circleRef}
        />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
          {progress}
        </text>
      </S.Svg>
    </S.Wrapper>
  )
}

export default ProgressBar
