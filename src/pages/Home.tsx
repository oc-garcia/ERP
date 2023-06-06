import { GoogleLogo } from "@phosphor-icons/react";
import { useContext } from "react";
import { styled } from "styled-components";
import { UserContext } from "../hooks/UserContext";

const HomeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  button {
    padding: 0.5rem 3rem;
    cursor: pointer;
    border-radius: 10px;
    border: none;
  }
`;

export default function Home() {
  const { user, handleSignIn } = useContext(UserContext);
  return (
    <HomeContainer>
      <h2>Login</h2>
      <button onClick={handleSignIn}>
        <GoogleLogo size={32} color="#0a1128" />
      </button>
    </HomeContainer>
  );
}
