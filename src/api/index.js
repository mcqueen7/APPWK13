import axios from "axios";

export const getUbikeInfo = async () => {
   const { data } = await axios.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json?fbclid=IwAR0vU-pRxjGqDSyGw0pAGMQ1Q08xlmHdfBlHJzOA_cVOUdvA9yQ5PhvRhVU");

   const tmpdata=data.splice(580,7);
   //要取多少資料 太多會卡跑不動
   //console.log(tmpdata);
   return tmpdata;
 };


//  https://data.ntpc.gov.tw/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview