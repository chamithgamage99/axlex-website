import type { Metadata } from "next";
import { FaArrowRight, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

const BOOKING_URL = "https://cal.com/axlex-y1wjxo/30min";
const WHATSAPP_URL =
  "https://wa.me/94719686487?text=Hi%20Chamith%2C%20I%27d%20like%20to%20book%20a%20car%20park%20diagnostic%20scan.";

export const metadata: Metadata = {
  title: "On-Site Vehicle Diagnostics (LKR 2,000) | AxleX",
  description:
    "OEM-level full module scan and live-data health check at the Vega Innovations car park. LKR 2,000 per session with PDF report.",
};

const pastFixes = [
  {
    car: "2019 Mercedes-Benz C200 Mild Hybrid",
    fix: "Post-accident electrical recovery, SRS crash unlock, pyrofuse & 48V hybrid integration.",
  },
  {
    car: "Suzuki Wagon R MH44S (ISG)",
    fix: "Isolated intermittent ISG hybrid assist/charging faults missed by regular workshops.",
  },
  {
    car: "2008 Petrol Engine (Misfire)",
    fix: "Pinpointed a heat-drifting ignition coil via resistance testing & live misfire counters.",
  },
  {
    car: "2001 Hyundai Santa Fe 2.7L V6",
    fix: "Live KWP2000 ECU telemetry logging & custom VSS signal-conditioning circuit.",
  },
];

export default function DiagnosticsPage() {
  return (
    <div
      className="min-h-screen px-4 py-12 sm:py-16"
      style={{
        background: "radial-gradient(ellipse at top, #2d0300 0%, #000000 65%)",
      }}
    >
      <div className="mx-auto max-w-2xl">
        {/* Location Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-red-600/40 bg-red-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-400">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          Vega Innovations Car Park • On-Site Scan
        </div>

        {/* Headline */}
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Dealer-Level Car Diagnostics.{" "}
          <span className="text-red-600">Right Where You Park.</span>
        </h1>

        <p className="mt-3 text-lg text-gray-300">
          Skip the workshop queue. Get a full-system OEM scan and live sensor
          health check during lunch or after work—even if you don&apos;t have a
          warning light on yet.
        </p>

        {/* Price + Primary CTA Card */}
        <div className="mt-8 rounded-xl border border-gray-800 bg-gray-900/90 p-6 shadow-2xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Flat Rate • 15–20 Min Session
              </p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">
                  LKR 2,000
                </span>
                <span className="text-sm text-gray-400">/ vehicle</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-base font-bold text-white transition hover:bg-red-700"
              >
                Book Slot <FaArrowRight size={14} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-black/60 px-4 py-3.5 text-sm font-semibold text-gray-200 transition hover:border-green-500 hover:text-green-400"
              >
                <FaWhatsapp size={18} className="text-green-500" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* 3 Simple Bullets */}
        <div className="mt-8 rounded-xl border border-gray-800 bg-gray-900/60 p-6">
          <h2 className="text-xl font-bold text-white">
            What You Get for <span className="text-red-600">LKR 2,000</span>
          </h2>
          <ul className="mt-4 space-y-3 text-base text-gray-300">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-red-500" />
              <span>
                <strong className="text-white">All-Module OEM Scan:</strong>{" "}
                Engine, Gearbox, ABS, Airbag (SRS), Body &amp; Hybrid/ISG
                systems—not a basic code reader.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-red-500" />
              <span>
                <strong className="text-white">
                  No-Warning-Light Health Check:
                </strong>{" "}
                Live fuel trims, O2 sensors, misfire counters &amp; battery
                health to spot early drift before a CEL appears.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-red-500" />
              <span>
                <strong className="text-white">PDF Report on Your Phone:</strong>{" "}
                Full fault &amp; live-data report sent straight to you with
                clear, honest next steps.
              </span>
            </li>
          </ul>
          <p className="mt-4 border-t border-gray-800 pt-3 text-xs text-gray-500">
            *Live telemetry flags abnormal sensor/ignition trends early, though
            no scan can guarantee against sudden mechanical wear.
          </p>
        </div>

        {/* 4 One-Line Past Fixes */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-white">
            Real Faults <span className="text-red-600">Isolated &amp; Solved</span>
          </h2>
          <div className="mt-4 space-y-3">
            {pastFixes.map((item) => (
              <div
                key={item.car}
                className="rounded-lg border border-gray-800 bg-gray-900/70 px-4 py-3"
              >
                <div className="text-sm font-bold text-white">{item.car}</div>
                <div className="mt-0.5 text-sm text-gray-400">{item.fix}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-red-700 sm:w-auto"
          >
            Reserve Your Car Park Scan <FaArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
