import React, { useEffect } from "react";
import { FlatList, HStack, VStack, Text, Button } from "native-base";
import CoinItem from "../components/CoinItem";
import { getMarketData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { getCoinsAsync, selectHomeCoinsData } from "../redux/homeCoinsSlice";

const HomeScreen = () => {
  const dispatch=useDispatch();
  const coins=useSelector(selectHomeCoinsData);


  useEffect(() => {
    dispatch(getCoinsAsync(1));
    //console.log("CCCCCCCCCCCCCCCCCCC");
  }, [coins]);

  return (
    <VStack flex={1} mx={2}>
       {/* <Button onPress={()=>dispatch(getCoinsAsync(1))}>21231231</Button> //refresh test*/}
      <HStack justifyContent="space-between" >
        <Text fontSize={25} alignSelf="center">Cryptoassets</Text>
        <Text fontSize={12} alignSelf="center">Powered by CoinGecko</Text>
      </HStack>
     
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
        keyExtractor={(item) => item.market_cap_rank}
      />
    </VStack>
  );
};

export default HomeScreen;
