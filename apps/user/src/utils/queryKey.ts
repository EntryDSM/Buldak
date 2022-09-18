export const queryKey = {
    users: {
        auth: () => '/users/auth',
        information: () => '/users/information',
    },
    auth: {
        email: () => '/auth/email',
        phoneNumber: () => '/auth/phone-number',
        verify: ({ authCode, value }: Record<'authCode' | 'value', string>) =>
            `/auth/verify?authCode=${authCode}&value=${value}`,
    },
    images: (type: 'PROFILE' | 'PREVIEW') => `/images?type=${type}`,
    students: { index: (type?: 'PHONE' | 'PASSWORD') => `/students${type ? `&type=${type}` : ''}` },
    tags: {
        index: (name: string, isMajor: boolean) =>
            `/tags${name && isMajor.toString() ? `?name=${name}&isMajor=${isMajor}` : ''}`,
        myTag: (tagId: string) => `/tags/${tagId}`,
        mySkill: () => '/tags/my-skill',
        major: () => '/tags/major',
    },
    documents: {
        public: (document_id: string) => `/documents/public/${document_id}`,
        publicRequest: (document_id: string) =>
            `https://server.dsm-repo.com/documents/${document_id}`,
        localQuery: (document_id: string) => `https://server.dsm-repo.com/documents/${document_id}`,
        localDelete: (document_id: string) =>
            `https://server.dsm-repo.com/documents/${document_id}`,
        localPatch: (document_id: string) => `https://server.dsm-repo.com/documents/${document_id}`,
        copy: () => '/documents/copy',
        protectedUrl: () => '/documents/protected-url',
        cancel: (document_id: string) => `/documents/cancel/${document_id}`,
        index: (document_id?: string) => `/documents/${document_id && `/${document_id}`}`,
        lists: () => '/documents/lists',
        stay: (document_id?: string) => `/documents/stay${document_id && `/${document_id}`}`,
        preview: (student_id: string) => `/documents/preview/${student_id}`,
    },
};
