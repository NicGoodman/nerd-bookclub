export async function get(request) {

  return {
      body: {
          message: "Hello World!" + import.meta.env.VITE_ENDPOINT
      }
  };
}