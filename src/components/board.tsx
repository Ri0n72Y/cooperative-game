import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import { useI18n } from "../store";
import { Flex } from "../styles";
import { CapitalCard } from "./CaptialCard";
import { css } from "@emotion/react";
import { useBoardData } from "../core/store";

const cbdTitle = ["media", "law", "transport", "trade", "management", "bank"];

export function Board() {
  const zh = useI18n((state) => state.zh);
  const mapconfigs = useBoardData((state) => state.area);
  return (
    <Container>
      <Special
        title="学校"
        icon="/school.png"
        style={{ top: 0, left: 0, borderRadius: "32px 0 0 0" }}
      />
      <Special
        title="医院"
        icon="/hospital.png"
        style={{ bottom: 0, right: 0, borderRadius: "0 0 32px 0" }}
      />
      <Special
        title="车站"
        icon="/train.png"
        style={{ top: 0, right: 0, borderRadius: "0 32px 0 0" }}
      />
      <Special
        title="车站"
        icon="/train.png"
        style={{ bottom: 0, left: 0, borderRadius: "0 0 0 32px" }}
      />
      <AreaHorizontal style={{ bottom: 0, left: "calc(18% + 3px)" }}>
        <Flex>
          {mapconfigs["farm"].map((scope, index) => (
            <CapitalCard
              key={"farm" + index}
              id={"farm-" + index}
              area={"farm"}
              scope={scope}
              style={{ height: 132, flexDirection: "column-reverse" }}
            />
          ))}
        </Flex>
        <Title>{zh["farm"]}</Title>
      </AreaHorizontal>
      <AreaHorizontal style={{ top: 0, left: "calc(18% + 3px)" }}>
        <Title>{zh["cbd"]}</Title>
        <Flex>
          {mapconfigs["cbd"].map((scope, index) => (
            <CapitalCard
              key={"cbd" + index}
              id={"cbd" + index}
              area={"cbd"}
              scope={scope}
              title={cbdTitle[index]}
              style={{ height: 132 }}
            />
          ))}
        </Flex>
      </AreaHorizontal>
      <AreaVertical
        style={{
          left: 0,
        }}
      >
        <Title
          style={{
            writingMode: "vertical-rl",
            textOrientation: "sideways",
            transform: "rotate(180deg)",
          }}
        >
          {zh["service"]}
        </Title>
        <Flex style={{ flexDirection: "column", gap: 18 }}>
          {mapconfigs["service"].map((scope, index) => (
            <CapitalCard
              key={"service" + index}
              id={"service" + index}
              area={"service"}
              scope={scope}
              style={{ flexDirection: "row", width: 132 }}
            />
          ))}
        </Flex>
      </AreaVertical>
      <AreaVertical style={{ right: 0 }}>
        <Flex style={{ flexDirection: "column" }}>
          {mapconfigs["heavy-industry"].map((scope, index) => (
            <CapitalCard
              key={"heavy-industry" + index}
              id={"heavy-industry" + index}
              area={index === 1 ? "heavy-industry-tesla" : "heavy-industry"}
              scope={scope}
              style={{ flexDirection: "row-reverse", width: 132 }}
            />
          ))}
        </Flex>
        <Title
          style={{
            writingMode: "vertical-rl",
            textOrientation: "sideways",
          }}
        >
          {zh["heavy-industry"]}
        </Title>
      </AreaVertical>
    </Container>
  );
}

const area = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 3px solid hotpink;
  background: #dbdb00;
  position: absolute;
`;

const AreaHorizontal = styled.div`
  ${area}
  flex-direction: column;
  width: calc(64% - 12px);
  height: 18%;
`;

const AreaVertical = styled.div`
  ${area}
  width: 18%;
  height: calc(64% - 12px);
`;

interface CardProps {
  title: string;
  icon?: string;
}
function Special({
  title,
  icon,
  ...rest
}: CardProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <SpecialContainer {...rest}>
      {icon && <Icon src={icon} />}
      <Title>{title}</Title>
    </SpecialContainer>
  );
}

const Icon = styled.img`
  width: 104px;
  height: 104px;
  flex-shrink: 0;
`;

const Title = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
`;

const SpecialContainer = styled.div`
  width: 18%;
  height: 18%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid hotpink;
  background: #dbdb00;
  border-radius: 32px;
  margin: 0 auto;
  position: absolute;
`;

const Container = styled.div`
  width: 1000px;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background: #f0f8ff;
  border-radius: 32px;
  margin: 0 auto;
  position: relative;
`;
