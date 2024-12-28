import { ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "תכנון מערכות אינסטלציה",
      description: "תכנון מקצועי של מערכות אינסטלציה מורכבות לבניינים ומבני תעשייה",
    },
    {
      title: "תכנון ספרינקלרים",
      description: "תכנון מערכות כיבוי אש אוטומטיות מתקדמות",
    },
    {
      title: "ייעוץ מקצועי",
      description: "ייעוץ מקיף בתחום האינסטלציה וכיבוי האש",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/placeholder.svg" // Fallback image
        >
          <source src="/background-video.mp4" type="video/mp4" />
          {/* Fallback text for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        
        {/* Content overlay */}
        <div className="relative z-10 h-full flex items-center justify-center text-white px-4">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              פתרונות תכנון מתקדמים לאינסטלציה וספרינקלרים
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              מובילים בתכנון מערכות אינסטלציה וספרינקלרים עם ניסיון של שנים בפרויקטים מורכבים
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/contact"
                className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors inline-flex items-center"
              >
                צור קשר
                <ArrowLeft className="mr-2" size={20} />
              </Link>
              <a
                href="tel:+972000000000"
                className="bg-primary-light text-white px-6 py-3 rounded-lg font-medium hover:bg-primary transition-colors inline-flex items-center border border-white/20"
              >
                <Phone className="ml-2" size={20} />
                התקשר עכשיו
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-accent">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">השירותים שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
            >
              לכל השירותים
              <ArrowLeft className="mr-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">מעוניינים לשמוע עוד?</h2>
          <p className="text-xl mb-8">
            צוות המומחים שלנו ישמח לענות על כל שאלה ולסייע בכל פרויקט
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors inline-flex items-center"
            >
              <MessageCircle className="ml-2" size={20} />
              צור קשר
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;