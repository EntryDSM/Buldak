import { useResource } from '../../hook/useResource';
import { myInfomationResource } from '../../utils/api/userResouce';
import { departmentConverter } from '../../utils/function/department';
import { gcnConverter } from '../../utils/function/gcn';
import * as S from './styled';

const SideBar = () => {
    const { data: myInformaion } = useResource(myInfomationResource);
    return (
        <S.UserSideBar>
            <S.UserProfile src={myInformaion?.profile_image_path || ''} />
            <S.UserClass>{departmentConverter(myInformaion?.class_num)}</S.UserClass>
            <S.UserName>
                {gcnConverter(myInformaion?.grade, myInformaion?.class_num, myInformaion?.number)}{' '}
                {myInformaion?.name}
            </S.UserName>
            <S.UsetText>전화번호 : {myInformaion?.phone_number}</S.UsetText>
            <S.UsetText>이메일 : {myInformaion?.email}</S.UsetText>
            <S.UsetText>주소 : {myInformaion?.location}</S.UsetText>
        </S.UserSideBar>
    );
};

export default SideBar;
