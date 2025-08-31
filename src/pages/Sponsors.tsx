import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import goldBackground from "@/assets/gold-bg.jpg"; // Replace with actual gold bg
import silverBackground from "@/assets/silver-bg.jpg"; // Replace with actual silver bg

const Sponsors = () => {
  const navigate = useNavigate();

  const goldSponsors = Array(3).fill("placeholder"); // 3 Gold slots
  const silverSponsors = Array(6).fill("placeholder"); // 6 Silver slots

  const renderSponsorCard = (
    sponsor: string,
    index: number,
    tier: "gold" | "silver"
  ) => {
    const bgColor = tier === "gold" ? "bg-yellow-500/30" : "bg-gray-400/30";
    const starColor = tier === "gold" ? "text-yellow-400" : "text-gray-300";
    const buttonColor =
      tier === "gold"
        ? "bg-yellow-400 text-club-black hover:bg-yellow-500"
        : "bg-gray-400 text-club-black hover:bg-gray-500";

    return (
      <div key={index} className="text-center">
        <h3 className="font-semibold text-lg text-white mb-2">Sponsorship</h3>
        <div
          className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
        >
          <Star className={`w-8 h-8 ${starColor}`} />
        </div>
        {sponsor === "placeholder" ? (
          <Button onClick={() => navigate("/contact")} className={buttonColor}>
            Join Us
          </Button>
        ) : (
          <h4 className="font-semibold text-white">{sponsor}</h4>
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Gold Sponsors Banner */}
        <div className="relative mb-8 rounded-lg overflow-hidden border border-yellow-400/60">
          <img
            src={goldBackground}
            alt="Gold Sponsors Background"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/70 to-yellow-400/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-2">
                Thank You to Our Gold Sponsors
              </h2>
              <p className="text-lg">Supporting chess education and youth development</p>
            </div>
          </div>
        </div>

        {/* Gold Sponsor Cards */}
        <Card className="bg-club-black border-yellow-400/30 mb-16">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {goldSponsors.map((s, i) => renderSponsorCard(s, i, "gold"))}
            </div>
          </CardContent>
        </Card>

        {/* Silver Sponsors Banner */}
        <div className="relative mb-8 rounded-lg overflow-hidden border border-gray-400/60 max-w-4xl mx-auto">
          <img
            src={silverBackground}
            alt="Silver Sponsors Background"
            className="w-full h-36 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-500/70 to-gray-300/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-2">
                Thank You to Our Silver Sponsors
              </h2>
              <p className="text-lg">Helping us grow and reach more students</p>
            </div>
          </div>
        </div>

        {/* Silver Sponsor Cards */}
        <Card className="bg-club-black border-gray-400/30 mb-16 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {silverSponsors.map((s, i) => renderSponsorCard(s, i, "silver"))}
            </div>
          </CardContent>
        </Card>

        {/* How Our Sponsors Help */}
        <Card className="bg-club-black border-club-red/30 mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              How Our Sponsors Help
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🏆</span>
                </div>
                <h3 className="font-semibold mb-2">Tournament Fees</h3>
                <p className="text-sm text-gray-300">
                  Entry fees for regional and state competitions
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🚌</span>
                </div>
                <h3 className="font-semibold mb-2">Transportation</h3>
                <p className="text-sm text-gray-300">
                  Travel costs to tournaments and events
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">♟️</span>
                </div>
                <h3 className="font-semibold mb-2">Equipment</h3>
                <p className="text-sm text-gray-300">
                  Chess sets, boards, and clocks
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🎓</span>
                </div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm text-gray-300">
                  Chess books, training materials, and coaching
                </p>
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
                Join our community of supporters and help develop the next generation of
                strategic thinkers.
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
