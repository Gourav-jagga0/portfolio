import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  // faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href="#"
              className="text-2xl font-bold hover:text-blue-400 transition-colors"
            >
              Gourav Jagga
            </Link>
            <p className="mt-2 text-gray-400">
              Engineering Java backends that scale horizontally
            </p>
          </div>

          <div className="flex space-x-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/gourav-jagga-433937169/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
            </a>

            {/* GitHub - Uncomment if you want to include */}
            {/* <a
              href="https://github.com/Gourav-jagga0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </a> */}

            {/* Email */}
            <a
              href="mailto:work.gouravjagga@gmail.com"
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
            </a>

            {/* PDF Resume - Optional */}
            <a
              href="https://drive.google.com/drive/folders/1Ar2pgym_eDFqdpztgwtaL6rNR6qmv6ZH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="Download Resume"
            >
              <FontAwesomeIcon icon={faFilePdf} className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Copyright Section - Uncomment if needed */}
        {/* <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Gourav Jagga. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm mr-4 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
