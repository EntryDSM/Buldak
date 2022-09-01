import { ChangeEvent, useState } from 'react';
import { CreateCompanyRequest } from '../models/teachers/requests';
import { createImage } from '../api/default';

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
    const [profilePreview, setProfilePreview] = useState('');
    const FD = new FormData();
    const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = () => {
                const base64 = reader.result;
                if (base64) setProfilePreview(base64.toString());
            };
            FD.append('image', e.target.files[0]);
        }
    };
    const uploadImage = (body: FormData) => {
        createImage('PROFILE', {
            image: body,
        }).then((res) => {
            setCompanyInfo({
                ...companyInfo,
                profile_image_path: res.image_path,
            });
        });
    };
    return {
        onChangeInputValue,
        onChangeRadioValue,
        companyInfo,
        setCompanyInfo,
        onChangeFile,
        profilePreview,
        uploadImage,
        FD,
    };
};
export default useCompany;
