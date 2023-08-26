import { useEffect } from "react";
import { useAuth } from "../../context/auth-context";
import { CodeContainer, Main, Wrapper  } from "./styles";
import { getCodes } from "../../services/codes-service";
import CodeCard from "../../components/CodeCard/CodeCard";
import Aside from "../../components/Aside/Aside";
import Pagination from "../../components/Pagination/Pagination";

export default function SearchInterface() {
  const { codes, setTotalPages, setCodes, filters, setCurrentPage, setVersions,setPositions,setvisibleBrands, setVisibleModels, currentPage } = useAuth();

  useEffect(() => {
    getCodes({...filters, currentPage})
      .then((response) => {
        setCodes(response);
        setvisibleBrands(response.brands.slice(0,5))
        setVisibleModels(response.models.slice(0,5))
        setVersions(response.versions)
        setPositions(response.positions)
        setTotalPages(response.total_pages)
      })
      .catch((error) => console.log(error));
  }, [currentPage]);
  useEffect(() => {
    getCodes({...filters, currentPage: 1})
      .then((response) => {
        setCodes(response);
        setvisibleBrands(response.brands.slice(0,5))
        setVisibleModels(response.models.slice(0,5))
        setVersions(response.versions)
        setPositions(response.positions)
        setTotalPages(response.total_pages)
      })
      .catch((error) => console.log(error));
    setCurrentPage(1)
  }, [filters])
  
  return (
    <Wrapper>
      <Aside/>
      <Main>
        <CodeContainer>
          {codes &&
            codes.codes.map((code) =>
              code.cars.map((car, i) => (
                <CodeCard code={code} key={`${code.osis_code}+${i}`} car={car} id={code.id}/>
              ))
            )}
        </CodeContainer>
        <Pagination/>
      </Main>
    </Wrapper>
  );
}
