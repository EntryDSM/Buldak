import styled from '@emotion/styled';
import { useState } from 'react';
import RepresentativeModal from '../../components/myPage/RepresentativeModal';
import EditPhoneNumber from '../../components/myPage/EditPhoneNumber';
import EditProfile from '../../components/myPage/EditProfile';
import MoveBtn from '../../components/myPage/MoveBox';
import AddTagModal from '../../components/myPage/AddTagModal';
import Technology from '../../components/myPage/Technology';
import { NextPage } from 'next';
import { useMutation, useQuery } from 'react-query';
import { profileImageConverter } from '../../utils/api/userConverter';
import { myInfomationResource } from '../../utils/api/userResouce';

export type UploadImage = {
    file: File;
    thumbnail: string;
    type: string;
};

const MyPage: NextPage<{}> = () => {
    const [openAddTagModal, setOpenAddTagModal] = useState<boolean>(false);
    const [openRepresentativeModal, setOpenRepresentativeModal] = useState<boolean>(false);

    return (
        <_MyPageBox>
            <div>
                <Technology
                    setOpenRepresentativeModal={setOpenRepresentativeModal}
                    setOpenAddTagModal={setOpenAddTagModal}
                />
                <_UnderWrapper>
                    <EditProfile />
                    <EditPhoneNumber />
                </_UnderWrapper>
                <MoveBtn />
            </div>
            {openRepresentativeModal && (
                <RepresentativeModal setOpenRepresentativeModal={setOpenRepresentativeModal} />
            )}
            {openAddTagModal && <AddTagModal setOpenAddTagModal={setOpenAddTagModal} />}
        </_MyPageBox>
    );
};

MyPage.requiredResources = [myInfomationResource];

const _MyPageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const _UnderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export default MyPage;
