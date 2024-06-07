import { auth } from "@/auth";
import WhoAmIButton from "@/components/WhoAmIButton";

export default async function Page() {
  const whoAmI = async () => {
    "use server";
    const session = await auth();
    return session?.user?.name || "Not Logged In";
  };

  return (
    <div>
      <WhoAmIButton whoAmIAction={whoAmI} />
    </div>
  );
}
