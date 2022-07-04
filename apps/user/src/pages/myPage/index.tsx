import styled from '@emotion/styled';
import { useState } from 'react';
import RepresentativeModal from '../../components/myPage/RepresentativeModal';
import EditPhoneNumber from '../../components/myPage/EditPhoneNumber';
import EditProfile from '../../components/myPage/EditProfile';
import MoveBtn from '../../components/myPage/MoveBox';
import AddTagModal from '../../components/myPage/AddTagModal';
import Technology from '../../components/myPage/Technology';

function MyPage() {
    const [openAddTagModal, setOpenAddTagModal] = useState<boolean>(false);
    const [openRepresentativeModal, setOpenRepresentativeModal] = useState<boolean>(false);
    return (
        <MyPageBox>
            <div>
                <Technology
                    setOpenRepresentativeModal={setOpenRepresentativeModal}
                    setOpenAddTagModal={setOpenAddTagModal}
                />
                <UnderWrapper>
                    <EditProfile />
                    <EditPhoneNumber />
                </UnderWrapper>
                <MoveBtn />
            </div>
            {openAddTagModal && <RepresentativeModal setOpenAddTagModal={setOpenAddTagModal} />}
            {openRepresentativeModal && (
                <AddTagModal setOpenRepresentativeModal={setOpenRepresentativeModal} />
            )}
        </MyPageBox>
    );
}

const MyPageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const UnderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export default MyPage;
