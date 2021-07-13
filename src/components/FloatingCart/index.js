import React,{useMemo} from 'react';
import {useSelector} from 'react-redux';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import formatValue from '../../utils/formatValue';

import * as S from './styles';


export default function FloatingCart() {
 const navigation = useNavigation();

 const products = useSelector(({cart}) => cart );

 const cartSize = useMemo(() => {
   return products.length || 0
 },[products])

 const cartTotal = useMemo(() => {
  const cartAmount = products.reduce((acc,product) => {
    const totalPrice = acc + product.price * product.amount;
    return totalPrice;
  },0)
  return formatValue(cartAmount)
},[products])


 return (
   <S.Container>
     <S.CardButton
      onPress={() => navigation.navigate('Cart')}
     >
       <FeatherIcon name="shopping-cart"  size={24} color="#f3f9ff"/>
       <S.CardButtonText>{cartSize} {cartSize === 1 ? ' item' : ' itens'}</S.CardButtonText>
       <S.CartPricing>{cartTotal}</S.CartPricing>
       <FeatherIcon name="chevron-right"  size={24} color="#f3f9ff"/>
     </S.CardButton>
   </S.Container>
  );
}
