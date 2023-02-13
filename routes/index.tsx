import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Counter from "../islands/Counter.tsx";
import { getXataClient, InvoiceRecord } from "../src/xata.ts";

export const handler: Handlers<InvoiceRecord[] | null> = {
  async GET(_, ctx) {
    const xata = getXataClient();
    const records: InvoiceRecord[] = await xata.db.invoice.getAll();
    return ctx.render(records);
  },
};

export default function Home({ data }: PageProps<InvoiceRecord[] | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }
  return (
    <>
      <Head>
        <title>Customer List new </title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-xl pb-4">Customer New ja names</h1>
        {data.map((record) => (
          <div key={record.id}>
            <h1>{record.customer}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
