import { useAuth } from "../../context/auth-context";
import { DivInput, DivTotal, StyledInput, Wrapper } from "./styles";



export default function SpringDimensions({title,text}){

  const {car} = useAuth();
  const {spring} = useAuth();
  console.log("aquiiiiii",spring.spring)

 return (
  
  
  <Wrapper>
    {spring && (
        <>
        <DivInput>
          <label>ALAMBRE</label>
          <StyledInput value={spring.spring.wire} readOnly />
        </DivInput>
        <DivInput>
          <label>DIAM.EXT.1</label>
          <StyledInput  value={spring.spring.dext} readOnly />
        </DivInput>          
        <DivInput>
          <label>DIAM.EXT.2</label>
          <StyledInput  value={spring.spring.dext2} readOnly />
        </DivInput>
        <DivInput>
          <label>LONGITUD</label>
          <StyledInput  value={spring.spring.length} readOnly />
        </DivInput>
        <DivInput>
          <label>VUELTAS</label>
          <StyledInput  value={spring.spring.coils} readOnly />
        </DivInput>
        <DivInput>
          <label>DIAM.INT.1</label>
          <StyledInput  value={spring.spring.dint} readOnly />
        </DivInput>
        <DivInput>
          <label>DIAM.INT.2</label>
          <StyledInput  value={spring.spring.dint2} readOnly />
        </DivInput>

        <h2>STOCK DISPONIBLE</h2>
      <DivTotal>
        <h1>SOLES S/.</h1>
        <StyledInput value={"300"} />
        <h1>+ IGV</h1>
      </DivTotal>
            
          
        </>
      )}

  </Wrapper>
 )

}