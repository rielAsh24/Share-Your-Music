import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ApplyForm from "@/components/ApplyForm";

export default function Apply() {
  return (
    <section className="flex w-full items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ApplyForm />
        </CardContent>
      </Card>
    </section>
  );
}
