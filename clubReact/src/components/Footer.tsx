import { Card, CardContent } from "./ui/card";

export default function Footer() {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardContent>
        <div className="flex h-12 items-center">
          <footer>
            <p> &copy; 2024 Share Your Music Club. All rights reversed.</p>
          </footer>
        </div>
      </CardContent>
    </Card>
  );
}
