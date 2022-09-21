import theme from '@packages/emotion-style-provider/src/theme';
import { Button } from '@packages/ui';
import { useRouter } from 'next/router';
import Gear from '../../assets/svgs/gear.svg';
import HoverGear from '../../assets/svgs/hovergear.svg';
import { useResource } from '../../hook/useResource';
import { myInfomationResource } from '../../utils/api/userResouce';
import { departmentConverter } from '../../utils/function/department';
import { gcnConverter } from '../../utils/function/gcn';
import * as S from './styled';

const SideBar = () => {
    const { data: myInformaion } = useResource(myInfomationResource);
    const router = useRouter();
    return (
        <S.UserSideBar>
            <div id='button'>
                <Button
                    width={42}
                    height={42}
                    image={Gear}
                    hoverImage={HoverGear}
                    borderColor={theme.color.skyblue}
                    borderWidth={2}
                    onClick={() => {
                        router.push('/myPage');
                    }}
                />
            </div>
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
