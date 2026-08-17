"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import PurchaseButton from "@/app/components/PurchaseButton";

const categories = ["All", "Starters", "Main Courses", "Desserts", "Drinks"] as const;
type Category = (typeof categories)[number];
type MenuCategory = Exclude<Category, "All">;

type Dish = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  dietary: string[];
  price: number;
  featured?: boolean;
};

const dishes: Dish[] = [
  { id: "burrata", category: "Starters", name: "Puglian Burrata", description: "Heritage tomatoes, basil oil, sourdough crumb", dietary: ["V"], price: 14, featured: true },
  { id: "scallops", category: "Starters", name: "Seared Scallops", description: "Cauliflower velouté, apple, brown butter", dietary: ["GF"], price: 18 },
  { id: "beetroot", category: "Starters", name: "Ember-Roasted Beetroot", description: "Goat cheese, walnut, bitter leaves", dietary: ["V", "GF"], price: 12 },
  { id: "tartare", category: "Starters", name: "Beef Tartare", description: "Caper, smoked yolk, grilled country bread", dietary: ["DF"], price: 17 },
  { id: "tagliolini", category: "Main Courses", name: "Truffle Tagliolini", description: "Fresh pasta, black truffle, aged parmesan", dietary: ["V"], price: 28, featured: true },
  { id: "seabass", category: "Main Courses", name: "Wild Sea Bass", description: "Fennel, mussels, citrus beurre blanc", dietary: ["GF"], price: 34 },
  { id: "beef", category: "Main Courses", name: "Dry-Aged Beef Fillet", description: "Potato pavé, shallot, red wine jus", dietary: ["GF"], price: 39 },
  { id: "cauliflower", category: "Main Courses", name: "Roasted Cauliflower", description: "White bean, preserved lemon, almond", dietary: ["VG", "GF"], price: 24 },
  { id: "chocolate", category: "Desserts", name: "Dark Chocolate Crémeux", description: "Sea salt caramel, cocoa nib, crème fraîche", dietary: ["V", "GF"], price: 11 },
  { id: "pear", category: "Desserts", name: "Poached Pear", description: "Vanilla, hazelnut praline, oat cream", dietary: ["VG", "GF"], price: 10 },
  { id: "tart", category: "Desserts", name: "Lemon Verbena Tart", description: "Cultured cream, seasonal berries", dietary: ["V"], price: 12 },
  { id: "spritz", category: "Drinks", name: "Maison Spritz", description: "Bergamot, sparkling wine, rosemary", dietary: ["A"], price: 12 },
  { id: "cuvée", category: "Drinks", name: "Crémant d’Alsace", description: "Maison-selected brut, served by the glass", dietary: ["A"], price: 11 },
  { id: "garden", category: "Drinks", name: "Garden No. 3", description: "Cucumber, elderflower, verjus, mint", dietary: ["0%"], price: 9 },
  { id: "espresso", category: "Drinks", name: "Single-Origin Espresso", description: "Rotating European roaster selection", dietary: ["0%"], price: 4 },
];

const dietaryKey = [
  ["V", "Vegetarian"], ["VG", "Vegan"], ["GF", "Gluten-free"], ["DF", "Dairy-free"], ["A", "Contains alcohol"], ["0%", "Alcohol-free"],
];

const reviews = [
  { quote: "The menu felt considered from the first course to the last. Warm service without any ceremony.", name: "Elena M.", occasion: "Anniversary dinner" },
  { quote: "Beautiful room, excellent pacing, and a vegetarian main that was treated as a centrepiece.", name: "Thomas R.", occasion: "Friday dinner" },
  { quote: "The reservation notes were remembered, and the whole evening felt genuinely personal.", name: "Sofia L.", occasion: "Birthday gathering" },
];

const integrations = [
  { title: "Online ordering", description: "A structured basket and collection workflow, ready to connect to an order platform.", status: "Demo basket" },
  { title: "WhatsApp", description: "Pre-filled guest enquiries for private dining, group bookings, or accessibility needs.", status: "Optional connection" },
  { title: "Reservations", description: "Availability, guest details, and confirmation flow designed for a booking provider.", status: "Demo request" },
  { title: "Payments", description: "A future checkout hand-off for deposits, events, or collection orders.", status: "Not active" },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(value);
}

export default function MaisonExperience() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderMessage, setOrderMessage] = useState("");
  const [reservationMessage, setReservationMessage] = useState("");

  const filteredDishes = activeCategory === "All" ? dishes : dishes.filter((dish) => dish.category === activeCategory);
  const orderItems = useMemo(() => dishes.filter((dish) => cart[dish.id]), [cart]);
  const itemCount = orderItems.reduce((total, dish) => total + cart[dish.id], 0);
  const orderTotal = orderItems.reduce((total, dish) => total + dish.price * cart[dish.id], 0);

  function changeQuantity(id: string, change: number) {
    setCart((current) => {
      const quantity = Math.max(0, (current[id] ?? 0) + change);
      const next = { ...current };
      if (quantity === 0) delete next[id];
      else next[id] = quantity;
      return next;
    });
    setOrderMessage("");
  }

  function submitOrder() {
    if (!itemCount) {
      setOrderMessage("Choose at least one dish to preview an order.");
      return;
    }
    setOrderMessage("Demo order created. No payment was taken and nothing was sent to the restaurant.");
  }

  function submitReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setReservationMessage("Demo reservation received. No table has been booked and no personal information was transmitted.");
    form.reset();
  }

  const navItems = [["Home", "#top"], ["Menu", "#menu"], ["Our Story", "#story"], ["Reservations", "#reserve"], ["Contact", "#contact"]];

  return (
    <main className="min-h-screen bg-[#f4ecdd] text-[#2a1b14] selection:bg-[#9c3f2a] selection:text-white">
      <div className="bg-[#40251c] px-5 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f3d5b5]">Concept project · Ordering, payments, and reservations are demonstrations only</div>

      <header className="sticky top-0 z-50 border-b border-[#40251c]/10 bg-[#f4ecdd]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Maison home">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#40251c]/25 font-serif text-xl italic">M</span>
            <span><span className="block font-serif text-xl tracking-wide">Maison</span><span className="block text-[9px] uppercase tracking-[0.24em] text-[#7f695d]">Restaurant website concept</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm lg:flex" aria-label="Restaurant navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} className="rounded-sm hover:text-[#a34630] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a34630]">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#reserve" className="hidden rounded-full bg-[#9c3f2a] px-5 py-3 text-sm font-semibold text-white hover:bg-[#793021] sm:inline-flex">Reserve a table</a>
            <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="maison-mobile-nav" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#40251c]/20 lg:hidden"><span className="sr-only">Toggle navigation</span><span aria-hidden="true">{menuOpen ? "×" : "☰"}</span></button>
          </div>
        </div>
        {menuOpen && <nav id="maison-mobile-nav" className="border-t border-[#40251c]/10 px-5 py-4 lg:hidden" aria-label="Mobile restaurant navigation">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-[#40251c]/10 py-4 text-lg last:border-0">{label}</a>)}</nav>}
      </header>

      <section id="top" className="relative overflow-hidden px-5 py-16 sm:px-7 sm:py-24 lg:px-10 lg:py-28">
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#c36a3e]/20 blur-[90px]" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9c3f2a]">Season-led European cooking</p>
            <h1 className="mt-7 max-w-3xl font-serif text-6xl leading-[0.9] tracking-[-0.045em] sm:text-8xl lg:text-[104px]">An evening worth <span className="italic text-[#9c3f2a]">remembering.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#735f53]">Maison is an intimate neighbourhood dining room built around thoughtful produce, warm hospitality, and the pleasure of taking your time.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#menu" className="rounded-full bg-[#40251c] px-7 py-4 text-center text-sm font-semibold text-white hover:-translate-y-0.5">View the menu</a><a href="#reserve" className="rounded-full border border-[#40251c]/30 px-7 py-4 text-center text-sm font-semibold hover:bg-white/50">Reserve a table</a></div>
          </div>
          <div className="relative min-h-[480px] overflow-hidden rounded-[48px_48px_180px_48px] bg-[#6e2e23] p-7 shadow-[0_40px_100px_rgba(73,37,25,0.22)] sm:min-h-[620px] sm:p-10" aria-label="Artistic presentation of Maison's seasonal dining experience">
            <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_20%_15%,#efbd82_0,transparent_26%),radial-gradient(circle_at_80%_70%,#32170f_0,transparent_38%)]" />
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-[22px] border-[#eee1c9] bg-[radial-gradient(circle_at_40%_38%,#e9c06e_0_7%,#5f772b_8%_15%,#bc5a32_16%_23%,#e8d4a8_24%_44%,#d6c095_45%_49%,#f3ead8_50%)] shadow-2xl sm:h-96 sm:w-96" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between text-[#f8ead4]"><div className="flex justify-between text-[10px] uppercase tracking-[0.25em]"><span>Autumn menu</span><span>Brussels · 2026</span></div><div className="ml-auto max-w-[210px] rounded-3xl border border-white/15 bg-black/20 p-5 backdrop-blur-md"><p className="font-serif text-2xl italic">Chef’s choice</p><p className="mt-2 text-xs leading-5 text-white/65">Roasted cauliflower · preserved lemon · almond</p></div></div>
          </div>
        </div>
      </section>

      <section id="story" className="bg-[#40251c] px-5 py-24 text-[#f7ead8] sm:px-7 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">
          <div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d9936f]">The Maison story</p><h2 className="mt-7 max-w-xl font-serif text-5xl leading-[1.02] sm:text-7xl">Rooted in the season, made for the table.</h2></div>
          <div className="lg:pt-16"><p className="text-lg leading-8 text-[#d6c4b8]">We opened Maison around a simple idea: source carefully, cook with restraint, and make every guest feel expected. The menu follows nearby farms and coastlines rather than a fixed formula.</p><p className="mt-6 leading-7 text-[#aa9184]">The room is relaxed, the plates are precise, and the best evenings are allowed to unfold without being rushed.</p><div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-7"><div><p className="font-serif text-4xl">18</p><p className="mt-1 text-xs uppercase tracking-wider text-[#aa9184]">Seasonal dishes</p></div><div><p className="font-serif text-4xl">34</p><p className="mt-1 text-xs uppercase tracking-wider text-[#aa9184]">Dining room seats</p></div></div></div>
        </div>
      </section>

      <section id="menu" className="scroll-mt-24 px-5 py-24 sm:px-7 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9c3f2a]">À la carte</p><h2 className="mt-5 font-serif text-5xl sm:text-7xl">Today at Maison.</h2></div><p className="max-w-md leading-7 text-[#735f53]">The catalogue below demonstrates category filters and a collection-order basket. Availability and ordering are not live.</p></div>
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter menu by category">{categories.map((category) => <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold ${activeCategory === category ? "bg-[#40251c] text-white" : "border border-[#40251c]/15 bg-white/30 hover:bg-white/70"}`}>{category}</button>)}</div>

          <div className="mt-12 grid gap-10 xl:grid-cols-[1fr_360px]">
            <div className="grid items-stretch gap-4 sm:gap-5 md:grid-cols-2">
              {filteredDishes.map((dish) => (
                <article
                  key={dish.id}
                  className="group flex h-full min-h-[250px] flex-col rounded-[26px] border border-[#6f4938]/12 bg-[#fbf5e9]/75 p-5 shadow-[0_8px_28px_rgba(70,39,27,0.04)] transition-[transform,background-color,border-color,box-shadow] duration-300 hover:[transform:translateY(-4px)] hover:border-[#9c3f2a]/20 hover:bg-[#fffaf1] hover:shadow-[0_18px_45px_rgba(70,39,27,0.10)] focus-within:border-[#9c3f2a]/35 focus-within:bg-[#fffaf1] focus-within:shadow-[0_18px_45px_rgba(70,39,27,0.10)] motion-reduce:hover:[transform:none] motion-reduce:transition-none sm:min-h-[270px] sm:p-6"
                >
                  <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-x-5 gap-y-3 sm:gap-x-7">
                    <div className="min-w-0">
                      <div className="flex min-w-0 flex-wrap items-center gap-x-2.5 gap-y-2">
                        <h3 className="min-w-0 break-words font-serif text-[1.55rem] leading-tight sm:text-[1.7rem]">
                          {dish.name}
                        </h3>
                        {dish.featured && (
                          <span className="shrink-0 rounded-full border border-[#b88632]/15 bg-[#d7a451]/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#845c17]">
                            Maison favourite
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="invisible shrink-0 pt-1 text-sm font-semibold tabular-nums text-[#9c3f2a] sm:text-base" aria-hidden="true">
                      {formatPrice(dish.price)}
                    </p>
                    <p className="col-span-2 max-w-[42ch] text-sm leading-6 text-[#786459]">
                      {dish.description}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-col gap-4 pt-7 min-[420px]:flex-row min-[420px]:items-end min-[420px]:justify-between">
                    <div className="flex min-h-7 flex-wrap items-center gap-1.5">
                      {dish.dietary.map((label) => (
                        <span
                          key={label}
                          title={dietaryKey.find(([key]) => key === label)?.[1]}
                          className="rounded-full border border-[#40251c]/15 bg-white/30 px-2.5 py-1 text-[10px] font-semibold"
                        >
                          {label}
                        </span>
                      ))}
                    </div>

                    {cart[dish.id] ? (
                      <div className="flex w-fit shrink-0 items-center rounded-full border border-[#40251c]/20 bg-white/65 p-0.5 shadow-sm">
                        <button
                          type="button"
                          onClick={() => changeQuantity(dish.id, -1)}
                          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f4e6d1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9c3f2a]"
                          aria-label={`Remove one ${dish.name}`}
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-semibold tabular-nums" aria-live="polite">
                          {cart[dish.id]}
                        </span>
                        <button
                          type="button"
                          onClick={() => changeQuantity(dish.id, 1)}
                          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f4e6d1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9c3f2a]"
                          aria-label={`Add another ${dish.name}`}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => changeQuantity(dish.id, 1)}
                        className="w-full shrink-0 rounded-full bg-[#9c3f2a] px-5 py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#793021] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#9c3f2a] min-[420px]:w-auto"
                        aria-label={`Add ${dish.name} to demo order`}
                      >
                        Add to order
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-[28px] bg-[#eadcc7] p-6 xl:sticky xl:top-28" aria-labelledby="order-summary-title"><div className="flex items-center justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9c3f2a]">Collection demo</p><h3 id="order-summary-title" className="mt-2 font-serif text-3xl">Your order</h3></div><span className="flex h-10 min-w-10 items-center justify-center rounded-full bg-[#40251c] px-3 text-sm font-semibold text-white">{itemCount}</span></div>{orderItems.length ? <div className="mt-6 space-y-4">{orderItems.map((dish) => <div key={dish.id} className="flex justify-between gap-4 border-b border-[#40251c]/10 pb-4 text-sm"><div><p className="font-semibold">{dish.name}</p><p className="mt-1 text-[#786459]">Qty {cart[dish.id]}</p></div><p className="invisible" aria-hidden="true">{formatPrice(dish.price * cart[dish.id])}</p></div>)}</div> : <p className="mt-7 rounded-2xl border border-dashed border-[#40251c]/20 p-5 text-sm leading-6 text-[#786459]">Your demo order is empty. Add dishes from the menu to preview the ordering flow.</p>}<div className="mt-6 flex justify-between border-t border-[#40251c]/15 pt-5 font-semibold"><span>Demo total</span><span className="invisible" aria-hidden="true">{formatPrice(orderTotal)}</span></div><button type="button" onClick={submitOrder} className="mt-6 w-full rounded-full bg-[#40251c] px-5 py-4 text-sm font-semibold text-white hover:bg-[#9c3f2a]">Review demo order</button><p className="mt-3 text-center text-[11px] text-[#806b5f]">No payment or order will be processed.</p>{orderMessage && <p role="status" className="mt-4 rounded-2xl bg-white/60 p-4 text-sm leading-6">{orderMessage}</p>}</aside>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#40251c]/15 pt-5 text-[10px] uppercase tracking-wider text-[#786459]">{dietaryKey.map(([key, label]) => <span key={key}><strong className="text-[#40251c]">{key}</strong> {label}</span>)}</div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#c7774f] px-5 py-24 text-[#321b13] sm:px-7 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative min-h-[500px] overflow-hidden rounded-[160px_32px_32px_32px] bg-[#2d4a35]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(239,197,129,0.55),transparent_18%),linear-gradient(145deg,transparent_35%,rgba(0,0,0,0.35))]" /><div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-[#f4ecdd]/90 p-6 backdrop-blur"><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9c3f2a]">In the kitchen</p><p className="mt-2 font-serif text-3xl">Chef Amélie Laurent</p></div></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.3em]">The chef</p><h2 className="mt-6 font-serif text-5xl leading-[1.02] sm:text-7xl">Technique in service of the ingredient.</h2><p className="mt-7 max-w-xl text-lg leading-8 text-[#513228]">Amélie’s cooking draws on classical European technique without losing sight of generosity. Each plate begins with what is best that week, then removes anything that does not need to be there.</p><blockquote className="mt-10 border-l border-[#321b13]/30 pl-6 font-serif text-2xl italic leading-9">“A memorable plate should feel inevitable, not complicated.”</blockquote></div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-7 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9c3f2a]">The atmosphere</p><h2 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl">Soft light. Open kitchen. Unhurried evenings.</h2><p className="mt-6 leading-7 text-[#735f53]">Natural plaster, dark timber, linen, and the quiet movement of the pass create a room that feels intimate without being formal.</p></div><div className="grid min-h-[520px] grid-cols-2 gap-4"><div className="rounded-[32px_100px_32px_32px] bg-[linear-gradient(155deg,#7b4030,#d49a69)]" /><div className="grid gap-4"><div className="rounded-[32px] bg-[radial-gradient(circle_at_60%_30%,#edca8a,transparent_18%),linear-gradient(145deg,#273b2c,#6f774f)]" /><div className="rounded-[32px_32px_100px_32px] bg-[linear-gradient(145deg,#d7c2a1,#694536)]" /></div></div></div></div></section>

      <section className="bg-[#e8d7bd] px-5 py-24 sm:px-7 lg:px-10"><div className="mx-auto max-w-7xl"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9c3f2a]">Guest notes</p><div className="mt-10 grid gap-5 lg:grid-cols-3">{reviews.map((review) => <figure key={review.name} className="flex min-h-[300px] flex-col rounded-[28px] bg-[#f5ecdd] p-7"><div className="text-[#b8783f]" aria-label="5 out of 5 stars">★★★★★</div><blockquote className="mt-8 font-serif text-2xl leading-9">“{review.quote}”</blockquote><figcaption className="mt-auto pt-8 text-sm"><span className="font-semibold">{review.name}</span><span className="ml-2 text-[#806b5f]">· {review.occasion}</span></figcaption></figure>)}</div></div></section>

      <section id="reserve" className="scroll-mt-24 bg-[#40251c] px-5 py-24 text-[#f7ead8] sm:px-7 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d9936f]">Demo reservation</p><h2 className="mt-6 font-serif text-5xl leading-tight sm:text-7xl">Plan an evening at Maison.</h2><p className="mt-6 max-w-md leading-7 text-[#c7b0a4]">This form demonstrates a restaurant reservation journey. It does not check availability, transmit your details, or book a real table.</p><div className="mt-10 rounded-3xl border border-white/10 p-6 text-sm leading-7 text-[#c7b0a4]"><p className="font-semibold text-white">What this demo collects</p><p className="mt-3">A preferred date and time, guest count, contact details, and an optional note for dietary needs or special occasions.</p></div></div>
          <form onSubmit={submitReservation} className="rounded-[32px] bg-[#f4ecdd] p-6 text-[#2a1b14] sm:p-9" aria-labelledby="reservation-form-title"><div className="flex items-start justify-between gap-5"><div><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9c3f2a]">Table request</p><h3 id="reservation-form-title" className="mt-2 font-serif text-4xl">Your details</h3></div><span className="rounded-full bg-[#9c3f2a]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#9c3f2a]">Demo only</span></div><div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold">Date<input required name="date" type="date" className="mt-2 w-full rounded-2xl border border-[#40251c]/15 bg-white/50 px-4 py-3.5 font-normal outline-none focus:border-[#9c3f2a] focus:ring-2 focus:ring-[#9c3f2a]/20" /></label>
            <label className="text-sm font-semibold">Time<select required name="time" defaultValue="" className="mt-2 w-full rounded-2xl border border-[#40251c]/15 bg-white/50 px-4 py-3.5 font-normal outline-none focus:border-[#9c3f2a] focus:ring-2 focus:ring-[#9c3f2a]/20"><option value="" disabled>Select time</option><option>18:00</option><option>18:45</option><option>19:30</option><option>20:15</option><option>21:00</option></select></label>
            <label className="text-sm font-semibold">Guests<select required name="guests" defaultValue="2" className="mt-2 w-full rounded-2xl border border-[#40251c]/15 bg-white/50 px-4 py-3.5 font-normal outline-none focus:border-[#9c3f2a] focus:ring-2 focus:ring-[#9c3f2a]/20">{[1,2,3,4,5,6,7,8].map((count) => <option key={count} value={count}>{count} {count === 1 ? "guest" : "guests"}</option>)}</select></label>
            <label className="text-sm font-semibold">Name<input required autoComplete="name" name="name" type="text" className="mt-2 w-full rounded-2xl border border-[#40251c]/15 bg-white/50 px-4 py-3.5 font-normal outline-none focus:border-[#9c3f2a] focus:ring-2 focus:ring-[#9c3f2a]/20" /></label>
            <label className="text-sm font-semibold sm:col-span-2">Email<input required autoComplete="email" name="email" type="email" className="mt-2 w-full rounded-2xl border border-[#40251c]/15 bg-white/50 px-4 py-3.5 font-normal outline-none focus:border-[#9c3f2a] focus:ring-2 focus:ring-[#9c3f2a]/20" /></label>
            <label className="text-sm font-semibold sm:col-span-2">Optional note<textarea name="note" rows={4} placeholder="Dietary needs, accessibility, or a special occasion" className="mt-2 w-full resize-y rounded-2xl border border-[#40251c]/15 bg-white/50 px-4 py-3.5 font-normal outline-none placeholder:text-[#806b5f]/60 focus:border-[#9c3f2a] focus:ring-2 focus:ring-[#9c3f2a]/20" /></label>
          </div><button type="submit" className="mt-6 w-full rounded-full bg-[#9c3f2a] px-6 py-4 font-semibold text-white hover:bg-[#793021] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9c3f2a]">Request a demo reservation</button>{reservationMessage && <p role="status" aria-live="polite" className="mt-5 rounded-2xl bg-[#2d6b4d]/10 p-4 text-sm leading-6 text-[#22533c]">{reservationMessage}</p>}</form>
        </div></section>

      <section id="contact" className="scroll-mt-24 px-5 py-24 sm:px-7 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9c3f2a]">Contact & location</p><h2 className="mt-6 font-serif text-5xl sm:text-6xl">Find Maison in central Brussels.</h2><address className="mt-8 space-y-3 not-italic leading-7 text-[#735f53]"><p>18 Rue du Marché<br />1000 Brussels, Belgium</p><p><a href="tel:+3225550148" className="hover:text-[#9c3f2a]">+32 2 555 01 48</a><br /><a href="mailto:bonjour@maison.example" className="hover:text-[#9c3f2a]">bonjour@maison.example</a></p></address><div className="mt-8 border-t border-[#40251c]/15 pt-6 text-sm leading-7 text-[#735f53]"><p className="font-semibold text-[#2a1b14]">Opening hours</p><div className="mt-2 flex justify-between gap-4"><span>Tuesday–Thursday</span><span>18:00–23:00</span></div><div className="flex justify-between gap-4"><span>Friday–Saturday</span><span>17:30–00:00</span></div><div className="flex justify-between gap-4"><span>Sunday–Monday</span><span>Closed</span></div></div><p className="mt-7 text-xs leading-5 text-[#806b5f]">Concept project details — Maison is not a real restaurant.</p></div><div className="relative min-h-[430px] overflow-hidden rounded-[36px] border border-[#40251c]/10 bg-[#dfd0b9]" role="img" aria-label="Map placeholder showing the Maison concept location in central Brussels"><div className="absolute inset-0 opacity-45 [background-image:linear-gradient(28deg,transparent_45%,#b9a58b_46%,#b9a58b_49%,transparent_50%),linear-gradient(98deg,transparent_45%,#c5b49c_46%,#c5b49c_49%,transparent_50%)] [background-size:110px_90px]" /><div className="absolute left-[56%] top-[46%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"><span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#9c3f2a] font-serif text-2xl text-white shadow-xl">M</span><span className="mt-3 rounded-full bg-[#f4ecdd] px-4 py-2 text-xs font-semibold shadow">Maison · Concept location</span></div></div></div></section>

      <section className="bg-[#eadcc7] px-5 py-24 sm:px-7 lg:px-10"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9c3f2a]">Optional integrations</p><h2 className="mt-6 font-serif text-5xl sm:text-6xl">A restaurant site that can connect to the way you operate.</h2></div><div className="mt-12 grid gap-4 md:grid-cols-2">{integrations.map((item) => <article key={item.title} className="rounded-[26px] border border-[#40251c]/10 bg-[#f4ecdd] p-6 sm:p-7"><div className="flex items-start justify-between gap-4"><h3 className="font-serif text-2xl">{item.title}</h3><span className="rounded-full bg-[#40251c]/8 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-[#795c4e]">{item.status}</span></div><p className="mt-5 max-w-lg text-sm leading-6 text-[#735f53]">{item.description}</p></article>)}</div></div></section>

      <section className="bg-[#eadcc7] px-5 pb-24 sm:px-7 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-[30px] bg-[#251610] p-7 text-[#f7ead8] sm:flex-row sm:items-center sm:justify-between sm:p-10"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9936f]">A YY Builds portfolio concept</p><h2 className="mt-3 font-serif text-3xl">Want a site like this?</h2><p className="mt-2 text-sm text-[#c7b0a4]">Start a premium website project for your own business.</p></div><PurchaseButton productId="business-website" className="shrink-0">Start a similar project</PurchaseButton></div></section>
      <footer className="bg-[#251610] px-5 py-10 text-[#cdb8aa] sm:px-7 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center"><div><p className="font-serif text-2xl text-white">Maison</p><p className="mt-1 text-xs">Restaurant website concept created by YY Builds.</p></div><div className="flex flex-wrap items-center gap-5 text-sm"><a href="#top" className="hover:text-white">Back to top</a><Link href="/#work" className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white hover:text-[#251610]">Back to YY Builds portfolio →</Link></div></div></footer>
    </main>
  );
}
