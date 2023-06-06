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
  img {
    border-radius: 50%;
  }
  h2 {
    text-align: center;
  }
  button {
    padding: 0.5rem 3rem;
    cursor: pointer;
    border-radius: 10px;
    border: none;
  }
`;

export default function Home() {
  const { user, handleSignIn } = useContext(UserContext);
  console.log(user);
  return (
    <HomeContainer>
      {user == null && (
        <>
          <h2>Login</h2>
          <button onClick={handleSignIn}>
            <GoogleLogo size={32} color="#0a1128" />
          </button>
        </>
      )}
      {user != null && (
        <>
          {user.photoURL != undefined && <img src={user.photoURL} alt="User avatar" />}
          <h2>
            Hello, {user.displayName}.<br /> You have full access to this ERP System.
          </h2>
        </>
      )}
    </HomeContainer>
  );
}
