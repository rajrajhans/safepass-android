import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {windowWidth} from '../../utils/deviceDimensions';

const WavyHeader = ({customStyles}) => {
  return (
    <View style={{position: 'absolute', width: windowWidth}}>
      <View style={{height: 90}}>
        <Svg viewBox={'0 0 1440 320'} style={{position: 'absolute', top: 92}}>
          <Path
            fill={'#3c0d99'}
            fillOpacity={1}
            d={
              'M0,224L60,202.7C120,181,240,139,360,128C480,117,600,139,720,170.7C840,203,960,245,1080,250.7C1200,256,1320,224,1380,208L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
            }
          />
        </Svg>
      </View>
    </View>
  );
};

export default WavyHeader;
