import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather'

import * as S from './styles';

export default function EmptyCart() {
 return (
   <S.Container>
     <FeatherIcon name="slash" size={38} color="#f3f9ff" />
     <S.EmptyCartText>Seu carrinho está vazio</S.EmptyCartText>
   </S.Container>
  );
}
