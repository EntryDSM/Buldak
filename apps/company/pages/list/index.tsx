import styled from '@emotion/styled';
import StudentBox from '../../components/studentbox/StudentBox';
import EditModal from '../../components/editmodal/EditModal'

interface Props {}

function StudentList({}: Props) {
    return (
        <>
{/*         <EditModal /> */}
        <Background>
            <Wrapper>
                <Header>
                    <h1>전체 학생 리스트</h1>
                    <div></div>
                </Header>
                <StudentBox />
            </Wrapper>
        </Background>
        </>
    );
}

export default StudentList;

const Background = styled.div`
    min-width: 100%;
    width: fit-content;
    height: 100vh;
    background-color: #f8f9fa;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper = styled.div`
    margin-top: 70px;
    width: 1370px;
    height: fit-content;
`;

const Header = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 40px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > h1 {
        font-size: 25px;
        font-weight: bold;
    }
    >div{

    }
`;
