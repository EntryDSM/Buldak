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

interface Props {}

function StudentList({}: Props) {
    const [onOff, setOnOff] = useState<boolean>(false);
    const [list, setList] = useState<EachStudentType[] | null>(null);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
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
                                            SearchBuffer.search = event.currentTarget.value;
                                        }
                                    }}
                                    onClick={() => {
                                        console.log(
                                            studentList.searchList(
                                                SearchBuffer.search,
                                                SearchBuffer.major,
                                                SearchBuffer.classnum,
                                            ),
                                        );
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
                                        major={value.major_tag}
                                        num={value.gcn}
                                        tags={value.skill_tag_list}
                                        EOL={!((index + 1) % 4)}
                                        key={index}
                                        prev_img={value.preview_image_path}
                                        profile_img={value.profile_image_path}
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