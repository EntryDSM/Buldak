import AddCompany from '../components/company/AddCompany';
import SuccessModal from '../components/company/SuccessModal';
import useModal from '../hooks/useModal';

const AddCompanyPage = () => {
    const { selectedModal } = useModal();
    return (
        <>
            {selectedModal === 'SUCCESS' && <SuccessModal />}
            <AddCompany />
        </>
    );
};
export default AddCompanyPage;
