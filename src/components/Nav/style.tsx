import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-bg);
  height: 10vh;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 2rem;
    gap: 2rem;
    h1 {
      text-decoration: none;
      font-size: 3rem;
    }
    a {
      text-decoration: none;
    }
    div {
      display: flex;
      gap: 2rem;
      button {
        border: 1px solid var(--primary-text);
        padding: 0rem 1rem;
        border-radius: 10px;
        background-color: var(--secondary-bg);
        padding: 1rem;
      }
    }
  }
`;
