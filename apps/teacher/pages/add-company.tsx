<<<<<<< HEAD
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
=======
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
>>>>>>> e00e9c85974154ffb8db7f5caf1c1292b3c3e366
