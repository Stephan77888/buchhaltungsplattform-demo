const state = {
  activeView: "dashboard",
  receiptFilter: "Alle",
  receipts: [
    { id: "B-1048", party: "DATEV eG", type: "Eingangsrechnung", channel: "E-Mail", amount: 238.00, tax: 19, account: "4950 Rechts- und Beratungskosten", confidence: 96, status: "Bereit" },
    { id: "B-1047", party: "Hetzner Online GmbH", type: "Eingangsrechnung", channel: "API", amount: 84.49, tax: 19, account: "4925 Internetkosten", confidence: 94, status: "Bereit" },
    { id: "B-1046", party: "Aral Tankstelle", type: "Kassenbeleg", channel: "Mobile Fotoerfassung", amount: 67.20, tax: 19, account: "4530 Laufende Kfz-Kosten", confidence: 71, status: "Prüfen" },
    { id: "B-1045", party: "Musterkunde GmbH", type: "Ausgangsrechnung", channel: "Upload", amount: 3213.00, tax: 19, account: "8400 Erlöse 19% USt", confidence: 89, status: "Bereit" },
    { id: "B-1044", party: "Unbekannter Lieferant", type: "Eingangsrechnung", channel: "E-Mail", amount: 412.15, tax: 7, account: "Noch offen", confidence: 42, status: "Klärung" }
  ],
  bank: [
    { date: "19.06.2026", text: "Musterkunde GmbH RG-2026-118", amount: 3213.00, match: "RG-2026-118", status: "Zugeordnet" },
    { date: "18.06.2026", text: "Hetzner Online GmbH", amount: -84.49, match: "B-1047", status: "Zugeordnet" },
    { date: "17.06.2026", text: "FinAPI Kontogebühr", amount: -29.75, match: "Kontierungsvorschlag", status: "Prüfen" },
    { date: "16.06.2026", text: "Barabhebung Kasse", amount: -300.00, match: "Kassenbestand", status: "Prüfen" }
  ],
  invoices: [
    { number: "AN-2026-041", customer: "Nordstern IT GmbH", stage: "Angebot", total: 4800, due: "offen" },
    { number: "AB-2026-033", customer: "Kanzlei Weber", stage: "Auftragsbestätigung", total: 2250, due: "bestätigt" },
    { number: "RG-2026-118", customer: "Musterkunde GmbH", stage: "Rechnung", total: 3213, due: "bezahlt" },
    { number: "MA-2026-012", customer: "Schulte Handel", stage: "Mahnung", total: 980, due: "überfällig" }
  ],
  journal: [
    { no: "J-2026-0128", period: "2026-06", date: "19.06.2026", source: "Beleg B-1048", status: "Gebucht", entry: "4950 an 1600", amount: 238.00, export: "bereit" },
    { no: "J-2026-0127", period: "2026-06", date: "18.06.2026", source: "Beleg B-1047", status: "Gebucht", entry: "4925 an 1200", amount: 84.49, export: "bereit" },
    { no: "J-2026-0126", period: "2026-06", date: "17.06.2026", source: "Bank", status: "Entwurf", entry: "4970 an 1200", amount: 29.75, export: "gesperrt" },
    { no: "J-2026-0125", period: "2026-06", date: "16.06.2026", source: "Rechnung RG-2026-118", status: "Festgeschrieben", entry: "1200 an 8400", amount: 3213.00, export: "exportiert" }
  ],
  opos: [
    { partner: "Musterkunde GmbH", doc: "RG-2026-118", due: "16.06.2026", original: 3213.00, open: 0, dunning: "-", status: "Ausgeglichen" },
    { partner: "Schulte Handel", doc: "RG-2026-109", due: "05.06.2026", original: 980.00, open: 980.00, dunning: "1. Mahnung", status: "Überfällig" },
    { partner: "DATEV eG", doc: "B-1048", due: "29.06.2026", original: 238.00, open: 238.00, dunning: "-", status: "Offen" },
    { partner: "Security Hardware24 GmbH", doc: "B-1039", due: "30.06.2026", original: 2380.00, open: 2380.00, dunning: "-", status: "Offen" }
  ],
  cashbook: [
    { no: "K-2026-019", date: "19.06.2026", text: "Tankquittung", amount: -67.20, balance: 432.80 },
    { no: "K-2026-018", date: "18.06.2026", text: "Büromaterial", amount: -24.90, balance: 500.00 },
    { no: "K-2026-017", date: "16.06.2026", text: "Bareinlage", amount: 300.00, balance: 524.90 }
  ],
  contacts: [
    { name: "Musterkunde GmbH", role: "Kunde", terms: "14 Tage", defaultAccount: "8400 Erlöse 19% USt" },
    { name: "Hetzner Online GmbH", role: "Lieferant", terms: "Lastschrift", defaultAccount: "4925 Internetkosten" },
    { name: "DATEV eG", role: "Lieferant", terms: "10 Tage", defaultAccount: "4950 Beratungskosten" },
    { name: "Nordstern IT GmbH", role: "Kunde", terms: "30 Tage", defaultAccount: "8400 Erlöse 19% USt" }
  ],
  accounts: [
    { number: "1200", name: "Bank", type: "Bank", tax: "-", mapping: "SKR03", active: "Ja" },
    { number: "1600", name: "Verbindlichkeiten", type: "Kreditor", tax: "-", mapping: "SKR03", active: "Ja" },
    { number: "8400", name: "Erlöse 19% USt", type: "Erlös", tax: "USt 19%", mapping: "BU 9", active: "Ja" },
    { number: "4925", name: "Internetkosten", type: "Aufwand", tax: "VSt 19%", mapping: "BU 8", active: "Ja" },
    { number: "1776", name: "Umsatzsteuer 19%", type: "Steuer", tax: "USt 19%", mapping: "DATEV", active: "Ja" }
  ],
  periods: [
    { month: "Januar", status: "Festgeschrieben", bookings: 112, receipts: 0, bank: "100%", vat: "gemeldet" },
    { month: "Februar", status: "Festgeschrieben", bookings: 119, receipts: 0, bank: "100%", vat: "gemeldet" },
    { month: "März", status: "Festgeschrieben", bookings: 127, receipts: 0, bank: "100%", vat: "gemeldet" },
    { month: "April", status: "Soft Lock", bookings: 104, receipts: 1, bank: "98%", vat: "vorbereitet" },
    { month: "Mai", status: "Offen", bookings: 132, receipts: 2, bank: "94%", vat: "prüfen" },
    { month: "Juni", status: "Offen", bookings: 48, receipts: 5, bank: "84%", vat: "nicht vorbereitet" }
  ],
  reports: [
    { month: "Jan", revenue: 18200, expense: 11900 },
    { month: "Feb", revenue: 21400, expense: 13300 },
    { month: "Mrz", revenue: 19850, expense: 12800 },
    { month: "Apr", revenue: 23700, expense: 14250 },
    { month: "Mai", revenue: 26100, expense: 15100 },
    { month: "Jun", revenue: 22400, expense: 13650 }
  ]
};

const views = [
  { id: "dashboard", label: "Arbeitszentrale", icon: "▦", count: 8 },
  { id: "receipts", label: "Belege", icon: "▤", count: 5 },
  { id: "bank", label: "Bankabgleich", icon: "⇄", count: 2 },
  { id: "journal", label: "Buchungsjournal", icon: "¶", count: 4 },
  { id: "opos", label: "OPOS", icon: "◧", count: 3 },
  { id: "invoices", label: "Vorgänge", icon: "§", count: 4 },
  { id: "periods", label: "USt / Perioden", icon: "◷", count: 6 },
  { id: "accounts", label: "Konten & Steuer", icon: "№", count: 5 },
  { id: "reports", label: "Auswertungen", icon: "◫", count: 6 },
  { id: "cashbook", label: "Kassenbuch", icon: "≡", count: 3 },
  { id: "contacts", label: "Stammdaten", icon: "◎", count: 4 },
  { id: "export", label: "DATEV & Prüfung", icon: "⇩", count: 1 }
];

const titles = {
  dashboard: ["Arbeitszentrale", "Was heute geprüft, gebucht und exportiert werden kann"],
  receipts: ["Belegverarbeitung", "OCR, E-Rechnung und Kontierung"],
  bank: ["Bankmodul", "Kontoauszüge und Zahlungsabgleich"],
  journal: ["Buchungsjournal", "Entwürfe, Buchungen und Festschreibung"],
  opos: ["Offene Posten", "Forderungen und Verbindlichkeiten"],
  invoices: ["Rechnungsworkflow", "Angebot bis Mahnung"],
  periods: ["USt / Perioden", "Monatsabschluss und Steuerstatus"],
  accounts: ["Konten & Steuer", "SKR03, Steuerkennzeichen und DATEV-Mapping"],
  cashbook: ["GoBD-Kassenbuch", "Chronologische Bargeldbewegungen"],
  reports: ["Reporting", "EÜR, BWA und Umsatzsteuer"],
  contacts: ["Stammdaten", "Kunden, Lieferanten und Artikel"],
  export: ["Schnittstellen", "DATEV- und GoBD-Export"]
};

const money = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

function qs(selector) {
  return document.querySelector(selector);
}

function formatMoney(value) {
  return money.format(value);
}

function badgeClass(status) {
  if (["Bereit", "Zugeordnet", "bezahlt", "bestätigt"].includes(status)) return "green";
  if (["Prüfen", "Angebot", "Auftragsbestätigung", "Kontierungsvorschlag"].includes(status)) return "amber";
  if (["Klärung", "überfällig", "Mahnung"].includes(status)) return "red";
  return "blue";
}

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function setView(view) {
  state.activeView = view;
  const [eyebrow, title] = titles[view];
  qs("#viewEyebrow").textContent = eyebrow;
  qs("#viewTitle").textContent = title;
  render();
}

function renderNav() {
  qs("#navList").innerHTML = views.map(view => `
    <button class="nav-item ${state.activeView === view.id ? "active" : ""}" data-view="${view.id}">
      <span aria-hidden="true">${view.icon}</span>
      <span>${view.label}</span>
      <span class="nav-count">${view.count}</span>
    </button>
  `).join("");

  document.querySelectorAll(".nav-item").forEach(button => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
}

function renderMetrics() {
  const openReceipts = state.receipts.filter(item => item.status !== "Bereit").length;
  const autoRate = Math.round(state.receipts.reduce((sum, item) => sum + item.confidence, 0) / state.receipts.length);
  const revenue = state.reports.at(-1).revenue;
  const exportReady = state.receipts.filter(item => item.status === "Bereit").length;
  const metrics = [
    ["Offene Prüfungen", openReceipts, "Belege mit Klärungsbedarf"],
    ["Automatisierung", `${autoRate}%`, "Ø Konfidenz Kontierung"],
    ["Umsatz Juni", formatMoney(revenue), "laufende Buchungen"],
    ["DATEV bereit", exportReady, "Buchungssätze im Stapel"]
  ];

  qs("#metricStrip").innerHTML = metrics.map(([label, value, note]) => `
    <article class="metric-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");
}

function table(headers, rows) {
  return `
    <div class="table-scroll">
      <table class="data-table">
        <thead><tr>${headers.map(header => `<th>${header}</th>`).join("")}</tr></thead>
        <tbody>${rows.join("")}</tbody>
      </table>
    </div>
  `;
}

function receiptRows(items) {
  return items.map(item => `
    <tr>
      <td class="truncate">${item.id}</td>
      <td class="truncate">${item.party}</td>
      <td>${item.type}</td>
      <td class="amount">${formatMoney(item.amount)}</td>
      <td class="truncate">${item.account}</td>
      <td><span class="badge ${badgeClass(item.status)}">${item.status}</span></td>
      <td>
        <button data-action="book" data-id="${item.id}">${item.status === "Bereit" ? "Buchen" : "Prüfen"}</button>
      </td>
    </tr>
  `).join("");
}

function renderDashboard() {
  const latest = state.receipts.slice(0, 4);
  return `
    <div class="view-grid">
      <div class="stack">
        <section class="table-panel">
          <div class="section-header">
            <div>
              <h2>Belegqueue</h2>
              <p>Automatisch erkannte Belege mit Kontierungsvorschlag</p>
            </div>
            <button data-view-jump="receipts">Öffnen</button>
          </div>
          ${table(["Beleg", "Partner", "Typ", "Betrag", "Konto", "Status", ""], receiptRows(latest))}
        </section>
        <section class="workflow-panel">
          <div class="section-header">
            <div>
              <h2>Monatlicher Ablauf</h2>
              <p>Vom Eingang bis zum Steuerberaterexport</p>
            </div>
          </div>
          <div class="workflow-steps">
            ${["Belege erfassen", "Kontierung prüfen", "Journal buchen", "DATEV exportieren"].map((step, index) => `
              <div class="step">
                <span class="badge blue">0${index + 1}</span>
                <strong>${step}</strong>
                <span>${["API, E-Mail, Upload und Kassenbuch", "SKR03/SKR04 mit Konfidenz", "Soll/Haben und Auditlog", "EXTF-Stapel vorbereiten"][index]}</span>
              </div>
            `).join("")}
          </div>
        </section>
      </div>
      <aside class="stack">
        ${renderSuggestions()}
        ${renderBankCard()}
        ${renderPeriodCard()}
      </aside>
    </div>
  `;
}

function renderSuggestions() {
  const suggestions = state.receipts.slice(0, 3).map(item => `
    <div class="suggestion">
      <div>
        <strong>${item.party}</strong>
        <small>${item.account}</small>
      </div>
      <div>
        <span class="badge ${item.confidence > 90 ? "green" : item.confidence > 70 ? "amber" : "red"}">${item.confidence}%</span>
      </div>
      <div class="progress-track" style="grid-column: 1 / -1">
        <div class="progress-fill" style="width: ${item.confidence}%"></div>
      </div>
    </div>
  `).join("");
  return `
    <section class="card">
      <div class="section-header">
        <div>
          <h2>Kontierungs-Engine</h2>
          <p>Vorschläge aus Regeln, Historie und Korrekturen</p>
        </div>
      </div>
      <div class="suggestion-list">${suggestions}</div>
    </section>
  `;
}

function renderBankCard() {
  const open = state.bank.filter(item => item.status !== "Zugeordnet").length;
  return `
    <section class="card">
      <div class="section-header">
        <div>
          <h2>Bankabgleich</h2>
          <p>${open} Umsätze brauchen eine Prüfung</p>
        </div>
        <button data-view-jump="bank">Abgleichen</button>
      </div>
      ${table(["Datum", "Text", "Betrag"], state.bank.slice(0, 3).map(item => `
        <tr>
          <td>${item.date}</td>
          <td class="truncate">${item.text}</td>
          <td class="amount">${formatMoney(item.amount)}</td>
        </tr>
      `))}
    </section>
  `;
}

function renderPeriodCard() {
  const current = state.periods.at(-1);
  return `
    <section class="card">
      <div class="section-header">
        <div>
          <h2>Periode Juni</h2>
          <p>UStVA ${current.vat}, Bank ${current.bank} abgestimmt</p>
        </div>
        <button data-view-jump="periods">Prüfen</button>
      </div>
      <div class="suggestion-list">
        <div class="suggestion">
          <div>
            <strong>${current.bookings} Buchungen</strong>
            <small>${current.receipts} Belege ohne Abschluss</small>
          </div>
          <span class="badge amber">${current.status}</span>
        </div>
      </div>
    </section>
  `;
}

function renderReceipts() {
  const filters = ["Alle", "Bereit", "Prüfen", "Klärung"];
  const items = state.receiptFilter === "Alle"
    ? state.receipts
    : state.receipts.filter(item => item.status === state.receiptFilter);
  return `
    <section class="table-panel">
      <div class="section-header">
        <div>
          <h2>Belege</h2>
          <p>OCR, XRechnung/ZUGFeRD und PDF-Textextraktion laufen hier zusammen</p>
        </div>
        <div class="segmented">
          ${filters.map(filter => `<button class="${state.receiptFilter === filter ? "active" : ""}" data-filter="${filter}">${filter}</button>`).join("")}
        </div>
      </div>
      ${table(["Beleg", "Partner", "Typ", "Betrag", "Konto", "Status", ""], receiptRows(items))}
    </section>
  `;
}

function renderBank() {
  return `
    <section class="table-panel">
      <div class="section-header">
        <div>
          <h2>Kontoauszüge</h2>
          <p>PSD2/XS2A-Abruf als Demo-Datensatz mit Zahlungsabgleich</p>
        </div>
        <button data-action="sync-bank">Umsätze abrufen</button>
      </div>
      ${table(["Datum", "Buchungstext", "Betrag", "Zuordnung", "Status", ""], state.bank.map(item => `
        <tr>
          <td>${item.date}</td>
          <td class="truncate">${item.text}</td>
          <td class="amount">${formatMoney(item.amount)}</td>
          <td class="truncate">${item.match}</td>
          <td><span class="badge ${badgeClass(item.status)}">${item.status}</span></td>
          <td><button data-action="match-bank">Zuordnen</button></td>
        </tr>
      `))}
    </section>
  `;
}

function renderInvoices() {
  return `
    <div class="stack">
      <section class="workflow-panel">
        <div class="section-header">
          <div>
            <h2>Vorgangskette</h2>
            <p>Angebot, Auftragsbestätigung, Lieferschein, Rechnung, Mahnung</p>
          </div>
          <button data-action="new-invoice">Vorgang erstellen</button>
        </div>
        <div class="workflow-steps">
          ${["Angebot", "Auftrag", "Lieferschein", "Rechnung"].map((step, index) => `
            <div class="step">
              <span class="badge blue">${index + 1}</span>
              <strong>${step}</strong>
              <span>${["Positionen kalkulieren", "Bestätigung erzeugen", "Leistung dokumentieren", "PDF, ZUGFeRD oder XRechnung"][index]}</span>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="table-panel">
        ${table(["Nummer", "Kunde", "Status", "Betrag", "Fälligkeit"], state.invoices.map(item => `
          <tr>
            <td>${item.number}</td>
            <td class="truncate">${item.customer}</td>
            <td><span class="badge ${badgeClass(item.stage)}">${item.stage}</span></td>
            <td class="amount">${formatMoney(item.total)}</td>
            <td>${item.due}</td>
          </tr>
        `))}
      </section>
    </div>
  `;
}

function renderJournal() {
  return `
    <section class="table-panel">
      <div class="section-header">
        <div>
          <h2>Buchungsjournal</h2>
          <p>Journal ist die fachliche Wahrheit; gebuchte Sätze werden storniert statt editiert</p>
        </div>
        <button data-action="manual-booking">Buchung erfassen</button>
      </div>
      ${table(["Nr.", "Periode", "Datum", "Quelle", "Soll/Haben", "Betrag", "Status", "Export"], state.journal.map(item => `
        <tr>
          <td>${item.no}</td>
          <td>${item.period}</td>
          <td>${item.date}</td>
          <td class="truncate">${item.source}</td>
          <td class="truncate">${item.entry}</td>
          <td class="amount">${formatMoney(item.amount)}</td>
          <td><span class="badge ${badgeClass(item.status)}">${item.status}</span></td>
          <td>${item.export}</td>
        </tr>
      `))}
    </section>
  `;
}

function renderOpos() {
  return `
    <section class="table-panel">
      <div class="section-header">
        <div>
          <h2>OPOS</h2>
          <p>Debitoren und Kreditoren mit Zahlung, Mahnung und Differenzklärung</p>
        </div>
        <button data-action="payment-run">Zahlungsvorschlag</button>
      </div>
      ${table(["Partner", "Beleg", "Fällig", "Ursprung", "Offen", "Mahnstufe", "Status"], state.opos.map(item => `
        <tr>
          <td class="truncate">${item.partner}</td>
          <td>${item.doc}</td>
          <td>${item.due}</td>
          <td class="amount">${formatMoney(item.original)}</td>
          <td class="amount">${formatMoney(item.open)}</td>
          <td>${item.dunning}</td>
          <td><span class="badge ${badgeClass(item.status)}">${item.status}</span></td>
        </tr>
      `))}
    </section>
  `;
}

function renderCashbook() {
  return `
    <section class="table-panel">
      <div class="section-header">
        <div>
          <h2>Kassenbuch</h2>
          <p>Fortlaufend nummeriert, mit Storno statt Änderung</p>
        </div>
        <button data-action="cash-entry">Kassenbewegung</button>
      </div>
      ${table(["Nr.", "Datum", "Text", "Betrag", "Bestand"], state.cashbook.map(item => `
        <tr>
          <td>${item.no}</td>
          <td>${item.date}</td>
          <td class="truncate">${item.text}</td>
          <td class="amount">${formatMoney(item.amount)}</td>
          <td class="amount">${formatMoney(item.balance)}</td>
        </tr>
      `))}
    </section>
  `;
}

function renderPeriods() {
  return `
    <section class="table-panel">
      <div class="section-header">
        <div>
          <h2>Periodenstatus 2026</h2>
          <p>Monatsabschluss mit Bankabstimmung, offenen Belegen und UStVA-Stand</p>
        </div>
        <button data-action="vat-check">USt prüfen</button>
      </div>
      ${table(["Monat", "Status", "Buchungen", "Offene Belege", "Bank", "UStVA"], state.periods.map(item => `
        <tr>
          <td>${item.month}</td>
          <td><span class="badge ${badgeClass(item.status)}">${item.status}</span></td>
          <td class="amount">${item.bookings}</td>
          <td class="amount">${item.receipts}</td>
          <td>${item.bank}</td>
          <td>${item.vat}</td>
        </tr>
      `))}
    </section>
  `;
}

function renderAccounts() {
  return `
    <section class="table-panel">
      <div class="section-header">
        <div>
          <h2>Kontenplan und Steuerlogik</h2>
          <p>Kleiner SKR03-Auszug mit Steuerkennzeichen und DATEV-Mapping</p>
        </div>
        <button data-action="new-rule">Regel anlegen</button>
      </div>
      ${table(["Konto", "Bezeichnung", "Typ", "Steuer", "Mapping", "Aktiv"], state.accounts.map(item => `
        <tr>
          <td>${item.number}</td>
          <td class="truncate">${item.name}</td>
          <td>${item.type}</td>
          <td>${item.tax}</td>
          <td>${item.mapping}</td>
          <td>${item.active}</td>
        </tr>
      `))}
    </section>
  `;
}

function renderReports() {
  const max = Math.max(...state.reports.map(item => item.revenue));
  return `
    <div class="view-grid">
      <section class="card">
        <div class="section-header">
          <div>
            <h2>BWA Verlauf</h2>
            <p>Umsatzentwicklung der aktuellen Demo-Mandantin</p>
          </div>
        </div>
        <div class="chart">
          ${state.reports.map(item => `
            <div class="bar">
              <div class="bar-fill" style="height: ${Math.max(24, item.revenue / max * 190)}px" title="${formatMoney(item.revenue)}"></div>
              <label>${item.month}</label>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="table-panel">
        <div class="section-header">
          <div>
            <h2>Auswertungen</h2>
            <p>EÜR, GuV, UStVA und Summen-/Saldenliste</p>
          </div>
        </div>
        ${table(["Monat", "Erlöse", "Aufwand", "Ergebnis"], state.reports.map(item => `
          <tr>
            <td>${item.month}</td>
            <td class="amount">${formatMoney(item.revenue)}</td>
            <td class="amount">${formatMoney(item.expense)}</td>
            <td class="amount">${formatMoney(item.revenue - item.expense)}</td>
          </tr>
        `))}
      </section>
    </div>
  `;
}

function renderContacts() {
  return `
    <section class="table-panel">
      <div class="section-header">
        <div>
          <h2>Stammdaten</h2>
          <p>Kunden, Lieferanten und Standardkontierungen</p>
        </div>
        <button data-action="new-contact">Kontakt anlegen</button>
      </div>
      ${table(["Name", "Rolle", "Zahlungsziel", "Standardkonto"], state.contacts.map(item => `
        <tr>
          <td class="truncate">${item.name}</td>
          <td><span class="badge blue">${item.role}</span></td>
          <td>${item.terms}</td>
          <td class="truncate">${item.defaultAccount}</td>
        </tr>
      `))}
    </section>
  `;
}

function renderExport() {
  return `
    <div class="view-grid">
      <section class="workflow-panel">
        <div class="section-header">
          <div>
            <h2>DATEV-Stapel</h2>
            <p>Buchungsdaten, Debitoren, Kreditoren und Sachkonten</p>
          </div>
          <button class="primary-button" data-action="prepare-export">Export erzeugen</button>
        </div>
        <div class="workflow-steps">
          ${["Belege", "Buchungen", "Stammdaten", "EXTF"].map((step, index) => `
            <div class="step">
              <span class="badge ${index < 3 ? "green" : "amber"}">${index < 3 ? "OK" : "Neu"}</span>
              <strong>${step}</strong>
              <span>${["5 verarbeitet", "4 kontiert", "4 Kontakte bereit", "Download wird simuliert"][index]}</span>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="card">
        <div class="section-header">
          <div>
            <h2>GoBD-Protokoll</h2>
            <p>Unveränderbarkeit, Prüfsummen und Exportnachvollziehbarkeit</p>
          </div>
        </div>
        <div class="suggestion-list">
          ${["Änderungsprotokoll vollständig", "Belegarchiv maschinell auswertbar", "Verfahrensdokumentation je Mandant", "Z3-Datenexport vorgesehen"].map((item, index) => `
            <div class="suggestion">
              <div>
                <strong>${item}</strong>
                <small>${index < 2 ? "im Demo-MVP sichtbar" : "als Stub vorbereitet"}</small>
              </div>
              <span class="badge ${index < 2 ? "green" : "amber"}">${index < 2 ? "Aktiv" : "Stub"}</span>
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderView() {
  const renderers = {
    dashboard: renderDashboard,
    receipts: renderReceipts,
    bank: renderBank,
    journal: renderJournal,
    opos: renderOpos,
    invoices: renderInvoices,
    periods: renderPeriods,
    accounts: renderAccounts,
    cashbook: renderCashbook,
    reports: renderReports,
    contacts: renderContacts,
    export: renderExport
  };
  qs("#viewPanel").innerHTML = renderers[state.activeView]();
}

function bindViewEvents() {
  document.querySelectorAll("[data-view-jump]").forEach(button => {
    button.addEventListener("click", () => setView(button.dataset.viewJump));
  });

  document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      state.receiptFilter = button.dataset.filter;
      render();
    });
  });

  document.querySelectorAll("[data-action]").forEach(button => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      const id = button.dataset.id;
      if (action === "book" && id) {
        const receipt = state.receipts.find(item => item.id === id);
        if (receipt) {
          receipt.status = "Bereit";
          receipt.confidence = Math.max(receipt.confidence, 88);
          showToast(`${id} wurde für den Buchungsstapel markiert.`);
          render();
          return;
        }
      }
      const messages = {
        "sync-bank": "Bankumsätze wurden simuliert aktualisiert.",
        "match-bank": "Zahlungszuordnung wurde als geprüft markiert.",
        "manual-booking": "Manuelle Buchung ist als nächster MVP-Schritt vorbereitet.",
        "payment-run": "Zahlungsvorschlag wurde als Demo vorbereitet.",
        "new-invoice": "Neuer Vorgang ist im Demo-MVP vorbereitet.",
        "vat-check": "USt-Prüfung wurde für Juni 2026 simuliert.",
        "new-rule": "Lieferantenregel ist als MVP-Aktion vorbereitet.",
        "cash-entry": "Kassenbewegung kann im nächsten Schritt als Formular ergänzt werden.",
        "new-contact": "Kontaktanlage ist im Demo-MVP vorbereitet.",
        "prepare-export": "DATEV-EXTF-Export wurde als Demo vorbereitet."
      };
      showToast(messages[action] || "Aktion ausgeführt.");
    });
  });
}

function render() {
  renderNav();
  renderMetrics();
  renderView();
  bindViewEvents();
}

function addReceiptFromForm(form) {
  const data = new FormData(form);
  const amount = Number(data.get("amount"));
  state.receipts.unshift({
    id: `B-${1049 + state.receipts.length}`,
    party: data.get("party"),
    type: data.get("type"),
    channel: data.get("channel"),
    amount,
    tax: 19,
    account: data.get("type") === "Ausgangsrechnung" ? "8400 Erlöse 19% USt" : "Noch offen",
    confidence: data.get("type") === "Ausgangsrechnung" ? 88 : 58,
    status: data.get("type") === "Ausgangsrechnung" ? "Bereit" : "Prüfen"
  });
  showToast("Beleg wurde in die Queue übernommen.");
  render();
}

qs("#newReceiptButton").addEventListener("click", () => qs("#receiptDialog").showModal());
qs("#receiptForm").addEventListener("submit", event => {
  if (event.submitter?.value === "cancel") return;
  addReceiptFromForm(event.currentTarget);
});
qs("#exportButton").addEventListener("click", () => setView("export"));

render();
