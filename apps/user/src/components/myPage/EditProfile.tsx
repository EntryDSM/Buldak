import styled from '@emotion/styled';
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { Profile } from '../../assets/Images';
import { useResource } from '../../hook/useResource';
import { UploadImage } from '../../pages/myPage';
import { profileImageConverter, studentInformationConverter } from '../../utils/api/userConverter';
import { myInfomationResource } from '../../utils/api/userResouce';

function EditProfile() {
    const [imageFile, setImageFile] = useState<UploadImage | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { data: myInformation } = useResource(myInfomationResource);
    const handleClickFileInput = () => {
        fileInputRef.current?.click();
    };
    const { mutate: studentInformationConverterMutate } = useMutation(studentInformationConverter);
    const { mutate: profileImageConverterMutate } = useMutation(profileImageConverter, {
        onSuccess: ({ data }) => {
            if (myInformation) {
                studentInformationConverterMutate({
                    location: myInformation.location,
                    name: myInformation.name,
                    phone_number: myInformation.phone_number,
                    profile_image_path: data.image_path,
                });
            }
        },
    });

    const uploadProfile = (e: ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (fileList && fileList[0]) {
            const url = URL.createObjectURL(fileList[0]);
            setImageFile({
                file: fileList[0],
                thumbnail: url,
                type: fileList[0].type.slice(0, 5),
            });
            profileImageConverterMutate(fileList[0]);
        }
    };

    return (
        <EditProfileBox>
            <div>
                <EditProfileImgBox>
                    <EditProfileImg
                        src={
                            imageFile?.thumbnail || myInformation?.profile_image_path || Profile.src
                        }
                    />
                </EditProfileImgBox>
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={uploadProfile}></input>
                <EditProfileBtn onClick={handleClickFileInput}>프로필 사진 변경</EditProfileBtn>
            </div>
        </EditProfileBox>
    );
}

const EditProfileBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 275px;
    height: 250px;
    border: 3px solid ${({ theme }) => theme.color.point};
    border-radius: 5px;
`;

const EditProfileBtn = styled.button`
    border-bottom: 1px solid ${({ theme }) => theme.color.black};
    font-size: 18px;
    font-weight: bold;
`;

const EditProfileImgBox = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`;

const EditProfileImg = styled.label<{ src: string }>`
    width: 100px;
    background-image: ${({ src }) => `url(${src})`};
    background-position: center;
    background-size: cover;
    border: 2px solid ${({ theme }) => theme.color.gray700};
    background-repeat: no-repeat;
    height: 100px;
    border-radius: 50%;
`;

export default EditProfile;
