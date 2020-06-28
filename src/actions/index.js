/*
 * action 객체를 만드는 액션 생성자들을 선언
 */

import * as types from "./ActionTypes";

export const increment = () => ({
  type: types.INCREMENT,
});

export const decrement = () => ({
  type: types.DECREMENT,
});

/*
 * 파라미터를 가진 액션생성자
 * 리덕스의 3가지 원칙 중에서 변화는 언제나 순수(Pure) 함수로 이뤄져야 함
 * 더블클릭을 하면 색이 랜덤으로 변하는거지만
 * 그렇다고 우리가 액션을 RANDOMIZE_COLOR, randomizeColor 이런식으로 만들면 안됩니다.
 * 랜덤함수는 실행될때마다 다른 값을 반환하기때문에 순수하지 않음
 */
export const setColor = (color) => ({
  type: types.SET_COLOR,
  color,
});
