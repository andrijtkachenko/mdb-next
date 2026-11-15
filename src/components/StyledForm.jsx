import styled from "@emotion/styled";

export const StyledForm = styled.form`
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid white;
    padding: 40px;
    border-radius: 40px;
    box-shadow: 0px 0px 20px white;
    & button {
        margin-top: 40px;
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        padding: 10px
    }
`;

export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 8px;
    & input {
       height: 40px; 
    }

`