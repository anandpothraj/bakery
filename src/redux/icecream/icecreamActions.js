import { BUY_ICECREAM } from './icecreamTypes';

export const buyIcecream = ( number ) => {
    return {
        type: BUY_ICECREAM,
        payload: number,
    }
}