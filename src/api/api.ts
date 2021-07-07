/**
 * Fake function for api call
 */
export const buyTicketCall = (
  _flightId: string,
): Promise<{status: number; data: {reservation_id: string}}> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({status: 204, data: {reservation_id: '1234'}});
    }, 500);
  });
