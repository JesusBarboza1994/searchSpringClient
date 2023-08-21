import styled from "@emotion/styled";
import { Card } from "./styles";

export function LogoCard({img,name}){
    
    return (
        <Card>
            <img src={img}  />
            <h1>{name}</h1>
        </Card>
    )
}