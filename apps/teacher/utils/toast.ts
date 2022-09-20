import { toast } from 'react-toastify';

type ToastType = 'ERROR' | 'SUCCESS' | 'WARN' | 'DEFAULT';

export const toastHandler = (toastType: ToastType, message?: string) => {
    const content = message || '관리자에게 문의해 주세요.';
    switch (toastType) {
        case 'WARN':
            return toast.warn(message);
        case 'ERROR':
            return toast.error(content);
        case 'SUCCESS':
            return toast.success(message);
        case 'DEFAULT':
            return toast(message);
        default:
            return;
    }
};
