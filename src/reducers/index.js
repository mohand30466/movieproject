import { combineReducers } from "redux";  

export const ContantData = (state = [], action) => {
  if (action.type === "MOVIE-DATA"){
     return [...state,...action.payload];
};
return state;
}
// console.log(state);

export default combineReducers({
   data:ContantData,
  
});
