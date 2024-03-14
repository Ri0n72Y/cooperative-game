import { useState } from "react";
import { Capitals } from "./Capitals";
import { Region } from "./Region";
import { Updates } from "./Updates";
import { Special } from "./Special";
import { DataProvider, initialValue } from "./store";

function Docs() {
  const [state, setState] = useState<Record<string, number>>(initialValue);
  return (
    <DataProvider value={{ state, setState }}>
      <div className="base-container">
        <h1>打工与资产</h1>
        <Capitals />
        <h1>升级元素</h1>
        <Updates />
        <h1>区域建筑: 控制一半区域地块可以建造</h1>
        <Region />
        <h1>特殊地区</h1>
        <Special />
      </div>
    </DataProvider>
  );
}

export default Docs;
