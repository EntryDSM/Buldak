import styled from '@emotion/styled';
import Image from 'next/image';
import { Profile } from '../../assets/Images';

function EditProfile() {
    return (
        <EditProfileBox>
            <div>
                <EditProfileImgBox>
                    <EditProfileImg src={Profile} />
                </EditProfileImgBox>
                <EditProfileBtn>프로필 사진 변경</EditProfileBtn>
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

const EditProfileImg = styled(Image)`
    width: 100px;
    height: 100px;
`;

export default EditProfile;
