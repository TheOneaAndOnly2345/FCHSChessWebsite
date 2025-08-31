import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Star, Users } from "lucide-react";
import trophiesImage from "@/assets/chesssuperboom.png";
import AnimatedCounter from "@/components/AnimatedCounter";

// Placeholder images for achievements (replace with your own)
import achievement1Img from "@/assets/blahblahblah.png";
import achievement2Img from "@/assets/2024confusion.png";
import achievement3Img from "@/assets/supermegaasweomse.png";
import achievement4Img from "@/assets/chess-boom.png";

const Achievements = () => {
  const achievements = [
    {
      year: "2025",
      title: "Georgia High School Championship",
      description: "Placed 3rd in the Georgia State Team Championship",
      type: "championship",
      icon: Users,
      img: achievement2Img,
    },
    {
      year: "2025",
      title: "Georgia State MLK Tournament",
      description: "Placed 2nd in the Georgia State MLK Tournament",
      type: "championship",
      icon: Trophy,
      img: achievement1Img,
    },
    {
      year: "2024",
      title: "Georgia State MLK Tournament",
      description: "Placed 1st in the Georgia State MLK Tournament",
      type: "championship",
      icon: Star,
      img: achievement3Img,
    },
    {
      year: "2023",
      title: "Georgia State MLK Tournament",
      description: "Placed 1st in the Georgia State MLK Tournament",
      type: "championship",
      icon: Medal,
      img: achievement4Img,
    },
  ];

  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero / Title Image */}
        <div className="relative mb-16 rounded-lg overflow-hidden border border-club-red/60">
          <img
            src={trophiesImage}
            alt="Chess Trophies"
            className="w-full h-120 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-club-black/70 to-club-red/50 flex items-center justify-center">
            <div className="text-center text-white">
              <Trophy className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Champions in the Making</h2>
              <p className="text-lg">Building excellence one move at a time</p>
            </div>
          </div>
        </div>

        {/* Animated Counters */}
<div className="grid md:grid-cols-3 gap-6 mb-16 justify-items-center">
  <div className="w-80"> {/* fixed width wrapper */}
    <AnimatedCounter end={4} label="State Tournament Wins" icon={Trophy} color="yellow" />
  </div>
  <div className="w-80">
    <AnimatedCounter end={11} label="Individual Placements" icon={Medal} color="blue" />
  </div>
  <div className="w-80">
    <AnimatedCounter end={15} label="Years Active" icon={Users} color="red" />
  </div>
</div>



        {/* Team Achievements */}
<div className="mb-16">
  <h2 className="text-2xl font-bold mb-8 text-center text-white">
    Team Achievements
  </h2>
  <div className="space-y-16">
    {achievements.map((ach, idx) => (
      <Card
        key={idx}
        className="bg-club-black border-club-red/30 hover:border-club-red/60 transition-all"
      >
        <CardContent className="p-6 flex flex-col items-center text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-club-red/20 rounded-full flex items-center justify-center mb-6">
            <ach.icon className="w-8 h-8 text-club-red" />
          </div>

          {/* Title + Badge */}
          <div className="flex items-center justify-center flex-wrap gap-3 mb-4">
            <h3 className="font-semibold text-2xl text-white">{ach.title}</h3>
            <Badge className="bg-club-red/20 text-club-red border-club-red/30">
              {ach.type}
            </Badge>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4">{ach.description}</p>

          {/* Year */}
          <span className="inline-block text-sm font-medium text-club-red bg-club-red/20 px-4 py-1 rounded-full mb-8">
            {ach.year}
          </span>

          {/* Super Mega Big Image */}
          <div className="rounded-lg overflow-hidden border border-club-red/40 shadow-xl w-full max-w-4xl">
            <img
              src={ach.img}
              alt={ach.title}
              className="w-full h-[600px] object-cover object-center"
            />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</div>



        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-club-red to-club-red-dark text-white border-club-red">
            <CardContent className="p-8">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-white" />
              <h2 className="text-2xl font-bold mb-4 text-white">Be Part of Our Success Story!</h2>
              <p className="mb-6 text-gray-100">
                Join FCHS Chess Club and help us write the next chapter of our winning tradition.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Achievements;
