import styled from '@emotion/styled';
import { useState } from 'react';
import RepresentativeModal from '../../components/myPage/RepresentativeModal';
import EditPhoneNumber from '../../components/myPage/EditPhoneNumber';
import EditProfile from '../../components/myPage/EditProfile';
import MoveBtn from '../../components/myPage/MoveBox';
import AddTagModal from '../../components/myPage/AddTagModal';
import Technology from '../../components/myPage/Technology';

function MyPage() {
    const [OpenAddTagModal, SetOpenAddTagModal] = useState<boolean>(false);
    const [OpenRepresentativeModal, SetOpenRepresentativeModal] = useState<boolean>(false);
    return (
        <MyPageBox>
            <div>
                <Technology
                    SetOpenRepresentativeModal={SetOpenRepresentativeModal}
                    SetOpenAddTagModal={SetOpenAddTagModal}
                />
                <UnderWrapper>
                    <EditProfile />
                    <EditPhoneNumber />
                </UnderWrapper>
                <MoveBtn />
            </div>
            {OpenAddTagModal && <RepresentativeModal SetOpenAddTagModal={SetOpenAddTagModal} />}
            {OpenRepresentativeModal && (
                <AddTagModal SetOpenRepresentativeModal={SetOpenRepresentativeModal} />
            )}
        </MyPageBox>
    );
}

const MyPageBox = styled.div`
    display: flex;
    justify-content: center;
`;

const UnderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export default MyPage;
