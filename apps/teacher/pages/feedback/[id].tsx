import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Feedback from '../../components/feedback';

const FeedbackPage = () => {
    const router = useRouter();
    const { id } = router.query;
    return <Feedback id={id as string} />;
};
export default FeedbackPage;
