import styled from '@emotion/styled';
import theme from '@packages/emotion-style-provider/src/theme';
import { Button, TextBox } from '@packages/ui';
import { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import ElementListState from '../../../recoil/ElementListState';
import PatchUpload from './Upload';
import PatchWrapper from './Wrapper';

interface PropsType {
    id?: string;
}

function ProjectPatch({ id }: PropsType) {
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const [newArr] = elementList.filter((value) => value.id === id);
    const [skill, setSkill] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
        let tempargs;
        switch (type) {
            case 'pj-name': {
                tempargs = { ...newArr.args, title: e.target.value };
                break;
            }
            case 'pj-date': {
                tempargs = { ...newArr.args, date: e.target.value };
                break;
            }
            case 'title': {
                tempargs = { ...newArr.args, text: [e.target.value, newArr.args.text[1]] };
                break;
            }
            case 'info': {
                tempargs = { ...newArr.args, text: [newArr.args.text[0], e.target.value] };
                break;
            }
        }
        const temp = [...elementList];
        const index = elementList.indexOf(newArr);
        temp.splice(index, 1, { ...newArr, args: tempargs });
        setElementList(temp);
    };

    const onClick = (isdelete: boolean = false) => {
        if (!isdelete) {
            let tempargs;
            tempargs = { ...newArr.args, skills: newArr.args.skills.concat(skill) };
            const temp = [...elementList];
            const index = elementList.indexOf(newArr);
            temp.splice(index, 1, { ...newArr, args: tempargs });
            setElementList(temp);
        } else {
            let temparr = [...newArr.args.skills];
            if (!temparr.length) return;
            temparr.splice(0, 1);
            let tempargs;
            tempargs = {
                ...newArr.args,
                skills: temparr,
            };
            const temp = [...elementList];
            const index = elementList.indexOf(newArr);
            temp.splice(index, 1, { ...newArr, args: tempargs });
            setElementList(temp);
        }
    };

    return (
        <>
            <PatchUpload id={id} />
            <PatchWrapper name={'프로젝트명'}>
                <TextBox
                    onChange={(e) => onChange(e, 'pj-name')}
                    width={300}
                    type={'text'}
                    correct={true}
                    value={newArr.args.title}
                />
            </PatchWrapper>
            <PatchWrapper name={'프로젝트 진행 기간'}>
                <TextBox
                    onChange={(e) => onChange(e, 'pj-date')}
                    width={300}
                    type={'text'}
                    value={newArr.args.date}
                    correct={true}
                />
            </PatchWrapper>
            <PatchWrapper name="사용 기술">
                <TextBox
                    onChange={(e) => setSkill(e.target.value)}
                    width={300}
                    type={'text'}
                    correct={true}
                />
                <ButtonWrapper>
                    <Button
                        height={36}
                        width={70}
                        backgroundColor={theme.color.skyblue}
                        fontColor={'white'}
                        content="추가"
                        onClick={() => onClick()}></Button>
                    <div style={{ width: '20px' }} />
                    <Button
                        height={36}
                        width={70}
                        backgroundColor={'white'}
                        fontColor={theme.color.main}
                        borderColor={theme.color.main}
                        borderWidth={1}
                        content="삭제"
                        onClick={() => onClick(true)}></Button>
                </ButtonWrapper>
            </PatchWrapper>
            <PatchWrapper name={'제목'}>
                <TextBox
                    onChange={(e) => onChange(e, 'title')}
                    width={300}
                    type={'text'}
                    value={newArr.args.text[0]}
                    correct={true}
                />
            </PatchWrapper>
            <PatchWrapper name={'내용'}>
                <TextArea onChange={(e) => onChange(e, 'info')} value={newArr.args.text[1]} />
            </PatchWrapper>
        </>
    );
}

export default ProjectPatch;

const TextArea = styled.textarea`
    width: 300px;
    height: 150px;
    border: 2px solid ${({ theme }) => theme.color.gray700};
    padding: 10px 15px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.white};
    resize: none;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
`;
