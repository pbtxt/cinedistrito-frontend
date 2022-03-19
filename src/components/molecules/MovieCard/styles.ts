import styled from "styled-components";

export const MovieCardContainer = styled.div`
  width: 300px;
  height: 160px;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 9px 0 rgb(0 0 0 / 20%);
  border-radius: 8px;
`;

export const MovieCover = styled.image`
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: var(--medium);
  border-radius: 10px;
`;

export const MovieCoverContainer = styled.div`
  display: block;
`;