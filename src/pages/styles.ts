import styled from 'styled-components/native'
import {Platform} from 'react-native'
export const Container = styled.View `
    flex: 1;
    background-color: #121015;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 70px;
`;
export const Title = styled.Text `
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
`
export const Input = styled.TextInput `
    background-color: transparent;
    color: #fff;
    font-size: 18px;
    padding: ${Platform.OS === 'ios' ? '15px' : '12px'};
    border-radius: 7px;
    margin-top: 15px;
    border-bottom-width: 2px;
    border-color: violet;
`