import React from 'react';
import LottieView from 'lottie-react-native';

import emptyCartAnimation from '../../../EmptyCartAnimation.json'

import * as S from './styles';

export default function EmptyCart() {
 return (
   <S.Container>
     <S.EmptyCartContainer>
       <LottieView
        source={emptyCartAnimation}
        resizeMode="contain"
        autoPlay
        loop
       />
     </S.EmptyCartContainer>
     <S.EmptyCartText>Seu carrinho está vazio</S.EmptyCartText>
   </S.Container>
  );
}
