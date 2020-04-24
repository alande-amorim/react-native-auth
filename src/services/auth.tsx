interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

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