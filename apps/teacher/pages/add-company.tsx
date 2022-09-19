import AddCompany from '../components/company/AddCompany';
import SuccessModal from '../components/modals/SuccessModal';
import useModal from '../hooks/useModal';
import { useRouter } from 'next/router';
import { pages } from '../utils/constant';

const AddCompanyPage = () => {
    const { selectedModal, password } = useModal();
    const router = useRouter();
    const onCloseModal = () => {
        router.push(pages.manageCompany);
    };
    return (
        <>
            {selectedModal === 'CREATE_SUCCESS' && (
                <SuccessModal type="ADD_COMPANY" password={password || ''} onClose={onCloseModal} />
            )}
            <AddCompany />
        </>
    );
};
export default AddCompanyPage;
