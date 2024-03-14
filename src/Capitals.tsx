import { GridColDef } from "@mui/x-data-grid";
import { useData } from "./store";
import { Button, ButtonContainer, Container, StyledDataGrid } from "./styles";
import { getRow } from "./utils";

export function Capitals() {
  const { state, setState } = useData();
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "name", headerName: "建筑", width: 100 },
    {
      field: "price",
      headerName: "基础地价",
      width: 80,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "rent",
      headerName: "地租",
      width: 60,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "income",
      headerName: "收入",
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "local-salary",
      headerName: "本地结算",
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "income-rate",
      headerName: "收入占比",
      width: 80,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "token-cost",
      headerName: "成本",
      width: 110,
      align: "right",
      headerAlign: "center",
    },
    {
      field: "token-salary",
      headerName: "雇佣/单位",
      width: 80,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "token-price",
      headerName: "售价/单位",
      width: 78,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "action",
      headerName: "模型基数",
      sortable: false,
      width: 80,
      align: "center",
      renderCell: (param) => (
        <ButtonContainer>
          <Button
            onClick={() =>
              setState({ ...state, [param.id]: state[param.id] - 1 })
            }
          >
            -
          </Button>
          {state[param.id]}
          <Button
            onClick={() =>
              setState({ ...state, [param.id]: state[param.id] + 1 })
            }
          >
            +
          </Button>
        </ButtonContainer>
      ),
    },
    {
      field: "description",
      headerName: "规则",
      width: 290,
    },
  ];

  const rows = [
    {
      id: "farm",
      name: "农场",
      ...getRow({
        price: state["farm"] * 200,
        rent: 0.06,
        t1: 0.05,
        t2: 0.03,
        t3: 0.02,
        token: 0.05,
      }),
      "token-cost": `固定 lvl * ${(0.05 * state["farm"] * 200 * 4).toFixed(0)}`,
      description: "每季开始决定是否投产，每四回合出售全部",
    },
    {
      id: "light-industry",
      name: "轻工业",
      ...getRow({
        price: state["light-industry"] * 400,
        rent: 0.06,
        t1: 0.05,
        t2: 0.035,
        t3: 0.015,
        cost: 0.05,
        token: 0.1,
      }),
      "capital-cost": `token * ${(0.1 * state["light-industry"] * 200).toFixed(
        0
      )}`,
      description: "每回合出售2产品",
    },
    {
      id: "heavy-industry",
      name: "重工业",
      ...getRow({
        price: state["heavy-industry"] * 400,
        rent: 0.025,
        t1: 0.025,
        t2: 0.015,
        t3: 0.01,
        cost: 0.05,
        token: 0.1,
      }),
      description: "每回合出售4为倍数的产品，外资工厂单价更高，数量更少。",
    },
    {
      id: "heavy-industry-tesla",
      name: "奇观-特斯拉",
      ...getRow({
        price: state["heavy-industry-tesla"] * 400,
        rent: 0.022,
        t1: 0.025,
        t2: 0.015,
        t3: 0.01,
        cost: 0.05,
        token: 0.1,
      }),
      description: "出现在外资工厂区域。购入需要在控制区域后发起“收购”提案",
    },
    {
      id: "service",
      name: "居民区",
      ...getRow({
        price: state["service"] * 200,
        rent: 0.04,
        t1: 0.035,
        t2: 0.025,
        t3: 0.015,
        cost: 0,
        token: 0.04,
      }),
      description: "购入后仍然是在这里打工",
    },
    {
      id: "service-plus",
      name: "高级居民区",
      ...getRow({
        price: state["service-plus"] * 200,
        rent: 0.04,
        t1: 0.032,
        t2: 0.022,
        t3: 0.012,
        cost: 0,
        token: 0.033,
      }),
    },
    {
      id: "cbd",
      name: "市中心区",
      ...getRow({
        price: state["cbd"] * 400,
        rent: 0.037,
        t1: 0.025,
        t2: 0.018,
        t3: 0.008,
      }),
      "token-cost": `每回合 * ${state["cbd"] * 20}`,
      "token-salary": "",
      description: "每种建筑有不同的收益，在此区域可以存钱",
    },
  ];

  return (
    <Container>
      <StyledDataGrid
        columns={columns}
        rows={rows}
        hideFooter
        initialState={{
          columns: {
            columnVisibilityModel: {
              id: false,
              time4: false,
            },
          },
        }}
      />
    </Container>
  );
}
