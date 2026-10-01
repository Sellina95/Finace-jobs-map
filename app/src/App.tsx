import { useState } from "react";
import "./App.css";

type Item = {
  emoji: string;
  label: string;
  id?: string;
};

type Role = {
  emoji: string;
  title: string;
  description: string;
};

type CentralBankFunction = Item & {
  id: string;
  roles: Role[];
};

const institutions: Item[] = [
  { id: "central-bank", emoji: "🏛️", label: "Central Bank" },
  { id: "banks", emoji: "🏦", label: "Banks" },
  { emoji: "💰", label: "Investment Funds" },
  { emoji: "🛡️", label: "Insurance" },
  { emoji: "👵", label: "Pension Funds" },
];

const markets: Item[] = [
  { emoji: "💵", label: "Money Market" },
  { emoji: "📜", label: "Bond Market" },
  { emoji: "📈", label: "Equity Market" },
  { emoji: "💱", label: "FX Market" },
  { emoji: "🧩", label: "Derivatives" },
  { emoji: "🛢️", label: "Commodities" },
];

const infrastructure: Item[] = [
  { emoji: "💸", label: "Payment Systems" },
  { emoji: "🔄", label: "Clearing / CCPs" },
  { emoji: "🗄️", label: "Settlement Systems" },
  { emoji: "🏦", label: "CSDs" },
  { emoji: "📚", label: "Trade Repositories" },
];

const centralBankFunctions: CentralBankFunction[] = [
  {
    id: "monetary-policy",
    emoji: "💰",
    label: "Monetary Policy",
    roles: [
      {
        emoji: "🧠",
        title: "Monetary Policy Economist",
        description:
          "Analyzes inflation, growth and employment to support monetary policy decisions.",
      },
      {
        emoji: "📉",
        title: "Macro / Policy Analyst",
        description:
          "Monitors economic and financial data and analyzes policy scenarios.",
      },
      {
        emoji: "🧮",
        title: "Economic Modeler",
        description:
          "Builds macroeconomic models, forecasts and policy scenarios.",
      },
      {
        emoji: "💵",
        title: "Monetary / Money Market Analyst",
        description:
          "Analyzes short-term rates, reserves, money markets and policy transmission.",
      },
      {
        emoji: "🏦",
        title: "Monetary Policy Operations Analyst",
        description:
          "Analyzes implementation tools, reserves and central-bank liquidity operations.",
      },
      {
        emoji: "📝",
        title: "Policy / Committee Secretariat",
        description:
          "Supports policy meetings, decision materials, records and communications.",
      },
    ],
  },

  {
    id: "economic-research",
    emoji: "📊",
    label: "Economic Research & Statistics",
    roles: [
      {
        emoji: "🧠",
        title: "Research Economist",
        description:
          "Conducts macroeconomic, financial and policy research.",
      },
      {
        emoji: "🌍",
        title: "International Economist",
        description:
          "Studies the global economy, capital flows, trade, FX and foreign monetary policy.",
      },
      {
        emoji: "📈",
        title: "Financial Economist",
        description:
          "Researches rates, bonds, banks, asset prices and financial transmission.",
      },
      {
        emoji: "🧮",
        title: "Econometrician / Quantitative Economist",
        description:
          "Develops econometric, time-series and forecasting models.",
      },
      {
        emoji: "📊",
        title: "Economic / Statistical Analyst",
        description:
          "Compiles, validates and analyzes economic and financial statistics.",
      },
      {
        emoji: "🗃️",
        title: "Data Scientist / Research Data Specialist",
        description:
          "Builds datasets, analytical tools and research data infrastructure.",
      },
    ],
  },

  {
    id: "market-operations",
    emoji: "🏦",
    label: "Market Operations",
    roles: [
      {
        emoji: "💹",
        title: "Market Operations Trader / Dealer",
        description:
          "Executes repo, securities and other central-bank market operations.",
      },
      {
        emoji: "💵",
        title: "Money Market Analyst",
        description:
          "Monitors overnight rates, repo markets, reserves and short-term funding conditions.",
      },
      {
        emoji: "🔍",
        title: "Market Intelligence Analyst",
        description:
          "Gathers market intelligence from dealers and investors across financial markets.",
      },
      {
        emoji: "🏦",
        title: "Liquidity Operations Analyst",
        description:
          "Supports liquidity facilities, collateral and central-bank lending operations.",
      },
      {
        emoji: "📊",
        title: "Balance Sheet / Portfolio Analyst",
        description:
          "Analyzes central-bank assets, reserves and balance-sheet developments.",
      },
      {
        emoji: "⚙️",
        title: "Markets Operations / Middle Office",
        description:
          "Supports confirmations, settlement, collateral, risk and operational controls.",
      },
    ],
  },

  {
    id: "financial-stability",
    emoji: "🛡️",
    label: "Financial Stability",
    roles: [
      {
        emoji: "🧠",
        title: "Financial Stability Economist",
        description:
          "Analyzes vulnerabilities and transmission risks across the financial system.",
      },
      {
        emoji: "🏦",
        title: "Banking System Analyst",
        description:
          "Analyzes banking-sector capital, liquidity, leverage and funding risks.",
      },
      {
        emoji: "📉",
        title: "Market / Systemic Risk Analyst",
        description:
          "Studies market stress, contagion and systemic financial risks.",
      },
      {
        emoji: "🧪",
        title: "Stress Testing Analyst / Economist",
        description:
          "Tests financial-system resilience under severe economic and market scenarios.",
      },
      {
        emoji: "🕸️",
        title: "Macroprudential Policy Analyst",
        description:
          "Analyzes policies designed to reduce system-wide financial risks.",
      },
      {
        emoji: "📊",
        title: "Financial Data / Risk Analyst",
        description:
          "Monitors leverage, liquidity and concentration using financial-system data.",
      },
    ],
  },

  {
    id: "supervision-regulation",
    emoji: "🔎",
    label: "Supervision & Regulation",
    roles: [
      {
        emoji: "🏦",
        title: "Bank Supervisor / Bank Examiner",
        description:
          "Examines financial institutions for capital, liquidity, governance and risk controls.",
      },
      {
        emoji: "🛡️",
        title: "Prudential Risk Specialist",
        description:
          "Evaluates credit, market, liquidity and operational risks.",
      },
      {
        emoji: "📊",
        title: "Supervisory Analyst",
        description:
          "Analyzes regulatory reports, financial data and institutional risk indicators.",
      },
      {
        emoji: "🧮",
        title: "Quantitative / Model Risk Specialist",
        description:
          "Evaluates risk models, stress-testing frameworks and capital models.",
      },
      {
        emoji: "📜",
        title: "Prudential Policy / Regulation Analyst",
        description:
          "Develops and analyzes prudential standards and supervisory policy.",
      },
      {
        emoji: "💻",
        title: "Technology / Cyber Risk Examiner",
        description:
          "Evaluates technology, cybersecurity and operational resilience risks.",
      },
    ],
  },

  {
    id: "fx-reserves",
    emoji: "💱",
    label: "FX & Reserve Management",
    roles: [
      {
        emoji: "💹",
        title: "FX Trader / Dealer",
        description:
          "Executes foreign-exchange operations and, where mandated, FX intervention.",
      },
      {
        emoji: "💼",
        title: "Reserve Portfolio Manager",
        description:
          "Manages foreign-reserve portfolios across approved assets.",
      },
      {
        emoji: "📈",
        title: "Fixed Income Trader / Portfolio Specialist",
        description:
          "Trades and manages government bonds and other reserve assets.",
      },
      {
        emoji: "🌍",
        title: "Reserve Management Analyst",
        description:
          "Analyzes global rates, FX markets and reserve portfolio strategy.",
      },
      {
        emoji: "🛡️",
        title: "Investment / Market Risk Analyst",
        description:
          "Measures market, credit, liquidity and counterparty risks.",
      },
      {
        emoji: "⚙️",
        title: "Reserve Operations / Settlement",
        description:
          "Supports confirmations, settlement, custody, cash flows and collateral.",
      },
    ],
  },

  {
    id: "payments-settlement",
    emoji: "💸",
    label: "Payments & Settlement",
    roles: [
      {
        emoji: "💳",
        title: "Payment Systems Specialist",
        description:
          "Operates and monitors central-bank payment systems.",
      },
      {
        emoji: "🔄",
        title: "Settlement Operations Specialist",
        description:
          "Supports final settlement of interbank funds and securities transactions.",
      },
      {
        emoji: "👀",
        title: "Payment Systems Oversight Analyst",
        description:
          "Oversees payment systems and financial-market infrastructure risks.",
      },
      {
        emoji: "🏦",
        title: "Financial Market Infrastructure Specialist",
        description:
          "Analyzes payment systems, CCPs, CSDs and securities settlement systems.",
      },
      {
        emoji: "🛡️",
        title: "Payments Risk / Resilience Analyst",
        description:
          "Analyzes liquidity, operational, cyber and resilience risks in payment systems.",
      },
      {
        emoji: "📱",
        title: "Digital Payments / CBDC Specialist",
        description:
          "Researches digital money and emerging payment infrastructure.",
      },
    ],
  },

  {
    id: "currency-banknotes",
    emoji: "💵",
    label: "Currency & Banknotes",
    roles: [
      {
        emoji: "💴",
        title: "Currency Operations Specialist",
        description:
          "Manages the issuance, circulation and withdrawal of physical currency.",
      },
      {
        emoji: "📊",
        title: "Currency Demand / Forecasting Analyst",
        description:
          "Forecasts currency demand and supports issuance and inventory planning.",
      },
      {
        emoji: "🏭",
        title: "Banknote Production / Quality Specialist",
        description:
          "Manages banknote production, quality and durability standards.",
      },
      {
        emoji: "🔍",
        title: "Counterfeit / Currency Integrity Specialist",
        description:
          "Analyzes counterfeit currency and protects banknote integrity.",
      },
      {
        emoji: "🚚",
        title: "Cash Distribution / Logistics Specialist",
        description:
          "Manages storage and distribution of currency across the banking system.",
      },
      {
        emoji: "🎨",
        title: "Banknote Design / Security Specialist",
        description:
          "Develops banknote designs, security features and currency technology.",
      },
    ],
  },
];

function Island({
  emoji,
  title,
  subtitle,
  items,
  className,
  onItemClick,
}: {
  emoji: string;
  title: string;
  subtitle: string;
  items: Item[];
  className: string;
  onItemClick?: (item: Item) => void;
}) {
  return (
    <section className={`island ${className}`}>
      <div className="island-heading">
        <span className="island-emoji">{emoji}</span>

        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="cards">
        {items.map((item) => (
          <button
            className="finance-card"
            key={item.label}
            onClick={() => onItemClick?.(item)}
          >
            <span>{item.emoji}</span>
            <strong>{item.label}</strong>
          </button>
        ))}
      </div>
    </section>
  );
}

function FinancialSystemMap({
  openCentralBank,
  openBanks,
  openFunction,
}: {
  openCentralBank: () => void;
  openBanks: () => void;
  openFunction: (item: CentralBankFunction) => void;
}) {
  const [search, setSearch] = useState("");

  const normalizedSearch = search.trim().toLowerCase();

  const searchResults = normalizedSearch
    ? centralBankFunctions.flatMap((fn) => {
        const results = [];

        if (fn.label.toLowerCase().includes(normalizedSearch)) {
          results.push({
            type: "Function",
            title: fn.label,
            path: `Central Bank › ${fn.label}`,
          });
        }

        for (const role of fn.roles) {
          if (
            role.title.toLowerCase().includes(normalizedSearch) ||
            role.description.toLowerCase().includes(normalizedSearch)
          ) {
            results.push({
              type: "Role",
              title: role.title,
              path: `Central Bank › ${fn.label}`,
            });
          }
        }

        return results;
      })
    : [];

  return (
    <main className="world">
      <header className="hero system-hero">
        <div className="globe">🌍</div>

        <div>
          <p className="eyebrow">FINANCE WORLD MAP</p>
          <h1>Financial System</h1>

          <p className="intro">
            Explore the institutions, markets and infrastructure that make
            the financial system work.
          </p>
          <div className="search-box">
          <span>🔎</span>

          <input
            type="text"
            placeholder="Search institutions, markets or roles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
          {search && (
            <div className="search-results">
              {searchResults.length > 0 ? (
                searchResults.slice(0, 8).map((result, index) => (
                  <div
                    className="search-result-item"
                    key={`${result.title}-${index}`}
                    onClick={() => {
                      const target = centralBankFunctions.find(
                        (fn) => result.path === `Central Bank › ${fn.label}`
                      );

                      if (target) openFunction(target);
                    }}
                  >
                    <div>
                      <strong>{result.title}</strong>
                      <span>{result.path}</span>
                    </div>

                    <small>{result.type}</small>
                  </div>
                ))
              ) : (
                <div className="search-empty">
                  No matching roles or functions found.
                </div>
              )}
            </div>
          )}
        
        </div>
      </header>

      <div className="world-map">
        <Island
          emoji="🏦"
          title="Financial Institutions"
          subtitle="Institutions in the financial system"
          items={institutions}
          className="institutions"
          onItemClick={(item) => {
            if (item.id === "central-bank") {
              openCentralBank();
            }

            if (item.id === "banks") {
              openBanks();
            }
          }}
        />

        <Island
          emoji="📈"
          title="Financial Markets"
          subtitle="Markets for financial instruments"
          items={markets}
          className="markets"
        />

        <Island
          emoji="🔗"
          title="Financial Infrastructure"
          subtitle="Infrastructure supporting the financial system"
          items={infrastructure}
          className="infrastructure"
        />
      </div>

      <footer>
        <span>🏦 Institutions</span>
        <span>📈 Markets</span>
        <span>🔗 Infrastructure</span>
      </footer>
    </main>
  );
}

const bankFunctions: Item[] = [
  { emoji: "💳", label: "Retail / Consumer Banking", id: "retail-banking" },
  { emoji: "🏢", label: "Commercial Banking", id: "commercial-banking" },
  { emoji: "🌐", label: "Corporate Banking", id: "corporate-banking" },
  { emoji: "📈", label: "Global Markets", id: "global-markets" },
  { emoji: "🤝", label: "Investment Banking", id: "investment-banking" },
  { emoji: "💸", label: "Transaction Banking", id: "transaction-banking" },
  { emoji: "💰", label: "Treasury / ALM", id: "treasury-alm" },
  { emoji: "🛡️", label: "Risk Management", id: "risk-management" },
  { emoji: "⚖️", label: "Compliance / Financial Crime", id: "compliance-fincrime" },
  { emoji: "⚙️", label: "Operations & Technology", id: "operations-technology" },
];

function CentralBankMap({
  goBack,
  openFunction,
}: {
  goBack: () => void;
  openFunction: (item: CentralBankFunction) => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financial System
      </button>

      <header className="hero detail-hero">
        <div className="globe">🏛️</div>

        <div>
          <p className="eyebrow">FINANCIAL INSTITUTION</p>
          <h1>Central Bank</h1>

          <p className="intro">
            Explore the core functions performed by central banks.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🏛️</span>

          <div>
            <h2>Central Bank Functions</h2>
            <p>Select a function to explore its work, teams and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {centralBankFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => openFunction(item)}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

const globalMarketsFunctions: Item[] = [
  { id: "sales", emoji: "🤝", label: "Sales" },
  { id: "trading", emoji: "📊", label: "Trading" },
  { id: "structuring", emoji: "🧩", label: "Structuring" },
  { id: "research-strategy", emoji: "🔬", label: "Research / Strategy" },
  { id: "financing-securities-finance", emoji: "💼", label: "Financing / Securities Finance" },
  { id: "markets-coo", emoji: "⚙️", label: "Markets COO / Business Management" },
];

function BanksMap({
  goBack,
  openGlobalMarkets,
}: {
  goBack: () => void;
  openGlobalMarkets: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financial System
      </button>

      <header className="hero detail-hero">
        <div className="globe">🏦</div>

        <div>
          <p className="eyebrow">FINANCIAL INSTITUTION</p>
          <h1>Banks</h1>

          <p className="intro">
            Explore the core functions performed across banking institutions.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🏦</span>

          <div>
            <h2>Bank Functions</h2>
            <p>Select a function to explore its work, teams and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {bankFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "global-markets") {
                  openGlobalMarkets();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

const tradingDesks: Item[] = [
  { id: "fx", emoji: "💱", label: "FX" },
  { id: "rates", emoji: "📉", label: "Rates" },
  { id: "credit", emoji: "💳", label: "Credit" },
  { id: "equities", emoji: "📈", label: "Equities" },
  { id: "commodities", emoji: "🛢️", label: "Commodities" },
  { id: "cross-asset", emoji: "🧩", label: "Cross-Asset / Multi-Asset" },
];

function GlobalMarketsMap({
  goBack,
  openTrading,
}: {
  goBack: () => void;
  openTrading: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Banks
      </button>

      <header className="hero detail-hero">
        <div className="globe">📈</div>

        <div>
          <p className="eyebrow">BANK FUNCTION</p>
          <h1>Global Markets</h1>

          <p className="intro">
            Explore the core businesses and functions across Global Markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>

          <div>
            <h2>Global Markets</h2>
            <p>Select an area to explore its desks, work and roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {globalMarketsFunctions.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "trading") {
                  openTrading();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

const fxTradingAreas: Item[] = [
  { id: "fx-spot", emoji: "💵", label: "Spot" },
  { id: "fx-forwards-swaps", emoji: "🔁", label: "Forwards / FX Swaps" },
  { id: "fx-options", emoji: "🧩", label: "FX Options" },
  { id: "fx-em-ndf", emoji: "🌏", label: "EM / NDF" },
  { id: "fx-electronic", emoji: "⚡", label: "Electronic FX" },
];

function TradingMap({
  goBack,
  openFX,
}: {
  goBack: () => void;
  openFX: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Global Markets
      </button>

      <header className="hero detail-hero">
        <div className="globe">📊</div>

        <div>
          <p className="eyebrow">GLOBAL MARKETS</p>
          <h1>Trading</h1>

          <p className="intro">
            Explore trading desks across major asset classes and products.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📊</span>

          <div>
            <h2>Trading Desks</h2>
            <p>Select an asset class to explore its products and trading roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {tradingDesks.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "fx") {
                  openFX();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function FXTradingMap({
  goBack,
  openSpot,
  openForwardsSwaps,
  openOptions,
  openEMNDF,
  openElectronicFX,
}: {
  goBack: () => void;
  openSpot: () => void;
  openForwardsSwaps: () => void;
  openOptions: () => void;
  openEMNDF: () => void;
  openElectronicFX: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">💱</div>

        <div>
          <p className="eyebrow">TRADING</p>
          <h1>FX Trading</h1>

          <p className="intro">
            Explore the major product and desk families within FX trading.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💱</span>

          <div>
            <h2>FX Trading Areas</h2>
            <p>Select an area to explore its products and trading roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {fxTradingAreas.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "fx-spot") {
                  openSpot();
                } else if (item.id === "fx-forwards-swaps") {
                  openForwardsSwaps();
                } else if (item.id === "fx-options") {
                  openOptions();
                } else if (item.id === "fx-em-ndf") {
                  openEMNDF();
                } else if (item.id === "fx-electronic") {
                  openElectronicFX();
                }
              }}
            >
              <span>{item.emoji}</span>
              <strong>{item.label}</strong>
              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}





function ElectronicFXMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← FX Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">⚡</div>

        <div>
          <p className="eyebrow">FX TRADING</p>
          <h1>Electronic FX</h1>

          <p className="intro">
            Explore trading roles focused on electronic pricing, execution and
            liquidity across FX markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚡</span>

          <div>
            <h2>Electronic FX Roles</h2>
            <p>Explore a core trading role in electronic FX.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Electronic FX Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function ElectronicFXTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Electronic FX
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>

        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>Electronic FX Trader</h1>

          <p className="intro">
            Supports electronic FX pricing and execution, manages trading risk
            and monitors automated liquidity across electronic markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📍</span>
          <div>
            <h2>Where Am I?</h2>
            <p>See where this role sits within the financial system.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏦</span>
            <strong>Financial Institutions</strong>
            <span>Banks</span>
          </div>

          <div className="finance-card">
            <span>📈</span>
            <strong>Global Markets</strong>
            <span>Trading</span>
          </div>

          <div className="finance-card">
            <span>💱</span>
            <strong>FX Trading</strong>
            <span>Electronic FX → Electronic FX Trader</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>What Market?</h2>
            <p>The market in which this role primarily operates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>FX Market</strong>
            <span>
              The global currency market, with a significant share of activity
              executed through electronic channels.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>What Products?</h2>
            <p>Common products handled through electronic FX trading.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💵</span>
            <strong>Electronic Spot FX</strong>
            <span>
              Spot currency liquidity distributed and executed through
              electronic trading channels.
            </span>
          </div>

          <div className="finance-card">
            <span>🔁</span>
            <strong>Electronically Traded FX Products</strong>
            <span>
              Depending on the desk and platform, electronic workflows can also
              support other FX products.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities in institutional electronic FX trading.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>⚡</span>
            <strong>Manage Electronic Pricing</strong>
            <span>
              Monitor and manage electronically distributed FX prices and liquidity.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Trading Risk</strong>
            <span>
              Monitor positions and exposures generated through electronic trading activity.
            </span>
          </div>

          <div className="finance-card">
            <span>🖥️</span>
            <strong>Monitor Execution</strong>
            <span>
              Monitor execution quality, liquidity and trading behavior across electronic channels.
            </span>
          </div>

          <div className="finance-card">
            <span>🔧</span>
            <strong>Improve Trading Workflows</strong>
            <span>
              Work with quantitative and technology teams on pricing, execution
              and automation workflows.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>
          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions that interact with electronic FX trading.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>FX Sales</strong>
            <span>
              Connects client trading needs and electronic execution activity with the desk.
            </span>
          </div>

          <div className="finance-card">
            <span>🧮</span>
            <strong>Quantitative Trading / Research</strong>
            <span>
              Supports models and analytics used in electronic pricing and execution.
            </span>
          </div>

          <div className="finance-card">
            <span>💻</span>
            <strong>Technology</strong>
            <span>
              Builds and maintains trading platforms, connectivity and automation.
            </span>
          </div>

          <div className="finance-card">
            <span>🛡️</span>
            <strong>Market Risk</strong>
            <span>Monitors market-risk exposures and risk limits.</span>
          </div>

          <div className="finance-card">
            <span>⚙️</span>
            <strong>Middle Office</strong>
            <span>Supports trade control, monitoring and exception management.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations / Settlement</strong>
            <span>Supports post-trade processing and settlement.</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Electronic market and post-trade infrastructure supporting FX
              pricing, execution and settlement.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Electronic Trading Platforms</strong>
            <span>
              Trading venues and dealer platforms distribute prices and execute transactions.
            </span>
          </div>

          <div className="finance-card">
            <span>🔌</span>
            <strong>Market Connectivity</strong>
            <span>
              Electronic connectivity links trading systems with venues,
              clients and liquidity sources.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data</strong>
            <span>
              Real-time pricing and market information supports electronic trading decisions.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Payment &amp; Settlement Infrastructure</strong>
            <span>
              Post-trade infrastructure supports processing and settlement
              after electronic execution.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function FXEMNDFMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← FX Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🌏</div>
        <div>
          <p className="eyebrow">FX TRADING</p>
          <h1>EM / NDF</h1>
          <p className="intro">
            Explore trading roles across emerging-market currencies and
            non-deliverable forwards.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🌏</span>
          <div>
            <h2>EM / NDF Roles</h2>
            <p>Explore a core trading role across emerging-market FX.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>EM FX / NDF Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function EMFXNDFTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← EM / NDF
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>
        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>EM FX / NDF Trader</h1>
          <p className="intro">
            Trades emerging-market currencies and FX products, manages market
            risk and provides liquidity across supported markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📍</span>
          <div>
            <h2>Where Am I?</h2>
            <p>See where this role sits within the financial system.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏦</span>
            <strong>Financial Institutions</strong>
            <span>Banks</span>
          </div>

          <div className="finance-card">
            <span>📈</span>
            <strong>Global Markets</strong>
            <span>Trading</span>
          </div>

          <div className="finance-card">
            <span>💱</span>
            <strong>FX Trading</strong>
            <span>EM / NDF → EM FX / NDF Trader</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>What Market?</h2>
            <p>The market in which this role primarily operates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🌏</span>
            <strong>Emerging-Market FX</strong>
            <span>
              Currency markets involving emerging-market currencies across
              deliverable and non-deliverable markets.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>What Products?</h2>
            <p>Common products associated with this role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Deliverable EM FX</strong>
            <span>
              FX transactions in currencies that can be physically delivered
              through the relevant settlement process.
            </span>
          </div>

          <div className="finance-card">
            <span>📅</span>
            <strong>Non-Deliverable Forwards</strong>
            <span>
              Forward contracts typically settled in cash rather than through
              physical delivery of the underlying currency.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities on an institutional EM FX desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Make Markets</strong>
            <span>
              Price supported EM currencies and products and provide liquidity
              to market participants.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Risk</strong>
            <span>
              Monitor currency positions and market exposures generated by
              trading activity.
            </span>
          </div>

          <div className="finance-card">
            <span>⚡</span>
            <strong>Execute Flow</strong>
            <span>
              Execute client and interdealer transactions across supported EM
              currency markets.
            </span>
          </div>

          <div className="finance-card">
            <span>🌍</span>
            <strong>Monitor Local &amp; Global Markets</strong>
            <span>
              Track liquidity, rates, policy developments and market conditions
              affecting supported currencies.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>
          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions that interact with an EM FX trading desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>FX Sales</strong>
            <span>Connects client activity and market information with the trading desk.</span>
          </div>

          <div className="finance-card">
            <span>🔬</span>
            <strong>Research / Strategy</strong>
            <span>Provides macroeconomic and market analysis relevant to EM currencies.</span>
          </div>

          <div className="finance-card">
            <span>🛡️</span>
            <strong>Market Risk</strong>
            <span>Monitors market-risk exposures and risk limits.</span>
          </div>

          <div className="finance-card">
            <span>⚙️</span>
            <strong>Middle Office</strong>
            <span>Supports trade control, monitoring and exception management.</span>
          </div>

          <div className="finance-card">
            <span>🧮</span>
            <strong>Product Control</strong>
            <span>Supports valuation control and trading P&amp;L oversight.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations / Settlement</strong>
            <span>Supports post-trade processing and settlement.</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Market and post-trade infrastructure supporting EM FX from
              execution through settlement.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Trading Venues &amp; Market Connectivity</strong>
            <span>
              Electronic and dealer-market connectivity supports pricing and execution.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data</strong>
            <span>
              Currency, rates and local-market information supports pricing and risk decisions.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Payment &amp; Settlement Infrastructure</strong>
            <span>
              Settlement arrangements vary across deliverable and
              non-deliverable currency markets.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function FXOptionsMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← FX Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>

        <div>
          <p className="eyebrow">FX TRADING</p>
          <h1>FX Options</h1>

          <p className="intro">
            Explore trading roles involved in foreign exchange options.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>

          <div>
            <h2>FX Options Roles</h2>
            <p>Explore a core trading role on an FX options desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>FX Options Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function FXOptionsTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← FX Options
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>

        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>FX Options Trader</h1>

          <p className="intro">
            Prices and trades currency options, manages option risk and provides
            liquidity across FX options markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📍</span>
          <div>
            <h2>Where Am I?</h2>
            <p>See where this role sits within the financial system.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏦</span>
            <strong>Financial Institutions</strong>
            <span>Banks</span>
          </div>

          <div className="finance-card">
            <span>📈</span>
            <strong>Global Markets</strong>
            <span>Trading</span>
          </div>

          <div className="finance-card">
            <span>💱</span>
            <strong>FX Trading</strong>
            <span>FX Options → FX Options Trader</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>What Market?</h2>
            <p>The market in which this role primarily operates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>FX Market</strong>
            <span>
              The global market for currencies and currency-linked instruments.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>What Products?</h2>
            <p>The core product associated with this role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🧩</span>
            <strong>FX Options</strong>
            <span>
              Contracts that give the holder the right to exchange currencies
              under specified terms.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities on an institutional FX options desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Price Options</strong>
            <span>
              Quote and price FX options across supported currencies and maturities.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Option Risk</strong>
            <span>
              Monitor and manage exposures created by option positions and market moves.
            </span>
          </div>

          <div className="finance-card">
            <span>⚡</span>
            <strong>Execute Flow</strong>
            <span>
              Execute client and interdealer FX options transactions.
            </span>
          </div>

          <div className="finance-card">
            <span>🌍</span>
            <strong>Monitor Markets</strong>
            <span>
              Track currencies, volatility, liquidity and changing market conditions.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>
          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions that interact with an FX options trading desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>FX Sales</strong>
            <span>Connects client activity and market information with the trading desk.</span>
          </div>

          <div className="finance-card">
            <span>🧩</span>
            <strong>Structuring</strong>
            <span>Works with trading and sales on structured or customized solutions.</span>
          </div>

          <div className="finance-card">
            <span>🛡️</span>
            <strong>Market Risk</strong>
            <span>Monitors market-risk exposures and risk limits.</span>
          </div>

          <div className="finance-card">
            <span>⚙️</span>
            <strong>Middle Office</strong>
            <span>Supports trade control, monitoring and exception management.</span>
          </div>

          <div className="finance-card">
            <span>🧮</span>
            <strong>Product Control</strong>
            <span>Supports valuation control and trading P&amp;L oversight.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations / Settlement</strong>
            <span>Supports post-trade processing and settlement.</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Market and post-trade infrastructure supporting FX options from
              pricing and execution through settlement.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Trading &amp; Pricing Systems</strong>
            <span>
              Electronic tools support pricing, execution and position management.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data</strong>
            <span>
              Currency, volatility and market information support pricing and risk decisions.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Post-Trade &amp; Settlement Infrastructure</strong>
            <span>
              Confirmation, payment and settlement processes support completed transactions.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function FXForwardsSwapsMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← FX Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🔁</div>

        <div>
          <p className="eyebrow">FX TRADING</p>
          <h1>Forwards / FX Swaps</h1>

          <p className="intro">
            Explore trading roles involved in FX forwards and FX swaps.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔁</span>

          <div>
            <h2>Forwards / FX Swaps Roles</h2>
            <p>Explore a core trading role in FX forwards and swaps.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>FX Forward / Swap Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function FXForwardSwapTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Forwards / FX Swaps
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>

        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>FX Forward / Swap Trader</h1>

          <p className="intro">
            Trades FX forwards and swaps, manages currency and funding exposures,
            and provides liquidity across forward maturities.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📍</span>
          <div>
            <h2>Where Am I?</h2>
            <p>See where this role sits within the financial system.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏦</span>
            <strong>Financial Institutions</strong>
            <span>Banks</span>
          </div>

          <div className="finance-card">
            <span>📈</span>
            <strong>Global Markets</strong>
            <span>Trading</span>
          </div>

          <div className="finance-card">
            <span>💱</span>
            <strong>FX Trading</strong>
            <span>Forwards / FX Swaps → FX Forward / Swap Trader</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>What Market?</h2>
            <p>The market in which this role primarily operates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>FX Market</strong>
            <span>
              The global market for exchanging currencies across spot and
              future settlement dates.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>What Products?</h2>
            <p>Core products associated with this role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>📅</span>
            <strong>FX Forwards</strong>
            <span>
              Agreements to exchange currencies at a specified rate on a
              future date.
            </span>
          </div>

          <div className="finance-card">
            <span>🔁</span>
            <strong>FX Swaps</strong>
            <span>
              Paired currency exchanges with different settlement dates,
              commonly combining a near and far leg.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities on an institutional FX forwards and swaps desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Make Markets</strong>
            <span>
              Price FX forwards and swaps and provide liquidity across supported
              currencies and maturities.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Risk</strong>
            <span>
              Monitor currency, forward and funding-related exposures generated
              by trading activity.
            </span>
          </div>

          <div className="finance-card">
            <span>⚡</span>
            <strong>Execute Flow</strong>
            <span>
              Execute client and interdealer forward and swap transactions.
            </span>
          </div>

          <div className="finance-card">
            <span>🌍</span>
            <strong>Monitor Markets</strong>
            <span>
              Track spot rates, forward pricing, interest-rate differentials,
              liquidity and market conditions.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>
          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions that interact with FX forwards and swaps trading.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>FX Sales</strong>
            <span>Connects client activity and market information with the trading desk.</span>
          </div>

          <div className="finance-card">
            <span>🛡️</span>
            <strong>Market Risk</strong>
            <span>Monitors market-risk exposures and risk limits.</span>
          </div>

          <div className="finance-card">
            <span>⚙️</span>
            <strong>Middle Office</strong>
            <span>Supports trade control, monitoring and exception management.</span>
          </div>

          <div className="finance-card">
            <span>🧮</span>
            <strong>Product Control</strong>
            <span>Supports valuation control and trading P&amp;L oversight.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations / Settlement</strong>
            <span>Supports post-trade processing and settlement.</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Market and post-trade infrastructure that helps FX transactions
              move from execution to settlement.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Trading Venues &amp; Market Connectivity</strong>
            <span>
              Electronic venues and connectivity support pricing and trade execution.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data</strong>
            <span>
              Spot, forward and interest-rate information supports pricing and risk decisions.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Payment &amp; Settlement Infrastructure</strong>
            <span>
              Post-trade infrastructure supports currency payments and settlement
              across transaction dates.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function FXSpotMap({
  goBack,
  openSpotTrader,
}: {
  goBack: () => void;
  openSpotTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← FX Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">💵</div>

        <div>
          <p className="eyebrow">FX TRADING</p>
          <h1>Spot</h1>

          <p className="intro">
            Explore roles involved in trading currencies for spot settlement.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💵</span>

          <div>
            <h2>FX Spot Roles</h2>
            <p>Explore the core trading role on an FX spot desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button
            className="finance-card"
            onClick={openSpotTrader}
          >
            <span>👤</span>
            <strong>FX Spot Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function FXSpotTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← FX Spot
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>

        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>FX Spot Trader</h1>

          <p className="intro">
            Trades spot currencies, manages market risk and provides liquidity
            across currency pairs.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📍</span>

          <div>
            <h2>Where Am I?</h2>
            <p>See where this role sits within the financial system.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏦</span>
            <strong>Financial Institutions</strong>
            <span>Banks</span>
          </div>

          <div className="finance-card">
            <span>📈</span>
            <strong>Global Markets</strong>
            <span>Trading</span>
          </div>

          <div className="finance-card">
            <span>💱</span>
            <strong>FX Trading</strong>
            <span>Spot → FX Spot Trader</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>

          <div>
            <h2>What Market?</h2>
            <p>The market in which this role primarily operates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>FX Market</strong>
            <span>
              The global market for exchanging one currency for another.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>

          <div>
            <h2>What Products?</h2>
            <p>The core product associated with this role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💵</span>
            <strong>Spot FX</strong>
            <span>
              Currency transactions executed at the current market rate for
              spot settlement.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>

          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities on an institutional FX spot desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Make Markets</strong>
            <span>
              Price currencies and provide liquidity in supported currency
              pairs.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Risk</strong>
            <span>Monitor positions, inventory and market exposures.</span>
          </div>

          <div className="finance-card">
            <span>⚡</span>
            <strong>Execute Flow</strong>
            <span>Execute client and interdealer FX transactions.</span>
          </div>

          <div className="finance-card">
            <span>🌍</span>
            <strong>Monitor Markets</strong>
            <span>
              Track liquidity, spreads, news and changing market conditions.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>

          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions that interact with an FX spot trading desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>FX Sales</strong>
            <span>Connects client activity and market information with the trading desk.</span>
          </div>

          <div className="finance-card">
            <span>🛡️</span>
            <strong>Market Risk</strong>
            <span>Monitors market-risk exposures and risk limits.</span>
          </div>

          <div className="finance-card">
            <span>⚙️</span>
            <strong>Middle Office</strong>
            <span>Supports trade control, monitoring and exception management.</span>
          </div>

          <div className="finance-card">
            <span>🧮</span>
            <strong>Product Control</strong>
            <span>Supports valuation control and trading P&amp;L oversight.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations / Settlement</strong>
            <span>Supports post-trade processing and settlement.</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>

          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Market and post-trade infrastructure that helps FX transactions
              move from execution to settlement.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Trading Venues &amp; Market Connectivity</strong>
            <span>
              Electronic venues and connectivity support price discovery and
              trade execution.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data</strong>
            <span>
              Pricing and market information support trading and risk
              decisions.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Payment &amp; Settlement Infrastructure</strong>
            <span>
              Post-trade infrastructure supports the exchange and settlement
              of currencies.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function FunctionMap({
  item,
  goBack,
}: {
  item: CentralBankFunction;
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Central Bank
      </button>

      <header className="hero detail-hero">
        <div className="globe">{item.emoji}</div>

        <div>
          <p className="eyebrow">CENTRAL BANK FUNCTION</p>
          <h1>{item.label}</h1>

          <p className="intro">
            Explore the roles that support this central bank function.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">{item.emoji}</span>

          <div>
            <h2>{item.label} Roles</h2>
            <p>Common role families across central banks.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {item.roles.map((role) => (
            <div className="finance-card" key={role.title}>
              <span>{role.emoji}</span>

              <div>
                <strong>{role.title}</strong>
                <p>{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function App() {
  const [page, setPage] = useState<"system" | "central-bank" | "banks" | "global-markets" | "trading" | "fx-trading" | "fx-spot" | "fx-spot-trader" | "fx-forwards-swaps" | "fx-forward-swap-trader" | "fx-options" | "fx-options-trader" | "fx-em-ndf" | "fx-em-ndf-trader" | "fx-electronic" | "fx-electronic-trader" | "function">(
    "system"
  );

  const [selectedFunction, setSelectedFunction] =
    useState<CentralBankFunction | null>(null);

  if (page === "function" && selectedFunction) {
    return (
      <FunctionMap
        item={selectedFunction}
        goBack={() => setPage("central-bank")}
      />
    );
  }

  if (page === "fx-electronic-trader") {
    return (
      <ElectronicFXTraderMap
        goBack={() => setPage("fx-electronic")}
      />
    );
  }

  if (page === "fx-electronic") {
    return (
      <ElectronicFXMap
        goBack={() => setPage("fx-trading")}
        openTrader={() => setPage("fx-electronic-trader")}
      />
    );
  }

  if (page === "fx-em-ndf-trader") {
    return <EMFXNDFTraderMap goBack={() => setPage("fx-em-ndf")} />;
  }

  if (page === "fx-em-ndf") {
    return (
      <FXEMNDFMap
        goBack={() => setPage("fx-trading")}
        openTrader={() => setPage("fx-em-ndf-trader")}
      />
    );
  }

  if (page === "fx-options-trader") {
    return <FXOptionsTraderMap goBack={() => setPage("fx-options")} />;
  }

  if (page === "fx-options") {
    return (
      <FXOptionsMap
        goBack={() => setPage("fx-trading")}
        openTrader={() => setPage("fx-options-trader")}
      />
    );
  }

  if (page === "fx-forward-swap-trader") {
    return (
      <FXForwardSwapTraderMap
        goBack={() => setPage("fx-forwards-swaps")}
      />
    );
  }

  if (page === "fx-forwards-swaps") {
    return (
      <FXForwardsSwapsMap
        goBack={() => setPage("fx-trading")}
        openTrader={() => setPage("fx-forward-swap-trader")}
      />
    );
  }

  if (page === "fx-spot-trader") {
    return <FXSpotTraderMap goBack={() => setPage("fx-spot")} />;
  }

  if (page === "fx-spot") {
    return (
      <FXSpotMap
        goBack={() => setPage("fx-trading")}
        openSpotTrader={() => setPage("fx-spot-trader")}
      />
    );
  }

  if (page === "fx-trading") {
    return (
      <FXTradingMap
        goBack={() => setPage("trading")}
        openSpot={() => setPage("fx-spot")}
        openForwardsSwaps={() => setPage("fx-forwards-swaps")}
        openOptions={() => setPage("fx-options")}
        openEMNDF={() => setPage("fx-em-ndf")}
        openElectronicFX={() => setPage("fx-electronic")}
      />
    );
  }

  if (page === "trading") {
    return (
      <TradingMap
        goBack={() => setPage("global-markets")}
        openFX={() => setPage("fx-trading")}
      />
    );
  }

  if (page === "global-markets") {
    return (
      <GlobalMarketsMap
        goBack={() => setPage("banks")}
        openTrading={() => setPage("trading")}
      />
    );
  }

  if (page === "banks") {
    return (
      <BanksMap
        goBack={() => setPage("system")}
        openGlobalMarkets={() => setPage("global-markets")}
      />
    );
  }

  if (page === "central-bank") {
    return (
      <CentralBankMap
        goBack={() => setPage("system")}
        openFunction={(item) => {
          setSelectedFunction(item);
          setPage("function");
        }}
      />
    );
  }

  return (
    <FinancialSystemMap
      openCentralBank={() => setPage("central-bank")}
      openBanks={() => setPage("banks")}
      openFunction={(item) => {
        setSelectedFunction(item);
        setPage("function");
      }}
    />
  );
}

export default App;
