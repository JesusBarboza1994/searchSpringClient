import { useEffect, useState } from "react"
import { getCode } from "../../services/codes-service"
import { DivCode, DivImg, DivModel, Wrapper, DivSpring, Modal, TableDiv, MirrorScreen, TableHeader, TableRow, Table, Close } from "./styles"
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import SpringDimensions from "../../components/SpringDimensions/SpringDimensions";
import notFound from "../../assets/NotFound.png"

export default function SpringView(){
  const { id } = useParams();
  const {spring, setSpring, car} = useAuth();
  const [showModal, setShowModal] = useState(false)
  useEffect(()=>{
    getCode(id)
    .then((response) =>{
      setSpring(response)
      sessionStorage.setItem("spring",JSON.stringify(response))
    })
    .catch(error => console.log(error))
  },[])

  const nameSuppliers = {
      "0010": "Raimondi Almacén Ventas",
      "0055": "Almacén Oficina Ventas",
      "0037": "Planta Suspensión",
      "0025": "Circunvalación Almacén Ventas"
  }
  
  if(!spring || !car) return
  return(
    <>
    <Wrapper>
    
      <DivSpring>
        <DivCode>
          <p>
            {spring.code.osis_code}
          </p>
          </DivCode>
        <DivImg>
          {
            spring.code.img_url ? 
            <img src={`https://drive.google.com/uc?export=view&id=${spring.code.img_url}`} alt="sin imagen"/> 
            :
            <img src={notFound} alt="sin imagen"/> 
          }
        </DivImg>
        <DivModel>
          <p>{car.brand.name} {car.model}</p>
          <p>{car.init_year}-{car.end_year}</p>
          <p>{spring.code.position} {spring.code.version}</p>
        </DivModel>
        
        
      </DivSpring>
     
      <SpringDimensions text={"text"} setShowModal={setShowModal}/>
    </Wrapper>
    <MirrorScreen showModal={showModal} onClick={()=>setShowModal(false)}>
    </MirrorScreen>
    <Modal showModal={showModal}>
      <TableDiv>
        <h3>CANTIDADES DISPONIBLES</h3>
        <Table>
          <TableHeader>
            <th>ALMACÉN</th>
            <th>NOMBRE</th>
            <th>CANTIDAD</th>
          </TableHeader>
          {
          Object.entries(spring.spring.stock).map(([key, value])=>{
            return(
              <TableRow>
                <td>{key}</td>
                <td>{nameSuppliers[key]}</td>
                <td>{value}</td>
              </TableRow>
            )
          })
          }
          <Close onClick={()=>setShowModal(false)}>X</Close>
        </Table>
      </TableDiv>
    </Modal>
    </>
  )
}