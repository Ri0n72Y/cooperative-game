import { GridColDef } from "@mui/x-data-grid";
import { useData } from "./store";
import { Button, ButtonContainer, Container, StyledDataGrid } from "./styles";

export function Updates() {
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
      field: "updatePrice",
      headerName: "升级",
      width: 160,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "house",
      headerName: "住宅(+1骰子)",
      width: 100,
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
      headerName: "规则（ 0|1|2|3 级数据）",
      width: 650,
    },
  ];

  const rows = [
    {
      id: "farm",
      name: "农场",
      price: state["farm"] * 200,
      house: `2 * ${state["farm"] * 100}`,
      updatePrice: `${state["farm"] * 200} | ${state["farm"] * 200} | ${
        state["farm"] * 200
      }`,
      description: `每回合每个玩家可投入 1|2|3|4 个骰子，转化为等量农产品，每四回合可以出售全部产品`,
    },
    {
      id: "light-industry",
      name: "轻工业",
      price: state["light-industry"] * 400,
      house: `2 * ${state["light-industry"] * 200}`,
      updatePrice: `${state["light-industry"] * 200} | ${
        state["light-industry"] * 200
      } | ${state["light-industry"] * 400}`,
      description: `每回合可投入 1|2|3|4 个骰子，转化为等量消费品。结算可以出售 2|3|3|4 个消费品`,
    },
    {
      id: "heavy-industry",
      name: "重工业",
      price: state["heavy-industry"] * 400,
      house: `2 * ${state["heavy-industry"] * 100}`,
      updatePrice: `${state["heavy-industry"] * 200} | ${
        state["heavy-industry"] * 200
      } | ${state["heavy-industry"] * 400}`,
      description: `每回合可投入 2|4|6|8 个骰子，转化为等量工业品。结算可以出售以 4|6|8|10 为单位的工业品，价格为 ${
        state["heavy-industry"] * 400 * 0.4
      } | ${state["heavy-industry"] * 400 * 0.55} | ${
        state["heavy-industry"] * 400 * 0.7
      } | ${state["heavy-industry"] * 400 * 0.8}`,
    },
    {
      id: "service",
      name: "居民区",
      price: state["service"] * 200,
      updatePrice: `${state["service"] * 200} | ${state["service"] * 200} | ${
        state["service"] * 200
      }`,
      description: `每轮提供 2|4|6|8 个劳动力骰子投入任意地区。住宅可以用于抵押贷款 ${
        state["service"] * 200 * 0.4
      }（40%）。\n每回合每个玩家可投入 1|1|2|2 个骰子，转化为等量服务，结算时全部售出。\n每个可分配劳动力骰子需要每次结算花费 50 维护费`,
    },
    {
      id: "service-plus",
      name: "高级居民区",
      price: state["service-plus"] * 200,
      updatePrice: `${state["service-plus"] * 200} | ${
        state["service-plus"] * 200
      } | ${state["service-plus"] * 200}`,
      description: `同上，房价好贵啊`,
    },
  ];

  return (
    <Container>
      <StyledDataGrid
        columns={columns}
        rows={rows}
        getRowHeight={() => "auto"}
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
