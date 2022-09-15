import { ChangeEvent, useEffect, useState } from 'react';
import { CreateCompanyRequest } from '../models/teachers/requests';
import { createImage } from '../api/default';
import useModal from './useModal';
import { createCompany, editCompany } from '../api/teachers';
import { useRouter } from 'next/router';

const useCompany = () => {
    const { selectModal } = useModal();
    const router = useRouter();
    const [companyInfo, setCompanyInfo] = useState<CreateCompanyRequest>({
        name: '',
        email: '',
        phone_number: '',
        location: '',
        profile_image_path: '',
        company_name: '',
        is_mou: true,
        start_at: '',
        end_at: '',
        company_id: '',
    });
    useEffect(() => console.log(companyInfo), [companyInfo]);
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
    const [file, setFile] = useState<File>();
    const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = () => {
                const base64 = reader.result;
                if (base64) setProfilePreview(base64.toString());
            };
            setFile(e.target.files[0]);
            if (e.target.name === 'companyInfo' && e.target.files[0]) {
                console.log(e.target.files[0]);
                onClickEditCompany(e.target.id, e.target.files[0]);
            }
        }
    };
    const onClickCreateCompany = async () => {
        try {
            const FD = new FormData();
            if (file !== undefined) {
                FD.append('file', file);
                const image = await createImage('PROFILE', FD);

                createCompany({
                    ...companyInfo,
                    profile_image_path: image.image_path,
                }).then((res) => {
                    selectModal({ modal: 'CREATE_SUCCESS', password: res.password });
                    router.push('/managementCompany');
                });
            }
        } catch (err) {}
    };
    const onClickEditCompany = async (id: string, file?: File) => {
        try {
            if (file !== undefined) {
                const FD = new FormData();
                FD.append('file', file);
                await createImage('PROFILE', FD).then((res) => {
                    editCompany(id, {
                        ...companyInfo,
                        profile_image_path: res.image_path,
                    });
                });
            } else editCompany(id, companyInfo).then(() => {});
        } catch (err) {
            console.log(err);
        }
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
