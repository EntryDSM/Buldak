import { useEffect, useState } from 'react';
import { StageOne, StageThree, StageTwo } from './constatnt';

const StudentLogin = () => {
    const [stage, setStage] = useState(0);
    useEffect(() => {
        console.log(stage);
    }, [stage]);

    const [nowStage, setNowStage] = useState<JSX.Element[]>([
        <StageOne setStage={setStage} />,
        <StageTwo setStage={setStage} />,
        <StageThree setStage={setStage} />,
    ]);

    return <>{nowStage[stage]}</>;
};

export default StudentLogin;
