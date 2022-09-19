import { TextBox } from '@packages/ui';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import ElementListState from '../../../recoil/ElementListState';
import PatchUpload from './Upload';
import PatchWrapper from './Wrapper';

interface PropsType {
    id?: string;
}

function ProfilePatch({ id }: PropsType) {
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const [newArr] = elementList.filter((value) => value.id === id);
    const onChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
        let tempargs;
        switch (type) {
            case 'name': {
                tempargs = { ...newArr.args, name: e.target.value };
                break;
            }
            case 'phone': {
                tempargs = { ...newArr.args, phone: e.target.value };
                break;
            }
            case 'github': {
                tempargs = { ...newArr.args, github: e.target.value };
                break;
            }
            case 'email': {
                tempargs = { ...newArr.args, email: e.target.value };
                break;
            }
        }
        const temp = [...elementList];
        const index = elementList.indexOf(newArr);
        temp.splice(index, 1, { ...newArr, args: tempargs });
        setElementList(temp);
    };
    return (
        <>
            <PatchUpload id={id} />
            <PatchWrapper name={'이름'}>
                <TextBox
                    onChange={(e) => onChange(e, 'name')}
                    width={300}
                    type={'text'}
                    correct={true}
                    value={newArr.args.name}
                />
            </PatchWrapper>
            <PatchWrapper name={'이메일'}>
                <TextBox
                    onChange={(e) => onChange(e, 'email')}
                    width={300}
                    type={'text'}
                    value={newArr.args.email}
                    correct={true}
                />
            </PatchWrapper>
            <PatchWrapper name={'Github'}>
                <TextBox
                    onChange={(e) => onChange(e, 'github')}
                    width={300}
                    type={'text'}
                    value={newArr.args.github}
                    correct={true}
                />
            </PatchWrapper>
            <PatchWrapper name={'연락처'}>
                <TextBox
                    onChange={(e) => onChange(e, 'phone')}
                    width={300}
                    type={'text'}
                    value={newArr.args.phone}
                    correct={true}
                />
            </PatchWrapper>
        </>
    );
}

export default ProfilePatch;
