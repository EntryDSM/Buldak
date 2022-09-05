import styled from '@emotion/styled';

interface Props {
    height: number;
}

export default function Gap({ height }: Props) {
    return <Wrapper style={{ height: height + 'px' }}></Wrapper>;
}

const Wrapper = styled.div`
    position: relative;
    width: 1000px;
    height: 50px;
`;
