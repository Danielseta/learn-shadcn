import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  // YOU CAN WORTE YOUR JS HERE....
  const name = "Daniel";

  return (
    // here is where the JSX code goes... JSX == HTML + JS == XML
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1
        className="font-bold text-blue-900 mb-8 text-[clamp(1.5rem,1.5rem+5vw,3rem)] text-center]
      "
      >
        HELLO THERE!! {name}
      </h1>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Provide login credentails to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Roles</Label>
                <Select>
                  <SelectTrigger id="roles">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Admin</SelectItem>
                    <SelectItem value="sveltekit">Moderator</SelectItem>
                    <SelectItem value="sveltekit">Editor</SelectItem>
                    <SelectItem value="astro">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input
                  id="password"
                  type={"password"}
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {/* <Button variant="outline">Cancel</Button> */}
          <Button>Login</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
