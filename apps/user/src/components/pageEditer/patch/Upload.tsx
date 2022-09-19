import PatchElementWrapper from './Wrapper';
import { Upload } from '../../../assets/Images';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import ElementListState from '../../../recoil/ElementListState';
import { ChangeEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { changeImageToUrl } from '../../../utils/function/image';

interface PropsType {
    id?: string;
}

function PatchUpload({ id }: PropsType) {
    const [elementList, setElementList] = useRecoilState(ElementListState);
    const [newArr] = elementList.filter((value) => value.id === id);

    const onChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const uploadFile = e.target.files[0];
            if (uploadFile) {
                alert(uploadFile.name + '파일이 선택되었습니다.');
                const formData = new FormData();
                formData.append('file', uploadFile);
                const url = changeImageToUrl(formData);
                const tempargs = { ...newArr.args, imageUrl: (await url).image_path };
                const temp = [...elementList];
                const index = elementList.indexOf(newArr);
                temp.splice(index, 1, { ...newArr, args: tempargs });
                setElementList(temp);
            }
        }
    };
    return (
        <PatchElementWrapper name="이미지">
            <_Input type="file" accept="image/*" onChange={(e) => onChangeImg(e)} />
            <Image src={Upload} />
        </PatchElementWrapper>
    );
}

export default PatchUpload;

const _Input = styled.input`
    border: 1px solid black;
    position: absolute;
    width: 100%;
    height: 80%;
    z-index: 1;
    opacity: 0;
`;
