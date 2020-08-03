import * as ActionTypes from './ActionTypes'

export const INIT_DATA = {favorites:[], myAds:[], loading:true, userToken:'', isSignedout:true,  error:null}

export const reducer = (state = INIT_DATA, action) => {
    switch(action.type){

        case ActionTypes.LOADING:
            return { ...state, loading:true, error:null}
            
        case ActionTypes.RESTORE_TOKEN:
            return { ...state, isSignedout:false, userToken:action.payload, loading:false, error:null}

        case ActionTypes.SIGN_IN:
            return { ...state, isSignedout:false, userToken:action.payload, error:null}

        case ActionTypes.SIGN_OUT:
            return { ...state, isSignedout:true, userToken:action.payload, error:null}

        case ActionTypes.FAVORITE:
            return { ...state, favorites:[...state.favorites, action.payload] }

        case ActionTypes.UNFAVORITE:
            return { ...state, favorites:state.favorites.filter(f => f._id!==action.payload._id) }

        default :
            return state
    }
}