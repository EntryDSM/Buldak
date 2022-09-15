import styled from '@emotion/styled';
import DownArrow from '../../../assets/svgs/DownArrow';
import Minus from '../../../assets/svgs/Minus';
import Plus from '../../../assets/svgs/Plus';
import UpArrow from '../../../assets/svgs/UpArrow';

interface Props {
    zoom: number;
    curpage: number;
    totalpage: number;
    zoomUp: () => void;
    zoomDown: () => void;
    addPage: () => void;
    deletePage: () => void;
}

const iconList = [<Minus />, <Plus />, <UpArrow />, <DownArrow />];

function Header({
    zoom = 100,
    curpage = 1,
    totalpage = 1,
    addPage,
    deletePage,
    zoomDown,
    zoomUp,
}: Props) {
    return (
        <Wrapper>
            <div id="left">
                <div onClick={() => zoomDown()}>
                    <Minus />
                </div>
                <p>{zoom}%</p>
                <div onClick={() => zoomUp()}>
                    <Plus />
                </div>
            </div>
            <div id="right">
                <div id="icons">
                    {iconList.map((icon, i) => (
                        <div key={i}>{icon}</div>
                    ))}
                </div>
                <p>{curpage}/{totalpage} 페이지</p>
            </div>
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.div`
    width: 530px;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.gray700};
    font-size: 16px;
    margin-top: 100px;
    svg {
        cursor: pointer;
    }
    > #left {
        width: 94px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        > div {
            height: 20px;
        }
        > p {
            cursor: default;
            width: 44px;
            text-align: center;
        }
    }
    > #right {
        width: 186px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        > #icons {
            width: 95px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            > div {
                height: 20px;
            }
        }
    }
`;
