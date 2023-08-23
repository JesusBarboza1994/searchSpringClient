import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { Aside, CodeContainer, FilterContainer, FilterTitle, Wrapper } from "./styles";
import { getCodes } from "../../services/codes-service";
import CodeCard from "../../components/CodeCard/CodeCard";
import CheckBox from "../../components/CheckBox/CheckBox";
import Filter from "../../components/Filter/Filter";
import Input from "../../components/Input";

export default function SearchInterface() {
  const { codes, setCodes, filters, showFilter, setShowFilter } = useAuth();
  const [visibleBrands, setvisibleBrands] = useState([])
  const [visibleModels, setVisibleModels] = useState([])
  const [versions, setVersions] = useState([])
  const [positions, setPositions] = useState([])
  useEffect(() => {
    getCodes(filters)
      .then((response) => {
        setCodes(response);
        setvisibleBrands(response.brands.slice(0,5))
        setVisibleModels(response.models.slice(0,5))
        setVersions(response.versions)
        setPositions(response.positions)
      })
      .catch((error) => console.log(error));
  }, [filters]);
  const showAllBrands = () => {
    setvisibleBrands(!showFilter.brand ? codes.brands : codes.brands.slice(0, 5))
    setShowFilter({ ...showFilter, brand: !showFilter.brand })
  }
  const showAllModels = () => {
    setVisibleModels(!showFilter.model ? codes.models : codes.models.slice(0, 5))
    setShowFilter({ ...showFilter, model: !showFilter.model })
  }
  return (
    <Wrapper>
      <Aside>
      <FilterContainer>
        {Object.entries(filters).map(([clave, valor]) => {
          if(filters.startYear && filters.endYear && (clave === "startYear" || clave === "endYear" )) return 
          if(clave==="startYear" && valor) return <Filter key={clave} text={valor} clave={clave} year={"start"} />;
          if(clave==="endYear" && valor) return <Filter key={clave} text={valor} clave={clave} year={"end"} />;
          if (valor) {
            return <Filter key={clave} text={valor} clave={clave} year={null} />;
          }
        })}
        {
          (filters.startYear && filters.endYear) &&
          <Filter key={"both"} text={`${filters.startYear}<= AÑO <= ${filters.endYear}`} year={"both"}/>
        }
      </FilterContainer>

        {
          !filters.brand &&
          <>
            <FilterTitle>MARCA</FilterTitle>
            {visibleBrands?.map((brand, index) => (
              <CheckBox key={brand + index} text={brand} clave={"brand"}/>
            ))}
            {
              showFilter.brand ?
              <p onClick={showAllBrands}>Ver menos</p> :
              <p onClick={showAllBrands}>Ver más</p>
            }
          </>
        }
        {
          !filters.model &&
          <>
            <FilterTitle>MODELO</FilterTitle>
            {visibleModels?.map((model, index) => (
              <CheckBox key={model + index} text={model} clave={"model"}/>
            ))}
            {
              showFilter.model ?
              <p onClick={showAllModels}>Ver menos</p> :
              <p onClick={showAllModels}>Ver más</p>
            }
          </>
        }
        {
          !filters.version &&
          <>
            <FilterTitle>VERSION</FilterTitle>
            {versions.map((version, index) => (
              <CheckBox key={version + index} text={version} clave={"version"}/>
            ))}
          </>
        }
        {
          !filters.position &&
          <>
            <FilterTitle>POSICIÓN</FilterTitle>
            {positions.map((position, index) => (
              <CheckBox key={position + index} text={position} clave={"position"}/>
            ))}
          </>
        }
        {
          (!filters.startYear || !filters.endYear) &&
          <FilterTitle>AÑO</FilterTitle>
        }
        {(filters.startYear && !filters.endYear) ?
        <div>
          {filters.startYear} - <Input type="number" year={"endYear"}/>
        </div> :
        (filters.endYear && !filters.startYear) ?
        <div>
          <Input type="number" year={"startYear"}/> - {filters.endYear}
        </div> :
        (!filters.startYear && !filters.endYear) ?
        <div>
          <Input type="number" year={"startYear"}/> - <Input type="number" year={"endYear"}/>
        </div> :
        null
        }
        
      </Aside>
      <CodeContainer>
        {codes &&
          codes.codes.map((code) =>
            code.cars.map((car, i) => (
              <CodeCard code={code} key={`${code.osis_code}+${i}`} car={car} id={code.id}/>
            ))
          )}
      </CodeContainer>
    </Wrapper>
  );
}
