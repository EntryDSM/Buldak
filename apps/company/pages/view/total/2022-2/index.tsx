import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { readAllBlocks } from '../../../../api/blocks';
import { readPersonalDocument } from '../../../../api/document';
import {
    Right,
    Left,
    snd_Banner,
    snd_Class1,
    snd_Class2,
    snd_Class3,
    snd_Class4,
    BackArrow,
    TeacherSays,
} from '../../../../assets';
import { ArrIntoJsx } from '@packages/preview/functions/arrIntoJsx';
import { JsxIntoArr } from '@apps/user/src/utils/function/jsxIntoArr';
import { useRouter } from 'next/router';

interface EachContent {
    document_id: string;
    name: string;
    gcn: string;
}
type ArrType = (EachContent | string)[] | [];

function SecondTotalView() {
    const [EditedArr, setArr] = useState<ArrType>([]);
    const [curPage, setPage] = useState(0);
    const router = useRouter();
    const { data, isLoading, error } = useQuery(['blockslist'], async () => {
        const data = await readAllBlocks();
        return data.student_list;
    });
    const { data: documentData, refetch } = useQuery(
        ['getPublicDocument'],
        async () => {
            if (typeof EditedArr[curPage] == 'string' || typeof EditedArr[curPage] == undefined) {
                return null;
            }
            const data = EditedArr[curPage] as EachContent;
            return await readPersonalDocument(data.document_id);
        },
        {
            enabled: EditedArr.length > 0,
        },
    );
    useEffect(() => {
        if (data) {
            let temp: ArrType = ['표지', '선생말씀', '학생목록'] as any[];
            for (let i = 0; i < 4; i++) {
                temp.push('학년설명');
                for (let j = 0; j < 20; j++) {
                    const number = j + 1 + '';
                    const tempgcn = '2' + (i + 1) + '' + number.padStart(2, '0');
                    const [student] = data.filter((value) => value.gcn == tempgcn);
                    temp.push(
                        student
                            ? {
                                  document_id: student.student_id,
                                  name: student.name,
                                  gcn: student.gcn,
                              }
                            : '정보없음',
                    );
                }
            }
            setArr(temp);
        }
    }, [data]);
    useEffect(() => {
        const data = EditedArr[curPage] as EachContent;
        if (data) {
            console.log(data.document_id);
            refetch();
        }
    }, [curPage]);

    const getOtherPage = () => {
        //1 : 학생설명
        //3 : 1반소개
        //4~23 : 1반
        //24 : 2반소개
        //25~44 : 2반
        //45 : 3반소개
        //46~65 : 3반
        //66 : 4반소개
        //67 ~ 86 : 4반

        const classname = [
            '소프트웨어개발과',
            '소프트웨어개발과',
            '임베디드소프트웨어과',
            '정보보안과',
        ];
        const classcolor = ['#a1b5dc', '#5387ec', '#3068d3', '#0a4595'];
        switch (true) {
            case !curPage: {
                return (
                    <ImgWrapper>
                        <Image src={snd_Banner} />
                    </ImgWrapper>
                );
            }
            case curPage == 1: {
                return (
                    <ImgWrapper>
                        <Image src={TeacherSays} />
                    </ImgWrapper>
                );
            }
            case curPage == 2: {
                return (
                    <StudentsWrapper>
                        <h1>2022 전체 학생 목록</h1>
                        <div id="wrapper">
                            <div />
                            {new Array(4).fill(0).map((value, index) => (
                                <div className="line">
                                    <h3
                                        style={{
                                            color: classcolor[index],
                                            borderColor: classcolor[index],
                                        }}>
                                        {index + 1}반
                                    </h3>
                                    <h4
                                        style={{
                                            color: classcolor[index],
                                            borderColor: classcolor[index],
                                        }}>
                                        {classname[index]}
                                    </h4>
                                    {new Array(20).fill(0).map((val, idx) => (
                                        <h2
                                            className="classnum"
                                            onClick={() => setPage(index * 20 + (index + 4) + idx)}>
                                            {2 + '' + (index + 1) + (idx + 1 + '').padStart(2, '0')}
                                        </h2>
                                    ))}
                                </div>
                            ))}
                            <div />
                        </div>
                    </StudentsWrapper>
                );
            }
            case curPage == 3: {
                return (
                    <ImgWrapper>
                        <Image src={snd_Class1} />
                    </ImgWrapper>
                );
            }
            case curPage > 3 && curPage <= 23: {
                return (
                    <EmptyPage>
                        <h1>{'21' + (curPage - 3 + '').padStart(2, '0')}</h1>
                        <h2>No Data</h2>
                    </EmptyPage>
                );
            }
            case curPage == 24: {
                return (
                    <ImgWrapper>
                        <Image src={snd_Class2} />
                    </ImgWrapper>
                );
            }
            case curPage > 24 && curPage <= 44: {
                return (
                    <EmptyPage>
                        <h1>{'22' + (curPage - 24 + '').padStart(2, '0')}</h1>
                        <h2>No Data</h2>
                    </EmptyPage>
                );
            }
            case curPage == 45: {
                return (
                    <ImgWrapper>
                        <Image src={snd_Class3} />
                    </ImgWrapper>
                );
            }
            case curPage > 45 && curPage <= 65: {
                return (
                    <EmptyPage>
                        <h1>{'23' + (curPage - 45 + '').padStart(2, '0')}</h1>
                        <h2>No Data</h2>
                    </EmptyPage>
                );
            }
            case curPage == 66: {
                return (
                    <ImgWrapper>
                        <Image src={snd_Class4} />
                    </ImgWrapper>
                );
            }
            case curPage > 66 && curPage <= 86: {
                return (
                    <EmptyPage>
                        <h1>{'24' + (curPage - 66 + '').padStart(2, '0')}</h1>
                        <h2>No Data</h2>
                    </EmptyPage>
                );
            }
            default: {
            }
        }
    };

    return (
        <TotalWrapper>
            <Back onClick={() => router.push(`/`)}>
                <Image src={BackArrow} />
            </Back>
            <BookWrapper>
                <div id="wrapper">
                    <div id="clipwrapper">
                        <div className="clip" id="clip1" onClick={() => setPage(2)}>
                            <p>목록</p>
                        </div>
                        <div className="clip" id="clip2" onClick={() => setPage(3)}>
                            <p>1반</p>
                        </div>
                        <div className="clip" id="clip3" onClick={() => setPage(24)}>
                            <p>2반</p>
                        </div>
                        <div className="clip" id="clip4" onClick={() => setPage(45)}>
                            <p>3반</p>
                        </div>
                        <div className="clip" id="clip5" onClick={() => setPage(66)}>
                            <p>4반</p>
                        </div>
                    </div>
                    <TemplateWrapper>
                        {curPage ? (
                            <span
                                id="left"
                                onClick={() => setPage(curPage > 0 ? curPage - 1 : curPage)}>
                                <Image src={Left} />
                            </span>
                        ) : (
                            <></>
                        )}
                        <div id="template">
                            {typeof EditedArr[curPage] == 'string' ? (
                                getOtherPage()
                            ) : documentData ? (
                                <Templates>
                                    {/*                                     <div id="blocker" />
                                     */}{' '}
                                    {JSON.parse(documentData.content)
                                        .map((value) => JsxIntoArr(value))
                                        .map((value) =>
                                            ArrIntoJsx({
                                                ...value.args,
                                                isTeacher: false,
                                                feedback: {
                                                    feedInfo: '',
                                                    isRead: false,
                                                },
                                            }),
                                        )}
                                </Templates>
                            ) : (
                                <h1>Loading...</h1>
                            )}
                        </div>
                        {curPage < EditedArr.length - 1 ? (
                            <span
                                id="right"
                                onClick={() =>
                                    setPage(curPage < EditedArr.length - 1 ? curPage + 1 : curPage)
                                }>
                                <Image src={Right} />
                            </span>
                        ) : (
                            <></>
                        )}
                    </TemplateWrapper>
                </div>
            </BookWrapper>
        </TotalWrapper>
    );
}
export default SecondTotalView;

const ImgWrapper = styled.span`
    max-width: unset;
    width: 100%;
    position: absolute;
    top: -10px;
    left: -15px;
    > span {
        max-width: unset !important;
        width: calc(100% + 30px) !important;
        img {
            width: 100%;
        }
    }
`;

const Back = styled.span`
    position: fixed;
    top: 30px;
    left: 30px;
    cursor: pointer;
`;

const StudentsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h1 {
        margin-top: 50px;
    }
    #wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: space-around;
        .classnum {
            font-size: 16px;
            margin: 2px;
            cursor: pointer;
            :hover {
                color: #969393;
            }
        }
        .line {
            height: 650px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 70px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 180px;
            h3 {
                border: 3px solid;
                padding: 10px;
                width: 100%;
                border-radius: 50px;
                text-align: center;
            }
            h4 {
                border-bottom: 2px solid;
                margin-bottom: 20px;
                margin-top: 15px;
                padding-bottom: 10px;
            }
        }
    }
`;

const EmptyPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 30px;
`;

const TotalWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BookWrapper = styled.div`
    position: relative;
    @media screen and (max-width: 1920px) {
        zoom: 90%;
    }
    @media screen and (max-width: 1800px) {
        zoom: 80%;
    }
    @media screen and (max-width: 1600px) {
        zoom: 70%;
    }
    > #wrapper {
        position: absolute;
        left: calc(100% - 650px);
        top: calc(100% - 450px);
        width: 1300px;
        aspect-ratio: 13/9;
        background-color: ${({ theme }) => theme.color.white};
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 999;
        > #clipwrapper {
            width: 100px;
            display: flex;
            flex-direction: column;
            position: absolute;
            background-color: none;
            top: 30px;
            right: -100px;
            > #clip1 {
                background: #dbdbdb;
            }
            > #clip2 {
                background: #a1b5dc;
            }
            > #clip3 {
                background: #5387ec;
            }
            > #clip4 {
                background: #3068d3;
            }
            > #clip5 {
                background: #0a4595;
            }
            > .clip {
                cursor: pointer;
                z-index: 1;
                font-weight: 500;
                font-size: 20px;
                line-height: 25px;
                color: #ffffff;
                box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
                border-radius: 0px 5px 5px 0px;
                width: 80px;
                height: 40px;
                display: flex;
                align-items: center;
                transition: 0.2s;
                justify-content: center;
                :hover {
                    transition: 0.2s;
                    width: 90px;
                }
            }
        }
    }
`;

const TemplateWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    > #template {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        overflow-y: scroll;
        width: 100%;
        height: 100%;
        ::-webkit-scrollbar {
            display: none;
        }
    }
    #right {
        position: absolute;
        cursor: pointer;
        right: 100px;
        top: 420px;
    }
    #left {
        position: absolute;
        cursor: pointer;
        left: 100px;
        top: 420px;
        z-index: 999;
    }
`;

const Templates = styled.div`
    width: 530px;
    zoom: 160%;
    height: fit-content;
    position: relative;
    #blocker {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 100;
    }
`;
