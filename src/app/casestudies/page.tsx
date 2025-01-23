"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  passcode: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "rocket",
    title: "Rocket Mortgage",
    description: "Enterprise design system and operational experiences",
    image: "/images/case-studies/rocket.jpg",
    passcode: "1234"
  },
];

export default function Page() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");

  const handleAccess = () => {
    if (selectedStudy && passcode === selectedStudy.passcode) {
      window.location.href = `/casestudies/${selectedStudy.id}`;
    } else {
      setError("Incorrect passcode");
    }
  };

  return (
    <div className="min-h-screen p-8 md:p-16">
      <h1 className="text-4xl font-bold mb-12">Case Studies</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASE_STUDIES.map((study) => (
          <motion.div
            key={study.id}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => setSelectedStudy(study)}
          >
            <Card>
              <CardHeader className="p-0">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                <CardDescription>{study.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedStudy && (
        <Dialog open={!!selectedStudy} onOpenChange={() => {
          setSelectedStudy(null);
          setPasscode("");
          setError("");
        }}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Enter Passcode</DialogTitle>
              <DialogDescription>
                This case study is password protected.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter passcode"
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAccess} className="w-full">
                Access Case Study
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
} 