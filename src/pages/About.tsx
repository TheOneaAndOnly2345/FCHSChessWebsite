import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, MapPin, Mail } from "lucide-react";
import teamImage from "@/assets/chess-team.png";
import competitiveImage from "@/assets/competitive-team.png"; // ⬅️ add your image here
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">About FCHS Chess Club</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded with a passion for the game, our chess club brings together students 
            who share a love for strategy, critical thinking, and friendly competition.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={teamImage} 
              alt="FCHS Chess Club Team" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Forsyth Central High School Chess Club aims to give students opportunities to show their talents in chess along with being part of an excellent group of people! We hold regular meetings, both to learn and to have fun. Our club sponsor is Mr. Teems (rm. 1203).
            </p>
            <p className="text-muted-foreground mb-4">
              New members, both experienced and not, frequently join to be a part of something greater. Our competitive team attends regular competitions, frequently winning and placing in tournaments. Past members of FCHS Chess Club are now enrolled in some of the top universities in Georgia!
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">50+ Members</h3>
              <p className="text-sm text-muted-foreground">Active chess players of all skill levels</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Monthly Meetings</h3>
              <p className="text-sm text-muted-foreground">Monthly meetings during the school year</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Room 1203</h3>
              <p className="text-sm text-muted-foreground">Mr. Teems Room</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-sm text-muted-foreground">forsythcentralchessclub@gmail.com</p>
            </CardContent>
          </Card>
        </div>

        {/* Officers Section */}
        <div className="mb-16">
          <Card className="bg-card border-destructive/50 max-w-4xl mx-auto p-6">
            {/* Title + Year */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-destructive">FCHS Chess Club Officers</h3>
              <p className="text-muted-foreground">2025 - 2026</p>
            </div>

            {/* 2x2 Grid of Officers */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-destructive/5 rounded-lg">
                <h4 className="font-bold text-lg">Tanish Udhyakumar</h4>
                <p className="text-destructive font-semibold">President</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-destructive/5 rounded-lg">
                <h4 className="font-bold text-lg">Sarvesh Thirumulai</h4>
                <p className="text-destructive font-semibold">Vice President</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-destructive/5 rounded-lg">
                <h4 className="font-bold text-lg">Shubham Prasad</h4>
                <p className="text-destructive font-semibold">Vice President of Operations</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-destructive/5 rounded-lg">
                <h4 className="font-bold text-lg">Nithin Mathan</h4>
                <p className="text-destructive font-semibold">Vice President of Marketing/Fundraising</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Competitive Team Section */}
<div className="mb-16 flex justify-center">
  <Card className="w-full max-w-4xl shadow-lg">
    <CardContent className="p-6 text-center">
      {/* Image Spot */}
      <div className="w-full flex justify-center mb-6">
        <img 
          src={competitiveImage} 
          alt="Competitive Team" 
          className="max-h-[32rem] w-auto object-contain rounded-lg" 
        />
      </div>
      {/* Text */}
      <h4 className="text-2xl font-bold text-primary">Tryout for the Competitive Team</h4>
      <p className="text-muted-foreground mt-3 text-lg">
        Showcase your skills and represent our school in tournaments. Tryouts are in October!
      </p>
    </CardContent>
  </Card>
</div>

        {/* What We Offer */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">For Beginners:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Basic rules and piece movement</li>
                  <li>• Opening principles and tactics</li>
                  <li>• Friendly practice games</li>
                  <li>• Mentorship from experienced players</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">For Advanced Players:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Tournament preparation</li>
                  <li>• Advanced strategy sessions</li>
                  <li>• Competitive team events</li>
                  <li>• Leadership opportunities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default About;
