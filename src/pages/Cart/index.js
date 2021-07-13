import React,{useState,useMemo} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EmptyCart from '../../components/EmptyCart';

import * as CartActions from '../../store/modules/cart/actions';

import formatValue from '../../utils/formatValue';

import * as S from './styles';

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(({cart}) => cart);

 const cartSize = useMemo(() => {
   return products.length || 0;
 },[products])


 const cartTotal = useMemo(() => {
  const cartAmount = products.reduce((acc,product) => {
    const totalPrice  = acc  +  product.price * product.amount
    return totalPrice
  },0 );
  return formatValue(cartAmount) ;
},[products])

 return (
    <S.Container>
      <S.ProductContainer>
        <S.ProductList
          data={products}
          keyExtractor={(item) => item.id }
          ListEmptyComponent={<EmptyCart />}
          ListFooterComponent={<View />}
          ListHeaderComponentStyle={{height:80}}
          renderItem={({item}) => (
            <S.Product>
              <S.ProductImage source={{uri:item.image_url}} />
              <S.ProductTitleContainer>
                <S.ProductTitle>{item.title}</S.ProductTitle>
                <S.ProductPriceContainer>
                  <S.ProductSiglePrice>
                    {formatValue(item.price)}
                  </S.ProductSiglePrice>
                  <S.TotalContainer>
                    <S.ProductQuantidade>
                      {`${item.amount}x`}
                    </S.ProductQuantidade>
                    <S.ProductPrice>
                      {formatValue(item.price * item.amount)}
                    </S.ProductPrice>
                  </S.TotalContainer>
                </S.ProductPriceContainer>
              </S.ProductTitleContainer>
              <S.ActionContainer>
                <S.ActionButton
                  onPress={() => {}}
                >
                  <FeatherIcon name="plus" color="#e83f5b" size={16} />
                </S.ActionButton>
                <S.ActionButton
                  onPress={() => {}}
                >
                  <FeatherIcon name="minus" color="#e83f5b" size={16} />
                </S.ActionButton>
              </S.ActionContainer>
            </S.Product>
            )}
        />
      </S.ProductContainer>
      <S.TotalProductsContainer>
        <FeatherIcon name="shopping-cart" color="#fff" size={24} />
        <S.TotalProductsText>{cartSize} {cartSize === 1 ? ' item' : ' itens'}  </S.TotalProductsText>
        <S.SubTotalValue>{cartTotal}</S.SubTotalValue>
      </S.TotalProductsContainer>
    </S.Container>
  );
}
