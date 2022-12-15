import {
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_ERROR,
  // ADD_ITEM_TO_CART_LOADING,
  // ADD_ITEM_TO_CART_SUCCESS,
  // ADD_ITEM_TO_CART_ERROR,
  // UPDATE_CART_ITEMS_LOADING,
  // UPDATE_CART_ITEMS_SUCCESS,
  // UPDATE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
} from "./cart.types";

const initalState = {

    loading: false,
    error: false,
    data: [],
  
  // additem: {
  //   loading: false,
  //   error: false,
  // },
  // updateinit: {
  //   loading: false,
  //   error: false,
  // },
  // reminit: {
  //   loading: false,
  //   error: false,
  // },
  
};
export const cartReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_CART_ITEMS_LOADING: {
      return { ...state,   loading: true, error: false,  };
    }
    case GET_CART_ITEMS_SUCCESS: {
      console.log(payload);
      return { ...state, loading: false,data: payload,};
    }
    case GET_CART_ITEMS_ERROR: {
      return { ...state,loading: false, error: true,  };
    }
   
    // case ADD_ITEM_TO_CART_LOADING: {
    //   return { ...state, additem: { loading: true, error: false } };
    // }
    // case ADD_ITEM_TO_CART_SUCCESS: {
    //   return {
    //     ...state,
    //     data: [...state.data, payload],
    //     additem: { loading: false },
    //   };
    // }
    // case ADD_ITEM_TO_CART_ERROR: {
    //   return { ...state, additem: { loading: false, error: true } };
    // }
    // case UPDATE_CART_ITEMS_LOADING: {
    //   return { ...state, updateinit: { loading: true, error: false } };
    // }
    // case UPDATE_CART_ITEMS_SUCCESS: {
    //   const uitems = state.data.map((cI) => {
    //     if (cI.id === payload.id) {
    //       return payload;
    //     } else return cI;
    //   });
    //   return { ...state, data: uitems, updateinit: { loading: false } };
    // }
    // case UPDATE_CART_ITEMS_ERROR: {
    //   return { ...state, updateinit: { loading: false, error: true } };
    // }
    case REMOVE_CART_ITEMS_LOADING: {
      return { ...state, loading: true, error: false  };
    }
    case REMOVE_CART_ITEMS_SUCCESS: {
      const uitems = state.data.filter((cI) => cI.id !== payload.id);
      return { ...state, data: uitems,  loading: false } };
    
    case REMOVE_CART_ITEMS_ERROR: {
      return { ...state,  loading: false, error: true  };
    }
    default: {
      return state;
    }
  }
};
