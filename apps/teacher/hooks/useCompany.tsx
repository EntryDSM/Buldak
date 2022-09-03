import { ChangeEvent, useEffect, useState } from 'react';
import { CreateCompanyRequest } from '../models/teachers/requests';
import { createImage } from '../api/default';
import useModal from './useModal';
import { createCompany, editCompany } from '../api/teachers';
import { useRouter } from 'next/router';

const useCompany = () => {
    const FD = new FormData();
    const { selectModal } = useModal();
    const router = useRouter();
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
    const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = () => {
                const base64 = reader.result;
                if (base64) setProfilePreview(base64.toString());
            };
            FD.append('file', e.target.files[0]);
        }
    };
    const uploadImage = (body: FormData) => {
        createImage('PROFILE', {
            file: body,
        }).then((res) => {
            setCompanyInfo({
                ...companyInfo,
                profile_image_path: res.image_path,
            });
        });
    };
    const onClickCreateCompany = async () => {
        try {
            await uploadImage(FD);
            createCompany(companyInfo).then((res) => {
                selectModal({ modal: 'SUCCESS', password: res.password });
            });
        } catch (err) {}
    };
    const onClickEditCompany = (id: string) => {
        try {
            editCompany(id, companyInfo).then(() => {
                router.reload();
            });
        } catch (err) {}
    };
    return {
        onChangeInputValue,
        onChangeRadioValue,
        companyInfo,
        setCompanyInfo,
        onChangeFile,
        profilePreview,
        onClickCreateCompany,
        onClickEditCompany,
    };
};
export default useCompany;
