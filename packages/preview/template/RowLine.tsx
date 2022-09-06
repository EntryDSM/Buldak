import styled from '@emotion/styled';

interface Props {
    height:number;
}

export default function RowLine({height}: Props) {
    return <Wrapper style={{height:height}}>
        <div />
    </Wrapper>;
}

const Wrapper = styled.div`
    position:relative;
    width: 1000px;
    height: 44px;
    padding: 21px 100px;
    display:flex;
    align-items:center;
    justify-content:center;
    >div{
        width:800px;
        height:2px;
        border-radius:100px;
        background-color:${({theme})=>theme.color.gray300}
    }
`;
