import { BlueContainer, BlueLeft, BlueLeftInfo, BlueRight, BlueRightInfo } from "./styles";

interface IBlueInfoProps {
    quotasTotal: string,
    creditsTotal: string,
}


export default function BlueInfos({quotasTotal, creditsTotal}: IBlueInfoProps) {
    return (
        <BlueContainer>
            
            <BlueLeft>                
                <BlueLeftInfo>
                    +{quotasTotal}
                    <div className="title">cotas contempladas</div>
                </BlueLeftInfo>
            </BlueLeft>

            <BlueRight>
                <BlueRightInfo>
                    +<span>R$</span>{creditsTotal}
                    <div className="title">em créditos</div>
                </BlueRightInfo>
            </BlueRight>
        
        </BlueContainer>
    )
}