import { atom } from 'recoil';

export interface elementType {
    id: string;
    image: JSX.Element;
    text: string;
    patch: JSX.Element[];
    preview: any;
    args: any;
}

export const ElementListState = atom<elementType[]>({
    key: 'ElementList',
    default: [],
});

export default ElementListState;