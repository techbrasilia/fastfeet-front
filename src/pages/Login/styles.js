import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Form = styled.form`
    margin-top: 80px;
    max-width: 400px;
    width: 100%;
    display: flex;
    background: #fff;
    padding: 25px;
    flex-direction: column;

    img {
        width: 200px;
        margin: 0 auto;
    }
    label {
        text-transform: uppercase;
        padding-top: 20px;
    }

    input {
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #333;
        margin: 0 0 10px;
        border: 1px solid #cccccc47;

        &::placeholder {
            color: #999;
        }
    }

    button {
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background: #7159c1;
        color: #fff;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 3px;
        &:hover {
            background: #52d89f;
        }
    }
`;
