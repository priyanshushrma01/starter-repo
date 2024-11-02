import { PrismaClient} from "@repo/db/client"

const client = new PrismaClient();

export default function Home() : JSX.Element {
  return (
    <div className="text-2xl underline">
      hi there
    </div>
  );
}
