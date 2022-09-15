import AddCompany from '../components/company/AddCompany';
import SuccessModal from '../components/modals/SuccessModal';
import useModal from '../hooks/useModal';

const AddCompanyPage = () => {
    const { selectedModal, password } = useModal();
    return (
        <>
            {selectedModal === 'CREATE_SUCCESS' && (
                <SuccessModal type="ADD_COMPANY" password={password || ''} />
            )}
            <AddCompany />
        </>
    );
};
export default AddCompanyPage;
