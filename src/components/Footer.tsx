export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 text-sm">
              © {new Date().getFullYear()} Lung Auscultation Demo
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-teal-600">
              <span className="sr-only">Educational Use</span>
              <span>Educational Use Only</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}