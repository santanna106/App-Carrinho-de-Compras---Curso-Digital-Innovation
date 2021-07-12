import React,{useState} from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import FloatingCart from '../../components/FloatingCart'
import formatValue from '../../utils/formatValue'

import  * as S from './styles';



export default function Catalogo() {
 const [products,setProducts] = useState([{
   id:'1',
   title:'Assinatura Trimestral',
   image_url:'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
   price:150,
 },
 {
  id:'2',
  title:'Assinatura Trimestral',
  image_url:'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
  price:150,
},
{
  id:'3',
  title:'Assinatura Trimestral',
  image_url:'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
  price:150,
}])
 return (
    <S.Container>
      <S.ProductContainer>
        <S.ProductList
          data={products}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View/>}
          ListFooterComponentStyle={{height:80}}
          renderItem={({item}) => (
            <S.Product>
              <S.ProductImage source={{uri:item.image_url}} />
              <S.ProductTitle>{item.title}</S.ProductTitle>
              <S.PriceContainer>
                <S.ProductPrice>{formatValue(item.price)}</S.ProductPrice>
                <S.ProductButton onPress={() => {}}>
                  <S.ProductButtonText>adicionar</S.ProductButtonText>
                  <FeatherIcon size={30} name="plus-circle" color="#d1d7e9" />
                </S.ProductButton>
              </S.PriceContainer>
            </S.Product>
          ) }
        />
      </S.ProductContainer>
      <FloatingCart/>
    </S.Container>

  );
}

