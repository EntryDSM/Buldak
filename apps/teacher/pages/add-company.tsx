import AddCompany from '../components/company/AddCompany';
import { useContext } from 'react';
import { ModalStateContext } from '../context/ModalContext';
import SuccessModal from '../components/company/SuccessModal';

const AddCompanyPage = () => {
    const modalState = useContext(ModalStateContext);
    return (
        <>
            {modalState.selectedModal === 'SUCCESS' && <SuccessModal />}
            <AddCompany />
        </>
    );
};
export default AddCompanyPage;
