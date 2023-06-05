import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-bg);
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem;
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
      a {
        padding: 1rem;
        border: 1px solid var(--primary-text);
        border-radius: 10px;
      }
    }
  }
`;
