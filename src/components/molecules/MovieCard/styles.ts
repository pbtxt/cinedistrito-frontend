import styled from "styled-components";
// @ts-ignore
export const MovieCardContainer = styled.div`
  width: 300px;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 9px 0 rgb(0 0 0 / 20%);
  border-radius: 8px;
`;
// @ts-ignore
export const MovieCover = styled.image`
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: var(--medium);
  border-radius: 10px;
`;
// @ts-ignore
export const MovieCoverContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
      width: 200px;
    -o-object-fit: cover;
    object-fit: cover;
    background-color: var(--medium);
    border-radius: 10px;
  }
`;
