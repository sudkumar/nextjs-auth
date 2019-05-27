import xhr from "../xhr";

export default function logout(): Promise<any> {
  return xhr.delete("/logout");
}
