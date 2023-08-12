import { useEffect } from "react";
import { useAuth } from "../../context/auth-context";
import { CodeContainer, Wrapper } from "./styles";
import { getCodes } from "../../services/codes-service";
import CodeCard from "../../components/CodeCard/CodeCard";

export default function SearchInterface() {
  const { brand, codes, setCodes } = useAuth();
  console.log("aquin entre");
  useEffect(() => {
    getCodes(brand)
      .then((response) => {
        setCodes(response);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Wrapper>
      <aside>
        <p>Marca</p>
        <p>Modelo</p>
        <p>Posición</p>
        <p>Año</p>
        <p>Versión</p>
      </aside>
      <CodeContainer>
        {codes &&
          codes.codes.map((code) =>
            code.cars.map((car, i) => (
              <CodeCard code={code} key={`${code.osis_code}+${i}`} car={car} />
            ))
          )}
      </CodeContainer>
    </Wrapper>
  );
}
