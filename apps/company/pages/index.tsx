import styled from '@emotion/styled';
import StudentBox from '../components/studentbox/StudentBox';
import EditModal from '../components/editmodal/EditModal';
import { useEffect, useRef, useState } from 'react';
import { Button, DropDown, TextBox } from '@packages/ui';
import { Gear, HoverGear } from '../assets/list';
import theme from '@packages/emotion-style-provider/src/theme';
import { EachStudentType, StudentsListResponseType } from '../types';
import { useList } from '../hooks/useList';
import { readAllBlocks } from '../api/blocks';
import Loading from '../components/loading/Loading';
import { searchIcon } from '@packages/ui/assets/textBox';
import {
    Template_DefProfile,
    Template_DoubleText,
    Template_Gap,
    Template_Image,
    Template_ImageText,
    Template_Link,
    Template_List,
    Template_RowLine,
    Template_Text,
    Template_TextImage,
} from '../../../packages/ui/template/index';

interface Props {}

function StudentList({}: Props) {
    const [onOff, setOnOff] = useState<boolean>(false);
    const [list, setList] = useState<EachStudentType[] | null>(null);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [isdata, setIsData] = useState(false);
    const SearchBuffer = useRef({
        search: '',
        classnum: '',
        major: '',
    }).current;
    const studentList = useList();

    const closeModal = () => {
        setOnOff(false);
    };

    useEffect(() => {
        if (!list && !isEmpty) {
            studentList.getState().then((result) => {
                if (result.length > 0) setList(result);
                else setIsEmpty(true);
            });
        }
    }, [list]);

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
                                    onChange={(event) => {
                                        if (event.currentTarget.value === undefined) {
                                        } else {
                                            console.log(event.currentTarget.value);
                                            SearchBuffer.search = event.currentTarget.value;
                                            console.log(SearchBuffer);
                                        }
                                    }}
                                />
                                <DropDown
                                    placeholder="반"
                                    width={220}
                                    items={['1', '2', '3', '4']}
                                    onChange={(value) => {
                                        SearchBuffer.classnum = value;
                                    }}
                                />
                                <DropDown
                                    placeholder="분야"
                                    width={220}
                                    items={['프론트엔드', '백엔드', '안드로이드', 'IOS', '기타']}
                                    onChange={(value) => {
                                        SearchBuffer.major = value;
                                    }}
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
                        {list ? (
                            list.map((value, index) => (
                                <>
                                    <StudentBox
                                        name={value.name}
                                        major={value.major}
                                        num={value.gcn}
                                        tags={value.tag_list}
                                        EOL={!((index + 1) % 4)}
                                        key={index}
                                    />
                                </>
                            ))
                        ) : (
                            <Loading />
                        )}
                        {isEmpty && (
                            <Box>
                                <div id="center">
                                    <p>No Data</p>
                                </div>
                            </Box>
                        )}
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
`;

const Box = styled.div`
    width: 100%;
    height: calc(100vh - 300px);
    display: flex;
    align-items: center;
    justify-content: center;

    > #center {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;
