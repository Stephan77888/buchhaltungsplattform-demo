const today = "19.06.2026";

const state = {
  activeView: "dashboard",
  receiptFilter: "Alle",
  selectedReceiptId: "B-1046",
  rules: [
    { partner: "Hetzner Online GmbH", account: "4925 Internetkosten", tax: "VSt 19%", confidence: 94 },
    { partner: "DATEV eG", account: "4950 Beratungskosten", tax: "VSt 19%", confidence: 96 }
  ],
  audit: [
    { time: "19.06.2026 09:15", user: "Sabine Buchhaltung", event: "Beleg B-1048 validiert" },
    { time: "19.06.2026 09:22", user: "System", event: "Bankmatch fuer RG-2026-118 erkannt" }
  ],
  receipts: [
    { id: "B-1048", party: "DATEV eG", type: "Eingangsrechnung", channel: "E-Mail", amount: 238.00, tax: 19, account: "4950 Beratungskosten", confidence: 96, status: "Bereit" },
    { id: "B-1047", party: "Hetzner Online GmbH", type: "Eingangsrechnung", channel: "API", amount: 84.49, tax: 19, account: "4925 Internetkosten", confidence: 94, status: "Bereit" },
    { id: "B-1046", party: "Aral Tankstelle", type: "Kassenbeleg", channel: "Mobile Fotoerfassung", amount: 67.20, tax: 19, account: "4530 Laufende Kfz-Kosten", confidence: 71, status: "Pruefen" },
    { id: "B-1045", party: "Musterkunde GmbH", type: "Ausgangsrechnung", channel: "Upload", amount: 3213.00, tax: 19, account: "8400 Erloese 19% USt", confidence: 89, status: "Bereit" },
    { id: "B-1044", party: "Unbekannter Lieferant", type: "Eingangsrechnung", channel: "E-Mail", amount: 412.15, tax: 7, account: "Noch offen", confidence: 42, status: "Klaerung" }
  ],
  bank: [
    { id: "U-901", date: "19.06.2026", text: "Musterkunde GmbH RG-2026-118", amount: 3213.00, match: "RG-2026-118", status: "Zugeordnet" },
    { id: "U-900", date: "18.06.2026", text: "Hetzner Online GmbH", amount: -84.49, match: "B-1047", status: "Zugeordnet" },
    { id: "U-899", date: "17.06.2026", text: "FinAPI Kontogebuehr", amount: -29.75, match: "Kontierungsvorschlag", status: "Pruefen" },
    { id: "U-898", date: "16.06.2026", text: "Barabhebung Kasse", amount: -300.00, match: "Kassenbestand", status: "Pruefen" }
  ],
  invoices: [
    { number: "AN-2026-041", customer: "Nordstern IT GmbH", stage: "Angebot", total: 4800, due: "offen" },
    { number: "AB-2026-033", customer: "Kanzlei Weber", stage: "Auftragsbestaetigung", total: 2250, due: "bestaetigt" },
    { number: "RG-2026-118", customer: "Musterkunde GmbH", stage: "Rechnung", total: 3213, due: "bezahlt" },
    { number: "MA-2026-012", customer: "Schulte Handel", stage: "Mahnung", total: 980, due: "ueberfaellig" }
  ],
  journal: [
    { no: "J-2026-0128", period: "2026-06", date: "19.06.2026", source: "Beleg B-1048", status: "Gebucht", entry: "4950 an 1600", amount: 238.00, export: "bereit" },
    { no: "J-2026-0127", period: "2026-06", date: "18.06.2026", source: "Beleg B-1047", status: "Gebucht", entry: "4925 an 1200", amount: 84.49, export: "bereit" },
    { no: "J-2026-0126", period: "2026-06", date: "17.06.2026", source: "Bank", status: "Entwurf", entry: "4970 an 1200", amount: 29.75, export: "gesperrt" },
    { no: "J-2026-0125", period: "2026-06", date: "16.06.2026", source: "Rechnung RG-2026-118", status: "Festgeschrieben", entry: "1200 an 8400", amount: 3213.00, export: "exportiert" }
  ],
  opos: [
    { partner: "Musterkunde GmbH", doc: "RG-2026-118", due: "16.06.2026", original: 3213.00, open: 0, dunning: "-", status: "Ausgeglichen" },
    { partner: "Schulte Handel", doc: "RG-2026-109", due: "05.06.2026", original: 980.00, open: 980.00, dunning: "1. Mahnung", status: "Ueberfaellig" },
    { partner: "DATEV eG", doc: "B-1048", due: "29.06.2026", original: 238.00, open: 238.00, dunning: "-", status: "Offen" },
    { partner: "Security Hardware24 GmbH", doc: "B-1039", due: "30.06.2026", original: 2380.00, open: 2380.00, dunning: "-", status: "Offen" }
  ],
  cashbook: [
    { no: "K-2026-019", date: "19.06.2026", text: "Tankquittung", amount: -67.20, balance: 432.80 },
    { no: "K-2026-018", date: "18.06.2026", text: "Bueromaterial", amount: -24.90, balance: 500.00 },
    { no: "K-2026-017", date: "16.06.2026", text: "Bareinlage", amount: 300.00, balance: 524.90 }
  ],
  contacts: [
    { name: "Musterkunde GmbH", role: "Kunde", terms: "14 Tage", defaultAccount: "8400 Erloese 19% USt" },
    { name: "Hetzner Online GmbH", role: "Lieferant", terms: "Lastschrift", defaultAccount: "4925 Internetkosten" },
    { name: "DATEV eG", role: "Lieferant", terms: "10 Tage", defaultAccount: "4950 Beratungskosten" },
    { name: "Nordstern IT GmbH", role: "Kunde", terms: "30 Tage", defaultAccount: "8400 Erloese 19% USt" }
  ],
  accounts: [
    { number: "1200", name: "Bank", type: "Bank", tax: "-", mapping: "SKR03", active: "Ja" },
    { number: "1600", name: "Verbindlichkeiten", type: "Kreditor", tax: "-", mapping: "SKR03", active: "Ja" },
    { number: "8400", name: "Erloese 19% USt", type: "Erloes", tax: "USt 19%", mapping: "BU 9", active: "Ja" },
    { number: "4925", name: "Internetkosten", type: "Aufwand", tax: "VSt 19%", mapping: "BU 8", active: "Ja" },
    { number: "1776", name: "Umsatzsteuer 19%", type: "Steuer", tax: "USt 19%", mapping: "DATEV", active: "Ja" }
  ],
  periods: [
    { month: "Januar", status: "Festgeschrieben", bookings: 112, receipts: 0, bank: "100%", vat: "gemeldet" },
    { month: "Februar", status: "Festgeschrieben", bookings: 119, receipts: 0, bank: "100%", vat: "gemeldet" },
    { month: "Maerz", status: "Festgeschrieben", bookings: 127, receipts: 0, bank: "100%", vat: "gemeldet" },
    { month: "April", status: "Soft Lock", bookings: 104, receipts: 1, bank: "98%", vat: "vorbereitet" },
    { month: "Mai", status: "Offen", bookings: 132, receipts: 2, bank: "94%", vat: "pruefen" },
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
  { id: "dashboard", label: "Arbeitszentrale", icon: "D", count: 8 },
  { id: "receipts", label: "Belege", icon: "B", count: 5 },
  { id: "bank", label: "Bankabgleich", icon: "BA", count: 2 },
  { id: "journal", label: "Buchungsjournal", icon: "J", count: 4 },
  { id: "opos", label: "OPOS", icon: "O", count: 3 },
  { id: "invoices", label: "Vorgaenge", icon: "V", count: 4 },
  { id: "periods", label: "USt / Perioden", icon: "P", count: 6 },
  { id: "accounts", label: "Konten & Steuer", icon: "K", count: 5 },
  { id: "reports", label: "Auswertungen", icon: "A", count: 6 },
  { id: "cashbook", label: "Kassenbuch", icon: "KB", count: 3 },
  { id: "contacts", label: "Stammdaten", icon: "S", count: 4 },
  { id: "export", label: "DATEV & Pruefung", icon: "EX", count: 1 }
];

const titles = {
  dashboard: ["Arbeitszentrale", "Was heute geprueft, gebucht und exportiert werden kann"],
  receipts: ["Belegverarbeitung", "OCR, E-Rechnung und Kontierung"],
  bank: ["Bankmodul", "Kontoauszuege und Zahlungsabgleich"],
  journal: ["Buchungsjournal", "Entwuerfe, Buchungen und Festschreibung"],
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
  return money.format(Number(value || 0));
}

function nextNumber(prefix, collection, key) {
  const max = collection.reduce((highest, item) => {
    const value = String(item[key] || "").match(/(\d+)$/);
    return value ? Math.max(highest, Number(value[1])) : highest;
  }, 0);
  return `${prefix}${String(max + 1).padStart(4, "0")}`;
}

function badgeClass(status) {
  if (["Bereit", "Zugeordnet", "bezahlt", "bestaetigt", "Ausgeglichen", "Festgeschrieben", "Gebucht"].includes(status)) return "green";
  if (["Pruefen", "Angebot", "Auftragsbestaetigung", "Kontierungsvorschlag", "Soft Lock", "Offen", "Entwurf"].includes(status)) return "amber";
  if (["Klaerung", "ueberfaellig", "Ueberfaellig", "Mahnung", "gesperrt"].includes(status)) return "red";
  return "blue";
}

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function addAudit(event, user = "Sabine Buchhaltung") {
  state.audit.unshift({ time: `${today} ${new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })}`, user, event });
}

function setView(view) {
  state.activeView = view;
  const [eyebrow, title] = titles[view];
  qs("#viewEyebrow").textContent = eyebrow;
  qs("#viewTitle").textContent = title;
  render();
}

function openActionDialog(title, fields, onSubmit) {
  let dialog = qs("#actionDialog");
  if (!dialog) {
    dialog = document.createElement("dialog");
    dialog.id = "actionDialog";
    document.body.appendChild(dialog);
  }

  dialog.innerHTML = `
    <form method="dialog" class="dialog-card" id="actionForm">
      <header>
        <div>
          <p class="eyebrow">Funktion</p>
          <h2>${title}</h2>
        </div>
        <button class="icon-button" value="cancel" title="Schliessen" aria-label="Schliessen">x</button>
      </header>
      ${fields.map(field => renderField(field)).join("")}
      <footer>
        <button value="cancel">Abbrechen</button>
        <button class="primary-button" value="default">Speichern</button>
      </footer>
    </form>
  `;

  qs("#actionForm").addEventListener("submit", event => {
    if (event.submitter?.value === "cancel") return;
    onSubmit(Object.fromEntries(new FormData(event.currentTarget).entries()));
    dialog.close();
    render();
  });
  dialog.showModal();
}

function renderField(field) {
  if (field.type === "select") {
    return `
      <label>${field.label}
        <select name="${field.name}">
          ${field.options.map(option => `<option ${option === field.value ? "selected" : ""}>${option}</option>`).join("")}
        </select>
      </label>
    `;
  }
  return `
    <label>${field.label}
      <input name="${field.name}" type="${field.type || "text"}" step="${field.step || ""}" value="${field.value || ""}" ${field.required === false ? "" : "required"}>
    </label>
  `;
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
  const openReceipts = state.receipts.filter(item => item.status !== "Gebucht").length;
  const autoRate = Math.round(state.receipts.reduce((sum, item) => sum + item.confidence, 0) / state.receipts.length);
  const revenue = state.reports.at(-1).revenue;
  const exportReady = state.journal.filter(item => item.export === "bereit").length;
  const metrics = [
    ["Offene Pruefungen", openReceipts, "Belege mit Klaerungsbedarf"],
    ["Automatisierung", `${autoRate}%`, "Durchschnitt Kontierung"],
    ["Umsatz Juni", formatMoney(revenue), "laufende Buchungen"],
    ["DATEV bereit", exportReady, "Buchungssaetze im Stapel"]
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
    <tr class="${state.selectedReceiptId === item.id ? "selected-row" : ""}">
      <td class="truncate">${item.id}</td>
      <td class="truncate">${item.party}</td>
      <td>${item.type}</td>
      <td class="amount">${formatMoney(item.amount)}</td>
      <td class="truncate">${item.account}</td>
      <td><span class="badge ${badgeClass(item.status)}">${item.status}</span></td>
      <td>
        <button data-action="select-receipt" data-id="${item.id}">${state.selectedReceiptId === item.id ? "Offen" : "Auswaehlen"}</button>
      </td>
    </tr>
  `).join("");
}

function renderDashboard() {
  const openReceipts = state.receipts.filter(item => item.status !== "Gebucht").length;
  const openBank = state.bank.filter(item => item.status !== "Zugeordnet").length;
  const openOpos = state.opos.filter(item => item.open > 0).length;
  const exportReady = state.journal.filter(item => item.export === "bereit").length;
  const cards = [
    { title: "Belege pruefen", value: openReceipts, note: "Inbox und Kontierung", view: "receipts", action: "Belegarbeitsplatz" },
    { title: "Bank abgleichen", value: openBank, note: "Umsaetze ohne finale Zuordnung", view: "bank", action: "Bankmodul" },
    { title: "OPOS klaeren", value: openOpos, note: "Offene Posten", view: "opos", action: "OPOS" },
    { title: "DATEV exportieren", value: exportReady, note: "Buchungssaetze bereit", view: "export", action: "Export" }
  ];

  return `
    <div class="stack">
      <section class="workflow-panel">
        <div class="section-header">
          <div>
            <h2>Arbeitsvorrat heute</h2>
            <p>Prioritaeten, Sperren und Monatsabschluss statt Belegliste</p>
          </div>
          <button data-action="vat-check">Monat pruefen</button>
        </div>
        <div class="task-grid">
          ${cards.map(card => `
            <article class="task-card">
              <span>${card.title}</span>
              <strong>${card.value}</strong>
              <small>${card.note}</small>
              <button data-view-jump="${card.view}">${card.action}</button>
            </article>
          `).join("")}
        </div>
      </section>
      <div class="view-grid">
        <div class="stack">
          <section class="card">
            <div class="section-header">
              <div>
                <h2>Qualitaetsampel Juni</h2>
                <p>Was vor UStVA und Export noch blockiert</p>
              </div>
            </div>
            <div class="suggestion-list">
              <div class="suggestion"><div><strong>Bankabstimmung</strong><small>${openBank === 0 ? "vollstaendig" : `${openBank} Klaerfaelle offen`}</small></div><span class="badge ${openBank === 0 ? "green" : "amber"}">${openBank === 0 ? "OK" : "Pruefen"}</span></div>
              <div class="suggestion"><div><strong>Belegpflicht</strong><small>${openReceipts} Belege noch nicht gebucht</small></div><span class="badge ${openReceipts === 0 ? "green" : "red"}">${openReceipts === 0 ? "OK" : "Offen"}</span></div>
              <div class="suggestion"><div><strong>Exportfaehigkeit</strong><small>${exportReady} Buchungen im DATEV-Stapel</small></div><span class="badge green">bereit</span></div>
            </div>
          </section>
          <section class="workflow-panel">
            <div class="section-header">
              <div>
                <h2>Monatlicher Ablauf</h2>
                <p>Vom Eingang bis zum Steuerberaterexport</p>
              </div>
            </div>
            <div class="workflow-steps">
              ${["Belege erfassen", "Kontierung pruefen", "Journal buchen", "DATEV exportieren"].map((step, index) => `
                <div class="step">
                  <span class="badge blue">0${index + 1}</span>
                  <strong>${step}</strong>
                  <span>${["API, E-Mail, Upload und Kassenbuch", "SKR03/SKR04 mit Konfidenz", "Soll/Haben und Auditlog", "CSV/EXTF-naher Stapel"][index]}</span>
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
          <p>Regeln, Historie und Korrekturen erzeugen Vorschlaege</p>
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
          <p>${open} Umsaetze brauchen eine Pruefung</p>
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
        <button data-view-jump="periods">Pruefen</button>
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
  const filters = ["Alle", "Bereit", "Pruefen", "Klaerung", "Gebucht"];
  const items = state.receiptFilter === "Alle" ? state.receipts : state.receipts.filter(item => item.status === state.receiptFilter);
  const selected = state.receipts.find(item => item.id === state.selectedReceiptId) || items[0] || state.receipts[0];
  if (selected) state.selectedReceiptId = selected.id;
  return `
    <div class="view-grid receipt-workbench">
      <section class="table-panel">
        <div class="section-header">
          <div>
            <h2>Inbox</h2>
            <p>Beleg auswaehlen, rechts Felder bearbeiten und buchen</p>
          </div>
          <div class="segmented">
            ${filters.map(filter => `<button class="${state.receiptFilter === filter ? "active" : ""}" data-filter="${filter}">${filter}</button>`).join("")}
          </div>
        </div>
        ${table(["Beleg", "Partner", "Typ", "Betrag", "Konto", "Status", ""], receiptRows(items))}
      </section>
      ${renderReceiptDetail(selected)}
    </div>
  `;
}

function renderReceiptDetail(receipt) {
  if (!receipt) return `<section class="card"><div class="empty">Kein Beleg in diesem Filter.</div></section>`;
  return `
    <section class="card receipt-detail">
      <div class="section-header">
        <div>
          <h2>${receipt.id} pruefen</h2>
          <p>${receipt.channel} · ${receipt.type} · Konfidenz ${receipt.confidence}%</p>
        </div>
        <span class="badge ${badgeClass(receipt.status)}">${receipt.status}</span>
      </div>
      <div class="preview-box">
        <strong>Belegvorschau</strong>
        <span>${receipt.party}</span>
        <span>${formatMoney(receipt.amount)}</span>
        <small>Simulierte PDF/XML-Vorschau mit Hash- und OCR-Ergebnis</small>
      </div>
      <div class="field-grid">
        <label>Partner<input id="receiptParty" value="${receipt.party}"></label>
        <label>Betrag<input id="receiptAmount" type="number" step="0.01" value="${receipt.amount}"></label>
        <label>Konto<input id="receiptAccount" value="${receipt.account}"></label>
        <label>Steuer %<input id="receiptTax" type="number" step="1" value="${receipt.tax}"></label>
      </div>
      <div class="action-row">
        <button data-action="save-receipt" data-id="${receipt.id}">Aenderungen speichern</button>
        <button data-action="validate-receipt" data-id="${receipt.id}">Validieren</button>
        <button class="primary-button" data-action="post-receipt" data-id="${receipt.id}">Ins Journal buchen</button>
      </div>
      <div class="action-row">
        <button data-action="learn-rule" data-id="${receipt.id}">Regel speichern</button>
        <button data-action="mark-duplicate" data-id="${receipt.id}">Dublette markieren</button>
        <button data-action="request-approval" data-id="${receipt.id}">Freigabe anfordern</button>
      </div>
    </section>
  `;
}
function renderBank() {
  return `
    <section class="table-panel">
      <div class="section-header">
        <div>
          <h2>Kontoauszuege</h2>
          <p>Banktransaktionen matchen OPOS, Belege oder manuelle Buchungen</p>
        </div>
        <button data-action="sync-bank">Umsaetze abrufen</button>
      </div>
      ${table(["Datum", "Buchungstext", "Betrag", "Zuordnung", "Status", ""], state.bank.map(item => `
        <tr>
          <td>${item.date}</td>
          <td class="truncate">${item.text}</td>
          <td class="amount">${formatMoney(item.amount)}</td>
          <td class="truncate">${item.match}</td>
          <td><span class="badge ${badgeClass(item.status)}">${item.status}</span></td>
          <td><button data-action="match-bank" data-id="${item.id}">${item.status === "Zugeordnet" ? "Details" : "Zuordnen"}</button></td>
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
            <p>Angebot, Auftragsbestaetigung, Lieferschein, Rechnung, Mahnung</p>
          </div>
          <button data-action="new-invoice">Vorgang erstellen</button>
        </div>
        <div class="workflow-steps">
          ${["Angebot", "Auftrag", "Lieferschein", "Rechnung"].map((step, index) => `
            <div class="step">
              <span class="badge blue">${index + 1}</span>
              <strong>${step}</strong>
              <span>${["Positionen kalkulieren", "Bestaetigung erzeugen", "Leistung dokumentieren", "PDF, ZUGFeRD oder XRechnung"][index]}</span>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="table-panel">
        ${table(["Nummer", "Kunde", "Status", "Betrag", "Faelligkeit"], state.invoices.map(item => `
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
          <p>Gebuchte Saetze werden storniert statt editiert</p>
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
          <p>Debitoren und Kreditoren mit Zahlung, Mahnung und Differenzklaerung</p>
        </div>
        <button data-action="payment-run">Zahlungsvorschlag</button>
      </div>
      ${table(["Partner", "Beleg", "Faellig", "Ursprung", "Offen", "Mahnstufe", "Status"], state.opos.map(item => `
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
          <p>Fortlaufend nummeriert, mit Kassenbestand und Journal-Uebergabe</p>
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
        <button data-action="vat-check">USt pruefen</button>
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
    <div class="stack">
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
      <section class="table-panel">
        <div class="section-header">
          <div>
            <h2>Kontierungsregeln</h2>
            <p>Partnerbasierte Vorschlaege fuer neue Belege</p>
          </div>
        </div>
        ${table(["Partner", "Konto", "Steuer", "Konfidenz"], state.rules.map(item => `
          <tr>
            <td class="truncate">${item.partner}</td>
            <td class="truncate">${item.account}</td>
            <td>${item.tax}</td>
            <td>${item.confidence}%</td>
          </tr>
        `))}
      </section>
    </div>
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
        ${table(["Monat", "Erloese", "Aufwand", "Ergebnis"], state.reports.map(item => `
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
            <p>${state.journal.filter(item => item.export === "bereit").length} Buchungen sind exportbereit</p>
          </div>
          <button class="primary-button" data-action="prepare-export">CSV erzeugen</button>
        </div>
        <div class="workflow-steps">
          ${["Belege", "Buchungen", "Stammdaten", "CSV"].map((step, index) => `
            <div class="step">
              <span class="badge ${index < 3 ? "green" : "amber"}">${index < 3 ? "OK" : "Neu"}</span>
              <strong>${step}</strong>
              <span>${["verarbeitet", "kontiert", "bereit", "Download aus Journal"][index]}</span>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="card">
        <div class="section-header">
          <div>
            <h2>Auditlog</h2>
            <p>Nachvollziehbare Statuswechsel und Exportlaeufe</p>
          </div>
        </div>
        <div class="suggestion-list">
          ${state.audit.slice(0, 6).map(item => `
            <div class="suggestion">
              <div>
                <strong>${item.event}</strong>
                <small>${item.time} - ${item.user}</small>
              </div>
              <span class="badge blue">Log</span>
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

function createJournal(source, entry, amount, status = "Gebucht", exportStatus = "bereit") {
  const item = {
    no: nextNumber("J-2026-", state.journal, "no"),
    period: "2026-06",
    date: today,
    source,
    status,
    entry,
    amount: Number(amount),
    export: exportStatus
  };
  state.journal.unshift(item);
  state.periods.at(-1).bookings += 1;
  return item;
}

function selectedReceiptFormData() {
  return {
    party: qs("#receiptParty")?.value?.trim() || "",
    amount: Number(qs("#receiptAmount")?.value || 0),
    account: qs("#receiptAccount")?.value?.trim() || "Noch offen",
    tax: Number(qs("#receiptTax")?.value || 0)
  };
}

function applyReceiptDetail(id) {
  const receipt = state.receipts.find(item => item.id === id);
  if (!receipt) return null;
  const data = selectedReceiptFormData();
  receipt.party = data.party;
  receipt.amount = data.amount;
  receipt.account = data.account;
  receipt.tax = data.tax;
  return receipt;
}

function saveReceiptDetail(id) {
  const receipt = applyReceiptDetail(id);
  if (!receipt) return;
  receipt.status = receipt.status === "Klaerung" ? "Pruefen" : receipt.status;
  addAudit(`${receipt.id} Felder aktualisiert`);
  showToast(`${receipt.id} wurde gespeichert.`);
  render();
}

function validateReceipt(id) {
  const receipt = applyReceiptDetail(id);
  if (!receipt) return;
  receipt.status = "Bereit";
  receipt.confidence = Math.max(receipt.confidence, 88);
  addAudit(`${receipt.id} validiert`);
  showToast(`${receipt.id} ist bereit zum Buchen.`);
  render();
}

function postReceiptFromDetail(id) {
  const receipt = applyReceiptDetail(id);
  if (!receipt) return;
  if (receipt.status === "Gebucht") {
    setView("journal");
    return;
  }
  receipt.status = "Gebucht";
  receipt.confidence = Math.max(receipt.confidence, 92);
  const debit = receipt.account.split(" ")[0] || "4930";
  const credit = receipt.type === "Ausgangsrechnung" ? "8400" : "1600";
  createJournal(`Beleg ${receipt.id}`, `${debit} an ${credit}`, receipt.amount);
  addAudit(`${receipt.id} direkt aus Belegdetail gebucht`);
  showToast(`${receipt.id} wurde ins Journal gebucht.`);
  render();
}

function learnRuleFromReceipt(id) {
  const receipt = applyReceiptDetail(id);
  if (!receipt) return;
  state.rules.unshift({ partner: receipt.party, account: receipt.account, tax: `VSt ${receipt.tax}%`, confidence: Math.max(receipt.confidence, 85) });
  receipt.confidence = Math.max(receipt.confidence, 90);
  addAudit(`Regel aus ${receipt.id} gespeichert`);
  showToast(`Regel fuer ${receipt.party} gespeichert.`);
  render();
}

function markDuplicate(id) {
  const receipt = state.receipts.find(item => item.id === id);
  if (!receipt) return;
  receipt.status = "Klaerung";
  addAudit(`${receipt.id} als Dublette markiert`);
  showToast(`${receipt.id} ist als Dublette/Klaerfall markiert.`);
  render();
}

function requestApproval(id) {
  const receipt = applyReceiptDetail(id);
  if (!receipt) return;
  receipt.status = "Klaerung";
  addAudit(`Freigabe fuer ${receipt.id} angefordert`);
  showToast(`Freigabe fuer ${receipt.id} wurde angefordert.`);
  render();
}

function bookReceipt(id) {
  const receipt = state.receipts.find(item => item.id === id);
  if (!receipt) return;
  if (receipt.status === "Gebucht") {
    setView("journal");
    return;
  }

  openActionDialog(`Beleg ${receipt.id} pruefen`, [
    { label: "Partner", name: "party", value: receipt.party },
    { label: "Betrag brutto", name: "amount", type: "number", step: "0.01", value: receipt.amount },
    { label: "Konto", name: "account", value: receipt.account === "Noch offen" ? "4930 Buerobedarf" : receipt.account },
    { label: "Steuer %", name: "tax", type: "number", step: "1", value: receipt.tax },
    { label: "Regel speichern", name: "saveRule", type: "select", value: "Ja", options: ["Ja", "Nein"] }
  ], data => {
    receipt.party = data.party;
    receipt.amount = Number(data.amount);
    receipt.account = data.account;
    receipt.tax = Number(data.tax);
    receipt.status = "Gebucht";
    receipt.confidence = Math.max(receipt.confidence, 90);
    const debit = data.account.split(" ")[0] || "4930";
    const credit = receipt.type === "Ausgangsrechnung" ? "8400" : "1600";
    createJournal(`Beleg ${receipt.id}`, `${debit} an ${credit}`, receipt.amount);
    if (data.saveRule === "Ja") {
      state.rules.unshift({ partner: receipt.party, account: receipt.account, tax: `VSt ${receipt.tax}%`, confidence: receipt.confidence });
    }
    addAudit(`${receipt.id} geprueft und gebucht`);
    showToast(`${receipt.id} wurde ins Journal gebucht.`);
  });
}

function syncBank() {
  state.bank.unshift({
    id: nextNumber("U-", state.bank, "id"),
    date: today,
    text: "Stripe Sammelzahlung",
    amount: 642.15,
    match: "OPOS-Vorschlag",
    status: "Pruefen"
  });
  addAudit("Bankumsatz per Demo-Abruf importiert", "System");
  showToast("Ein neuer Bankumsatz wurde importiert.");
  render();
}

function matchBank(id) {
  const tx = state.bank.find(item => item.id === id);
  if (!tx) return;
  openActionDialog("Bankumsatz zuordnen", [
    { label: "Buchungstext", name: "text", value: tx.text },
    { label: "Zuordnung", name: "match", value: tx.match },
    { label: "Konto", name: "account", value: tx.amount < 0 ? "4970 Nebenkosten Geldverkehr" : "1200 Bank" }
  ], data => {
    tx.text = data.text;
    tx.match = data.match;
    tx.status = "Zugeordnet";
    createJournal("Bank", `${data.account.split(" ")[0]} an 1200`, Math.abs(tx.amount));
    addAudit(`Bankumsatz ${tx.id} zugeordnet`);
    showToast(`${tx.id} wurde zugeordnet und gebucht.`);
  });
}

function manualBooking() {
  openActionDialog("Manuelle Buchung erfassen", [
    { label: "Quelle", name: "source", value: "Manuelle Buchung" },
    { label: "Soll/Haben", name: "entry", value: "4930 an 1200" },
    { label: "Betrag", name: "amount", type: "number", step: "0.01", value: "125.00" },
    { label: "Status", name: "status", type: "select", value: "Gebucht", options: ["Entwurf", "Gebucht"] }
  ], data => {
    createJournal(data.source, data.entry, data.amount, data.status, data.status === "Gebucht" ? "bereit" : "gesperrt");
    addAudit("Manuelle Buchung angelegt");
    showToast("Buchung wurde im Journal angelegt.");
  });
}

function paymentRun() {
  const open = state.opos.find(item => item.open > 0);
  if (!open) {
    showToast("Keine offenen Posten vorhanden.");
    return;
  }
  openActionDialog("Zahlungsvorschlag ausgleichen", [
    { label: "Partner", name: "partner", value: open.partner },
    { label: "Beleg", name: "doc", value: open.doc },
    { label: "Zahlbetrag", name: "amount", type: "number", step: "0.01", value: open.open }
  ], data => {
    open.open = Math.max(0, open.open - Number(data.amount));
    open.status = open.open === 0 ? "Ausgeglichen" : "Offen";
    createJournal(`OPOS ${data.doc}`, "1600 an 1200", data.amount);
    addAudit(`OPOS ${data.doc} mit ${formatMoney(data.amount)} ausgeglichen`);
    showToast("Zahlungsvorschlag wurde gebucht.");
  });
}

function newInvoice() {
  openActionDialog("Vorgang erstellen", [
    { label: "Kunde", name: "customer", value: "Musterkunde GmbH" },
    { label: "Typ", name: "stage", type: "select", value: "Rechnung", options: ["Angebot", "Auftragsbestaetigung", "Lieferschein", "Rechnung", "Mahnung"] },
    { label: "Betrag", name: "total", type: "number", step: "0.01", value: "1190.00" }
  ], data => {
    const prefix = data.stage === "Angebot" ? "AN" : data.stage === "Mahnung" ? "MA" : "RG";
    const invoice = { number: `${prefix}-2026-${100 + state.invoices.length}`, customer: data.customer, stage: data.stage, total: Number(data.total), due: "offen" };
    state.invoices.unshift(invoice);
    if (data.stage === "Rechnung") {
      state.opos.unshift({ partner: data.customer, doc: invoice.number, due: "03.07.2026", original: invoice.total, open: invoice.total, dunning: "-", status: "Offen" });
      createJournal(`Rechnung ${invoice.number}`, "1400 an 8400", invoice.total);
    }
    addAudit(`${data.stage} ${invoice.number} erstellt`);
    showToast(`${invoice.number} wurde erstellt.`);
  });
}

function cashEntry() {
  const lastBalance = state.cashbook[0]?.balance || 0;
  openActionDialog("Kassenbewegung erfassen", [
    { label: "Text", name: "text", value: "Porto" },
    { label: "Betrag", name: "amount", type: "number", step: "0.01", value: "-12.50" },
    { label: "Konto", name: "account", value: "4910 Porto" }
  ], data => {
    const amount = Number(data.amount);
    const entry = { no: nextNumber("K-2026-", state.cashbook, "no"), date: today, text: data.text, amount, balance: lastBalance + amount };
    state.cashbook.unshift(entry);
    createJournal(`Kasse ${entry.no}`, `${data.account.split(" ")[0]} an 1000`, Math.abs(amount));
    addAudit(`Kassenbewegung ${entry.no} erfasst`);
    showToast(`${entry.no} wurde erfasst und gebucht.`);
  });
}

function vatCheck() {
  const june = state.periods.find(item => item.month === "Juni");
  const openReceipts = state.receipts.filter(item => item.status !== "Gebucht").length;
  june.receipts = openReceipts;
  june.bank = state.bank.every(item => item.status === "Zugeordnet") ? "100%" : "92%";
  june.vat = openReceipts === 0 ? "vorbereitet" : "Klaerfaelle offen";
  june.status = openReceipts === 0 ? "Soft Lock" : "Offen";
  addAudit("USt-Pruefung fuer Juni ausgefuehrt");
  showToast("USt-Pruefung wurde aktualisiert.");
  render();
}

function newRule() {
  openActionDialog("Kontierungsregel anlegen", [
    { label: "Partner", name: "partner", value: "Microsoft Ireland Operations Ltd." },
    { label: "Konto", name: "account", value: "4964 Software und Cloud" },
    { label: "Steuer", name: "tax", value: "Reverse Charge" },
    { label: "Konfidenz", name: "confidence", type: "number", value: "82" }
  ], data => {
    state.rules.unshift({ partner: data.partner, account: data.account, tax: data.tax, confidence: Number(data.confidence) });
    addAudit(`Regel fuer ${data.partner} angelegt`);
    showToast("Kontierungsregel wurde angelegt.");
  });
}

function newContact() {
  openActionDialog("Kontakt anlegen", [
    { label: "Name", name: "name", value: "Microsoft Ireland Operations Ltd." },
    { label: "Rolle", name: "role", type: "select", value: "Lieferant", options: ["Kunde", "Lieferant"] },
    { label: "Zahlungsziel", name: "terms", value: "14 Tage" },
    { label: "Standardkonto", name: "defaultAccount", value: "4964 Software und Cloud" }
  ], data => {
    state.contacts.unshift(data);
    addAudit(`Kontakt ${data.name} angelegt`);
    showToast("Kontakt wurde angelegt.");
  });
}

function prepareExport() {
  const rows = state.journal.filter(item => item.export === "bereit");
  if (!rows.length) {
    showToast("Keine exportbereiten Buchungen vorhanden.");
    return;
  }
  const csv = [
    ["Journal", "Datum", "Periode", "Quelle", "SollHaben", "Betrag", "Status"].join(";"),
    ...rows.map(row => [row.no, row.date, row.period, row.source, row.entry, row.amount.toFixed(2).replace(".", ","), row.status].join(";"))
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "datev-export-juni-2026.csv";
  link.click();
  URL.revokeObjectURL(link.href);
  rows.forEach(row => { row.export = "exportiert"; });
  addAudit(`${rows.length} Buchungen als DATEV-CSV exportiert`);
  showToast("DATEV-CSV wurde erzeugt.");
  render();
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
      const actions = {
        "select-receipt": () => {
          state.selectedReceiptId = id;
          render();
        },
        "save-receipt": () => saveReceiptDetail(id),
        "validate-receipt": () => validateReceipt(id),
        "post-receipt": () => postReceiptFromDetail(id),
        "learn-rule": () => learnRuleFromReceipt(id),
        "mark-duplicate": () => markDuplicate(id),
        "request-approval": () => requestApproval(id),
        book: () => bookReceipt(id),
        "sync-bank": syncBank,
        "match-bank": () => matchBank(id),
        "manual-booking": manualBooking,
        "payment-run": paymentRun,
        "new-invoice": newInvoice,
        "vat-check": vatCheck,
        "new-rule": newRule,
        "cash-entry": cashEntry,
        "new-contact": newContact,
        "prepare-export": prepareExport
      };
      actions[action]?.();
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
  const party = data.get("party");
  const rule = state.rules.find(item => item.partner === party);
  state.receipts.unshift({
    id: nextNumber("B-", state.receipts, "id"),
    party,
    type: data.get("type"),
    channel: data.get("channel"),
    amount,
    tax: 19,
    account: rule?.account || (data.get("type") === "Ausgangsrechnung" ? "8400 Erloese 19% USt" : "Noch offen"),
    confidence: rule?.confidence || (data.get("type") === "Ausgangsrechnung" ? 88 : 58),
    status: rule ? "Bereit" : "Pruefen"
  });
  addAudit(`Beleg fuer ${party} erfasst`);
  showToast("Beleg wurde in die Queue uebernommen.");
  render();
}

qs("#newReceiptButton").addEventListener("click", () => qs("#receiptDialog").showModal());
qs("#receiptForm").addEventListener("submit", event => {
  if (event.submitter?.value === "cancel") return;
  addReceiptFromForm(event.currentTarget);
});
qs("#exportButton").addEventListener("click", () => setView("export"));

render();
