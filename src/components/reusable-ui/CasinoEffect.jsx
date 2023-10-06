import React from "react"
import { css, styled } from "styled-components"
export default function CasinoEffect({ count, className, version }) {
  return (
    <CasinoEffectStyled version={version} className={className}>
      {count}
    </CasinoEffectStyled>
  )
}

const CasinoEffectStyled = styled.div``
