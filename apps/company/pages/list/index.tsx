import styled from '@emotion/styled';
import StudentBox from '../../components/studentbox/StudentBox';
import EditModal from '../../components/editmodal/EditModal';
import { useState } from 'react';
import { Button, DropDown, TextBox } from '../../../../packages/ui';
import { Gear } from '../../assets/list';
import theme from '@packages/emotion-style-provider/src/theme';

interface Props {}

function StudentList({}: Props) {
    const [onOff, setOnOff] = useState(true);
    const closeModal = () => {
        setOnOff(false);
    };
    return (
        <>
            {onOff && <EditModal closeModal={closeModal} />}
            <Background>
                <Wrapper>
                    <Header>
                        <h1>전체 학생 리스트</h1>
                        <div>
                            <div>
                                <TextBox type="search" width={300} correct={true} />
                                <DropDown
                                    placeholder="학과"
                                    width={220}
                                    items={['asdf', 'asdf']}
                                    onChange={() => {}}
                                />
                                <DropDown
                                    placeholder="분야"
                                    width={220}
                                    items={[]}
                                    onChange={() => {}}
                                />
                            </div>
                            <Button
                                width={42}
                                height={42}
                                image={Gear}
                                borderColor={theme.color.main}
                                borderWidth={2}
                                onClick={() => {
                                    setOnOff(true);
                                }}
                            />
                        </div>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > h1 {
        font-size: 25px;
        font-weight: bold;
    }
    > div {
        //button,div wrapper
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        > div {
            //input,dropdown wrapper
            display: flex;
            flex-direction: row;
            width: 780px;
            align-items: center;
            justify-content: space-between;
            #temp {
                //temp input
                width: 300px;
                height: 42px;
                border: 1px solid black;
            }
        }
    }
`;
