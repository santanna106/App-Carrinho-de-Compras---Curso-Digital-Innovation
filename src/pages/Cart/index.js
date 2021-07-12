import React,{useState} from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import formatValue from '../../utils/formatValue';

import * as S from './styles';

export default function Cart() {
  const [products,setProducts] = useState([{
    id:'1',
    title:'Assinatura Trimestral',
    image_url:'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
    quantidade:1,
    price:150,
  },
  {
   id:'2',
   title:'Assinatura Trimestral',
   image_url:'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
   quantidade:2,
   price:150,
 },
 {
   id:'3',
   title:'Assinatura Trimestral',
   image_url:'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
   quantidade:3,
   price:150,
 }])
 return (
    <S.Container>
      <S.ProductContainer>
        <S.ProductList
          data={products}
          keyExtractor={(item) => item.id }
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
                      {`${item.quantidade}x`}
                    </S.ProductQuantidade>
                    <S.ProductPrice>
                      {formatValue(item.price * item.quantidade)}
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
    </S.Container>
  );
}
