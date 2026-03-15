// import Image from "next/image";
import ApplyForm from "@/components/ApplyForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Apply() {
  return (
    <section className="flex w-full items-center justify-around">
      <img
        alt="SignUp"
        src="/apply.png"
        className="aspect-auto w-2/5 rounded-lg"
      />
      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ApplyForm />
        </CardContent>
      </Card>
    </section>
  );
}
