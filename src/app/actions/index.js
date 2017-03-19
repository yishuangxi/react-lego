import { randomRange, json } from '../utils';

export const FETCH_HAND = 'FETCH_HAND';

export function fetchHand() {
  const DECK = 87;
  const cards = randomRange(1, DECK, 2);
  return {
    type: FETCH_HAND,
    payload: json.get(`/api/game/people/${cards[0]}/${cards[1]}`)
  };
}
