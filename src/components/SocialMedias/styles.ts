import { styled } from 'styled-components'
import { colors } from '../../../styles'

export const Medias = styled.div`
  display: flex;
  gap: 32px;
  margin: 4px 16px;
  color: ${colors.cityLights};

  svg:hover {
    color: #fff;
    transform: scale(1.1);
  }
`
