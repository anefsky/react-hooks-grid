import { Wrapper, Content } from './styles';

export default function Header({ title }) {
    return (
        <Wrapper>
            <Content>{title}</Content>
        </Wrapper>
    );
}