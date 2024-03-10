import { GridColDef } from "@mui/x-data-grid";
import { Container, StyledDataGrid } from "./styles";

export function Region() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "name", headerName: "地区", width: 150 },
    {
      field: "extension",
      headerName: "建筑名称",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "cost",
      headerName: "价格",
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "说明",
      width: 800,
    },
  ];

  const rows = [
    {
      id: "farm_market",
      name: "农场",
      extension: "农贸市场",
      cost: "100%",
      description: "结算时可以双倍价格出售N个农产品，N为本区域拥有地产数的个数",
    },
    {
      id: "light-industry_market",
      name: "轻工业",
      extension: "超市",
      cost: "100%",
      description: "每个地块可额外出售 2 个消费品",
    },
    {
      id: "farm_club",
      name: "农场、轻工厂、工厂",
      extension: "俱乐部",
      cost: "100%",
      description: "提供每个有住宅的地块 +1 * 住宅数量 回合对应产出",
    },
    {
      id: "farm_clinic",
      name: "农场、轻工厂、工厂",
      extension: "诊所",
      cost: "100%",
      description: "区域不受疾病类命运卡影响，区域移除疾病类事件卡",
    },
    {
      id: "service",
      name: "居民区、高级居民区",
      extension: "超市",
      cost: "200%",
      description:
        "该区域公社成员成本-10，相邻区域日租金下降40，提供额外4个工作机会",
    },
    {
      id: "cbd-finance",
      name: "市中心区",
      extension: "银行",
      cost: 10000,
      description:
        "非占有资产每轮盈利3%，向下取整10。\n可以抵押获得现金，10%利息，五轮还款周期。\n抵押和信用贷款的周期、利率可以由主持人控制以调整难度和速度。",
    },
    {
      id: "cbd-manage",
      name: "市中心区",
      extension: "管理公司",
      cost: 8000,
      description: "全部公社成员成本-20",
    },
    {
      id: "cbd-law",
      name: "市中心区",
      extension: "律师事务所",
      cost: 5000,
      description: "花1000解决非天灾类命运卡",
    },
    {
      id: "cbd-media",
      name: "市中心区",
      extension: "媒体互联网",
      cost: 4000,
      description: "可以移动支付（如果当前没有开启移动支付功能的话）",
    },
    {
      id: "cbd-trade",
      name: "市中心区",
      extension: "外贸公司",
      cost: 7000,
      description: "提升工厂、轻工业、农场销售收入 100%。",
    },
    {
      id: "cbd-transport",
      name: "市中心区",
      extension: "交通运输",
      cost: 6000,
      description:
        "所有玩家移动时可额外投一个骰子，在CBD花费一颗骰子去到任意地方",
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
              time4: false,
            },
          },
        }}
      />
    </Container>
  );
}
