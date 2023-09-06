import Link from "next/link";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div>
      <Link href="/sign-in">
        <Button>login</Button>
      </Link>
      <Link href="/sign-up">
        <Button>register</Button>
      </Link>
      <p className="p-4 text-2xl font-bold text-red-500">Landing page</p>
    </div>
  );
};

export default LandingPage;
