import { HTMLAttributes } from "react";
import { AreaKey, useBoardData } from "../core/store";
import { Card } from "./Card";
import styled from "@emotion/styled";
import { useI18n } from "../store";

interface CapitalCardProps {
  id: string;
  area: AreaKey;
  scope: number;
  title?: string;
}
export function CapitalCard({
  id,
  area,
  scope,
  title,
  style,
  ...rest
}: CapitalCardProps & HTMLAttributes<HTMLDivElement>) {
  const { zh } = useI18n();
  const data = useBoardData((state) => state.cards);
  return (
    <Container
      {...rest}
      style={{
        background: data[id]?.owner === "player" ? "lime" : undefined,
        ...style,
      }}
    >
      {!title && <div />}
      {title && <Title>{zh[title]}</Title>}
      <Card
        area={area}
        scope={scope}
        style={{
          background: data[id]?.owner === "player" ? "lime" : undefined,
        }}
      />
    </Container>
  );
}

const Title = styled.div`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
