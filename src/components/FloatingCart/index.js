import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';


import * as S from './styles';

export default function FloatingCart() {
 const navigation = useNavigation();
 return (
   <S.Container>
     <S.CardButton
      onPress={() => navigation.navigate('Cart')}
     >
       <FeatherIcon name="shopping-cart"  size={24} color="#f3f9ff"/>
       <S.CardButtonText>2 itens</S.CardButtonText>
       <S.CartPricing>R$ 200,00</S.CartPricing>
       <FeatherIcon name="chevron-right"  size={24} color="#f3f9ff"/>
     </S.CardButton>
   </S.Container>
  );
}
