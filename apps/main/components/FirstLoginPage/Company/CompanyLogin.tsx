import { useEffect, useState } from 'react';
import { StepOne, StepThree, StepTwo } from './constatnt';

const CompanyLogin = () => {
    const [stage, setStage] = useState(0);
    useEffect(() => {
        console.log(stage);
    }, [stage]);

    const [nowStage, setNowStage] = useState<JSX.Element[]>([
        <StepOne stage={stage} setStage={setStage} />,
        <StepTwo stage={stage} setStage={setStage} />,
        <StepThree stage={stage} setStage={setStage} />,
    ]);

    return <>{nowStage[stage]}</>;
};

export default CompanyLogin;
