import LeadershipTeam from "./LeadershipTeam";
import Gallery from "./Gallery";

const About = () => {
  return (
    <>
      <section className="py-16 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Corridors of Peace
            </h2>
            <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-justify leading-relaxed">
                  Our mission is to catalyze sustainable peace and prosperity
                  across Africa, beginning in Nigeria, by centering women and
                  girls as architects of change. We create corridors of peace by
                  empowering them with transformative economic opportunities and
                  foundational social protection programs. We provide the tools,
                  resources, and platforms for women and girls to lead community
                  resilience, build sustainable livelihoods, and shape a future
                  defined by security and equity. Through female-powered
                  initiatives and inclusive partnerships that engage men and
                  boys, we foster a reinforcing cycle of empowerment, stability,
                  and lasting peace.{" "}
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-blue-800 mb-3">
                  Our Vision
                </h4>
                <p className="text-gray-700 text-justify leading-relaxed">
                  We envision a thriving Africa where corridors of peace enable
                  communities to flourish. In this Africa, every woman and girl
                  is secured by robust social protection and propelled by
                  equitable economic opportunity, possessing the undeniable
                  power to shape her own destiny. We see a continent where
                  communities are resilient against conflict and hardship,
                  environments are healthy, and the well-being of all is
                  guaranteed through the leadership of women and the solidarity
                  of all genders.{" "}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 p-6 rounded-lg">
                <div className="text-blue-600 text-4xl font-bold mb-2">
                  1000+
                </div>
                <p className="text-gray-700">Women Empowered</p>
              </div>
              <div className="bg-yellow-100 p-6 rounded-lg">
                <div className="text-yellow-600 text-4xl font-bold mb-2">
                  5+
                </div>
                <p className="text-gray-700">Active Projects</p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg">
                <div className="text-green-600 text-4xl font-bold mb-2">2</div>
                <p className="text-gray-700">Partner Organizations</p>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg">
                <div className="text-purple-600 text-4xl font-bold mb-2">
                  1000+
                </div>
                <p className="text-gray-700">Lives Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadershipTeam />
      <Gallery />
    </>
  );
};

export default About;
