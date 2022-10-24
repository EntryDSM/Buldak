import styled from '@emotion/styled';
import StudentBox from '../components/studentbox/StudentBox';
import EditModal from '../components/editmodal/EditModal';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button, DropDown, TextBox } from '@packages/ui';
import { Gear, HoverGear } from '../assets/list';
import theme from '@packages/emotion-style-provider/src/theme';
import { EachStudentType, StudentsListResponseType } from '../types';
import Loading from '../components/loading/Loading';
import { useQuery } from 'react-query';
import { readAllBlocks } from '../api/blocks';
import { useRouter } from 'next/router';

interface Props {}

function StudentList({}: Props) {
    const router = useRouter();
    const { data, isLoading, error } = useQuery(['blockslist'], async () => {
        const data = await readAllBlocks();
        return data.student_list;
    });
    const [onOff, setOnOff] = useState<boolean>(false);
    const [list, setList] = useState<EachStudentType[] | null>(null);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const SearchBuffer = useRef({
        search: '',
        classnum: '',
        major: '',
    }).current;

    const closeModal = () => {
        setOnOff(false);
    };

    useEffect(() => {
        if (data) {
            if (!list && !isEmpty) {
                if (error) {
                    setIsEmpty(true);
                }
                if (data.length > 0) {
                    setList(data);
                } else setIsEmpty(true);
            }
        }
    }, [list, isLoading]);

    const searchList = async () => {
        if (data) {
            const search = SearchBuffer.search;
            const major = SearchBuffer.major == '전체 분야' ? '' : SearchBuffer.major;
            const classnum = SearchBuffer.classnum == '전체 반' ? '' : SearchBuffer.classnum;
            const searchedlist = data.filter((value) => {
                if (
                    (value.name.includes(search) || !search) &&
                    (value.gcn.slice(1, 2) == classnum || !classnum) &&
                    (value.major_tag == major || !major)
                ) {
                    return value;
                }
            });
            setList(searchedlist);
        }
    };

    return (
        <>
            {onOff && <EditModal closeModal={closeModal} />}
            <Background>
                <Wrapper>
                    <Header>
                        <div id="title">
                            <h1>전체 학생 리스트</h1>
                            <h5>검색 아이콘을 클릭하면 검색이 시작됩니다.</h5>
                        </div>
                        <div>
                            <div>
                                <TextBox
                                    type="search"
                                    width={300}
                                    correct={true}
                                    placeholder="이름을 입력해주세요"
                                    onChange={(event) => {
                                        if (event.currentTarget.value === undefined) {
                                        } else {
                                            SearchBuffer.search = event.currentTarget.value;
                                        }
                                    }}
                                    onClick={() => {
                                        searchList();
                                    }}
                                />
                                <DropDown
                                    placeholder="반"
                                    width={220}
                                    items={['전체 반', '1', '2', '3', '4']}
                                    onChange={(value) => {
                                        SearchBuffer.classnum = value;
                                    }}
                                />
                                <DropDown
                                    placeholder="분야"
                                    width={220}
                                    items={[
                                        '전체 분야',
                                        'Frontend',
                                        'Backend',
                                        'Android',
                                        'iOS',
                                        'Ai',
                                        'Game',
                                        'Design',
                                        'Embedded',
                                        'Security',
                                        'DevOps',
                                        'Developer',
                                        'ProductManager',
                                        'ProjectManager',
                                        'Etc',
                                    ]}
                                    onChange={(value) => {
                                        SearchBuffer.major = value;
                                    }}
                                />
                            </div>
                            <div id="right">
                                <Button
                                    height={42}
                                    width={120}
                                    content={'전체보기'}
                                    borderColor={theme.color.skyblue}
                                    borderWidth={2}
                                    fontColor={theme.color.skyblue}
                                    onClick={() => {
                                        router.push('/view/total');
                                    }}
                                />
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
                        </div>
                    </Header>
                    <BoxesWrapper>
                        {list ? (
                            list.map((value, index) => (
                                <>
                                    <StudentBox
                                        name={value.name}
                                        major={value.major_tag}
                                        num={value.gcn}
                                        tags={value.skill_tag_list}
                                        EOL={!((index + 1) % 4)}
                                        key={index}
                                        prev_img={value.preview_image_path}
                                        profile_img={value.profile_image_path}
                                        public_document_id={value.student_id}
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
    h1 {
        font-size: 25px;
        font-weight: bold;
        margin-right: 20px;
    }
    > #title {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        > h5 {
            color: ${({ theme }) => theme.color.gray700};
        }
    }
    > div:not(#title) {
        //button,div wrapper
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        > div:not(#right) {
            //input,dropdown wrapper
            display: flex;
            flex-direction: row;
            width: 780px;
            align-items: center;
            justify-content: space-between;
        }
        > #right {
            display: flex;
            flex-direction: row;
            width: 180px;
            justify-content: space-between;
        }
    }
`;

const BoxesWrapper = styled.div`
    width: 1370px;
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
