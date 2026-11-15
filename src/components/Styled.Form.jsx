import styled from "@emotion/styled";

export const StyledForm = styled.form`
  width: 800px;
  border: 3px solid white;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0px 0px 10px white;
  & button {
    padding: 10px;
    display: block;
    margin-top: 30px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
  & input {
    height: 40px;
  }
`;
