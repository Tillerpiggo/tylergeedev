import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"

export default function ResumePage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <Link href="/">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
        <Button asChild>
          <Link href="/tylergeeresume.pdf" download="TylerGee_Resume.pdf">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Link>
        </Button>
      </div>

      <div className="bg-white border rounded-lg shadow-sm print:shadow-none print:border-none overflow-hidden">
        <iframe
          src="/tylergeeresume.pdf#view=FitH"
          className="w-full h-[calc(100vh-10rem)]" // Adjust height as needed
          title="Tyler Gee Resume"
        />
      </div>
    </main>
  )
}
