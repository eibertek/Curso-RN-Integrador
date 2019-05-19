import axios from 'axios';

export const PENDING = 'THROW_DICE_PENDING';
export const SUCCESS = 'THROW_DICE_SUCCESS';
export const FAILED = 'THROW_DICE_FAILED';

export const throwDicesPending = () => ({
    type: PENDING
})

export const throwDicesSuccess = data => ({
    type:SUCCESS,
    data
})

export const throwDicesFailed = error => {
  console.log(error);  
  return {
    type: FAILED,
    error,
  }
};

export const throwDices = async (dispatch) => {
    dispatch(throwDicesPending());
    try{
      let data = await axios.get('http://roll.diceapi.com/json/d6');
      data = data.data;
      // data = await data.json(); 
      if(data.dice && data.dice[0]){
        return dispatch(throwDicesSuccess(data.dice[0]));
      }
      return dispatch(throwDicesFailed({message:'No resulto bien'}));
    }catch(error){
      return dispatch(throwDicesFailed(error));
    }
  }
  