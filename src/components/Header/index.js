import React from 'react';
import {Image} from 'react-native';

import logo from '../../assets/logo.png';

import * as S from './styles';

export default function Header() {
 return (
   <S.Container>
     <Image source={logo} />
   </S.Container>
  );
}
