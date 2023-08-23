import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

export const Wrapper = styled.div`
  border-radius: 8px;
  background: ${colors.gray.light};
  color: ${colors.black.dark};
  padding: 2px 8px;
  display: flex;
  cursor: pointer;
  h5{
    margin:0;
  }
  p{
    // ${typography.text.xs};
    font-weight:700;
    display:flex;
    align-items:center;
    gap: 4px;
  }
  span{
    cursor:pointer;
  }
`