import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import { IconBox } from "../assets/box";
import { AreaKey, useMetaConfig } from "../core/store";
import { useI18n } from "../store";
import { getRow } from "../utils";
import { Flex } from "../styles";

interface CapitalCardProps {
  area: AreaKey;
  scope: number;
}
export function Card({
  area,
  scope,
  ...rest
}: CapitalCardProps & HTMLAttributes<HTMLDivElement>) {
  const { basePrice, ...data } = useMetaConfig((state) => state[area]);
  const zh = useI18n((state) => state.zh);
  const { rent, income } = getRow({ price: basePrice * scope, ...data });
  return (
    <CardDetail {...rest}>
      <Half>
        <Side style={{ borderBottom: "1px dashed hotpink" }}>
          {scope * basePrice}
        </Side>
        <Side>
          {zh["rent"]}
          <br />
          {rent.toFixed(0).padStart(3, " ")}
        </Side>
      </Half>
      <Half style={{ borderLeft: "1px dashed hotpink", gap: 8 }}>
        {income.split(" | ").map((x, i) => {
          return (
            <Nodeline>
              {i === 0 && <IconBox style={{ width: 16, height: 16 }} />}
              {i === 1 && <DbBox />}
              {i === 2 && <TriBox />}
              {x}
            </Nodeline>
          );
        })}
      </Half>
    </CardDetail>
  );
}

const DbBox = () => {
  return (
    <Flex>
      <IconBox style={{ width: 12, height: 12 }} />
      <IconBox style={{ width: 12, height: 12, marginLeft: -4 }} />
    </Flex>
  );
};

const TriBox = () => {
  return (
    <div style={{ position: "relative", width: 20, height: 20 }}>
      <IconBox
        style={{
          position: "absolute",
          width: 12,
          height: 12,
          top: 0,
          left: 4,
        }}
      />
      <IconBox
        style={{
          position: "absolute",
          width: 12,
          height: 12,
          bottom: 0,
        }}
      />
      <IconBox
        style={{
          position: "absolute",
          width: 12,
          height: 12,
          bottom: 0,
          right: 0,
        }}
      />
    </div>
  );
};

const Side = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

const CardDetail = styled.div`
  width: 100px;
  height: 100px;
  border: 1px dashed hotpink;
  background: aquamarine;
  font-size: 14px;
  display: flex;
  margin: 0 2px;
`;

const Nodeline = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

const Half = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
