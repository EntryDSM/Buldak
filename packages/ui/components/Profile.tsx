import styled from '@emotion/styled';
import DefaultPerson from '../assets/profile/DefaultPerson.svg';
import School from '../assets/profile/School.svg';

interface ProfileProps {
    type: 'default' | 'school' | 'image';
    src?: string;
}

const Profile = ({ type = 'image', src }: ProfileProps) => {
    return <ProfileWrapper type={type} src={src}></ProfileWrapper>;
};

const ProfileWrapper = styled.div<ProfileProps>`
    width: 100px;
    height: 100px;
    background-color: ${({ theme }) => theme.color.background};
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.color.gray300};
    background-image: ${({ type, src }) =>
        type === 'image' ? `url(${src})` : backgroundProfileImage[type]};
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${({ type }) => (type === 'image' ? 'cover' : 'auto 40px')};
`;

const backgroundProfileImage = {
    default: `url(${DefaultPerson.src})`,
    school: `url(${School.src})`,
};

export default Profile;
