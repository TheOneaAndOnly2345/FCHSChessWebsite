import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Trophy, Calendar, MessageSquare, Link2, UserPlus } from "lucide-react";
import heroImage from "@/assets/chess-hero.jpg";
import superchesslogo from "@/assets/superchesslogo.png";
import fight from "@/assets/randomtrophy.png";
import compete from "@/assets/right.png";
import build from "@/assets/haircut.png";

// Example images for feature cards (replace with your own)

const Home = () => {
  return (
    <main className="min-h-screen bg-club-black text-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-club-black/80 to-club-red/60" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Logo */}
          <img 
            src={superchesslogo} 
            alt="Chess Logo" 
            className="w-64 md:w-96 h-auto mx-auto mb-6 drop-shadow-lg"
          />
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Strategic Minds, Stronger Futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-club-red hover:bg-red-700 shadow-lg">
              <Link to="/about">Learn More</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-club-black">
              <Link to="/achievements">View Achievements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-club-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Join FCHS Chess Club?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-club-black border-club-red/30 hover:border-club-red/60 transition-all shadow-lg">
              <img src={build} alt="Community" className="w-full h-48 object-cover rounded-t-lg" />
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-club-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Build Community</h3>
                <p className="text-gray-300 text-sm">
                  Connect with fellow chess enthusiasts and build lasting friendships through the game.
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 2 */}
            <Card className="bg-club-black border-club-red/30 hover:border-club-red/60 transition-all shadow-lg">
              <img src={fight} alt="Compete & Win" className="w-full h-48 object-cover rounded-t-lg" />
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 text-club-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Compete & Win</h3>
                <p className="text-gray-300 text-sm">
                  Participate in tournaments, represent our school, and bring home championship trophies.
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 3 */}
            <Card className="bg-club-black border-club-red/30 hover:border-club-red/60 transition-all shadow-lg">
              <img src={compete} alt="Meetings" className="w-full h-48 object-cover rounded-t-lg" />
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-club-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Regular Meetings</h3>
                <p className="text-gray-300 text-sm">
                  Monthly meetings hosted in room 1203. All skill levels included.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-club-black px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Join Us</h2>
            <p className="text-lg text-gray-300 mb-6">
              Be part of our community! Whether you’re a beginner or an advanced player, 
              we’d love to have you in the club.
            </p>
            <p className="text-gray-400">Choose how to connect with us:</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href="https://discord.gg/CrCuhD4rEq"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-club-red hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-6 text-center text-white">
                  <MessageSquare className="w-10 h-10 mx-auto mb-4" />
                  <h3 className="font-semibold">Discord</h3>
                  <p className="text-sm opacity-80">Join Server</p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://groupme.com/join_group/109209618/vM3NNoK0"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-club-red hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-6 text-center text-white">
                  <Link2 className="w-10 h-10 mx-auto mb-4" />
                  <h3 className="font-semibold">GroupMe</h3>
                  <p className="text-sm opacity-80">Join Chat</p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://docs.google.com/forms/d/19vXTqRb2rIVbuwRV9Ki0KqeqHrXbeoi6MnvC9ehcIsM/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-club-red hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-6 text-center text-white">
                  <UserPlus className="w-10 h-10 mx-auto mb-4" />
                  <h3 className="font-semibold">Membership</h3>
                  <p className="text-sm opacity-80">Sign Up</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
