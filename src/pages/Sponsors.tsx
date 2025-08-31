import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import goldBackground from "@/assets/gold-bg.jpg";
import silverBackground from "@/assets/silver-bg.jpg";

const Sponsors = () => {
  const navigate = useNavigate();

  const goldSponsors = Array(3).fill("placeholder"); // 3 Gold slots
  const silverSponsors = Array(6).fill("placeholder"); // 6 Silver slots

  const renderGoldCard = (sponsor: string, index: number) => (
  <Card key={index} className="bg-club-black border-yellow-400/50 shadow-lg mb-6">
    <CardContent className="p-12 flex flex-col md:flex-row items-center md:justify-between gap-8">
      {/* Logo/Star */}
      <div className="flex-shrink-0">
        <div className="w-32 h-32 bg-yellow-400/30 rounded-full flex items-center justify-center">
          <Star className="w-16 h-16 text-yellow-400" />
        </div>
      </div>

      {/* Sponsor Info */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-3xl font-bold text-white mb-4">
          {sponsor === "placeholder" ? "Gold Sponsor" : sponsor}
        </h3>
        <p className="text-gray-300 text-lg">
          {sponsor === "placeholder"
            ? "This sponsor generously supports our club and helps us achieve great things!"
            : "Sponsor description here."}
        </p>
      </div>

      {/* Join Button */}
      {sponsor === "placeholder" && (
        <Button
          onClick={() => navigate("/contact")}
          className="bg-yellow-400 text-club-black hover:bg-yellow-500 px-6 py-3 text-lg"
        >
          Join Us
        </Button>
      )}
    </CardContent>
  </Card>
);


  const renderSilverCard = (sponsor: string, index: number) => (
    <div key={index} className="text-center">
      <h3 className="font-semibold text-lg text-white mb-2">Sponsorship</h3>
      <div className="w-16 h-16 bg-gray-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
        <Star className="w-8 h-8 text-gray-300" />
      </div>
      {sponsor === "placeholder" ? (
        <Button
          onClick={() => navigate("/contact")}
          className="bg-gray-400 text-club-black hover:bg-gray-500"
        >
          Join Us
        </Button>
      ) : (
        <h4 className="font-semibold text-white">{sponsor}</h4>
      )}
    </div>
  );

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
              <h2 className="text-3xl font-bold mb-2">Thank You to Our Gold Sponsors</h2>
              <p className="text-lg">Supporting chess education and youth development</p>
            </div>
          </div>
        </div>

        {/* Gold Sponsor Cards */}
        <div className="mb-16">{goldSponsors.map(renderGoldCard)}</div>

        {/* Silver Sponsors Banner */}
        <div className="relative mb-8 rounded-lg overflow-hidden border border-gray-400/60 max-w-4xl mx-auto">
          <img
            src={silverBackground}
            alt="Silver Sponsors Background"
            className="w-full h-36 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-500/70 to-gray-300/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-2">Thank You to Our Silver Sponsors</h2>
              <p className="text-lg">Helping us grow and reach more students</p>
            </div>
          </div>
        </div>

        {/* Silver Sponsor Cards */}
        <Card className="bg-club-black border-gray-400/30 mb-16 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {silverSponsors.map(renderSilverCard)}
            </div>
          </CardContent>
        </Card>

        {/* How Our Sponsors Help */}
        <Card className="bg-club-black border-club-red/30 mb-16">
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
