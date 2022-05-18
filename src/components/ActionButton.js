import React from 'react';
import { Center, Pressable, Actionsheet, useDisclose } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionScreen from '../screens/ActionScreen';
import { Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default (props) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { zoomRatio, site} = props;

  return (
  
      <Marker
        coordinate={{
           latitude: Number(site.lat),
           longitude: Number(site.lng),
        }}
        tracksViewChanges={false}
        onPress={onOpen}   
           //title={`${site.sna} ${site.sbi}/${site.bemp}`}
           //description={site.ar}
        >
          <Center bg="white" borderRadius={60} p={3 * zoomRatio} borderWidth={2 * zoomRatio} borderColor="black">
              <MaterialCommunityIcons name='bike' size={30 * zoomRatio} color="black"/>
              {/* <Icon name={"bus"} size={30 * zoomRatio} color="black" /> */}
           </Center>
           {/* <Center bg="white" borderRadius={60} p={3 * zoomRatio} borderWidth={2 * zoomRatio} borderColor="black">
              <MaterialCommunityIcons name='bike' size={30 * zoomRatio} color="black"/>
           </Center> */}
          {/* 腳踏車點太多全都要放ICON會當機 要跑3小時也跑不完 所以只能全都用預設MARKER*/}


        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <ActionScreen onClose={onClose} site={site} />
        </Actionsheet>  
      </Marker>
      
    
  );
}
