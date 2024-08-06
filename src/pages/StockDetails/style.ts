import styled from "styled-components";

export const styledStockDetails = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.content {
    display: flex;
    flex-direction: column;
    width: 70%;
}

@media screen and (max-width: 600px) {
    .content {
        width: 90%;
    }
}
`;