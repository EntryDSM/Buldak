import { JsxIntoArr } from '@apps/user/src/utils/function/jsxIntoArr';
import { ArrIntoJsx } from '@packages/preview/functions/arrIntoJsx';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { readPublicDocument } from '../../api/document';

function TotalView() {
    const router = useRouter();
    const documentId = router.asPath.slice(6);
    const { data: documentData, refetch } = useQuery(['getPublicDocument'], async () => {
        return await readPublicDocument(documentId);
    });
    return (
        <>
            {documentData &&
                JSON.parse(documentData.content)
                    .map((value) => JsxIntoArr(value))
                    .map((value) =>
                        ArrIntoJsx({
                            ...value.args,
                            isTeacher: false,
                        }),
                    )}
        </>
    );
}
export default TotalView;
