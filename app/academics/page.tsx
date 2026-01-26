import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Programs - Nursery to Class 8",
  description: "Explore Harsh Academy's academic programs from Nursery to Class VIII. Modern curriculum, expert faculty, interactive learning methods. Quality education in Saiyan, Agra.",
  keywords: [
    "academics Harsh Academy",
    "curriculum Saiyan school",
    "nursery to class 8",
    "primary education Agra",
    "school programs Saiyan",
    "quality education Agra",
    "CBSE curriculum"
  ],
  openGraph: {
    title: "Academic Programs - Harsh Academy Saiyan Agra",
    description: "Comprehensive education from Nursery to Class VIII with modern curriculum and expert faculty.",
    url: "https://harshacademy.in/academics",
  },
};

export default function AcademicsPage() {
  return (
    <main className="min-h-screen">
      {/* Header with Logo */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/new logo.jpg"
              alt="Harsh Academy Logo"
              width={100}
              height={100}
              className="rounded-full border-4 border-white"
            />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ACADEMICS
          </h3>
        </div>
      </section>

      {/* Academic Description */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8">
            Our academic program is thoughtfully designed to inspire curiosity, build strong foundation
            and nurture a lifelong love for learning. We offer a balanced curriculum that combines core
            subjects with physical, creative and skill based learning.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8">
            Experienced educators use modern teaching methods, interactive classroom sessions and continuous assessment
            to support individual learning needs.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            By encouraging critical thinking, problem-solving and real-world application of knowledge, we prepare students
            to excel academically and grow into confident, responsible individuals.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h4 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
            COURSES WE OFFER
          </h4>
          <p className="text-xl text-center text-gray-600 mb-12">
            AT HARSH ACADEMY, WE OFFER CLASSES FROM NURSERY TO CLASS VIII,
            <br className="hidden md:block" />
            NURTURING YOUNG MINDS FOR A BRIGHTER FUTURE.
          </p>

          {/* Course Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <h5 className="text-2xl font-bold text-center">NURSERY</h5>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <h5 className="text-2xl font-bold text-center">KG</h5>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <h5 className="text-2xl font-bold text-center">CLASS I TO V</h5>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <h5 className="text-2xl font-bold text-center">CLASS VI TO VIII</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h4 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Academic Approach
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">📖</div>
              <h5 className="text-xl font-bold text-blue-900 mb-3 text-center">
                Comprehensive Curriculum
              </h5>
              <p className="text-gray-700 text-center">
                Balanced approach covering all core subjects with focus on
                practical application and conceptual understanding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">👨‍🏫</div>
              <h5 className="text-xl font-bold text-blue-900 mb-3 text-center">
                Expert Faculty
              </h5>
              <p className="text-gray-700 text-center">
                Qualified and experienced teachers dedicated to nurturing
                each student&apos;s potential and academic growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🎯</div>
              <h5 className="text-xl font-bold text-blue-900 mb-3 text-center">
                Interactive Learning
              </h5>
              <p className="text-gray-700 text-center">
                Modern teaching methods with hands-on activities, projects,
                and continuous assessments for better learning outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
