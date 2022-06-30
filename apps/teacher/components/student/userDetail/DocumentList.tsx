import styled from '@emotion/styled';

const DocumentList = () => {
    return (
        <_Wrapper>
            <_DocumentType>
                <_ChangeDocumentTypeButton></_ChangeDocumentTypeButton>
                <strong className="type">공개 문서</strong>
                <_ChangeDocumentTypeButton></_ChangeDocumentTypeButton>
            </_DocumentType>
            <_Document>
                {/* todo
                    Next/Image 로 수정할것.
                */}
                <div className="previewImage" />
                <p className="developPart">프론트엔드</p>
                <_UserSummary>
                    <div className="profileImage" />
                    <p className="name">김의찬</p>
                    <p className="studentNumber">2101</p>
                </_UserSummary>
            </_Document>
        </_Wrapper>
    );
};
export default DocumentList;

const _Wrapper = styled.div`
    width: 400px;
    box-sizing: border-box;
    padding: 0 38px;
    display: flex;
    flex-direction: column;
    border-right: 2px solid ${({ theme }) => theme.color.gay300};
`;
const _DocumentType = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    > .type {
        font-size: 20px;
        font-weight: 500;
        line-height: 25px;
        color: ${({ theme }) => theme.color.black};
        margin: 0 40px;
    }
`;
const _ChangeDocumentTypeButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.gray500};
`;
const _Document = styled.section`
    width: 100%;
    height: 280px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.color.gay300};
    margin-top: 7px;
    > .previewImage {
        height: 190px;
        background-color: ${({ theme }) => theme.color.gray900};
    }
    > .developPart {
        height: 40px;
        box-sizing: border-box;
        padding-left: 15px;
        font-size: 20px;
        line-height: 40px;
        color: ${({ theme }) => theme.color.navy};
        font-weight: 500;
        border-bottom: 1px solid ${({ theme }) => theme.color.gay300};
    }
`;
const _UserSummary = styled.div`
    display: flex;
    height: 50px;
    box-sizing: border-box;
    padding: 10px 15px;
    align-items: center;
    > .profileImage {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.gay300};
    }
    > .name {
        font-size: 16px;
        line-height: 20px;
        color: ${({ theme }) => theme.color.black};
        margin-left: 10px;
    }
    > .studentNumber {
        font-size: 14px;
        line-height: 17px;
        color: ${({ theme }) => theme.color.gray700};
        margin-left: 5px;
    }
`;
