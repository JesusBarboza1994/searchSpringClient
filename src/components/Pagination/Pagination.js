import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { colors } from "../../styles";
import { PageBox, Wrapper } from "./styles";
import {MdArrowBackIos, MdArrowForwardIos} from "react-icons/md"
const Page = ({text, onClick, current}) =>{
  return(
    <PageBox onClick={onClick} current={current}>
      {text}
    </PageBox>
  )
}
function generateNumberArray(maxNumber, minNumber = 1) {
  return Array.from({ length: maxNumber - minNumber + 1 }, (_, index) => (index + minNumber));
}
export default function Pagination(){
  const { totalPages, setCurrentPage, currentPage, filters }=useAuth()
  const numberOfPages = 10
  const [components, setComponents] = useState([])
  useEffect(() => {
    if(+totalPages > +numberOfPages){
      setComponents(generateNumberArray(numberOfPages))
    }else{
      setComponents(generateNumberArray(totalPages))
    }
    
    
  }, [filters, totalPages])
  
  const nextPage = ()=>{
    sessionStorage.setItem("currentPage", currentPage+1)
    setCurrentPage(currentPage+1)
    if(currentPage % numberOfPages === 0){
      if(currentPage+numberOfPages > totalPages){
        setComponents(generateNumberArray(totalPages, currentPage+1 ))
      }else{
        setComponents(generateNumberArray(numberOfPages + currentPage, currentPage+1 ))
      }
    }
  }
  const prevPage = () =>{
    sessionStorage.setItem("currentPage", currentPage+1)
    setCurrentPage(currentPage-1)
    if(currentPage % numberOfPages === 1){
      setComponents(generateNumberArray(currentPage-1, currentPage-numberOfPages))
    }
  }
  return(
    <Wrapper>
      {
      currentPage !== 1 && <MdArrowBackIos style={{color:colors.gray.light, cursor:"pointer"}} onClick={prevPage}/>
      }
      {components.map((number, i) =>{
        if(number === currentPage){
          return <Page text={number} key={i} current={true}/>
        }else{
          return <Page text={number} key={i} onClick={()=>{
            sessionStorage.setItem("currentPage", number)
            setCurrentPage(number)}}/> 
        }
      })
      }
      {
        currentPage !== totalPages && <MdArrowForwardIos style={{color:colors.gray.light, cursor:"pointer"}} onClick={nextPage}/>
      }
    
    </Wrapper>
  )
}