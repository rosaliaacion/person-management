import styled from "styled-components";

const Button = styled.button`
    padding: 10px;
    border: 1px solid #ddd;
    color: red;
    border-radius: 5px;
    cursor: pointer;

    &.append {
        color: blue;
    }

    &.delete {
        margin-right: 5px;
    }

    &:disabled {
        color: #ddd;
        cursor: none;
    }
`;

export default Button;