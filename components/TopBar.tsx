export default function TopBar() {
  return (
    <div className="bg-blue-900 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs md:text-sm">
        <div className="flex items-center space-x-4 mb-2 sm:mb-0">
          <span className="flex items-center">
            <span className="mr-2">📧</span>
            harshacademy.ac.in@gmail.com
          </span>
          <span className="hidden md:flex items-center">
            <span className="mr-2">📞</span>
            +91 9927700400
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold">🎓 Admissions Open for 2026-2027!</span>
        </div>
      </div>
    </div>
  );
}
