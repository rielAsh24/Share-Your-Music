// import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ApplyForm from "@/components/ApplyForm";
// import applyImg from "@/../public/apply.jpg";

export default function Apply() {
  return (
    <section className="flex w-full items-center justify-center">
      {/* <Image alt="SignUp" src={applyImg} className="aspect-auto w-1/2" /> */}
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
