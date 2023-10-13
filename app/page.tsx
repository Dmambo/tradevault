import Image from "next/image";
import Journal from "@/public/journal.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { BookMarked, Users,  CandlestickChart } from 'lucide-react';


export default function Home() {
  return (
    <main>
      <div className="flex flex-col md:flex-row justify-around items-center m-0 p-5">
        <div className="mt-8 p-4 leading-5 gap-6">
          <h1 className="text-7xl font-bold mt-6">
            Upgrade Your Trading Career
          </h1>
          <p className="text-xl mt-6">
            Planned Trades <code>Gets you Planned Result</code>
          </p>
          <div className=" gap-4 mt-6">
            <Link href="/sign-in" className=" m-4">
              <Button>Get started</Button>
            </Link>
            <Link href="/about" className=" m-4">
              <Button variant={"secondary"}>Learn More</Button>
            </Link>
            <Separator className="mt-5"/>
            <div className=" flex ">
              <div className=" m-5 bg-slate-200 p-5 rounded-lg w-96">
                <BookMarked />
                <h3>
                  <code>Journal Your trades</code>
                </h3>
                <p className=" text-xs">Keep track of your trading journey with our journal system.</p>
              </div>
              <div className=" m-5 bg-slate-200 p-5 rounded-lg">
                <Users />
                <h3>
                  <code>Join Community of Traders</code>
                </h3>
                <p>Connect with other traders and share your trading ideas.</p>
              </div>
              <div className=" m-5 bg-slate-200 p-5 rounded-lg">
                <CandlestickChart />
                <h3>
                  <code>Join weekly trading Challenges</code>
                </h3>
                <p>Join weekly trading challenges, to improve your trading skills</p>
              </div>
              
            </div>
          </div>
        </div>
        <div className=" 
        flex justify-center align-middle md:hidden sm:hidden
        ">
          <Image src={Journal} width={500} height={500} alt="journal" />
        </div>
      </div>
      
      
    </main>
  );
}

