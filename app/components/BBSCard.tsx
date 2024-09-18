import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";

const BBSCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa modi, sint omnis nesciunt, maxime officia possimus eveniet, dolorem dicta cupiditate deserunt. Ratione fuga ullam iste alias reiciendis necessitatibus cumque officia.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/bbs-posts/1"}>Read More</Link>
      </CardFooter>
    </Card>
  );
}

export default BBSCard;