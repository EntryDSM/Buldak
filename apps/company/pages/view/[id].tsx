import { useRouter } from 'next/router';

function TotalView() {
    const router = useRouter();
    const documentId = router.asPath.slice(6);
    return <>{documentId}</>;
}
export default TotalView;
