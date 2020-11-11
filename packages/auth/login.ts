import xhr from "../xhr";

/**
 * Login the user with email and password
 * @param email string
 * @param password string
 * @return Promise<any>
 */
export default async function login(
  email: string,
  password: string
): Promise<string> {
  await xhr.get("http://localhost:8000/sanctum/csrf-cookie");
  return xhr
    .post("/login", { email, password })
    .then((resp) => resp.data.access_token);
}
