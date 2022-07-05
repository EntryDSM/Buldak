import styled from '@emotion/styled';
import DefaultPerson from '../assets/profile/DefaultPerson.svg';
import School from '../assets/profile/School.svg';

interface ProfileProps {
    type: 'default' | 'school' | 'image';
    src?: string;
    width?: string;
    height?: string;
}

const Profile = ({ type = 'image', src, width = '100px', height = '100px' }: ProfileProps) => {
    return <ProfileWrapper type={type} src={src} width={width} height={height}></ProfileWrapper>;
};

const ProfileWrapper = styled.div<ProfileProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ theme }) => theme.color.background};
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.color.gray300};
    background-image: ${({ type, src }) =>
        type === 'image' ? `url(${src})` : backgroundProfileImage[type]};
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${({ type }) => (type === 'image' ? 'cover' : 'auto calc(100% / 2.5)')};
`;

const backgroundProfileImage = {
    default: `url(${DefaultPerson.src})`,
    school: `url(${School.src})`,
};

export default Profile;
