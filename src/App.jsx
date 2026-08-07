\
import React, { useMemo, useState } from 'react'

const colors = {
  navy: '#0D2340',
  teal: '#0A9EA6',
  orange: '#FF6B35',
}

function Icon({ children, className = '' }) {
  return (
    <div className={`grid h-11 w-11 place-items-center rounded-2xl bg-teal-50 text-teal-700 ${className}`}>
      {children}
    </div>
  )
}

function Logo({ light = false }) {
  const text = light ? 'text-white' : 'text-[#0D2340]'
  return (
    <a href="#top" className="flex items-center gap-3 no-underline" aria-label="LocalReach Media">
      <svg viewBox="0 0 84 62" className="h-11 w-14 shrink-0" role="img" aria-hidden="true">
        <path d="M7 36 30 16l15 13 10-8 21 16" fill="none" stroke={light ? '#fff' : colors.navy} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 46c11-8 21-8 31 0 9 7 18 7 28 0" fill="none" stroke="#0A9EA6" strokeWidth="6" strokeLinecap="round"/>
        <path d="M57 25v25" stroke="#FF6B35" strokeWidth="6" strokeLinecap="round"/>
        <path d="M57 25h13v8H57" fill="#FF6B35"/>
      </svg>
      <div className={`font-display leading-none ${text}`}>
        <div className="text-lg font-extrabold tracking-[.06em] md:text-xl">
          LOCAL<span className="text-[#0A9EA6]">REACH</span>
        </div>
        <div className="mt-1 text-[9px] font-bold tracking-[.48em]">MEDIA</div>
      </div>
    </a>
  )
}

function MailIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>
}
function HomeIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="m3 11 9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>
}
function BrushIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="m14 4 6 6-8 8H6v-6z"/><path d="m5 19-2 2 4-1"/></svg>
}
function ChartIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/></svg>
}
function PinIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.4"/></svg>
}
function CheckIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="m5 12 4 4L19 6"/></svg>
}
function UploadIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M5 20h14"/></svg>
}

const plans = [
  {
    name: 'Standard',
    price: '$200',
    desc: 'Clean, equal-sized business placement.',
    features: ['Professional ad design', 'Logo + offer + contact info', 'QR code', '2,746 planned households'],
    accent: 'border-slate-200',
  },
  {
    name: 'Premium',
    price: '$300',
    desc: 'Larger, higher-visibility placement.',
    features: ['Approx. 1.5× standard size', 'Center-adjacent or premium corner', 'Professional ad design', 'QR code'],
    accent: 'border-[#0A9EA6]',
    featured: true,
  },
  {
    name: 'Featured',
    price: '$400',
    desc: 'Largest single placement on the back.',
    features: ['Maximum visual space', 'Strong promotional layout', 'Professional ad design', 'One available per edition'],
    accent: 'border-orange-200',
  },
]

function App() {
  const [selectedPlan, setSelectedPlan] = useState('Premium')
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoName, setLogoName] = useState('')

  const year = useMemo(() => new Date().getFullYear(), [])

  function choosePlan(plan) {
    setSelectedPlan(plan)
    document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' })
  }

  function submitForm(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div id="top" className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
            <a className="hover:text-[#0A9EA6]" href="#how">How It Works</a>
            <a className="hover:text-[#0A9EA6]" href="#pricing">Pricing</a>
            <a className="hover:text-[#0A9EA6]" href="#coverage">Coverage</a>
            <a className="hover:text-[#0A9EA6]" href="#faq">FAQ</a>
            <a className="rounded-xl bg-[#FF6B35] px-5 py-3 font-extrabold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5" href="#reserve">Reserve Your Spot</a>
          </nav>
          <button onClick={() => setMenuOpen(v => !v)} className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold text-[#0D2340] lg:hidden">
            Menu
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-4 font-semibold text-slate-700">
              {['how','pricing','coverage','faq','reserve'].map((id) => (
                <a key={id} onClick={() => setMenuOpen(false)} href={`#${id}`} className="capitalize">
                  {id === 'reserve' ? 'Reserve Your Spot' : id.replace('-', ' ')}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f4fbfb] to-slate-100">
          <div className="absolute inset-0 grid-fade opacity-60" />
          <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-16 px-5 py-20 lg:grid-cols-[1.06fr_.94fr] lg:px-8 lg:py-28">
            <div className="self-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[.14em] text-[#0A9EA6] shadow-sm">
                Galveston Homeowners Guide · Founding Edition
              </div>
              <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-[#0D2340] sm:text-6xl lg:text-7xl">
                Reach <span className="text-[#0A9EA6]">2,746 local homes</span> without paying for the whole mail campaign.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                LocalReach Media lets complementary local businesses share one professionally designed direct-mail piece sent to selected Galveston residential routes through USPS Every Door Direct Mail.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#reserve" className="animate-cta inline-flex items-center justify-center rounded-xl bg-[#FF6B35] px-6 py-4 text-sm font-extrabold text-white shadow-xl shadow-orange-200 transition hover:-translate-y-0.5">Reserve Your Category</a>
                <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border-2 border-[#0A9EA6] bg-white px-6 py-4 text-sm font-extrabold text-[#0D2340] transition hover:bg-teal-50">View Placement Options</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                {['USPS direct mail', 'One business per industry', 'Professional design included'].map(x => (
                  <span key={x} className="rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">{x}</span>
                ))}
              </div>
            </div>

            <div className="relative self-center">
              <div className="animate-card rounded-[28px] bg-[#0D2340] p-5 shadow-soft">
                <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-[#0D2340] to-[#17395e] p-5">
                  <div className="text-center text-white">
                    <div className="text-xs font-bold uppercase tracking-[.22em] text-cyan-300">Galveston</div>
                    <div className="mt-1 font-display text-2xl font-extrabold">HOMEOWNERS GUIDE</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[.14em] text-slate-300">Presented by LocalReach Media</div>
                  </div>
                  <div className="mt-5 grid grid-cols-[1fr_1.15fr_1fr] grid-rows-3 gap-2">
                    {['PREMIUM','STANDARD','STANDARD','STANDARD','STANDARD','STANDARD','STANDARD','PREMIUM'].map((t, i) => (
                      <div key={i} className={`${i===0 || i===7 ? 'bg-[#0A9EA6] text-white' : 'bg-white text-[#0D2340]'} grid min-h-20 place-items-center rounded-xl p-3 text-center text-[10px] font-extrabold shadow-sm`}>
                        {t}
                      </div>
                    ))}
                    <div className="col-start-2 row-start-1 row-end-4 flex flex-col items-center justify-center rounded-xl border border-white/15 bg-white/5 p-4 text-center text-white">
                      <Logo light />
                      <div className="mt-5 font-display text-4xl font-extrabold">2,746</div>
                      <div className="text-[10px] font-extrabold tracking-[.16em]">LOCAL HOMES</div>
                      <div className="mt-4 rounded-full bg-[#FF6B35] px-3 py-1 text-[9px] font-extrabold">SAVE THIS CARD</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass absolute -bottom-7 -left-5 rounded-2xl border border-white p-4 shadow-lg">
                <div className="text-xs font-bold text-slate-500">Starting at</div>
                <div className="font-display text-2xl font-extrabold text-[#0D2340]">$200</div>
                <div className="text-[11px] font-semibold text-[#0A9EA6]">per edition</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0D2340] text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-7 lg:grid-cols-4 lg:px-8">
            {[
              ['2,746','planned households'],
              ['16','advertising spots'],
              ['1','business per industry'],
              ['$200','standard placement'],
            ].map(([a,b]) => (
              <div key={b} className="text-center">
                <div className="font-display text-3xl font-extrabold">{a}</div>
                <div className="mt-1 text-xs font-semibold text-slate-300">{b}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-xs font-extrabold uppercase tracking-[.16em] text-[#0A9EA6]">Simple process</div>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#0D2340] sm:text-5xl">From reservation to mailbox in four steps.</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                ['01','Reserve','Choose your industry and placement before a competitor takes the category.'],
                ['02','Submit','Send your logo, contact details, offer, and QR-code destination.'],
                ['03','Approve','Review your professionally designed ad proof before printing.'],
                ['04','Distribute','The guide is printed and mailed to selected residential routes.'],
              ].map(([n,t,d]) => (
                <article key={n} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0A9EA6] text-sm font-extrabold text-white">{n}</div>
                  <h3 className="mt-6 font-display text-xl font-extrabold text-[#0D2340]">{t}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-[.16em] text-[#0A9EA6]">Why LocalReach</div>
                <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#0D2340] sm:text-5xl">A simpler way for local businesses to get direct-mail exposure.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Instead of one business carrying the full cost of design, printing, and postage, participating businesses share the mail piece while keeping their own dedicated space.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [<MailIcon/>,'Targeted delivery','Selected residential carrier routes instead of broad, unfocused advertising.'],
                  [<HomeIcon/>,'Industry exclusivity','One business per category per edition to avoid direct competitors on the same card.'],
                  [<BrushIcon/>,'Design included','Your ad is built around a clear offer, strong hierarchy, and fast response options.'],
                  [<ChartIcon/>,'Measurable response','QR codes and offer codes can help advertisers track scans and redemptions.'],
                ].map(([ic,t,d]) => (
                  <div key={t} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <Icon>{ic}</Icon>
                    <h3 className="mt-5 font-display text-lg font-extrabold text-[#0D2340]">{t}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-extrabold uppercase tracking-[.16em] text-[#0A9EA6]">Advertising options</div>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#0D2340] sm:text-5xl">Choose the visibility that fits your campaign.</h2>
              <p className="mt-5 text-slate-600">Eight business spots on the front and eight on the back. Premium placements are intentionally larger and more visible.</p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {plans.map(plan => (
                <article key={plan.name} className={`relative rounded-[28px] border-2 ${plan.accent} bg-white p-8 shadow-sm ${plan.featured ? 'lg:-translate-y-3 lg:shadow-soft' : ''}`}>
                  {plan.featured && <div className="absolute right-5 top-5 rounded-full bg-[#0A9EA6] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.12em] text-white">Most visible</div>}
                  <div className="text-xs font-extrabold uppercase tracking-[.14em] text-[#0A9EA6]">{plan.name}</div>
                  <div className="mt-3 font-display text-5xl font-extrabold text-[#0D2340]">{plan.price}</div>
                  <p className="mt-3 text-sm font-semibold text-slate-500">{plan.desc}</p>
                  <ul className="mt-7 space-y-3">
                    {plan.features.map(f => (
                      <li key={f} className="flex gap-3 text-sm text-slate-700">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-50 text-[#0A9EA6]"><CheckIcon/></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => choosePlan(plan.name)} className={`${plan.featured ? 'bg-[#FF6B35] text-white shadow-orange-200' : 'border-2 border-[#0A9EA6] bg-white text-[#0D2340]'} mt-8 w-full rounded-xl px-5 py-3.5 text-sm font-extrabold shadow-lg transition hover:-translate-y-0.5`}>
                    Choose {plan.name}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="coverage" className="overflow-hidden bg-[#0D2340] py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-[.16em] text-cyan-300">Targeted reach</div>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Selected Galveston residential routes.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                The founding edition is planned for three higher-income USPS carrier routes totaling approximately 2,746 residential addresses.
              </p>
              <p className="mt-4 text-sm text-slate-400">Final route counts, postage, and mailing date are confirmed before printing.</p>
            </div>
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-2xl">
              <div className="absolute inset-0 opacity-30 grid-fade" />
              <div className="relative min-h-[330px] rounded-2xl bg-gradient-to-br from-slate-100 to-cyan-50 p-5 text-[#0D2340]">
                <div className="flex items-center gap-3">
                  <Icon><PinIcon/></Icon>
                  <div>
                    <div className="font-display text-lg font-extrabold">Galveston, Texas</div>
                    <div className="text-xs font-semibold text-slate-500">Planned high-income carrier-route cluster</div>
                  </div>
                </div>
                <svg viewBox="0 0 620 280" className="mt-5 w-full">
                  <path d="M34 198c72-42 104-57 154-49 61 10 90-31 143-41 69-14 117 18 168-18 34-24 54-21 87-30" fill="none" stroke="#9FD8DD" strokeWidth="42" strokeLinecap="round" opacity=".45"/>
                  <path d="M28 204c95-9 129-34 170-19 67 24 94-8 152-13 72-7 102 8 154-10 29-10 52-7 84 2" fill="none" stroke="#0A9EA6" strokeWidth="3" strokeDasharray="8 8" opacity=".75"/>
                  <circle cx="180" cy="170" r="14" fill="#FF6B35"/><circle cx="326" cy="160" r="14" fill="#FF6B35"/><circle cx="478" cy="139" r="14" fill="#FF6B35"/>
                  <circle cx="180" cy="170" r="26" fill="#FF6B35" opacity=".12"/><circle cx="326" cy="160" r="26" fill="#FF6B35" opacity=".12"/><circle cx="478" cy="139" r="26" fill="#FF6B35" opacity=".12"/>
                  <text x="154" y="222" fill="#0D2340" fontSize="14" fontWeight="700">Route 1</text>
                  <text x="301" y="210" fill="#0D2340" fontSize="14" fontWeight="700">Route 2</text>
                  <text x="452" y="191" fill="#0D2340" fontSize="14" fontWeight="700">Route 3</text>
                </svg>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
                  <div className="rounded-xl bg-white p-3 shadow-sm">Higher income</div>
                  <div className="rounded-xl bg-white p-3 shadow-sm">Residential</div>
                  <div className="rounded-xl bg-white p-3 shadow-sm">Compact reach</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="rounded-[34px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-[.16em] text-[#0A9EA6]">Campaign reporting</div>
                  <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#0D2340]">Give advertisers something tangible after the mail drop.</h2>
                  <p className="mt-5 text-slate-600">Future campaign reports can include final household count, distribution date, QR scans, offer-code redemptions, and a renewal recommendation.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ['2,746','homes mailed'],
                    ['3','selected routes'],
                    ['QR','scan tracking'],
                    ['Next','renewal offer'],
                  ].map(([a,b]) => (
                    <div key={b} className="rounded-2xl border border-slate-200 bg-white p-5">
                      <div className="font-display text-2xl font-extrabold text-[#0D2340]">{a}</div>
                      <div className="mt-1 text-xs font-semibold text-slate-500">{b}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reserve" className="bg-slate-50 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-[.16em] text-[#0A9EA6]">Founding edition</div>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#0D2340] sm:text-5xl">Reserve your advertising spot.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Submit your information. LocalReach Media confirms category availability before payment so two competing businesses do not reserve the same industry.</p>
              <div className="mt-8 rounded-3xl border border-teal-100 bg-white p-6 shadow-sm">
                <div className="font-display text-lg font-extrabold text-[#0D2340]">Selected placement</div>
                <div className="mt-1 text-2xl font-extrabold text-[#0A9EA6]">{selectedPlan}</div>
                <p className="mt-3 text-sm text-slate-500">You can change the package in the form before submitting.</p>
              </div>
            </div>

            <form onSubmit={submitForm} className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
              {submitted ? (
                <div className="grid min-h-[420px] place-items-center text-center">
                  <div>
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-teal-50 text-[#0A9EA6]"><CheckIcon/></div>
                    <h3 className="mt-5 font-display text-2xl font-extrabold text-[#0D2340]">Form design is ready.</h3>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
                      This demo does not send submissions yet. Connect the form to Formspree, Tally, Jotform, or your preferred backend before accepting reservations.
                    </p>
                    <button type="button" onClick={() => setSubmitted(false)} className="mt-6 rounded-xl border-2 border-[#0A9EA6] px-5 py-3 text-sm font-extrabold text-[#0D2340]">Back to form</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm font-bold text-slate-700">Business name<input required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0A9EA6]" /></label>
                    <label className="text-sm font-bold text-slate-700">Contact name<input required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0A9EA6]" /></label>
                    <label className="text-sm font-bold text-slate-700">Email<input required type="email" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0A9EA6]" /></label>
                    <label className="text-sm font-bold text-slate-700">Phone<input required type="tel" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0A9EA6]" /></label>
                    <label className="text-sm font-bold text-slate-700">Industry / category<input required placeholder="HVAC, roofing, dental..." className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0A9EA6]" /></label>
                    <label className="text-sm font-bold text-slate-700">Placement
                      <select value={selectedPlan} onChange={e => setSelectedPlan(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#0A9EA6]">
                        <option>Standard</option><option>Premium</option><option>Featured</option>
                      </select>
                    </label>
                  </div>
                  <label className="mt-4 block text-sm font-bold text-slate-700">Promotional offer<textarea rows="3" placeholder="$50 off your first service" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0A9EA6]" /></label>
                  <label className="mt-4 block text-sm font-bold text-slate-700">Website or booking link<input type="url" placeholder="https://" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0A9EA6]" /></label>
                  <label className="mt-4 block text-sm font-bold text-slate-700">Upload logo
                    <div className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-4">
                      <span className="text-[#0A9EA6]"><UploadIcon/></span>
                      <span className="text-sm font-semibold text-slate-600">{logoName || 'Choose PNG, JPG, SVG, or PDF'}</span>
                      <input type="file" accept=".png,.jpg,.jpeg,.svg,.pdf" onChange={e => setLogoName(e.target.files?.[0]?.name || '')} className="hidden" />
                    </div>
                  </label>
                  <button className="mt-6 w-full rounded-xl bg-[#FF6B35] px-5 py-4 text-sm font-extrabold text-white shadow-xl shadow-orange-200 transition hover:-translate-y-0.5">Submit Reservation Request</button>
                  <p className="mt-3 text-xs leading-5 text-slate-500">Submitting does not reserve your category. Placement is confirmed after availability review and payment.</p>
                </>
              )}
            </form>
          </div>
        </section>

        <section id="faq" className="py-24">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="text-xs font-extrabold uppercase tracking-[.16em] text-[#0A9EA6]">Questions</div>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#0D2340] sm:text-5xl">Frequently asked questions.</h2>
            <div className="mt-10 space-y-3">
              {[
                ['Can a competing business appear on the same postcard?','No. Each edition is designed around one business per industry category.'],
                ['Is ad design included?','Yes. LocalReach Media creates the ad using the materials and offer supplied by the advertiser.'],
                ['When is payment due?','After category availability and placement are confirmed. The spot is not reserved until payment is received.'],
                ['How do premium spots fit?','Premium placements are larger and placed beside the central LocalReach panel or in high-visibility corners. The featured ad is the largest single placement on the back.'],
                ['Are the 2,746 homes guaranteed?','The current campaign is planned around approximately 2,746 residential addresses. Final USPS route counts are confirmed before printing.'],
              ].map(([q,a]) => (
                <details key={q} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer list-none font-display font-extrabold text-[#0D2340]">{q}</summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#07182c] py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3 lg:px-8">
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">Connecting local businesses with local homes through targeted, affordable direct-mail campaigns.</p>
          </div>
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[.16em] text-slate-400">Quick links</div>
            <div className="mt-4 grid gap-2 text-sm font-semibold text-slate-300">
              <a href="#how">How It Works</a><a href="#pricing">Pricing</a><a href="#coverage">Coverage</a><a href="#reserve">Reserve a Spot</a>
            </div>
          </div>
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[.16em] text-slate-400">Contact</div>
            <a className="mt-4 block text-sm font-semibold text-white" href="mailto:localreachmedia@gmail.com">localreachmedia@gmail.com</a>
            <p className="mt-2 text-sm text-slate-400">Galveston, Texas</p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 text-xs text-slate-500 lg:px-8">
          © {year} LocalReach Media. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
