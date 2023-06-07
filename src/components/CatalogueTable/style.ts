import { styled } from "styled-components";

export const TableContainer = styled.section`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid var(--primary-text);
  border-radius: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 0.5rem;
    h2 {
      cursor: pointer;
    }
  }
  table {
    padding: 0.5rem;
    td,
    th {
      padding: 0.5rem 1rem;
      border: 1px solid var(--primary-text);
      text-align: center;
      color: var(--secondary-bg);
      background-color: var(--primary-text);
    }
  }
`;
