import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

export const Wrapper = styled.div`
  border-radius: 8px;
  background: ${colors.white};
  color: ${colors.black.medium};
  padding: 2px 8px;
  display: inline-block;
  h5{
    margin:0;
  }
  p{
    // ${typography.text.xs};
    font-weight:700;
  }
  span{
    cursor:pointer;
  }
`