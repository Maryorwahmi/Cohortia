import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle, Calendar, Clock, ChevronDown, CheckCircle, Sparkles, MessageSquare } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
  open: boolean;
}

const INITIAL_FAQS: FAQItem[] = [
  {
    q: "Do I need absolute coding or design experience to apply?",
    a: "No! Our Foundation Track (Career Starter) is specifically structured with beginner-friendly explanations, small wins, and supportive mentorship. If you choose a more advanced track (like DevOps or AI Eng), we conduct brief skills assessments or suggest preparatory materials before launch.",
    open: true
  },
  {
    q: "How does the 14-day refund policy operate?",
    a: "We offer a 100% full tuition refund guarantee up to 14 days after your cohort launch date. If you decide the pacing, platform, or collaborative structure isn't a fit for you, simply file a ticket. No questions asked, and zero processing fees.",
    open: false
  },
  {
    q: "Are the client briefs and internship tasks completely remote?",
    a: "Yes! All cohort operations, mentor reviews, collaborative sprints, and developer workshops are 100% remote. Sprints operate asynchronously with standard daily milestones to match modern distributed tech environments.",
    open: false
  },
  {
    q: "What is the Cohort Placement Rate?",
    a: "Over 91.5% of verified candidates who complete all 5 milestone sprint blocks find relevant high-paying offers in their field within 180 days of graduation. Placement pipelines directly hook your project reviews to recruiter databases at partner networks.",
    open: false
  }
];

export default function ContactPage() {
  const [faqs, setFaqs] = useState<FAQItem[]>(INITIAL_FAQS);
  
  // Contact ticket state
  const [ticketName, setTicketName] = useState("");
  const [ticketEmail, setTicketEmail] = useState("");
  const [ticketTrack, setTicketTrack] = useState("frontend");
  const [ticketMsg, setTicketMsg] = useState("");
  const [isSendingTicket, setIsSendingTicket] = useState(false);
  const [ticketSuccess, setTicketSuccess] = useState(false);

  // Booking scheduler state
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const bookingDates = [
    { day: "Mon", date: 13, label: "July 13" },
    { day: "Tue", date: 14, label: "July 14" },
    { day: "Wed", date: 15, label: "July 15" },
    { day: "Thu", date: 16, label: "July 16" },
    { day: "Fri", date: 17, label: "July 17" }
  ];

  const bookingTimes = ["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"];

  const handleToggleFaq = (index: number) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        return { ...faq, open: !faq.open };
      }
      return faq;
    }));
  };

  const handleSendTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketName || !ticketEmail || !ticketMsg) return;

    setIsSendingTicket(true);
    setTimeout(() => {
      setIsSendingTicket(false);
      setTicketSuccess(true);
      setTicketName("");
      setTicketEmail("");
      setTicketMsg("");
      setTimeout(() => setTicketSuccess(false), 5000);
    }, 1500);
  };

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) return;
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setSelectedDate(null);
      setSelectedTime(null);
    }, 4000);
  };

  return (
    <div className="pt-20 pb-8 min-h-screen bg-immersive-bg relative">
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-[#FF4B3E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-immersive-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Page Header */}
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 text-center mt-6 mb-10">
        <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-3">
          | CONNECT WITH COHORTIA
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-extrabold text-immersive-text-primary tracking-tight max-w-4xl mx-auto leading-tight">
          Let's Start <span className="text-[#FF4B3E]">Talking</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-immersive-text-secondary max-w-2xl mx-auto font-medium leading-relaxed">
          Have questions about tuition schemes, remote sprint schedules, or track prerequisites? Connect with an advisor or submit a secure support ticket.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Secure Advisor Support Ticket Form */}
          <div className="lg:col-span-6 bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-immersive-shadow text-left flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest">
                  SECURE TICKET SUBMISSION
                </span>
                <h3 className="text-xl font-bold text-immersive-text-primary mt-1">
                  Ask a Cohort Advisor
                </h3>
                <p className="text-xs text-immersive-text-secondary font-medium mt-1">
                  Submit a query directly to our admissions team. We promise a comprehensive response within 1 hour.
                </p>
              </div>

              {ticketSuccess ? (
                <div className="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-immersive-text-primary">Ticket Submitted Successfully!</h4>
                    <p className="text-xs text-immersive-text-secondary leading-relaxed font-medium max-w-md mx-auto">
                      Your query has been logged under ID <span className="font-mono text-immersive-secondary font-bold">#CHT-9218</span>. An admissions mentor will email or call you shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSendTicket} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase block">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={ticketName}
                        onChange={(e) => setTicketName(e.target.value)}
                        placeholder="e.g., Alex Carter"
                        className="w-full px-4 py-3 bg-immersive-bg border border-immersive-border hover:border-immersive-secondary/30 focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/40 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase block">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={ticketEmail}
                        onChange={(e) => setTicketEmail(e.target.value)}
                        placeholder="e.g., alex@company.com"
                        className="w-full px-4 py-3 bg-immersive-bg border border-immersive-border hover:border-immersive-secondary/30 focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/40 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase block">
                      Desired Cohort Velocity
                    </label>
                    <select
                      value={ticketTrack}
                      onChange={(e) => setTicketTrack(e.target.value)}
                      className="w-full px-4 py-3 bg-immersive-bg border border-immersive-border focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary focus:outline-none cursor-pointer"
                    >
                      <option value="frontend">Frontend Engineering (8-Wk / 16-Wk)</option>
                      <option value="design">UI/UX Product Design (8-Wk / 16-Wk)</option>
                      <option value="product">Product Management (8-Wk / 16-Wk)</option>
                      <option value="analytics">Data Analytics (8-Wk / 16-Wk)</option>
                      <option value="custom">Not sure / Custom consultation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase block">
                      Your Query or Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={ticketMsg}
                      onChange={(e) => setTicketMsg(e.target.value)}
                      placeholder="Write your specific questions here..."
                      className="w-full px-4 py-3 bg-immersive-bg border border-immersive-border hover:border-immersive-secondary/30 focus:border-immersive-secondary rounded-xl text-xs text-immersive-text-primary placeholder:text-immersive-text-secondary/40 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSendingTicket}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 disabled:opacity-50 transition-all flex items-center justify-center space-x-1.5 shadow-md shadow-immersive-shadow shadow-immersive-primary/10 cursor-pointer"
                  >
                    <span>{isSendingTicket ? "Filing ticket..." : "Send Message to Advisor"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Details footer block */}
            <div className="border-t border-immersive-border/20 pt-6 mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2.5 text-xs">
                <div className="w-8 h-8 rounded-lg bg-immersive-secondary/10 flex items-center justify-center text-immersive-secondary shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-immersive-text-secondary/60 text-[10px] font-mono uppercase font-bold">Email Admissions</div>
                  <a href="mailto:admissions@cohortia.com" className="text-immersive-text-primary hover:text-immersive-secondary font-bold text-[11px]">admissions@cohortia.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-2.5 text-xs">
                <div className="w-8 h-8 rounded-lg bg-[#FF4B3E]/10 flex items-center justify-center text-[#FF4B3E] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-immersive-text-secondary/60 text-[10px] font-mono uppercase font-bold">Phone Support</div>
                  <a href="tel:+14155552391" className="text-immersive-text-primary hover:text-immersive-secondary font-bold text-[11px]">+1 (415) 555-2391</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Booking Calendar Calendar Scheduler */}
          <div className="lg:col-span-6 bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-immersive-shadow text-left h-full flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest">
                  1-ON-1 ADVISORY SCHEDULER
                </span>
                <h3 className="text-xl font-bold text-immersive-text-primary mt-1">
                  Book a 15-Min Career Map Call
                </h3>
                <p className="text-xs text-immersive-text-secondary font-medium mt-1">
                  Schedule a private chat with a cohort advisor to evaluate tracks, align qualifications, and explore payment schemes.
                </p>
              </div>

              {bookingConfirmed ? (
                <div className="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-4 animate-in zoom-in-95 duration-200 h-64 flex flex-col justify-center items-center">
                  <Calendar className="w-12 h-12 text-emerald-400 animate-bounce" />
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-immersive-text-primary">Advisory Call Scheduled!</h4>
                    <p className="text-xs text-immersive-text-secondary font-medium">
                      Check your inbox for the private Google Meet coordinates.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Calendar Days Slider */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase block">
                      Select Available Date (Admissions Calendar):
                    </label>
                    <div className="grid grid-cols-5 gap-2.5">
                      {bookingDates.map((dayObj) => (
                        <button
                          key={dayObj.date}
                          onClick={() => setSelectedDate(dayObj.date)}
                          className={`py-2.5 px-1 rounded-xl border text-center transition-all cursor-pointer ${
                            selectedDate === dayObj.date
                              ? "border-[#FF4B3E] bg-[#FF4B3E]/10 text-immersive-text-primary"
                              : "border-immersive-border bg-immersive-bg text-immersive-text-secondary hover:border-immersive-secondary/30 hover:text-immersive-text-primary"
                          }`}
                        >
                          <div className="text-[10px] uppercase font-mono font-bold opacity-60">{dayObj.day}</div>
                          <div className="text-base font-bold mt-0.5">{dayObj.date}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calendar Times Slider */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-immersive-secondary font-bold uppercase block">
                      Select Available Time (UTC-7 Pacific):
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {bookingTimes.map((timeStr) => (
                        <button
                          key={timeStr}
                          onClick={() => setSelectedTime(timeStr)}
                          className={`py-2 rounded-lg text-[10px] font-bold text-center border transition-all cursor-pointer ${
                            selectedTime === timeStr
                              ? "border-[#FF4B3E] bg-[#FF4B3E]/10 text-immersive-text-primary shadow"
                              : "border-immersive-border bg-immersive-bg text-immersive-text-secondary hover:border-immersive-secondary/30 hover:text-immersive-text-primary"
                          }`}
                        >
                          {timeStr}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleConfirmBooking}
                    disabled={!selectedDate || !selectedTime}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center space-x-1.5 shadow-md shadow-immersive-shadow cursor-pointer"
                  >
                    <span>Secure Booking Appointment</span>
                    <Clock className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Direct Address Details */}
            <div className="border-t border-immersive-border/20 pt-6 mt-6 flex items-center space-x-3 text-xs text-immersive-text-secondary font-medium">
              <MapPin className="w-5 h-5 text-immersive-secondary shrink-0" />
              <span>Cohortia HQ Labs, 101 Mission St, San Francisco, California 94105</span>
            </div>
          </div>
        </div>

        {/* Dynamic Accordion FAQ Section */}
        <section className="py-12 mt-8 border-t border-immersive-border/20">
          <div className="max-w-3xl mx-auto space-y-6">
            
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-[#FF4B3E] uppercase block mb-2">
                | FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl font-sans font-extrabold text-immersive-text-primary">
                Answers to Your Queries
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-immersive-card border border-immersive-border rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => handleToggleFaq(index)}
                    className="w-full px-5 py-4.5 flex items-center justify-between text-left font-bold text-sm sm:text-base text-immersive-text-primary hover:text-[#FF4B3E] transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-immersive-secondary transition-transform duration-300 shrink-0 ml-4 ${
                      faq.open ? "rotate-180 text-[#FF4B3E]" : ""
                    }`} />
                  </button>
                  
                  {faq.open && (
                    <div className="px-5 pb-5.5 text-xs sm:text-sm text-immersive-text-secondary font-medium leading-relaxed border-t border-immersive-border/10 pt-4 animate-in slide-in-from-top-1.5 duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
