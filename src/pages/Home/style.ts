import { styled } from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  box-sizing: border-box;
  button {
    padding: 0.5rem 3rem;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    color: white;
  }
  img {
    border-radius: 50%;
  }
  h2 {
    text-align: center;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      text-decoration: none;
      border: 1px solid var(--primary-text);
      padding: 1rem;
      border-radius: 10px;
      background-color: white;
      padding: 1rem;
      color: var(--secondary-bg);
      width: 9rem;
    }
  }
  div:first-child {
    flex-direction: column;
  }
`;
