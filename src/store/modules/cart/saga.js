import {all,put,takeLatest,select, call} from 'redux-saga/effects';
import api from '../../../services/api';
import formatValue from '../../../utils/formatValue';

import {addToCartSucess,updateAmountSuccess} from './actions'

function* addToCart({id}){
  const productExists = yield select((state) =>
    state.cart.find((product) => product.id === id)
  );

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;


  if(productExists){
    yield put(updateAmountSuccess(id,amount))
  } else {
    const response = yield call(api.get,`products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatValue(response.data.price),
    };
    yield put(addToCartSucess(data))
  }
}

function* updateAmount({id,amount}) {
  if(amount <= 0) return;

  yield put(updateAmountSuccess(id,amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST',addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST',updateAmount),

]);
