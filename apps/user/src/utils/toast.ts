import { toast } from 'react-toastify';

type ToastType = 'ERROR' | 'SUCCESS' | 'WARN' | 'DEFAULT';

export const toastHandler = (toastType: ToastType, message?: string) => {
    const content = message || '관리자에게 문의해 주세요.';
    switch (toastType) {
        case 'WARN':
            return toast.warn(message, { autoClose: 1000 });
        case 'ERROR':
            return toast.error(content, { autoClose: 1000 });
        case 'SUCCESS':
            return toast.success(message, { autoClose: 1000 });
        case 'DEFAULT':
            return toast(message, { autoClose: 1000 });
        default:
            return;
    }
};
``;
