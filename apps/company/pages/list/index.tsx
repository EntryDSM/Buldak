import styled from '@emotion/styled';
import StudentBox from '../../components/studentbox/StudentBox';
import EditModal from '../../components/editmodal/EditModal';
import { useState } from 'react';
import { Button, DropDown, TextBox } from '../../../../packages/ui';
import { Gear, HoverGear } from '../../assets/list';
import theme from '@packages/emotion-style-provider/src/theme';

interface Props {}

function StudentList({}: Props) {
    const [onOff, setOnOff] = useState<boolean>(false);
    const closeModal = () => {
        setOnOff(false);
    };
    const test = ['HTML', 'CSS'];
    return (
        <>
            {onOff && <EditModal closeModal={closeModal} />}
            <Background>
                <Wrapper>
                    <Header>
                        <h1>전체 학생 리스트</h1>
                        <div>
                            <div>
                                <TextBox
                                    type="search"
                                    width={300}
                                    correct={true}
                                    placeholder="검색어를 입력해주세요"
                                />
                                <DropDown
                                    placeholder="학과"
                                    width={220}
                                    items={['소프트웨어개발', '임베디드소프트웨어', '정보보안']}
                                    onChange={() => {}}
                                />
                                <DropDown
                                    placeholder="분야"
                                    width={220}
                                    items={['프론트엔드', '백엔드', '안드로이드', 'IOS', '기타']}
                                    onChange={() => {}}
                                />
                            </div>
                            <Button
                                width={42}
                                height={42}
                                image={Gear}
                                hoverImage={HoverGear}
                                borderColor={theme.color.skyblue}
                                borderWidth={2}
                                onClick={() => {
                                    setOnOff(true);
                                }}
                            />
                        </div>
                    </Header>
                    <BoxesWrapper>
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                        <StudentBox name="김아무개" major="프론트엔드" num="1234" tags={test} />
                    </BoxesWrapper>
                </Wrapper>
            </Background>
        </>
    );
}

export default StudentList;

const Background = styled.div`
    min-width: 100%;
    width: fit-content;
    min-height: 100vh;
    height: fit-content;
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
        }
    }
`;

const BoxesWrapper = styled.div`
    width: 1370;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;
