export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About Harsh Academy
          </h1>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-6 animate-scale-in animate-delay-200"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
            Building strong academic foundations with values, discipline, and excellence since 2009
          </p>
        </div>
      </section>

      {/* Mission & Vision - keeping existing content but enhancing structure */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="group bg-gradient-to-br from-white to-blue-50 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-l-4 border-blue-600 hover-lift animate-slide-in">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To develop the intellectual, emotional, and moral capacities of students by promoting human values, mutual respect, and a commitment to lifelong learning.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-indigo-50 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-l-4 border-indigo-600 hover-lift animate-slide-in-right">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-indigo-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a center of educational excellence that empowers students to achieve their fullest potential while instilling strong values.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
