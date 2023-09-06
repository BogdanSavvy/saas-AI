import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
const DashboardPage = () => {
  return (
    <div className="p-2 text-3xl">
      Home AI-Saas <Button variant="default">123</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
