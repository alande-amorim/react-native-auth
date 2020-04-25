interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}
/**
 * Mock implementation that returns fake user data. 
 * In a real environment, this must be replaced by a real API call sending the user data (eg. login and password) to retrieve the user data from the server.
 */
export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'cogCurEifatInAnowcedLurHadyeedIligOapVefQuibyoakUnBalirautErtob3',
        user: {
          name: 'John Doe',
          email: 'johndoe@example.com',
        },
      });
    }, 2000);
  });
}