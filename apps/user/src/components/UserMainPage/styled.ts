import styled from "@emotion/styled";

export const displayFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserMainContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const UserSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20vw;
  height: 120vh;
  background: #5387ec;
`;

export const UserProfile = styled.div`
  width: 90px;
  height: 90px;
  background: #f3f7ff;
  border: 2px solid #f0f0f0;
  border-radius: 100px;

  margin-top: 90px;
`;

export const UserClass = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  color: #3068d3;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 166px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #5387ec;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vw;
  line-height: 28px;
  color: #ffffff;

  margin: 0px;
  margin-bottom: 10px;
`;

export const UsetText = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 1.1vw;
  line-height: 23px;
  color: #ffffff;

  margin: 0px;
  margin-bottom: 10px;
`;

export const DoucumentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 76.5vw;
  height: 115vh;
  background: #fbfbfb;
  padding-left: 3.5vw;
  padding-top: 5vh;
`;

export const ExamineBox = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 1.5vw;
  line-height: 29px;
  text-align: center;
  color: #e03131;

  width: 9vw;
  height: 7vh;
  right: 5vw;
  top: 7vh;
  background: #ffffff;
  border: 2px solid #e03131;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1000px;
  padding-bottom: 2px;
`;

export const TagLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 3vw;

  margin-bottom: 5vh;
`;

export const DocumentTitle = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 1.4vw;
  line-height: 30px;
  color: #343434;

  margin: 0px;
`;

export const DocumentText = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #343434;
  margin: 0px;
  margin-top: 5vh;
  margin-bottom: 4vh;
`;

export const DocumentLayout = styled.div`
  display: flex;
  gap: 10px;
`;

export const DocumentButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DocumentButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 100px;
`;

export const NonDocumentText = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #b6b6b6;
`;

export const DocumentSignal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 34px;
  height: 34px;
  background: #e03131;
  border: 3.33333px solid #e03131;
  border-radius: 166.667px;
`;

type props = {
  marginL: string;
};

export const DocumentBox = styled.div<props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: ${(props) => props.marginL};
`;

export const TagBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const TagAria = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
`;

export const testTag = styled.div`
  width: 123px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #5387ec;
  border-radius: 100px;
`;

export const DocumentsLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5vw;
`;

export const Documents = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 15vw;
  height: 15vw;
  background: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 8px;
`;

export const DocumentImg = styled.div`
  width: 100%;
  height: 66%;
`;

export const DocumentLine = styled.div`
  width: 100%;
  height: 1px;
  background: #f0f0f0;
`;

export const DocumentIntroBox = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 33%;
`;

export const DocumentIntroImg = styled.div`
  width: 17%;
  height: 50%;
  background: #f3f7ff;
  border: 2px solid #f0f0f0;
  border-radius: 100px;

  margin-left: 15px;
`;

export const DocumentIntroText = styled.div`
  font-weight: 500;
  font-size: 2.2vh;
  line-height: 25px;
  color: #343434;

  margin-left: 10px;
`;

export const DocumentIntroClass = styled.div`
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 1.5vh;
  line-height: 19px;
  color: #3068d3;

  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 15px;
  padding-right: 15px;
  background: #f3f7ff;
  border-radius: 3px;
  margin-left: 10px;
  margin-top: 5px;
`;

export const NoDocument = styled.div`
  display: flex;
  align-items: center;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #b6b6b6;

  width: 15vw;
  height: 15vw;
`;

export const DocumentPlusIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4vw;
  height: 4vw;
  border: 2.7px solid #5387ec;
  border-radius: 300px;
`;

export const DocumentPlusText = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #5387ec;

  margin: 0px;
  margin-top: 15px;
`;
