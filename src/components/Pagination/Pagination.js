import { useAuth } from "../../context/auth-context";
import { colors } from "../../styles";
import { PageBox, Wrapper } from "./styles";
// import {IoChevronBack } from "react-icons/io"
import {MdArrowBackIos, MdArrowForwardIos} from "react-icons/md"

const Page = ({text, onClick, current}) =>{
  return(
    <PageBox onClick={onClick} current={current}>
      {text}
    </PageBox>
  )
}
function generateNumberArray(maxNumber) {
  return Array.from({ length: maxNumber }, (_, index) => (index + 1).toString());
}
export default function Pagination(){
  const { totalPages, setCurrentPage, currentPage }=useAuth()
  if (!totalPages) return
  const components = (totalPages > 10) ? ["1", "2", "3", "...", totalPages.toString()] : generateNumberArray(totalPages)
  const nextPage = () => {
    if(currentPage === totalPages) return
    setCurrentPage(currentPage+1)
    console.log("0")
  }
  const prevPage = () => {
    if(currentPage === 1) return
    setCurrentPage(currentPage-1)
  }
  return(
    <Wrapper>
      <MdArrowBackIos style={{color:colors.gray.light}} onClick={()=>setCurrentPage(currentPage-1)}/>
      {components.map(number =>{
        if(number === currentPage.toString()){
          return <Page text={number} onClick={prevPage} current={true}/>
        }else{
          return <Page text={number} onClick={nextPage}/> 
        }
      })
      }
    <MdArrowForwardIos style={{color:colors.gray.light}} onClick={()=>{
      if(currentPage === totalPages) return
      setCurrentPage(currentPage+1)
    }}/>
    </Wrapper>
  )
}