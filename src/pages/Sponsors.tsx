import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import sponsorsImage from "@/assets/sponsors-bg.jpg";
import { useNavigate } from "react-router-dom";

const Sponsors = () => {
  const navigate = useNavigate();

  // 9 sponsor slots for a 3x3 grid
  const sponsors = Array(9).fill("placeholder");

  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 text-white">Sponsors</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are grateful to our generous sponsors who make our chess club activities,
            tournaments, and educational programs possible.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 rounded-lg overflow-hidden border border-club-red/60">
          <img
            src={sponsorsImage}
            alt="Sponsors Background"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-club-black/70 to-club-red/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Thank You to Our Sponsors</h2>
              <p className="text-lg">Supporting chess education and youth development</p>
            </div>
          </div>
        </div>

        {/* Single Sponsors Flashcard */}
        <Card className="bg-club-black border-club-red/30 mb-16">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-semibold text-lg text-white mb-2">Sponsorship</h3>
                  <div className="w-16 h-16 bg-club-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-club-red" />
                  </div>
                  {sponsor === "placeholder" ? (
                    <Button
                      onClick={() => navigate("/contact")}
                      className="bg-club-red text-white hover:bg-club-red/90"
                    >
                      Join Us
                    </Button>
                  ) : (
                    <h4 className="font-semibold text-white">{sponsor}</h4>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How Our Sponsors Help */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">How Our Sponsors Help</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🏆</span>
                </div>
                <h3 className="font-semibold mb-2">Tournament Fees</h3>
                <p className="text-sm text-gray-300">Entry fees for regional and state competitions</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🚌</span>
                </div>
                <h3 className="font-semibold mb-2">Transportation</h3>
                <p className="text-sm text-gray-300">Travel costs to tournaments and events</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">♟️</span>
                </div>
                <h3 className="font-semibold mb-2">Equipment</h3>
                <p className="text-sm text-gray-300">Chess sets, boards, and clocks</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🎓</span>
                </div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm text-gray-300">Chess books, training materials, and coaching</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-club-red to-club-red-dark text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Interested in Sponsoring Us?</h2>
              <p className="mb-6">
                Join our community of supporters and help develop the next generation of strategic thinkers.
              </p>
              <Button
                onClick={() => navigate("/contact")}
                className="bg-white text-club-red hover:bg-gray-100"
              >
                Contact Us About Sponsorship
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Sponsors;
