import { queryKey } from '../queryKey';
import { instance } from './instance';

interface PhoneNumberCertificationCodeParams {
    phone_number: string;
}

export const phoneNumberCertificationCodeGenerator = (
    params: PhoneNumberCertificationCodeParams,
) => {
    const generatorKey = queryKey.auth.phoneNumber();
    return instance.post(generatorKey, params);
};
