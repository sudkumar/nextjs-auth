import xhr from "../xhr";
export async function get(
  params?: any
): Promise<{
  data: Array<Hotels.IItem>;
  meta: { from: number; to: number; total: number };
}> {
  return xhr.get(`/hotels`, { params }).then(resp => resp.data);
}

export async function show(id: number | string): Promise<Hotels.IItem> {
  return xhr.get(`/hotels/${id}`).then(resp => resp.data.data);
}

