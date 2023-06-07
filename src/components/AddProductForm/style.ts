import { styled } from "styled-components";

export const AddProductFormContainer = styled.form`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--primary-text);
  padding: 1rem;
  border-radius: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    h2 {
      cursor: pointer;
    }
  }
  input {
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
  }
  button {
    border-radius: 10px;
    border: 1px solid var(--primary-text);
    cursor: pointer;
    background-color: var(--secondary-bg);
  }
`;
