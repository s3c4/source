import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToastExample } from "@/components/custom/toast-example";

export default function Home() {
  return (
    <div>
      <h4>Home page</h4>
      <p>Below are the active pages:</p>
      <div className="flex flex-row gap-4 my-4">
        <Button asChild>
          <Link href='/branches'>Branches</Link>
        </Button>
        <Button asChild>
          <Link href='/performance'>Performance</Link>
        </Button>
      </div>
      <div>
        From the left side Menu only <b>Branches</b> and <b>Performance</b> are working, the other items are just for demo.
      </div>

      <p>The app call open API https://dummyjson.com/recipes. This give a recipes list.</p>

      <p><b>Branches page:</b> there are 2 tabs to view the recipes - a table view and a card view.</p>
      <p><b>Table view:</b> Here the user can see the list of recipes and the list can be filtered. Some of the headers can sort the table view asc or desc.</p>
      <p>There is an action button to view detail page of that recipe.</p>
      <p><b>Card view:</b> in this page the recipes are listed on a grid system based on cards. Also the user can order the recipes based on calories or cooking time.</p>
      <br />
      <p><b>Detail page:</b> the user can view the details page of the recipe. The image, some badges with specific details. Also here are 2 lists. One for ingredients and one for instructions.</p>
      <br />
      <p><b>Performance page:</b> on the page are 3 charts: a line chart, a bar chart and a pie chart.</p>
      <p><b>Line chart:</b> this is an example base on the screen. This has dummy data</p>
      <p><b>Bar chart:</b> this is based on real data from recipes api. The chart calculate how many recipes have a specific rating, and the chart view is sorted asc.</p>
      <p><b>Pie chart:</b> this is based on real data from recipes api. The chart show the number of recipes based on the difficulty. The chart is interactive and the user can focus the pie chart based on the select.</p>
      <br />
      <p><b>Sidebar:</b> is the menu of the app. This is a component build on the server side. When a page is changed the sidebar is not reloading. Nextjs return a new page as a DOM element and is loaded on the main layout (right side).</p>
      <br />
      <p><b>Tech stack:</b> NextJs, React, Tailwind, Shadcn/ui, lucide-react, radix icons, recharts, Typescript, HTML, CSS, SCSS, Javascript</p>
      <br />
      <p><b>Other examples:</b></p>
      <p>Dialog box</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>This is a dialog example!</DialogTitle>
            <DialogDescription>
              This is the description of the dialog.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-row gap-2">
            <p><b>Select branch:</b></p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select branch</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>


          <DialogFooter>
            <DialogClose asChild>
              <Button>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>

      </Dialog>

      <br />
      <p>Toast message:</p>
      <ToastExample />
    </div>
  );
}
