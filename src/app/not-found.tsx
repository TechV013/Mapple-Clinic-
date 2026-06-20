import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-heading text-8xl font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="font-heading text-3xl font-bold mb-3">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let us help you find what you need.
        </p>
        <Link href="/">
          <Button size="lg" className="rounded-full">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
