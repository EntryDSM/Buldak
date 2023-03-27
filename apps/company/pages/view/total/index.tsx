import styled from '@emotion/styled';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button, DropDown, TextBox } from '@packages/ui';
import theme from '@packages/emotion-style-provider/src/theme';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { readAllBlocks } from '../../../api/blocks';
import { EachStudentType } from '../../../types';
import EditModal from '../../../components/editmodal/EditModal';
import StudentBox from '../../../components/studentbox/StudentBox';
import Loading from '../../../components/loading/Loading';

interface Props {}

function StudentList({}: Props) {
    const router = useRouter();
    console.log();
    const { data, isLoading, error } = useQuery(['blockslist'], async () => {
        const data = await readAllBlocks();
        return data.student_list.sort((a, b) => Number(a.gcn) - Number(b.gcn));
    });
    const [onOff, setOnOff] = useState<boolean>(false);
    const [list, setList] = useState<EachStudentType[] | null>(null);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const SearchBuffer = useRef({
        search: '',
        classnum: '',
        major: '',
        grade: '',
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
            const grade = SearchBuffer.grade == '전체 학년' ? '' : SearchBuffer.grade;
            const searchedlist = data.filter((value) => {
                if (major == 'Etc') {
                    if (
                        (value.name.includes(search) || !search) &&
                        (value.gcn.slice(1, 2) == classnum || !classnum) &&
                        value.major_tag != 'FrontEnd' &&
                        value.major_tag != 'BackEnd' &&
                        value.major_tag != 'Android' &&
                        value.major_tag != 'Game' &&
                        value.major_tag != 'iOS' &&
                        value.major_tag != 'Embedded'
                    ) {
                        return value;
                    }
                }
                if (
                    (value.name.includes(search) || !search) &&
                    (value.gcn.slice(1, 2) == classnum || !classnum) &&
                    (value.major_tag == major || !major)
                ) {
                    return value;
                }
            });
            setList(searchedlist.filter((value) => value.gcn[0] == grade || !grade));
        }
    };

    return (
        <>
            {onOff && <EditModal closeModal={closeModal} />}
            <Background>
                <Wrapper>
                    <Header>
                        <div id="title">
                            <h1>책갈피</h1>
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
                                        searchList();
                                    }}
                                    onClick={() => {
                                        searchList();
                                    }}
                                />
                                <DropDown
                                    placeholder="학년"
                                    width={220}
                                    items={['전체 학년', '1', '2', '3']}
                                    value={'전체 학년'}
                                    onChange={(value) => {
                                        SearchBuffer.grade = value;
                                        searchList();
                                    }}
                                />
                                <DropDown
                                    placeholder="반"
                                    width={220}
                                    items={['전체 반', '1', '2', '3', '4']}
                                    onChange={(value) => {
                                        SearchBuffer.classnum = value;
                                        searchList();
                                    }}
                                />
                                <DropDown
                                    placeholder="분야"
                                    width={220}
                                    items={[
                                        '전체 분야',
                                        'FrontEnd',
                                        'BackEnd',
                                        'Android',
                                        'iOS',
                                        'Game',
                                        'Embedded',
                                        'Etc',
                                    ]}
                                    onChange={(value) => {
                                        SearchBuffer.major = value;
                                        searchList();
                                    }}
                                />
                            </div>
                            <div id="right">
                                {/* <Button
                                    width={42}
                                    height={42}
                                    image={Gear}
                                    hoverImage={HoverGear}
                                    borderColor={theme.color.skyblue}
                                    borderWidth={2}
                                    onClick={() => {
                                        setOnOff(true);
                                    }}
                                /> */}
                                <Button
                                    height={42}
                                    width={120}
                                    content={'전체보기'}
                                    borderColor={theme.color.skyblue}
                                    borderWidth={2}
                                    fontColor={theme.color.skyblue}
                                    onClick={() => {
                                        router.push(`/`);
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
            gap: 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
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
