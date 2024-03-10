import { GridColDef } from "@mui/x-data-grid";
import { Container, StyledDataGrid } from "./styles";

export function Special() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "name", headerName: "名称", width: 80 },
    { field: "cost", headerName: "房租", width: 80 },
    { field: "description", headerName: "ID", width: 1000 },
  ];
  const rows = [
    {
      id: "school",
      name: "学校",
      cost: 90,
      description:
        "花费次结算最多投入2骰子换学分，每颗骰子100块。获取不同学分的文凭以在CBD获得稳定的每天2骰子的工作，收入为地价5%。工作回合可以激活该地块的50%特效。\n金融：25学分；管理：20学分，律师：12学分，互联网：12学分，贸易：16学分",
    },
    {
      id: "hospital",
      name: "医院",
      cost: 70,
      description: `无法付过夜钱会有一半概率被抬进去，丢骰子决定。一旦进去需要休息两回合，同时身上的钱被清空，并背上（200-扣掉的钱）的个人债务标记，每轮必须优先还债，债务可叠加。\n背上债务后，再次进医院时视为失败。`,
    },
    {
      id: "station",
      name: "交通枢纽",
      cost: `40, 100`,
      description: `两个在地图的两侧，50块+一回合以移动的对侧位置。高铁：200，花费一颗骰子移动到对侧位置。\n路过可以在该位置给公社存取钱，路过即可决定是否买票移动。`,
    },
  ];
  return (
    <Container>
      <StyledDataGrid
        columns={columns}
        rows={rows}
        hideFooter
        getRowHeight={() => "auto"}
        initialState={{
          columns: {
            columnVisibilityModel: {
              id: false,
            },
          },
        }}
      />
    </Container>
  );
}
