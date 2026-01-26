import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admission Procedure 2026-2027 - Enroll Now",
  description: "Admissions open at Harsh Academy Saiyan Agra for 2026-2027. Learn about our admission procedure, eligibility criteria, and application process from Nursery to Class 8.",
  keywords: [
    "school admission Saiyan",
    "admission 2026 Agra",
    "school enrollment near me",
    "admission procedure Harsh Academy",
    "nursery admission Saiyan",
    "school admission process Agra",
    "enroll in school Saiyan"
  ],
  openGraph: {
    title: "Admission 2026-2027 - Harsh Academy Saiyan Agra",
    description: "Admissions open! Join Harsh Academy for quality education from Nursery to Class 8. Limited seats available.",
    url: "https://harshacademy.co.in/admission",
  },
};

export default function AdmissionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6">
            Admission Procedure
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our admission process follows a personalized evaluation that ensures fairness,
            transparency, and readiness for academic success.
          </p>

          {/* Admission Steps */}
          <div className="space-y-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Step 1: Eligibility Review
              </h3>
              <p className="text-lg text-gray-700">
                Applications are reviewed based on age criteria and academic eligibility.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Step 2: Interaction & Assessment
              </h3>
              <p className="text-lg text-gray-700">
                The student and parents may be invited for an interaction to assess readiness
                and overall development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Step 3: Final Decision
              </h3>
              <p className="text-lg text-gray-700">
                The school&apos;s decision regarding admission is final and binding.
              </p>
            </div>
          </div>

          {/* Important Guidelines */}
          <div className="bg-blue-900 text-white p-10 rounded-lg shadow-xl">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Important Guidelines
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-2xl mr-4">📌</span>
                <div>
                  <strong className="text-xl block mb-2">Registration & Admission Fee:</strong>
                  <p className="text-lg">
                    Once paid, the fee is non-refundable and non-transferable.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-2xl mr-4">📅</span>
                <div>
                  <strong className="text-xl block mb-2">Admission Date:</strong>
                  <p className="text-lg">
                    If admission is not completed on the specified date, the seat will be offered
                    to the next candidate.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-2xl mr-4">🎓</span>
                <div>
                  <strong className="text-xl block mb-2">Session Commencement:</strong>
                  <p className="text-lg">
                    The academic session begins from the first working day of April.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-2xl mr-4">✅</span>
                <div>
                  <strong className="text-xl block mb-2">Basis of Admission:</strong>
                  <p className="text-lg">
                    Admission is granted based on eligibility review, interaction, and readiness
                    assessment.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-12 rounded-lg shadow-xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Harsh Academy?
            </h3>
            <p className="text-xl mb-8">
              Admissions are open for the 2026-2027 academic session.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Contact Us to Apply
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
