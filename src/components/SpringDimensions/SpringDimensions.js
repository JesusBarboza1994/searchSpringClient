import { BsWhatsapp } from "react-icons/bs";
import { useAuth } from "../../context/auth-context";
import { colors } from "../../styles";
import { ButtonWsp, DivData, DivInput, DivPrice, DivStock, DivTotal, DivYunta, InfoDiv, StyledInput, Wrapper } from "./styles";
import { useEffect, useState } from "react";



export default function SpringDimensions({setShowModal}){
  const [whatsappPhone , setWhatsappPhone ] = useState("998194292")
  const {spring} = useAuth();
  useEffect(() => {
    if(Object.keys(spring.spring.stock).length === 1 && spring.spring.stock["0010"]>=2){
      setWhatsappPhone("998194289")
    }
  }, [spring])
  const handleWhatsapp = () => {
    const springCode = encodeURIComponent(spring.code.osis_code);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=51${whatsappPhone}&text=Hola.+Quiero+comprar+un+par+de+resortes+del+codigo+${springCode}&type=phone_number&app_absent=0`;
    
    window.open(whatsappUrl, '_blank');
  }
  
  const isStock = ()=>{
    const stock = Object.values(spring.spring.stock).reduce((acc, val) =>acc = acc + val,0)
    return stock === 0 ? false : true
  }
  
  if(!spring) return
  return (
    <Wrapper>
    <InfoDiv>
        <DivInput>
          <label>ALAMBRE (mm)</label>
        <StyledInput value={spring.spring.wire} readOnly />
      </DivInput>
      <DivInput>
        <label>DIAM-EXT 1 (mm)</label>
        <StyledInput  value={spring.spring.dext} readOnly />
      </DivInput>          
      <DivInput>
        <label>DIAM-EXT 2 (mm)</label>
        <StyledInput  value={spring.spring.dext2} readOnly />
      </DivInput>
      <DivInput>
        <label>LONGITUD (mm)</label>
        <StyledInput  value={spring.spring.length} readOnly />
      </DivInput>
      <DivInput>
        <label>VUELTAS</label>
        <StyledInput  value={spring.spring.coils} readOnly />
      </DivInput>
      <DivInput>
        <label>DIAM-INT 1 (mm)</label>
        <StyledInput  value={spring.spring.dint1} readOnly />
      </DivInput>
      <DivInput>
        <label>DIAM-INT 2 (mm)</label>
        <StyledInput  value={spring.spring.dint2} readOnly />
      </DivInput>
    </InfoDiv>
    <DivData>
      <DivPrice>
        <DivYunta>
          <svg width="41" height="24" viewBox="0 0 41 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector 1" d="M16.3391 4.04082H29.1666C30.0411 4.04082 30.75 3.3319 30.75 2.45742V2.45742C30.75 1.10222 32.3417 0.373275 33.3678 1.25856L39.2449 6.32925C40.1696 7.12704 40.1696 8.56003 39.2449 9.35782L33.1381 14.6266C32.2021 15.4343 30.75 14.7693 30.75 13.5329V13.5329C30.75 12.7352 30.1033 12.0884 29.3055 12.0884H11.7248C10.8543 12.0884 10.1485 11.3827 10.1485 10.5121V10.5121C10.1485 9.1593 8.55648 8.43493 7.53658 9.32369L1.70492 14.4055C0.799065 15.1948 0.788764 16.5991 1.68295 17.4017L7.60003 22.7126C8.58374 23.5955 10.1485 22.8974 10.1485 21.5755V21.5755C10.1485 20.7317 10.8326 20.0476 11.6764 20.0476H24.4579" stroke="white"/>
          </svg>
          <p>Ver en Yunta</p>
        </DivYunta>
        <DivStock style={{width:"306px", textAlign:"center"}}>
          {
            isStock() ? 
            <h2 onClick={()=>setShowModal(true)}>EN STOCK</h2> :
            <h2 style={{color:colors.red.highlight}}>SIN STOCK</h2>
          }
        </DivStock>
      </DivPrice>
      <DivPrice>
        <DivTotal>
          <p>S/</p>
          <StyledInput value={spring.code.price} style={{fontSize:24}}/>
          <p>+ incl. IGV</p>
        </DivTotal>
        <ButtonWsp onClick={handleWhatsapp} disabled={!isStock()}>
          <BsWhatsapp style={{color:colors.white ,fontSize:30}}/>
          <p>HACER PEDIDO</p>
        </ButtonWsp>    
      </DivPrice>
    </DivData>
  </Wrapper>
 )

}