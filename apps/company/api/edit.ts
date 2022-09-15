import { instance } from './axios';

interface EditProps {
    company_name: string;
    location: string;
    profile_image_path: string;
    name: string;
    phone_number: string;
}

export const editCompanyInfo = async (data: EditProps) => {
    try {
        return (await instance.patch('/companies/information', data)).data;
    } catch (err) {
        throw err;
    }
};
