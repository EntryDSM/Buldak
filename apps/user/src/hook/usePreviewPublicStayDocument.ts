import { useQuery } from 'react-query';
import { queryPreviewPublicStayDocument } from '../utils/api/userResouce';
import { queryKey } from '../utils/queryKey';

const usePreviewPublicStayDocument = (studentId?: string) => {
    const previewPublickStayKey = studentId ? queryKey.documents.preview(studentId) : '';
    return useQuery(previewPublickStayKey, queryPreviewPublicStayDocument);
};

export default usePreviewPublicStayDocument;
