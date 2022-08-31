import { ChangeEvent, useState } from 'react';
import { CreateCompanyRequest } from '../models/teachers/requests';

const useCompany = () => {
    const [companyInfo, setCompanyInfo] = useState<CreateCompanyRequest>({
        profile_image_path: '',
        company_name: '',
        location: '',
        start_at: '',
        end_at: '',
        name: '',
        phone_number: '',
        email: '',
        is_mou: true,
    });
    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setCompanyInfo({
            ...companyInfo,
            [e.target.name]: e.target.value,
        });
    };
    const onChangeRadioValue = (companyType: string) => {
        setCompanyInfo({
            ...companyInfo,
            is_mou: companyType == 'MOU',
        });
    };
    return {
        onChangeInputValue,
        onChangeRadioValue,
        companyInfo,
        setCompanyInfo,
    };
};
export default useCompany;
