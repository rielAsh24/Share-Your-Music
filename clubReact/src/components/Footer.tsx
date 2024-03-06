import { Card, CardContent } from "./ui/card";

export default function Footer() {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center h-12">
          <footer>
            <p> &copy; 2023 Share Your Music Club. All rights reversed.</p>
          </footer>
        </div>
      </CardContent>
    </Card>
  );
}
