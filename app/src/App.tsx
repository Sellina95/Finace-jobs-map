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
        <a
          className="footer-link"
          href="https://github.com/Sellina95"
          target="_blank"
          rel="noreferrer"
        >
          <span>🐙</span>
          <strong>Sellina95</strong>
        </a>
        <a
          className="footer-link"
          href="https://github.com/Sellina95/Finace-jobs-map"
          target="_blank"
          rel="noreferrer"
        >
          <span>💻</span>
          <strong>GitHub Repository</strong>
        </a>
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

const financingDesks: Item[] = [
  { id: "financing-repo", emoji: "🏦", label: "Repo / Secured Financing" },
  { id: "financing-securities-lending", emoji: "🔄", label: "Securities Lending" },
  { id: "financing-equity", emoji: "📈", label: "Equity Finance" },
  { id: "financing-credit", emoji: "💳", label: "Credit Financing" },
  { id: "financing-cross-asset", emoji: "🧩", label: "Cross-Asset Financing" },
];

const researchStrategyAreas: Item[] = [
  { id: "research-macro", emoji: "🌍", label: "Macro / Economics Research" },
  { id: "research-fx", emoji: "💱", label: "FX Strategy" },
  { id: "research-rates", emoji: "📉", label: "Rates Strategy" },
  { id: "research-credit", emoji: "💳", label: "Credit Research / Strategy" },
  { id: "research-equity", emoji: "📈", label: "Equity Research / Strategy" },
  { id: "research-cross-asset", emoji: "🧩", label: "Cross-Asset Strategy" },
];

const structuringDesks: Item[] = [
  { id: "structuring-fx", emoji: "💱", label: "FX Structuring" },
  { id: "structuring-rates", emoji: "📉", label: "Rates Structuring" },
  { id: "structuring-credit", emoji: "💳", label: "Credit Structuring" },
  { id: "structuring-equity", emoji: "📈", label: "Equity Derivatives Structuring" },
  { id: "structuring-commodities", emoji: "🛢️", label: "Commodities Structuring" },
  { id: "structuring-cross-asset", emoji: "🧩", label: "Cross-Asset / Solutions Structuring" },
];

const salesDesks: Item[] = [
  { id: "sales-fx", emoji: "💱", label: "FX Sales" },
  { id: "sales-rates", emoji: "📉", label: "Rates Sales" },
  { id: "sales-credit", emoji: "💳", label: "Credit Sales" },
  { id: "sales-equities", emoji: "📈", label: "Equities Sales" },
  { id: "sales-commodities", emoji: "🛢️", label: "Commodities Sales" },
  { id: "sales-cross-asset", emoji: "🧩", label: "Cross-Asset / Solutions Sales" },
];

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
  openSales,
  openStructuring,
  openResearchStrategy,
  openFinancing,
  openMarketsCOO,
}: {
  goBack: () => void;
  openTrading: () => void;
  openSales: () => void;
  openStructuring: () => void;
  openResearchStrategy: () => void;
  openFinancing: () => void;
  openMarketsCOO: () => void;
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
                if (item.id === "sales") {
                  openSales();
                } else if (item.id === "trading") {
                  openTrading();
                } else if (item.id === "structuring") {
                  openStructuring();
                } else if (item.id === "research-strategy") {
                  openResearchStrategy();
                } else if (item.id === "financing") {
                  openFinancing();
                } else if (item.id === "markets-coo") {
                  openMarketsCOO();
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


const commoditiesTradingAreas: Item[] = [
  { id: "commodities-oil-energy", emoji: "🛢️", label: "Oil / Energy" },
  { id: "commodities-natural-gas", emoji: "🔥", label: "Natural Gas" },
  { id: "commodities-power", emoji: "⚡", label: "Power" },
  { id: "commodities-metals", emoji: "🥇", label: "Metals" },
  { id: "commodities-agriculture", emoji: "🌾", label: "Agricultural Commodities" },
];

const equitiesTradingAreas: Item[] = [
  { id: "equities-cash", emoji: "📊", label: "Cash Equities" },
  { id: "equities-derivatives", emoji: "🧩", label: "Equity Derivatives" },
  { id: "equities-index-etf", emoji: "🧺", label: "Index / ETF Trading" },
  { id: "equities-electronic", emoji: "⚡", label: "Electronic Equities" },
  { id: "equities-em", emoji: "🌍", label: "Emerging Markets Equities" },
];

const creditTradingAreas: Item[] = [
  { id: "credit-ig", emoji: "🏢", label: "Investment Grade Credit" },
  { id: "credit-hy", emoji: "⚡", label: "High Yield Credit" },
  { id: "credit-em", emoji: "🌍", label: "Emerging Markets Credit" },
  { id: "credit-derivatives", emoji: "🧩", label: "Credit Derivatives" },
  { id: "credit-electronic", emoji: "💻", label: "Electronic Credit" },
];

const ratesTradingAreas: Item[] = [
  { id: "rates-government-bonds", emoji: "🏛️", label: "Government Bonds" },
  { id: "rates-swaps", emoji: "🔁", label: "Interest Rate Swaps" },
  { id: "rates-futures-stir", emoji: "📅", label: "Rates Futures / STIR" },
  { id: "rates-options", emoji: "🧩", label: "Rates Options" },
  { id: "rates-electronic", emoji: "⚡", label: "Electronic Rates" },
];

const fxTradingAreas: Item[] = [
  { id: "fx-spot", emoji: "💵", label: "Spot" },
  { id: "fx-forwards-swaps", emoji: "🔁", label: "Forwards / FX Swaps" },
  { id: "fx-options", emoji: "🧩", label: "FX Options" },
  { id: "fx-em-ndf", emoji: "🌏", label: "EM / NDF" },
  { id: "fx-electronic", emoji: "⚡", label: "Electronic FX" },
];


















function MarketsCOOMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Global Markets
      </button>

      <header className="hero detail-hero">
        <div className="globe">⚙️</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS</p>
          <h1>Markets COO / Business Management</h1>
          <p className="intro">
            Explore roles that support the management, governance, planning
            and operating model of Global Markets businesses.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>Markets COO / Business Management Roles</h2>
            <p>
              Explore a representative role supporting the Global Markets business.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Markets Business Manager / COO</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const marketsBusinessManagerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Markets COO / Business Management"],
      ["⚙️", "Business Management", "Markets Business Manager / COO"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The business areas supported by this role.",
    cards: [
      [
        "🌍",
        "Multiple Financial Markets",
        "Supports Global Markets businesses operating across rates, FX, credit, equities, commodities and related products depending on the institution.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "The product businesses typically covered by the role.",
    cards: [
      [
        "📉",
        "Rates",
        "Supports business-management requirements across rates products and desks.",
      ],
      [
        "💱",
        "FX",
        "Supports business-management requirements across currency products and desks.",
      ],
      [
        "💳",
        "Credit",
        "Supports business-management requirements across credit products and desks.",
      ],
      [
        "📈",
        "Equities",
        "Supports business-management requirements across equity products and desks.",
      ],
      [
        "🛢️",
        "Commodities",
        "May support commodity businesses where included in the institution's Global Markets platform.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Markets COO / Business Management.",
    cards: [
      [
        "🧭",
        "Business Planning & Governance",
        "Supports business priorities, governance processes and management decision-making.",
      ],
      [
        "💰",
        "Resource & Budget Management",
        "Coordinates budgets, headcount, resources and other business-management requirements.",
      ],
      [
        "🔧",
        "Operating Model & Change",
        "Coordinates business initiatives, process improvements and change programs across functions.",
      ],
      [
        "📊",
        "Management Information",
        "Prepares and analyzes business metrics, performance information and management reporting.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Markets Business Manager / COO.",
    cards: [
      [
        "👔",
        "Global Markets Leadership",
        "Supports senior management with planning, governance and business priorities.",
      ],
      [
        "📈",
        "Sales, Trading & Structuring",
        "Works with front-office desks on business requirements, initiatives and operating issues.",
      ],
      [
        "💰",
        "Finance",
        "Coordinates budgeting, financial information and business-performance reporting.",
      ],
      [
        "🛡️",
        "Risk & Compliance",
        "Coordinates governance, controls, regulatory requirements and business initiatives.",
      ],
      [
        "⚙️",
        "Operations & Technology",
        "Coordinates processes, systems, infrastructure and change across the operating platform.",
      ],
      [
        "👥",
        "Human Resources",
        "Supports workforce planning and organizational requirements.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems supporting Markets business management.",
    cards: [
      [
        "📊",
        "Management Information Systems",
        "Provide business metrics, reporting and performance information.",
      ],
      [
        "💰",
        "Financial Planning Systems",
        "Support budgeting, expense management and resource planning.",
      ],
      [
        "🗂️",
        "Workflow & Project Tools",
        "Support initiatives, governance processes and cross-functional coordination.",
      ],
      [
        "🛡️",
        "Governance & Control Platforms",
        "Support issue tracking, controls, approvals and regulatory or governance processes.",
      ],
    ],
  },
];

function MarketsBusinessManagerMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Markets COO / Business Management"
      title="Markets Business Manager / COO"
      intro="Supports the management and operating model of Global Markets, coordinating planning, governance, resources, management information and cross-functional business initiatives."
      sections={marketsBusinessManagerSections}
      eyebrow="BUSINESS MANAGEMENT ROLE"
    />
  );
}

function FinancingMap({
  goBack,
  openRepo,
  openSecuritiesLending,
  openEquityFinance,
  openCreditFinancing,
  openCrossAssetFinancing,
}: {
  goBack: () => void;
  openRepo: () => void;
  openSecuritiesLending: () => void;
  openEquityFinance: () => void;
  openCreditFinancing: () => void;
  openCrossAssetFinancing: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Global Markets
      </button>

      <header className="hero detail-hero">
        <div className="globe">💼</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS</p>
          <h1>Financing / Securities Finance</h1>
          <p className="intro">
            Explore financing businesses that provide secured funding,
            securities borrowing and lending, and balance-sheet solutions
            across financial markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>Financing / Securities Finance</h2>
            <p>Select an area to explore its work and representative roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {financingDesks.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "financing-repo") {
                  openRepo();
                } else if (item.id === "financing-securities-lending") {
                  openSecuritiesLending();
                } else if (item.id === "financing-equity") {
                  openEquityFinance();
                } else if (item.id === "financing-credit") {
                  openCreditFinancing();
                } else if (item.id === "financing-cross-asset") {
                  openCrossAssetFinancing();
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





function CrossAssetFinancingMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financing / Securities Finance
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">FINANCING DESK</p>
          <h1>Cross-Asset Financing</h1>
          <p className="intro">
            Explore roles that coordinate financing solutions across
            multiple asset classes, collateral types and funding requirements.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Cross-Asset Financing Roles</h2>
            <p>Explore a representative role across multi-asset financing activity.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Cross-Asset Financing Specialist</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const crossAssetFinancingSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Financing / Securities Finance"],
      ["🧩", "Cross-Asset Financing", "Cross-Asset Financing Specialist"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets connected to cross-asset financing activity.",
    cards: [
      [
        "🌍",
        "Multiple Financing Markets",
        "Works across secured funding and securities-financing markets depending on asset class, collateral and client requirements.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core assets and financing structures commonly involved.",
    cards: [
      [
        "🏛️",
        "Government Securities",
        "Sovereign securities used in secured funding and collateralized transactions.",
      ],
      [
        "📈",
        "Equities",
        "Equity positions and securities used in financing and borrowing or lending activity.",
      ],
      [
        "💳",
        "Credit Securities",
        "Eligible corporate, sovereign and other credit assets used in financing activity.",
      ],
      [
        "🧱",
        "Collateralized Financing",
        "Financing arrangements supported by eligible collateral across asset classes.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Cross-Asset Financing.",
    cards: [
      [
        "🧩",
        "Develop Financing Solutions",
        "Evaluate financing structures across different securities, collateral types and funding requirements.",
      ],
      [
        "💵",
        "Price Financing",
        "Assess funding costs, collateral, liquidity, maturity and balance-sheet considerations.",
      ],
      [
        "🔗",
        "Coordinate Across Desks",
        "Connect financing requirements with relevant product, trading, treasury and securities-finance teams.",
      ],
      [
        "📊",
        "Manage Financing Risk",
        "Monitor market, funding, liquidity, collateral and counterparty exposures across transactions.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to Cross-Asset Financing.",
    cards: [
      [
        "🤝",
        "Sales / Client Coverage",
        "Coordinates broader institutional financing requirements.",
      ],
      [
        "📊",
        "Product Trading Desks",
        "Connects financing activity with securities inventory, pricing and market liquidity.",
      ],
      [
        "🔄",
        "Securities Finance Teams",
        "Coordinates repo, securities lending, equity finance and other financing capabilities.",
      ],
      [
        "💰",
        "Treasury",
        "Connects financing solutions with funding, liquidity and balance-sheet considerations.",
      ],
      [
        "🛡️",
        "Risk",
        "Monitors counterparty, collateral, market, funding and liquidity exposures.",
      ],
      [
        "⚙️",
        "Middle Office / Operations",
        "Supports booking, collateral, settlement and transaction lifecycle processes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems supporting cross-asset financing activity.",
    cards: [
      [
        "💻",
        "Financing & Trading Systems",
        "Support pricing, execution, booking and management across financing products.",
      ],
      [
        "🧱",
        "Collateral Management Systems",
        "Track collateral eligibility, valuation, margin and movement across asset classes.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides security prices, rates, reference data and financing-market information.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports movement and settlement of securities, collateral and cash.",
      ],
    ],
  },
];

function CrossAssetFinancingSpecialistMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cross-Asset Financing"
      title="Cross-Asset Financing Specialist"
      intro="Coordinates financing solutions across multiple asset classes, combining funding, collateral and securities-finance capabilities to support broader institutional requirements."
      sections={crossAssetFinancingSections}
      eyebrow="FINANCING ROLE"
    />
  );
}

function CreditFinancingMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financing / Securities Finance
      </button>

      <header className="hero detail-hero">
        <div className="globe">💳</div>
        <div>
          <p className="eyebrow">FINANCING DESK</p>
          <h1>Credit Financing</h1>
          <p className="intro">
            Explore roles that provide financing against credit securities
            and positions while managing collateral, funding and liquidity.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💳</span>
          <div>
            <h2>Credit Financing Roles</h2>
            <p>Explore a representative role in credit financing.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Credit Financing Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const creditFinancingTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Financing / Securities Finance"],
      ["💳", "Credit Financing", "Credit Financing Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets connected to credit-financing activity.",
    cards: [
      [
        "💳",
        "Credit & Secured Financing Markets",
        "Provides financing linked to eligible credit securities and positions across institutional markets.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core securities and financing exposures commonly involved.",
    cards: [
      [
        "🏢",
        "Corporate Bonds",
        "Eligible investment-grade and high-yield securities used in financing activity.",
      ],
      [
        "🌍",
        "Sovereign & EM Credit",
        "Eligible sovereign and emerging-market credit securities depending on desk mandate.",
      ],
      [
        "💵",
        "Secured Financing",
        "Funding provided against eligible credit securities or portfolios.",
      ],
      [
        "🧱",
        "Collateral",
        "Credit securities and other eligible assets used to support financing transactions.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Credit Financing.",
    cards: [
      [
        "💵",
        "Price Financing",
        "Evaluate financing terms based on collateral quality, liquidity, maturity, funding and market conditions.",
      ],
      [
        "🔁",
        "Execute Financing Transactions",
        "Arrange secured funding linked to eligible credit securities and positions.",
      ],
      [
        "🧱",
        "Manage Collateral & Funding",
        "Monitor collateral values, funding requirements and financing capacity.",
      ],
      [
        "📊",
        "Manage Financing Risk",
        "Monitor market, liquidity, counterparty, collateral and funding exposures associated with the book.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Credit Financing Trader.",
    cards: [
      [
        "🤝",
        "Sales / Client Coverage",
        "Coordinates institutional financing requirements and transaction activity.",
      ],
      [
        "💳",
        "Credit Trading",
        "Connects financing conditions with credit-security pricing, inventory and market liquidity.",
      ],
      [
        "💰",
        "Treasury",
        "Connects financing activity with bank funding, liquidity and balance-sheet considerations.",
      ],
      [
        "🛡️",
        "Risk",
        "Monitors counterparty, market, liquidity, collateral and concentration risks.",
      ],
      [
        "⚙️",
        "Middle Office / Operations",
        "Supports booking, collateral, settlement and transaction lifecycle processes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems supporting credit-financing activity.",
    cards: [
      [
        "💻",
        "Financing & Trading Systems",
        "Support pricing, execution, booking and management of credit-financing transactions.",
      ],
      [
        "🧱",
        "Collateral Management Systems",
        "Track collateral eligibility, valuation, margin and movement.",
      ],
      [
        "📡",
        "Credit & Market Data",
        "Provides security prices, spreads, ratings, reference data and financing-market information.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports movement and settlement of securities, collateral and cash.",
      ],
    ],
  },
];

function CreditFinancingTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Credit Financing"
      title="Credit Financing Trader"
      intro="Provides financing linked to credit securities and positions, pricing secured funding while managing collateral, liquidity, funding and associated risks."
      sections={creditFinancingTraderSections}
      eyebrow="FINANCING ROLE"
    />
  );
}

function EquityFinanceMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financing / Securities Finance
      </button>

      <header className="hero detail-hero">
        <div className="globe">📈</div>
        <div>
          <p className="eyebrow">FINANCING DESK</p>
          <h1>Equity Finance</h1>
          <p className="intro">
            Explore roles that provide financing, inventory and securities
            solutions linked to equity-market activity.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>Equity Finance Roles</h2>
            <p>Explore a representative role in equity financing.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Equity Finance Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const equityFinanceTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Financing / Securities Finance"],
      ["📈", "Equity Finance", "Equity Finance Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets connected to equity financing activity.",
    cards: [
      [
        "📈",
        "Equity & Securities Financing Markets",
        "Supports financing and securities activity linked to institutional equity positions, inventory and market liquidity.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core products and exposures commonly involved in equity finance.",
    cards: [
      [
        "📈",
        "Equity Securities",
        "Listed shares used in financing, inventory and securities-borrowing activity.",
      ],
      [
        "🔄",
        "Stock Borrow / Loan",
        "Borrowing and lending arrangements supporting equity positions and market activity.",
      ],
      [
        "💵",
        "Equity Financing",
        "Financing arrangements supported by equity positions or related collateral.",
      ],
      [
        "🧱",
        "Collateral",
        "Cash and eligible securities used to secure financing transactions.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Equity Finance.",
    cards: [
      [
        "💵",
        "Price Financing",
        "Evaluate financing terms based on inventory, collateral, liquidity, funding and market conditions.",
      ],
      [
        "📦",
        "Manage Equity Inventory",
        "Monitor securities availability, demand and utilization across financing activity.",
      ],
      [
        "🔄",
        "Coordinate Borrow & Loan",
        "Connect equity financing requirements with securities borrowing and lending activity.",
      ],
      [
        "📊",
        "Manage Financing Risk",
        "Monitor market, funding, liquidity, collateral and counterparty exposures associated with the book.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an Equity Finance Trader.",
    cards: [
      [
        "🤝",
        "Sales / Client Coverage",
        "Coordinates institutional financing and securities requirements.",
      ],
      [
        "🔄",
        "Securities Lending",
        "Coordinates stock availability, borrow demand and lending activity.",
      ],
      [
        "📊",
        "Equity Trading",
        "Connects financing and inventory conditions with broader equity-market activity.",
      ],
      [
        "💰",
        "Treasury",
        "Connects financing activity with funding, liquidity and balance-sheet considerations.",
      ],
      [
        "🛡️",
        "Risk",
        "Monitors counterparty, market, liquidity and collateral-related exposures.",
      ],
      [
        "⚙️",
        "Middle Office / Operations",
        "Supports booking, collateral, settlement and transaction lifecycle processes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems supporting equity-financing activity.",
    cards: [
      [
        "💻",
        "Equity Finance Systems",
        "Support pricing, execution, booking and management of financing transactions.",
      ],
      [
        "📦",
        "Inventory & Position Systems",
        "Track equity positions, securities availability, utilization and financing demand.",
      ],
      [
        "🧱",
        "Collateral Management Systems",
        "Support collateral valuation, margin and movement.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports movement and settlement of securities, collateral and cash.",
      ],
    ],
  },
];

function EquityFinanceTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Equity Finance"
      title="Equity Finance Trader"
      intro="Provides financing and securities solutions linked to equity positions, managing inventory, funding, collateral and borrowing or lending activity."
      sections={equityFinanceTraderSections}
      eyebrow="FINANCING ROLE"
    />
  );
}

function SecuritiesLendingMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financing / Securities Finance
      </button>

      <header className="hero detail-hero">
        <div className="globe">🔄</div>
        <div>
          <p className="eyebrow">FINANCING DESK</p>
          <h1>Securities Lending</h1>
          <p className="intro">
            Explore roles that facilitate the borrowing and lending of
            securities to support liquidity, settlement and investment strategies.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔄</span>
          <div>
            <h2>Securities Lending Roles</h2>
            <p>Explore a representative role in securities lending markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Securities Lending Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const securitiesLendingTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Financing / Securities Finance"],
      ["🔄", "Securities Lending", "Securities Lending Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market activity supported by securities lending.",
    cards: [
      [
        "🔄",
        "Securities Lending Market",
        "Facilitates temporary borrowing and lending of securities across institutional markets.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core securities and transactions commonly involved.",
    cards: [
      [
        "📈",
        "Equity Securities",
        "Listed shares borrowed and lent across supported markets.",
      ],
      [
        "🏛️",
        "Government Securities",
        "Sovereign securities used in borrowing, lending and collateral activity.",
      ],
      [
        "💳",
        "Fixed-Income Securities",
        "Eligible bonds and other fixed-income securities available for lending.",
      ],
      [
        "🧱",
        "Collateral",
        "Cash or eligible securities exchanged to secure lending transactions.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Securities Lending.",
    cards: [
      [
        "💵",
        "Price Securities Loans",
        "Evaluate lending fees and terms based on supply, demand, liquidity and security availability.",
      ],
      [
        "🔄",
        "Execute Borrowing & Lending",
        "Arrange securities loans between market participants and available inventory.",
      ],
      [
        "📦",
        "Manage Inventory",
        "Monitor securities availability, demand and utilization across the lending book.",
      ],
      [
        "🧱",
        "Manage Collateral & Risk",
        "Monitor collateral, counterparty exposure and transaction requirements.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Securities Lending Trader.",
    cards: [
      [
        "🤝",
        "Sales / Client Coverage",
        "Coordinates institutional borrowing and lending requirements.",
      ],
      [
        "📈",
        "Equity Finance",
        "Coordinates inventory, financing and related equity-market activity.",
      ],
      [
        "📊",
        "Trading Desks",
        "Connects securities availability and financing conditions with market activity.",
      ],
      [
        "🛡️",
        "Risk",
        "Monitors counterparty, collateral, liquidity and market-related exposures.",
      ],
      [
        "⚙️",
        "Middle Office / Operations",
        "Supports collateral, settlement, recalls and transaction lifecycle processes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems supporting securities lending activity.",
    cards: [
      [
        "💻",
        "Securities Lending Platforms",
        "Support pricing, execution, inventory management and transaction booking.",
      ],
      [
        "📦",
        "Inventory Systems",
        "Track available securities, positions, utilization and lending demand.",
      ],
      [
        "🧱",
        "Collateral Management Systems",
        "Support collateral valuation, margin and movement.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports movement and settlement of securities, collateral and cash.",
      ],
    ],
  },
];

function SecuritiesLendingTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Securities Lending"
      title="Securities Lending Trader"
      intro="Facilitates the borrowing and lending of securities, pricing loans and managing inventory, collateral and market demand across institutional financing activity."
      sections={securitiesLendingTraderSections}
      eyebrow="FINANCING ROLE"
    />
  );
}

function RepoFinancingMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Financing / Securities Finance
      </button>

      <header className="hero detail-hero">
        <div className="globe">🏦</div>
        <div>
          <p className="eyebrow">FINANCING DESK</p>
          <h1>Repo / Secured Financing</h1>
          <p className="intro">
            Explore roles that provide secured funding and liquidity using
            securities as collateral.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🏦</span>
          <div>
            <h2>Repo / Secured Financing Roles</h2>
            <p>Explore a representative role in secured financing markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Repo / Financing Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const repoFinancingTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Financing / Securities Finance"],
      ["🏦", "Repo / Secured Financing", "Repo / Financing Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which secured financing activity takes place.",
    cards: [
      [
        "💰",
        "Money & Secured Funding Markets",
        "Provides short-term and other secured financing using eligible securities as collateral.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core secured-financing products and exposures.",
    cards: [
      [
        "🔁",
        "Repurchase Agreements",
        "Secured funding transactions in which securities are sold with an agreement to repurchase them.",
      ],
      [
        "🏛️",
        "Government-Securities Financing",
        "Financing and liquidity activity backed by government securities.",
      ],
      [
        "🧱",
        "Collateralized Financing",
        "Funding transactions supported by eligible securities and collateral arrangements.",
      ],
      [
        "📅",
        "Term & Overnight Funding",
        "Secured financing across different maturities depending on client and balance-sheet needs.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Repo / Secured Financing.",
    cards: [
      [
        "💵",
        "Price Financing",
        "Quote and evaluate secured funding transactions based on collateral, maturity, liquidity and market conditions.",
      ],
      [
        "🔁",
        "Execute Repo Transactions",
        "Manage borrowing and lending activity through secured financing markets.",
      ],
      [
        "🧱",
        "Manage Collateral & Funding",
        "Monitor collateral requirements, funding needs and securities availability.",
      ],
      [
        "📊",
        "Manage Market Risk",
        "Monitor rates, spreads, liquidity and other risks associated with the financing book.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Repo / Financing Trader.",
    cards: [
      [
        "🤝",
        "Sales / Client Coverage",
        "Coordinates client financing needs and transaction activity.",
      ],
      [
        "📊",
        "Rates & Other Trading Desks",
        "Coordinates securities inventory, market liquidity and related trading activity.",
      ],
      [
        "💰",
        "Treasury",
        "Connects financing activity with bank funding, liquidity and balance-sheet considerations.",
      ],
      [
        "🛡️",
        "Risk",
        "Monitors counterparty, market, liquidity and collateral-related risk.",
      ],
      [
        "⚙️",
        "Middle Office / Operations",
        "Supports confirmations, collateral processes, settlement and transaction lifecycle management.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems supporting secured financing activity.",
    cards: [
      [
        "💻",
        "Trading & Financing Systems",
        "Support pricing, execution, booking and management of financing transactions.",
      ],
      [
        "🧱",
        "Collateral Management Systems",
        "Track collateral eligibility, valuation, margin and movement.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides rates, security prices, reference data and financing-market information.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports clearing, collateral movement and settlement of securities and cash.",
      ],
    ],
  },
];

function RepoFinancingTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Repo / Secured Financing"
      title="Repo / Financing Trader"
      intro="Provides secured funding and liquidity using securities as collateral, pricing and managing repo transactions while coordinating funding, collateral and balance-sheet requirements."
      sections={repoFinancingTraderSections}
      eyebrow="FINANCING ROLE"
    />
  );
}

function ResearchStrategyMap({
  goBack,
  openMacroResearch,
  openFXStrategy,
  openRatesStrategy,
  openCreditStrategy,
  openEquityStrategy,
  openCrossAssetStrategy,
}: {
  goBack: () => void;
  openMacroResearch: () => void;
  openFXStrategy: () => void;
  openRatesStrategy: () => void;
  openCreditStrategy: () => void;
  openEquityStrategy: () => void;
  openCrossAssetStrategy: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Global Markets
      </button>

      <header className="hero detail-hero">
        <div className="globe">🔬</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS</p>
          <h1>Research / Strategy</h1>
          <p className="intro">
            Explore research and strategy roles that analyze economies,
            markets, asset classes and cross-market relationships.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔬</span>
          <div>
            <h2>Research / Strategy Areas</h2>
            <p>Select an area to explore its representative roles.</p>
          </div>
        </div>

        <div className="cards function-cards">
          {researchStrategyAreas.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "research-macro") {
                  openMacroResearch();
                } else if (item.id === "research-fx") {
                  openFXStrategy();
                } else if (item.id === "research-rates") {
                  openRatesStrategy();
                } else if (item.id === "research-credit") {
                  openCreditStrategy();
                } else if (item.id === "research-equity") {
                  openEquityStrategy();
                } else if (item.id === "research-cross-asset") {
                  openCrossAssetStrategy();
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






function CrossAssetStrategyMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Research / Strategy
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS RESEARCH</p>
          <h1>Cross-Asset Strategy</h1>
          <p className="intro">
            Explore roles that analyze relationships across asset classes,
            macro themes and broader global financial-market conditions.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Cross-Asset Strategy Roles</h2>
            <p>Explore a representative strategy role across multiple markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Cross-Asset Strategist</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const crossAssetStrategistSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Research / Strategy"],
      ["🧩", "Cross-Asset Strategy", "Cross-Asset Strategist"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role analyzes.",
    cards: [
      [
        "🌍",
        "Multiple Financial Markets",
        "Analyzes relationships across rates, FX, credit, equities, commodities and related derivatives depending on the strategy mandate.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core market exposures commonly analyzed across asset classes.",
    cards: [
      [
        "📉",
        "Rates",
        "Government bonds, yield curves, monetary-policy expectations and related rates markets.",
      ],
      [
        "💱",
        "FX",
        "Currencies, cross-border flows and relationships between exchange rates and macro conditions.",
      ],
      [
        "💳",
        "Credit",
        "Credit spreads, financing conditions and corporate or sovereign credit markets.",
      ],
      [
        "📈",
        "Equities",
        "Equity indices, sectors, valuation and broader equity-market conditions.",
      ],
      [
        "🛢️",
        "Commodities",
        "Energy, metals and other commodity markets relevant to global macro and cross-asset themes.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Cross-Asset Strategy.",
    cards: [
      [
        "🌍",
        "Analyze Global Themes",
        "Assess macroeconomic, policy and market developments that affect multiple asset classes.",
      ],
      [
        "🔗",
        "Study Cross-Market Relationships",
        "Analyze how rates, currencies, credit, equities and commodities interact across market regimes.",
      ],
      [
        "🧠",
        "Develop Cross-Asset Views",
        "Build evidence-based views on relative performance, market themes, risks and scenarios.",
      ],
      [
        "📝",
        "Communicate Strategy",
        "Produce research, charts, presentations and market commentary that connect developments across markets.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Cross-Asset Strategist.",
    cards: [
      [
        "🌍",
        "Macro Research / Economists",
        "Provides economic and policy analysis underlying broader market themes.",
      ],
      [
        "🔬",
        "Asset-Class Strategists",
        "Contribute specialized views across rates, FX, credit, equities and commodities.",
      ],
      [
        "🤝",
        "Sales",
        "Uses cross-market research and strategy in discussions with clients.",
      ],
      [
        "📊",
        "Trading Desks",
        "Provide real-time market, liquidity, flow and positioning context across products.",
      ],
      [
        "🧩",
        "Structuring",
        "Uses cross-market analysis when evaluating multi-asset products and solutions.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Data and systems supporting cross-asset strategy activity.",
    cards: [
      [
        "📡",
        "Cross-Asset Market Data",
        "Provides prices, curves, spreads, volatility and other information across financial markets.",
      ],
      [
        "🌍",
        "Economic & Policy Data",
        "Provides macroeconomic releases, central-bank information and broader policy developments.",
      ],
      [
        "💻",
        "Research & Analytics Tools",
        "Support statistical analysis, cross-market comparison, modeling and visualization.",
      ],
      [
        "📚",
        "Research Distribution Systems",
        "Support publication and distribution of strategy output.",
      ],
    ],
  },
];

function CrossAssetStrategistMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cross-Asset Strategy"
      title="Cross-Asset Strategist"
      intro="Analyzes relationships across asset classes and global market themes to develop and communicate evidence-based views on cross-market conditions, risks and scenarios."
      sections={crossAssetStrategistSections}
      eyebrow="RESEARCH / STRATEGY ROLE"
    />
  );
}

function EquityStrategyMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Research / Strategy
      </button>

      <header className="hero detail-hero">
        <div className="globe">📈</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS RESEARCH</p>
          <h1>Equity Research / Strategy</h1>
          <p className="intro">
            Explore roles that analyze companies, sectors, earnings,
            valuation and broader equity-market conditions.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>Equity Research / Strategy Roles</h2>
            <p>Explore a representative research and strategy role in equity markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Equity Strategist / Analyst</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const equityStrategistSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Research / Strategy"],
      ["📈", "Equity Research / Strategy", "Equity Strategist / Analyst"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market this role primarily analyzes.",
    cards: [
      [
        "📈",
        "Equity Markets",
        "Analyzes listed companies, sectors, indices and broader equity-market conditions.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core equity exposures commonly analyzed.",
    cards: [
      [
        "🏢",
        "Listed Equities",
        "Publicly traded companies analyzed through fundamentals, earnings, valuation and market conditions.",
      ],
      [
        "🧭",
        "Sectors & Industries",
        "Groups of companies analyzed through shared economic, competitive and industry drivers.",
      ],
      [
        "🧺",
        "Equity Indices",
        "Broad and sector indices used to assess market performance, valuation and positioning.",
      ],
      [
        "🌍",
        "Regional Equity Markets",
        "Equity markets across developed and emerging regions depending on research coverage.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Equity Research / Strategy.",
    cards: [
      [
        "🏢",
        "Analyze Companies & Sectors",
        "Evaluate business fundamentals, industry conditions, earnings and competitive dynamics.",
      ],
      [
        "📐",
        "Analyze Valuation",
        "Assess valuation measures and relationships across companies, sectors and markets.",
      ],
      [
        "🧠",
        "Develop Equity Views",
        "Build evidence-based views on companies, sectors, market themes and broader equity conditions.",
      ],
      [
        "📝",
        "Communicate Research",
        "Produce research, charts, presentations and market commentary for relevant audiences.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to Equity Research / Strategy.",
    cards: [
      [
        "🤝",
        "Equities Sales",
        "Uses company, sector and market research in discussions with clients.",
      ],
      [
        "📊",
        "Equity Trading",
        "Shares real-time market, liquidity, flow and positioning information.",
      ],
      [
        "🧩",
        "Equity Derivatives Structuring",
        "Uses equity and market analysis when evaluating relevant products and structures.",
      ],
      [
        "🌍",
        "Economists / Macro Strategy",
        "Connects equity views with growth, inflation, policy and broader economic conditions.",
      ],
      [
        "🔬",
        "Other Research Teams",
        "Collaborates across sectors, regions and asset classes on shared market themes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Data and systems supporting equity research activity.",
    cards: [
      [
        "📑",
        "Company & Fundamental Data",
        "Provides financial statements, earnings, estimates, disclosures and company information.",
      ],
      [
        "📡",
        "Equity Market Data",
        "Provides prices, indices, valuation measures, volumes and other market information.",
      ],
      [
        "💻",
        "Research & Analytics Tools",
        "Support financial analysis, valuation work, modeling and visualization.",
      ],
      [
        "📚",
        "Research Distribution Systems",
        "Support publication and distribution of research output.",
      ],
    ],
  },
];

function EquityStrategistMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Equity Research / Strategy"
      title="Equity Strategist / Analyst"
      intro="Analyzes companies, sectors, earnings, valuation and broader market conditions to develop and communicate evidence-based views on equity markets."
      sections={equityStrategistSections}
      eyebrow="RESEARCH / STRATEGY ROLE"
    />
  );
}

function CreditStrategyMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Research / Strategy
      </button>

      <header className="hero detail-hero">
        <div className="globe">💳</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS RESEARCH</p>
          <h1>Credit Research / Strategy</h1>
          <p className="intro">
            Explore roles that analyze issuers, sectors, credit conditions,
            spreads and relative value across credit markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💳</span>
          <div>
            <h2>Credit Research / Strategy Roles</h2>
            <p>Explore a representative research and strategy role in credit markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Credit Strategist / Analyst</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const creditStrategistSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Research / Strategy"],
      ["💳", "Credit Research / Strategy", "Credit Strategist / Analyst"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role primarily analyzes.",
    cards: [
      [
        "💳",
        "Credit Markets",
        "Analyzes corporate, sovereign and other supported credit markets, including spreads, fundamentals and financing conditions.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core credit instruments and exposures commonly analyzed.",
    cards: [
      [
        "🏢",
        "Investment Grade Credit",
        "Corporate bonds and credit exposures associated with higher-rated issuers.",
      ],
      [
        "⚡",
        "High Yield Credit",
        "Corporate bonds and credit exposures associated with lower-rated issuers.",
      ],
      [
        "🌍",
        "Emerging Markets Credit",
        "Sovereign and corporate credit exposures across supported emerging markets.",
      ],
      [
        "🧩",
        "Credit Derivatives",
        "Single-name CDS, credit indices and related derivative-market information.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in Credit Research / Strategy.",
    cards: [
      [
        "🏢",
        "Analyze Issuers & Sectors",
        "Evaluate company, sovereign and sector fundamentals relevant to creditworthiness and market pricing.",
      ],
      [
        "📊",
        "Analyze Credit Markets",
        "Study spreads, curves, default expectations, liquidity, positioning and relative-value relationships.",
      ],
      [
        "🧠",
        "Develop Credit Views",
        "Build evidence-based views on credit themes, risks, sectors and market scenarios.",
      ],
      [
        "📝",
        "Communicate Research",
        "Produce research, charts, presentations and market commentary for relevant audiences.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to Credit Research / Strategy.",
    cards: [
      [
        "🤝",
        "Credit Sales",
        "Uses issuer, sector and strategy analysis in discussions with clients.",
      ],
      [
        "📊",
        "Credit Trading",
        "Shares real-time spread, liquidity, flow and positioning information.",
      ],
      [
        "🧩",
        "Credit Structuring",
        "Uses credit analysis and market context when evaluating relevant structures.",
      ],
      [
        "🌍",
        "Economists / Macro Strategy",
        "Connects credit conditions with growth, policy and broader financing conditions.",
      ],
      [
        "🔬",
        "Other Research Teams",
        "Collaborates across sectors, regions and asset classes on shared market themes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Data and systems supporting credit research activity.",
    cards: [
      [
        "📡",
        "Credit & Market Data",
        "Provides bond prices, spreads, curves, CDS data, ratings and other market information.",
      ],
      [
        "📑",
        "Issuer & Fundamental Data",
        "Provides financial statements, disclosures and other issuer or sovereign information.",
      ],
      [
        "💻",
        "Research & Analytics Tools",
        "Support fundamental analysis, relative-value work, modeling and visualization.",
      ],
      [
        "📚",
        "Research Distribution Systems",
        "Support publication and distribution of research output.",
      ],
    ],
  },
];

function CreditStrategistMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Credit Research / Strategy"
      title="Credit Strategist / Analyst"
      intro="Analyzes issuers, sectors, credit spreads and financing conditions to develop and communicate evidence-based views on credit markets and relative value."
      sections={creditStrategistSections}
      eyebrow="RESEARCH / STRATEGY ROLE"
    />
  );
}

function RatesStrategyMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Research / Strategy
      </button>

      <header className="hero detail-hero">
        <div className="globe">📉</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS RESEARCH</p>
          <h1>Rates Strategy</h1>
          <p className="intro">
            Explore roles that analyze interest rates, monetary policy,
            yield curves and fixed-income market relationships.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📉</span>
          <div>
            <h2>Rates Strategy Roles</h2>
            <p>Explore a representative strategy role in rates markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Rates Strategist</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const ratesStrategistSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Research / Strategy"],
      ["📉", "Rates Strategy", "Rates Strategist"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role primarily analyzes.",
    cards: [
      [
        "📉",
        "Interest Rate Markets",
        "Analyzes government bonds, yield curves, monetary-policy expectations and related rates derivatives.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core rates instruments and exposures commonly analyzed.",
    cards: [
      [
        "🏛️",
        "Government Bonds",
        "Sovereign bond yields, curves, spreads and relative-value relationships.",
      ],
      [
        "🔁",
        "Interest Rate Swaps",
        "Swap curves, spreads and expectations embedded in derivatives markets.",
      ],
      [
        "📅",
        "Rates Futures / STIR",
        "Futures and short-term interest-rate markets reflecting policy and rate expectations.",
      ],
      [
        "🧩",
        "Rates Options",
        "Volatility and option-market information across supported rates products.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a Rates Strategy role.",
    cards: [
      [
        "🏛️",
        "Analyze Policy & Macro Drivers",
        "Assess monetary policy, inflation, growth and fiscal developments affecting interest rates.",
      ],
      [
        "📊",
        "Analyze Curves & Markets",
        "Study yield curves, spreads, positioning, volatility and relative-value relationships.",
      ],
      [
        "🧠",
        "Develop Market Views",
        "Build evidence-based views on rates themes, risks and market scenarios.",
      ],
      [
        "📝",
        "Communicate Research",
        "Produce research, charts, presentations and market commentary for relevant audiences.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Rates Strategist.",
    cards: [
      [
        "🤝",
        "Rates Sales",
        "Uses strategy and market analysis in discussions with clients.",
      ],
      [
        "📊",
        "Rates Trading",
        "Shares real-time market observations, liquidity conditions and positioning context.",
      ],
      [
        "🧩",
        "Rates Structuring",
        "Uses rates, curve and volatility analysis when evaluating relevant structures.",
      ],
      [
        "🌍",
        "Economists / Macro Strategy",
        "Connects rates views with monetary policy, inflation, growth and fiscal developments.",
      ],
      [
        "🔬",
        "Other Asset Strategists",
        "Collaborates on cross-market relationships involving FX, credit, equities and commodities.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Data and systems supporting Rates Strategy activity.",
    cards: [
      [
        "📡",
        "Rates & Macro Market Data",
        "Provides bond yields, curves, swap rates, futures, volatility and macroeconomic datasets.",
      ],
      [
        "💻",
        "Research & Analytics Tools",
        "Support curve analysis, statistical work, modeling and visualization.",
      ],
      [
        "📰",
        "News & Policy Information",
        "Provides central-bank communication, fiscal developments and real-time market information.",
      ],
      [
        "📚",
        "Research Distribution Systems",
        "Support publication and distribution of strategy output.",
      ],
    ],
  },
];

function RatesStrategistMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Rates Strategy"
      title="Rates Strategist"
      intro="Analyzes monetary policy, yield curves and interest-rate markets to develop and communicate evidence-based views on rates, relative value and market scenarios."
      sections={ratesStrategistSections}
      eyebrow="RESEARCH / STRATEGY ROLE"
    />
  );
}

function FXStrategyMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Research / Strategy
      </button>

      <header className="hero detail-hero">
        <div className="globe">💱</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS RESEARCH</p>
          <h1>FX Strategy</h1>
          <p className="intro">
            Explore roles that analyze currencies, macroeconomic drivers,
            policy and cross-border market relationships.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💱</span>
          <div>
            <h2>FX Strategy Roles</h2>
            <p>Explore a representative strategy role in currency markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>FX Strategist</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const fxStrategistSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Research / Strategy"],
      ["💱", "FX Strategy", "FX Strategist"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market this role primarily analyzes.",
    cards: [
      [
        "💱",
        "Foreign Exchange Market",
        "Analyzes currencies and their relationships with monetary policy, macroeconomic conditions and global capital flows.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core FX instruments and exposures commonly analyzed.",
    cards: [
      [
        "💵",
        "FX Spot",
        "Currency pairs and spot-market price movements.",
      ],
      [
        "🔁",
        "Forwards & FX Swaps",
        "Forward pricing, carry, funding and cross-currency relationships.",
      ],
      [
        "🧩",
        "FX Options",
        "Volatility, option-market pricing and related currency risk measures.",
      ],
      [
        "🌏",
        "EM FX / NDFs",
        "Deliverable and non-deliverable currencies across supported emerging markets.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in an FX Strategy role.",
    cards: [
      [
        "🌍",
        "Analyze Macro Drivers",
        "Assess growth, inflation, monetary policy, capital flows and other forces affecting currencies.",
      ],
      [
        "📊",
        "Analyze FX Markets",
        "Study valuation, positioning, carry, volatility and cross-currency relationships.",
      ],
      [
        "🧠",
        "Develop Market Views",
        "Build evidence-based views on currency themes, risks and market scenarios.",
      ],
      [
        "📝",
        "Communicate Research",
        "Produce research, charts, presentations and market commentary for relevant audiences.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an FX Strategist.",
    cards: [
      [
        "🤝",
        "FX Sales",
        "Uses strategy and market analysis in discussions with clients.",
      ],
      [
        "📊",
        "FX Trading",
        "Shares real-time market observations, liquidity conditions and positioning context.",
      ],
      [
        "🧩",
        "FX Structuring",
        "Uses currency and volatility analysis when evaluating relevant structures.",
      ],
      [
        "🌍",
        "Economists / Macro Strategy",
        "Connects currency views with monetary policy and broader macroeconomic developments.",
      ],
      [
        "🔬",
        "Other Asset Strategists",
        "Collaborates on cross-market relationships involving rates, credit, equities and commodities.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Data and systems supporting FX Strategy activity.",
    cards: [
      [
        "📡",
        "FX & Macro Market Data",
        "Provides currency prices, forward points, volatility, rates and macroeconomic datasets.",
      ],
      [
        "💻",
        "Research & Analytics Tools",
        "Support statistical analysis, valuation work, modeling and visualization.",
      ],
      [
        "📰",
        "News & Policy Information",
        "Provides central-bank communication, economic developments and real-time market information.",
      ],
      [
        "📚",
        "Research Distribution Systems",
        "Support publication and distribution of strategy output.",
      ],
    ],
  },
];

function FXStrategistMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="FX Strategy"
      title="FX Strategist"
      intro="Analyzes currencies, macroeconomic drivers and cross-border market relationships to develop and communicate evidence-based views on foreign-exchange markets."
      sections={fxStrategistSections}
      eyebrow="RESEARCH / STRATEGY ROLE"
    />
  );
}

function MacroResearchMap({
  goBack,
  openRole,
}: {
  goBack: () => void;
  openRole: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Research / Strategy
      </button>

      <header className="hero detail-hero">
        <div className="globe">🌍</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS RESEARCH</p>
          <h1>Macro / Economics Research</h1>
          <p className="intro">
            Explore roles that analyze economic conditions, policy,
            financial markets and their transmission across asset classes.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🌍</span>
          <div>
            <h2>Macro / Economics Research Roles</h2>
            <p>Explore a representative macro research role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openRole}>
            <span>👤</span>
            <strong>Macro Strategist / Economist</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const macroStrategistSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Research / Strategy"],
      ["🌍", "Macro / Economics Research", "Macro Strategist / Economist"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets and economic environment analyzed by the role.",
    cards: [
      [
        "🌍",
        "Global Economy & Financial Markets",
        "Analyzes macroeconomic conditions and their transmission across rates, FX, credit, equities and other financial markets.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "The market exposures and instruments commonly analyzed.",
    cards: [
      ["📉", "Rates", "Government bonds, yield curves and monetary-policy-sensitive markets."],
      ["💱", "FX", "Currencies and their relationships with growth, inflation, policy and capital flows."],
      ["💳", "Credit", "Credit conditions and spreads as indicators of financing conditions and risk."],
      ["📈", "Equities", "Equity markets viewed through macroeconomic, earnings and valuation conditions."],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in macro and economics research.",
    cards: [
      [
        "📊",
        "Analyze Economic Data",
        "Interpret growth, inflation, labor, activity and other macroeconomic indicators.",
      ],
      [
        "🏛️",
        "Assess Policy",
        "Analyze central-bank, fiscal and other policy developments and their market implications.",
      ],
      [
        "🧠",
        "Develop Market Views",
        "Build evidence-based views on economic regimes, market themes and transmission across assets.",
      ],
      [
        "📝",
        "Communicate Research",
        "Produce research, charts, presentations and market commentary for internal or external audiences.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to macro and economics research.",
    cards: [
      ["🤝", "Sales", "Uses research and market views in discussions with clients."],
      ["📊", "Trading", "Shares market observations, positioning context and real-time price information."],
      ["🔬", "Product Strategists", "Connect macro themes with specific asset classes and market structures."],
      ["🧩", "Structuring", "Uses macro and market context when developing relevant client solutions."],
      ["📚", "Research Teams", "Collaborates with economists, strategists and analysts across regions and products."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Data and systems supporting macro research activity.",
    cards: [
      [
        "📡",
        "Economic & Market Data",
        "Provides macroeconomic releases, market prices, curves and historical datasets.",
      ],
      [
        "💻",
        "Research & Analytics Tools",
        "Support statistical analysis, modeling, visualization and scenario analysis.",
      ],
      [
        "📰",
        "News & Policy Information",
        "Provides central-bank communication, policy developments and real-time market information.",
      ],
      [
        "📚",
        "Research Distribution Systems",
        "Support publication, internal communication and distribution of research output.",
      ],
    ],
  },
];

function MacroStrategistMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Macro / Economics Research"
      title="Macro Strategist / Economist"
      intro="Analyzes economic conditions, policy developments and cross-market relationships to explain how macroeconomic forces may transmit through financial markets."
      sections={macroStrategistSections}
      eyebrow="RESEARCH / STRATEGY ROLE"
    />
  );
}

function CrossAssetStructuringMap({
  goBack,
  openStructurer,
}: {
  goBack: () => void;
  openStructurer: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Structuring
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS STRUCTURING</p>
          <h1>Cross-Asset / Solutions Structuring</h1>
          <p className="intro">
            Explore roles that design solutions spanning multiple asset classes,
            products and Global Markets capabilities.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Cross-Asset / Solutions Structuring Roles</h2>
            <p>
              Explore a representative structuring role spanning multiple
              markets and product areas.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openStructurer}>
            <span>👤</span>
            <strong>Cross-Asset Structurer</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const crossAssetStructurerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Structuring"],
      [
        "🧩",
        "Cross-Asset / Solutions Structuring",
        "Cross-Asset Structurer",
      ],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role may support.",
    cards: [
      [
        "🌍",
        "Multiple Financial Markets",
        "Structuring activity may span rates, FX, credit, equities, commodities and related derivatives depending on the desk mandate.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Product coverage may span multiple asset classes.",
    cards: [
      [
        "📉",
        "Rates",
        "Interest-rate instruments and derivatives used within supported structures.",
      ],
      [
        "💱",
        "FX",
        "Currencies and FX derivatives used within supported structures.",
      ],
      [
        "💳",
        "Credit",
        "Credit instruments and derivatives where included in the desk mandate.",
      ],
      [
        "📈",
        "Equity-Linked Products",
        "Equity and index-linked derivatives used within supported structures.",
      ],
      [
        "🛢️",
        "Commodities",
        "Commodity-linked products and derivatives where supported.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a cross-asset structuring role.",
    cards: [
      [
        "🧩",
        "Design Multi-Asset Structures",
        "Translate broader client objectives into structures that may combine exposures across multiple markets.",
      ],
      [
        "📐",
        "Analyze Payoffs & Scenarios",
        "Evaluate how proposed structures behave across different market, volatility and cross-asset scenarios.",
      ],
      [
        "🤝",
        "Develop Client Solutions",
        "Work with Sales and product specialists to connect client objectives with relevant market capabilities.",
      ],
      [
        "⚙️",
        "Coordinate Across Desks",
        "Work with multiple Trading, Quant and control teams to ensure structures can be priced, hedged, executed and supported.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Cross-Asset Structuring role.",
    cards: [
      [
        "🤝",
        "Sales",
        "Brings client objectives, constraints and cross-market needs into the structuring process.",
      ],
      [
        "📊",
        "Product Trading Desks",
        "Provide pricing, liquidity, hedging input and execution capability across relevant markets.",
      ],
      [
        "🔢",
        "Quantitative Teams",
        "Support valuation models, analytics and quantitative methods across applicable products.",
      ],
      [
        "🔬",
        "Research / Strategy",
        "Provides macro, market and cross-asset analysis where relevant.",
      ],
      [
        "⚖️",
        "Legal, Risk & Compliance",
        "Support documentation, product governance, risk review and applicable regulatory requirements.",
      ],
      [
        "⚙️",
        "Operations / Middle Office",
        "Supports booking, controls and lifecycle processes across applicable products.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting cross-asset structuring activity.",
    cards: [
      [
        "💻",
        "Pricing & Analytics Systems",
        "Support valuation, payoff modeling, scenario analysis and product design across multiple asset classes.",
      ],
      [
        "📡",
        "Cross-Asset Market Data",
        "Provides prices, curves, volatility, correlations and other market inputs across relevant asset classes.",
      ],
      [
        "📚",
        "Product & Documentation Systems",
        "Support product terms, approvals, documentation and lifecycle information.",
      ],
      [
        "🔗",
        "Trading & Post-Trade Infrastructure",
        "Supports execution, trade capture, clearing where applicable, settlement and lifecycle processing across products.",
      ],
    ],
  },
];

function CrossAssetStructurerMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cross-Asset / Solutions Structuring"
      title="Cross-Asset Structurer"
      intro="Designs solutions spanning multiple asset classes, analyzes their payoff and risk characteristics and coordinates Sales, Trading, Quant and control functions to turn broader client objectives into executable structures."
      sections={crossAssetStructurerSections}
    />
  );
}

function CommoditiesStructuringMap({
  goBack,
  openStructurer,
}: {
  goBack: () => void;
  openStructurer: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Structuring
      </button>

      <header className="hero detail-hero">
        <div className="globe">🛢️</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS STRUCTURING</p>
          <h1>Commodities Structuring</h1>
          <p className="intro">
            Explore roles that design commodity-linked products and solutions
            across energy, metals and agricultural markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🛢️</span>
          <div>
            <h2>Commodities Structuring Roles</h2>
            <p>Explore a core structuring role across commodity markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openStructurer}>
            <span>👤</span>
            <strong>Commodities Structurer</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const commoditiesStructurerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Structuring"],
      ["🛢️", "Commodities Structuring", "Commodities Structurer"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role primarily supports.",
    cards: [
      [
        "🛢️",
        "Commodity Markets",
        "Markets for energy, metals, agricultural commodities and related derivatives.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core products and structures that may be covered by the role.",
    cards: [
      [
        "🔥",
        "Energy Structures",
        "Structures linked to oil, natural gas, power and related energy exposures.",
      ],
      [
        "🥇",
        "Metals Structures",
        "Products linked to precious metals, base metals and related derivatives.",
      ],
      [
        "🌾",
        "Agricultural Structures",
        "Products linked to grains, soft commodities and other supported agricultural exposures.",
      ],
      [
        "🎯",
        "Customized Commodity Solutions",
        "Structures combining relevant commodity instruments to address specific client objectives or constraints.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a Commodities Structuring role.",
    cards: [
      [
        "🧩",
        "Design Product Structures",
        "Translate client or market objectives into suitable commodity-linked payoffs and structures.",
      ],
      [
        "📐",
        "Analyze Payoffs & Scenarios",
        "Evaluate structures across price, curve, volatility, basis and other relevant commodity-market scenarios.",
      ],
      [
        "🤝",
        "Support Client Solutions",
        "Work with Sales to develop structures relevant to investment, financing or commodity risk-management objectives.",
      ],
      [
        "⚙️",
        "Coordinate Execution",
        "Work with Trading and control functions to ensure proposed structures can be priced, hedged, executed and supported.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Commodities Structuring role.",
    cards: [
      [
        "🤝",
        "Commodities Sales",
        "Brings client objectives, constraints and commodity exposures into the structuring process.",
      ],
      [
        "📊",
        "Commodity Trading",
        "Provides pricing, hedging input, liquidity and execution capability.",
      ],
      [
        "🔢",
        "Quantitative Teams",
        "Support valuation models, analytics and applicable commodity pricing methods.",
      ],
      [
        "🔬",
        "Commodity Research / Strategy",
        "Provides fundamental, macro and commodity-market analysis where relevant.",
      ],
      [
        "⚖️",
        "Legal, Risk & Compliance",
        "Support documentation, product governance, risk review and applicable regulatory requirements.",
      ],
      [
        "⚙️",
        "Operations / Middle Office",
        "Supports booking, controls and lifecycle processes for executable structures.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting Commodities Structuring activity.",
    cards: [
      [
        "💻",
        "Pricing & Analytics Systems",
        "Support valuation, curve analysis, payoff modeling, scenario testing and product design.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides commodity prices, curves, volatility, fundamentals and other relevant market inputs.",
      ],
      [
        "📚",
        "Product & Documentation Systems",
        "Support product terms, approvals, documentation and lifecycle information.",
      ],
      [
        "🔗",
        "Trading, Post-Trade & Physical Infrastructure",
        "Supports execution and lifecycle processing alongside relevant delivery or physical-market infrastructure where applicable.",
      ],
    ],
  },
];

function CommoditiesStructurerMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Commodities Structuring"
      title="Commodities Structurer"
      intro="Designs commodity-linked products and solutions, analyzes their payoff and risk characteristics and works across Sales, Trading and specialist functions to turn client objectives into executable structures."
      sections={commoditiesStructurerSections}
    />
  );
}

function EquityStructuringMap({
  goBack,
  openStructurer,
}: {
  goBack: () => void;
  openStructurer: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Structuring
      </button>

      <header className="hero detail-hero">
        <div className="globe">📈</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS STRUCTURING</p>
          <h1>Equity Derivatives Structuring</h1>
          <p className="intro">
            Explore roles that design equity-linked products and solutions
            across institutional derivatives markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>Equity Derivatives Structuring Roles</h2>
            <p>Explore a core structuring role in equity derivatives.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openStructurer}>
            <span>👤</span>
            <strong>Equity Derivatives Structurer</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const equityStructurerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Structuring"],
      [
        "📈",
        "Equity Derivatives Structuring",
        "Equity Derivatives Structurer",
      ],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market this role primarily supports.",
    cards: [
      [
        "📈",
        "Equity Derivatives Market",
        "Markets for options and other derivatives linked to stocks, indices and equity exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core products and structures that may be covered by the role.",
    cards: [
      [
        "📊",
        "Single-Stock Options",
        "Option structures linked to individual listed equities.",
      ],
      [
        "🧺",
        "Index Options",
        "Option structures linked to equity indices and broader market exposures.",
      ],
      [
        "🔗",
        "Equity-Linked Products",
        "Products whose payoff is linked to equities, indices or baskets of underlying assets.",
      ],
      [
        "🎯",
        "Customized Equity Solutions",
        "Structures combining relevant equity derivatives to address specific client objectives or constraints.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in an Equity Derivatives Structuring role.",
    cards: [
      [
        "🧩",
        "Design Product Structures",
        "Translate client or market objectives into suitable equity-linked payoffs and structures.",
      ],
      [
        "📐",
        "Analyze Payoffs & Scenarios",
        "Evaluate structures across equity-price, volatility, correlation and other relevant market scenarios.",
      ],
      [
        "🤝",
        "Support Client Solutions",
        "Work with Sales to develop and explain structures relevant to client investment or risk-management objectives.",
      ],
      [
        "⚙️",
        "Coordinate Execution",
        "Work with Trading and control functions to ensure proposed structures can be priced, hedged, executed and supported.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an Equity Derivatives Structuring role.",
    cards: [
      [
        "🤝",
        "Equities Sales",
        "Brings client objectives, constraints and equity-market needs into the structuring process.",
      ],
      [
        "📊",
        "Equity Derivatives Trading",
        "Provides pricing, hedging input, liquidity and execution capability.",
      ],
      [
        "🔢",
        "Quantitative Teams",
        "Support valuation models, volatility analytics and other quantitative methods.",
      ],
      [
        "🔬",
        "Equity Research / Strategy",
        "Provides company, sector and broader equity-market analysis where relevant.",
      ],
      [
        "⚖️",
        "Legal, Risk & Compliance",
        "Support documentation, product governance, risk review and applicable regulatory requirements.",
      ],
      [
        "⚙️",
        "Operations / Middle Office",
        "Supports booking, controls and lifecycle processes for executable structures.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting Equity Derivatives Structuring activity.",
    cards: [
      [
        "💻",
        "Pricing & Analytics Systems",
        "Support valuation, volatility analysis, payoff modeling, scenario testing and product design.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides equity prices, volatility surfaces, index data and other relevant market inputs.",
      ],
      [
        "📚",
        "Product & Documentation Systems",
        "Support product terms, approvals, documentation and lifecycle information.",
      ],
      [
        "🔗",
        "Trading & Post-Trade Infrastructure",
        "Supports execution, trade capture, clearing where applicable and lifecycle processing.",
      ],
    ],
  },
];

function EquityStructurerMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Equity Derivatives Structuring"
      title="Equity Derivatives Structurer"
      intro="Designs equity-linked products and solutions, analyzes their payoff and risk characteristics and works across Sales, Trading and specialist functions to turn client objectives into executable structures."
      sections={equityStructurerSections}
    />
  );
}

function CreditStructuringMap({
  goBack,
  openStructurer,
}: {
  goBack: () => void;
  openStructurer: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Structuring
      </button>

      <header className="hero detail-hero">
        <div className="globe">💳</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS STRUCTURING</p>
          <h1>Credit Structuring</h1>
          <p className="intro">
            Explore roles that design credit-linked products and solutions
            across institutional credit markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💳</span>
          <div>
            <h2>Credit Structuring Roles</h2>
            <p>Explore a core structuring role in credit markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openStructurer}>
            <span>👤</span>
            <strong>Credit Structurer</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const creditStructurerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Structuring"],
      ["💳", "Credit Structuring", "Credit Structurer"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market this role primarily supports.",
    cards: [
      [
        "💳",
        "Credit Markets",
        "Markets for corporate, sovereign and other supported credit instruments and derivatives.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core products and structures that may be covered by the role.",
    cards: [
      [
        "🏢",
        "Corporate Credit",
        "Credit exposures linked to corporate issuers across supported markets.",
      ],
      [
        "🌍",
        "Emerging Markets Credit",
        "Sovereign and corporate credit exposures across supported emerging markets.",
      ],
      [
        "🧩",
        "Credit Derivatives",
        "Single-name CDS, credit indices and other supported credit-linked derivatives.",
      ],
      [
        "🎯",
        "Customized Credit Solutions",
        "Structures combining relevant credit instruments to address specific client objectives or constraints.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a Credit Structuring role.",
    cards: [
      [
        "🧩",
        "Design Product Structures",
        "Translate client or market objectives into suitable credit-linked payoffs and structures.",
      ],
      [
        "📐",
        "Analyze Payoffs & Scenarios",
        "Evaluate structures across spread, default, recovery and broader market scenarios.",
      ],
      [
        "🤝",
        "Support Client Solutions",
        "Work with Sales to develop and explain structures relevant to client credit exposures and objectives.",
      ],
      [
        "⚙️",
        "Coordinate Execution",
        "Work with Trading and control functions to ensure proposed structures can be priced, executed and supported.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Credit Structuring role.",
    cards: [
      [
        "🤝",
        "Credit Sales",
        "Brings client objectives, constraints and credit-market needs into the structuring process.",
      ],
      [
        "📊",
        "Credit Trading",
        "Provides pricing, liquidity, hedging input and execution capability.",
      ],
      [
        "🔢",
        "Quantitative Teams",
        "Support valuation models, analytics and applicable credit-risk modeling.",
      ],
      [
        "🔬",
        "Credit Research",
        "Provides issuer, sector and broader credit-market analysis.",
      ],
      [
        "⚖️",
        "Legal, Risk & Compliance",
        "Support documentation, product governance, risk review and applicable regulatory requirements.",
      ],
      [
        "⚙️",
        "Operations / Middle Office",
        "Supports booking, controls and lifecycle processes for executable structures.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting Credit Structuring activity.",
    cards: [
      [
        "💻",
        "Pricing & Analytics Systems",
        "Support valuation, spread analysis, scenario testing and product design.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides credit spreads, curves, issuer data, ratings and other relevant market inputs.",
      ],
      [
        "📚",
        "Product & Documentation Systems",
        "Support product terms, approvals, documentation and lifecycle information.",
      ],
      [
        "🔗",
        "Trading & Post-Trade Infrastructure",
        "Supports execution, trade capture, clearing where applicable and lifecycle processing.",
      ],
    ],
  },
];

function CreditStructurerMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Credit Structuring"
      title="Credit Structurer"
      intro="Designs credit-linked products and solutions, analyzes their risk and payoff characteristics and works across Sales, Trading and specialist functions to turn client objectives into executable structures."
      sections={creditStructurerSections}
    />
  );
}

function RatesStructuringMap({
  goBack,
  openStructurer,
}: {
  goBack: () => void;
  openStructurer: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Structuring
      </button>

      <header className="hero detail-hero">
        <div className="globe">📉</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS STRUCTURING</p>
          <h1>Rates Structuring</h1>
          <p className="intro">
            Explore roles that design interest-rate-linked products and
            solutions across institutional rates markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📉</span>
          <div>
            <h2>Rates Structuring Roles</h2>
            <p>Explore a core structuring role in interest-rate markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openStructurer}>
            <span>👤</span>
            <strong>Rates Structurer</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const ratesStructurerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Structuring"],
      ["📉", "Rates Structuring", "Rates Structurer"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market this role primarily supports.",
    cards: [
      [
        "📉",
        "Interest Rate Markets",
        "Markets for government debt, interest-rate derivatives and related rates exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core products and structures that may be covered by the role.",
    cards: [
      [
        "🔁",
        "Interest Rate Swaps",
        "Swap structures used to transform or manage interest-rate exposures.",
      ],
      [
        "🧩",
        "Rates Options",
        "Swaptions and other supported option structures linked to interest rates.",
      ],
      [
        "🏛️",
        "Government-Bond-Linked Products",
        "Structures referencing sovereign bonds, yields or related rates exposures where applicable.",
      ],
      [
        "🎯",
        "Customized Rates Solutions",
        "Structures combining relevant rates instruments to address specific client objectives or constraints.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a Rates Structuring role.",
    cards: [
      [
        "🧩",
        "Design Product Structures",
        "Translate client or market objectives into suitable interest-rate payoffs and product structures.",
      ],
      [
        "📐",
        "Analyze Payoffs & Scenarios",
        "Evaluate how structures behave across different yield-curve, volatility and rate scenarios.",
      ],
      [
        "🤝",
        "Support Client Solutions",
        "Work with Sales to develop and explain structures relevant to client rate exposures and objectives.",
      ],
      [
        "⚙️",
        "Coordinate Execution",
        "Work with Trading and control functions to ensure proposed structures can be priced, executed and supported.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Rates Structuring role.",
    cards: [
      [
        "🤝",
        "Rates Sales",
        "Brings client objectives, constraints and interest-rate needs into the structuring process.",
      ],
      [
        "📊",
        "Rates Trading",
        "Provides pricing, liquidity, hedging input and execution capability.",
      ],
      [
        "🔢",
        "Quantitative Teams",
        "Support models, valuation methods and analytics for applicable rates products.",
      ],
      [
        "⚖️",
        "Legal & Compliance",
        "Support documentation, product governance and applicable regulatory requirements.",
      ],
      [
        "🛡️",
        "Risk",
        "Reviews relevant market, model, credit and product risks.",
      ],
      [
        "⚙️",
        "Operations / Middle Office",
        "Supports booking, controls and lifecycle processes for executable structures.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting Rates Structuring activity.",
    cards: [
      [
        "💻",
        "Pricing & Analytics Systems",
        "Support valuation, curve analysis, payoff modeling, scenario testing and product design.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides yields, curves, volatility, fixings and other relevant market inputs.",
      ],
      [
        "📚",
        "Product & Documentation Systems",
        "Support product terms, approvals, documentation and lifecycle information.",
      ],
      [
        "🔗",
        "Trading & Post-Trade Infrastructure",
        "Supports execution, trade capture, clearing where applicable and lifecycle processing.",
      ],
    ],
  },
];

function RatesStructurerMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Rates Structuring"
      title="Rates Structurer"
      intro="Designs interest-rate-linked products and solutions, analyzes their payoffs and works across Sales, Trading and specialist functions to turn client objectives into executable rates structures."
      sections={ratesStructurerSections}
    />
  );
}

function FXStructuringMap({
  goBack,
  openStructurer,
}: {
  goBack: () => void;
  openStructurer: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Structuring
      </button>

      <header className="hero detail-hero">
        <div className="globe">💱</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS STRUCTURING</p>
          <h1>FX Structuring</h1>
          <p className="intro">
            Explore roles that design currency-linked products and solutions
            across institutional FX markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💱</span>
          <div>
            <h2>FX Structuring Roles</h2>
            <p>Explore a core structuring role in foreign-exchange markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openStructurer}>
            <span>👤</span>
            <strong>FX Structurer</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const fxStructurerSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Structuring"],
      ["💱", "FX Structuring", "FX Structurer"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market this role primarily supports.",
    cards: [
      [
        "💱",
        "Foreign Exchange Market",
        "The global market for currencies and related FX derivatives.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core products and structures that may be covered by the role.",
    cards: [
      [
        "🔁",
        "FX Forwards & Swaps",
        "Forward and swap structures used to manage currency exposures and funding needs.",
      ],
      [
        "🧩",
        "FX Options",
        "Vanilla and other supported option structures providing tailored currency exposures.",
      ],
      [
        "🌏",
        "EM FX / NDFs",
        "Deliverable and non-deliverable currency products across supported emerging markets.",
      ],
      [
        "🎯",
        "Customized FX Solutions",
        "Structures combining relevant FX instruments to address specific client objectives or constraints.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in an FX Structuring role.",
    cards: [
      [
        "🧩",
        "Design Product Structures",
        "Translate client or market objectives into suitable FX payoffs and product structures.",
      ],
      [
        "📐",
        "Analyze Payoffs & Scenarios",
        "Evaluate how proposed structures behave across different currency and market scenarios.",
      ],
      [
        "🤝",
        "Support Client Solutions",
        "Work with Sales to develop and explain structures relevant to client needs.",
      ],
      [
        "⚙️",
        "Coordinate Execution",
        "Work with Trading and control functions to ensure proposed structures can be priced, executed and supported.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an FX Structuring role.",
    cards: [
      [
        "🤝",
        "FX Sales",
        "Brings client objectives, constraints and market needs into the structuring process.",
      ],
      [
        "📊",
        "FX Trading",
        "Provides pricing, liquidity, hedging input and execution capability.",
      ],
      [
        "🔢",
        "Quantitative Teams",
        "Support models, valuation methods and analytics for applicable products.",
      ],
      [
        "⚖️",
        "Legal & Compliance",
        "Support documentation, product governance and applicable regulatory requirements.",
      ],
      [
        "🛡️",
        "Risk",
        "Reviews relevant market, model, credit and product risks.",
      ],
      [
        "⚙️",
        "Operations / Middle Office",
        "Supports booking, controls and post-trade processes for executable structures.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting FX Structuring activity.",
    cards: [
      [
        "💻",
        "Pricing & Analytics Systems",
        "Support valuation, payoff analysis, scenario testing and product design.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides FX spot, forward, volatility, curve and other market inputs.",
      ],
      [
        "📚",
        "Product & Documentation Systems",
        "Support product terms, approvals, documentation and lifecycle information.",
      ],
      [
        "🔗",
        "Trading & Post-Trade Infrastructure",
        "Supports execution, trade capture, confirmations, settlement and lifecycle processing.",
      ],
    ],
  },
];

function FXStructurerMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="FX Structuring"
      title="FX Structurer"
      intro="Designs currency-linked products and solutions, analyzes their payoffs and works across Sales, Trading and specialist functions to turn client objectives into executable FX structures."
      sections={fxStructurerSections}
    />
  );
}

function StructuringMap({
  goBack,
  openFXStructuring,
  openRatesStructuring,
  openCreditStructuring,
  openEquityStructuring,
  openCommoditiesStructuring,
  openCrossAssetStructuring,
}: {
  goBack: () => void;
  openFXStructuring: () => void;
  openRatesStructuring: () => void;
  openCreditStructuring: () => void;
  openEquityStructuring: () => void;
  openCommoditiesStructuring: () => void;
  openCrossAssetStructuring: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Global Markets
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS</p>
          <h1>Structuring</h1>
          <p className="intro">
            Explore roles that design and coordinate financial products and
            solutions across Global Markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Structuring Areas</h2>
            <p>
              Select a market or product area to explore its structuring roles.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          {structuringDesks.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "structuring-fx") {
                  openFXStructuring();
                } else if (item.id === "structuring-rates") {
                  openRatesStructuring();
                } else if (item.id === "structuring-credit") {
                  openCreditStructuring();
                } else if (item.id === "structuring-equity") {
                  openEquityStructuring();
                } else if (item.id === "structuring-commodities") {
                  openCommoditiesStructuring();
                } else if (item.id === "structuring-cross-asset") {
                  openCrossAssetStructuring();
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

function CrossAssetSalesMap({
  goBack,
  openSalesperson,
}: {
  goBack: () => void;
  openSalesperson: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Sales
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS SALES</p>
          <h1>Cross-Asset / Solutions Sales</h1>
          <p className="intro">
            Explore client-facing roles connecting customers with products,
            trading desks and solutions across multiple asset classes.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Cross-Asset / Solutions Sales Roles</h2>
            <p>
              Explore a representative client-facing role spanning multiple
              markets and product areas.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openSalesperson}>
            <span>👤</span>
            <strong>Cross-Asset / Solutions Salesperson</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const crossAssetSalespersonSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Sales"],
      [
        "🧩",
        "Cross-Asset / Solutions Sales",
        "Cross-Asset / Solutions Salesperson",
      ],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role may serve.",
    cards: [
      [
        "🌍",
        "Multiple Financial Markets",
        "Coverage may span rates, FX, credit, equities, commodities and related derivatives depending on the desk mandate.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Product coverage may span multiple asset classes.",
    cards: [
      [
        "📉",
        "Rates",
        "Government bonds, interest-rate derivatives and other supported rates products.",
      ],
      [
        "💱",
        "FX",
        "Currencies and related FX derivatives.",
      ],
      [
        "💳",
        "Credit",
        "Credit instruments and related derivatives where included.",
      ],
      [
        "📈",
        "Equities",
        "Equities, equity-linked products and related derivatives where included.",
      ],
      [
        "🛢️",
        "Commodities",
        "Commodity products and related derivatives where supported.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a cross-asset or solutions sales role.",
    cards: [
      [
        "🤝",
        "Understand Client Objectives",
        "Develop a broad view of client investment, financing or risk-management needs across relevant markets.",
      ],
      [
        "🧩",
        "Connect Products & Solutions",
        "Bring together relevant products and internal specialists across multiple asset classes.",
      ],
      [
        "📊",
        "Coordinate Pricing & Execution",
        "Work with product trading desks and other specialists to facilitate pricing and execution.",
      ],
      [
        "🌍",
        "Discuss Cross-Market Themes",
        "Communicate relevant market developments and relationships across asset classes within the role's mandate.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Cross-Asset / Solutions Sales role.",
    cards: [
      [
        "📊",
        "Product Trading Desks",
        "Provide pricing, liquidity and execution across relevant asset classes.",
      ],
      [
        "🧩",
        "Structuring",
        "Supports customized and multi-product solutions where applicable.",
      ],
      [
        "🔬",
        "Research / Strategy",
        "Provides macro, market and cross-asset analysis.",
      ],
      [
        "🤝",
        "Product Sales Teams",
        "Provide specialized client and product expertise across individual markets.",
      ],
      [
        "🛡️",
        "Risk & Compliance",
        "Supports applicable risk, conduct and regulatory controls.",
      ],
      [
        "⚙️",
        "Middle Office / Operations",
        "Supports trade control, booking, settlement and post-trade processes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting cross-asset sales activity.",
    cards: [
      [
        "💻",
        "Sales & Trading Platforms",
        "Support pricing, execution, trade capture and coordination across product desks.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides prices, curves, volatility, fundamentals and other information across asset classes.",
      ],
      [
        "🌐",
        "Trading Venues & Exchanges",
        "Support price discovery and execution across applicable cash and derivatives markets.",
      ],
      [
        "🔗",
        "Clearing, Settlement & Post-Trade",
        "Supports applicable clearing, confirmations, settlement and post-trade processing across products.",
      ],
    ],
  },
];

function CrossAssetSalespersonMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cross-Asset / Solutions Sales"
      title="Cross-Asset / Solutions Salesperson"
      intro="Works with clients across multiple markets, connects broader investment or risk-management objectives with relevant products and coordinates specialists across Global Markets."
      sections={crossAssetSalespersonSections}
    />
  );
}

function CommoditiesSalesMap({
  goBack,
  openSalesperson,
}: {
  goBack: () => void;
  openSalesperson: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Sales
      </button>

      <header className="hero detail-hero">
        <div className="globe">🛢️</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS SALES</p>
          <h1>Commodities Sales</h1>
          <p className="intro">
            Explore client-facing roles connecting customers with commodity
            markets, derivatives and trading desks.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🛢️</span>
          <div>
            <h2>Commodities Sales Roles</h2>
            <p>
              Explore a core client-facing role across institutional commodity
              markets.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openSalesperson}>
            <span>👤</span>
            <strong>Commodities Salesperson</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const commoditiesSalespersonSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Sales"],
      ["🛢️", "Commodities Sales", "Commodities Salesperson"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role primarily serves.",
    cards: [
      [
        "🛢️",
        "Commodity Markets",
        "Markets for energy, metals, agricultural commodities and related derivatives.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core commodity products that may be covered by the role.",
    cards: [
      [
        "🛢️",
        "Oil & Energy",
        "Crude oil, refined products and related futures, swaps and other supported derivatives.",
      ],
      [
        "🔥",
        "Natural Gas & Power",
        "Natural-gas and electricity exposures and related derivatives across supported markets.",
      ],
      [
        "🥇",
        "Metals",
        "Precious and base metals and related futures, swaps and other supported products.",
      ],
      [
        "🌾",
        "Agricultural Commodities",
        "Grains, soft commodities and related derivatives across supported markets.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a Commodities Sales role.",
    cards: [
      [
        "🤝",
        "Manage Client Relationships",
        "Understand client objectives, commodity exposures and market activity across the covered client base.",
      ],
      [
        "💬",
        "Discuss Markets & Products",
        "Communicate relevant commodity-market developments, product features and trading ideas within the role's mandate.",
      ],
      [
        "📊",
        "Coordinate Pricing & Execution",
        "Work with commodity trading desks to obtain pricing and facilitate client transactions.",
      ],
      [
        "🔎",
        "Identify Client Needs",
        "Connect investment, financing or risk-management needs with relevant commodity products and internal specialists.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Commodities Sales role.",
    cards: [
      [
        "📊",
        "Commodity Trading",
        "Provides liquidity, pricing and execution across supported commodity products.",
      ],
      [
        "🧩",
        "Structuring",
        "Supports customized commodity and risk-management solutions where applicable.",
      ],
      [
        "🔬",
        "Commodity Research / Strategy",
        "Provides fundamental, macro and commodity-market analysis.",
      ],
      [
        "🛡️",
        "Risk & Compliance",
        "Supports applicable risk, conduct and regulatory controls.",
      ],
      [
        "⚙️",
        "Middle Office",
        "Supports trade control, booking and exception-management processes.",
      ],
      [
        "💸",
        "Operations",
        "Supports confirmations, settlement and other post-trade processes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and infrastructure supporting Commodities Sales activity.",
    cards: [
      [
        "💻",
        "Sales & Trading Platforms",
        "Support pricing, execution, trade capture and communication with trading desks.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides commodity prices, curves, fundamentals and other market information.",
      ],
      [
        "🏛️",
        "Commodity Exchanges & Trading Venues",
        "Support price discovery and execution across applicable commodity markets.",
      ],
      [
        "🔗",
        "Clearing, Post-Trade & Physical Infrastructure",
        "Supports clearing and post-trade processes, alongside relevant delivery, storage or transportation infrastructure where applicable.",
      ],
    ],
  },
];

function CommoditiesSalespersonMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Commodities Sales"
      title="Commodities Salesperson"
      intro="Works with clients across commodity markets, connects their investment or risk-management needs with relevant products and coordinates pricing and execution with commodity trading desks."
      sections={commoditiesSalespersonSections}
    />
  );
}

function EquitiesSalesMap({
  goBack,
  openSalesperson,
}: {
  goBack: () => void;
  openSalesperson: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Sales
      </button>

      <header className="hero detail-hero">
        <div className="globe">📈</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS SALES</p>
          <h1>Equities Sales</h1>
          <p className="intro">
            Explore client-facing roles connecting customers with equity
            markets, equity products and trading desks.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>Equities Sales Roles</h2>
            <p>Explore a core client-facing role in institutional equity markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openSalesperson}>
            <span>👤</span>
            <strong>Equities Salesperson</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const equitiesSalespersonSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Sales"],
      ["📈", "Equities Sales", "Equities Salesperson"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role primarily serves.",
    cards: [
      [
        "📈",
        "Equity Markets",
        "Markets for listed equities, equity-linked instruments and related derivatives.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core equity products that may be covered by the role.",
    cards: [
      [
        "📊",
        "Listed Equities",
        "Shares of publicly traded companies across supported markets.",
      ],
      [
        "🧺",
        "ETFs & Index Products",
        "Exchange-traded funds and products linked to equity indices.",
      ],
      [
        "🧩",
        "Equity Derivatives",
        "Options and other equity-linked derivatives where covered by the desk.",
      ],
      [
        "🌍",
        "Emerging Markets Equities",
        "Listed equities and related products across supported emerging markets.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in an Equities Sales role.",
    cards: [
      [
        "🤝",
        "Manage Client Relationships",
        "Understand client portfolios, investment objectives and equity-market activity across the covered client base.",
      ],
      [
        "💬",
        "Discuss Markets & Ideas",
        "Communicate relevant market developments, research, product information and investment ideas within the role's mandate.",
      ],
      [
        "📊",
        "Coordinate Execution",
        "Work with equity trading and execution teams to facilitate client transactions.",
      ],
      [
        "🔎",
        "Identify Client Needs",
        "Connect client objectives with relevant equity products, research and internal specialists.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an Equities Sales role.",
    cards: [
      [
        "📊",
        "Equity Trading",
        "Provides liquidity and execution across supported equity products.",
      ],
      [
        "🔬",
        "Equity Research / Strategy",
        "Provides company, sector and broader equity-market analysis.",
      ],
      [
        "🧩",
        "Structuring",
        "Supports equity-linked and customized solutions where applicable.",
      ],
      [
        "⚡",
        "Electronic Trading",
        "Supports electronic execution and trading workflows.",
      ],
      [
        "🛡️",
        "Risk & Compliance",
        "Supports applicable risk, conduct and regulatory controls.",
      ],
      [
        "⚙️",
        "Middle Office / Operations",
        "Supports trade control, settlement and post-trade processes.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and market infrastructure supporting Equities Sales activity.",
    cards: [
      [
        "💻",
        "Sales & Trading Platforms",
        "Support execution, order workflows, trade capture and communication with trading desks.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides equity prices, company information, index data and other market information.",
      ],
      [
        "🏛️",
        "Stock Exchanges & Trading Venues",
        "Support price discovery and execution across applicable equity markets.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports clearing, settlement and post-trade processing of equity transactions.",
      ],
    ],
  },
];

function EquitiesSalespersonMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Equities Sales"
      title="Equities Salesperson"
      intro="Works with clients across equity markets, connects their investment and execution needs with relevant products, research and trading capabilities."
      sections={equitiesSalespersonSections}
    />
  );
}

function CreditSalesMap({
  goBack,
  openSalesperson,
}: {
  goBack: () => void;
  openSalesperson: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Sales
      </button>

      <header className="hero detail-hero">
        <div className="globe">💳</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS SALES</p>
          <h1>Credit Sales</h1>
          <p className="intro">
            Explore client-facing roles connecting customers with credit
            markets, fixed-income products and credit trading desks.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💳</span>
          <div>
            <h2>Credit Sales Roles</h2>
            <p>Explore a core client-facing role in institutional credit markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openSalesperson}>
            <span>👤</span>
            <strong>Credit Salesperson</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const creditSalespersonSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Sales"],
      ["💳", "Credit Sales", "Credit Salesperson"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role primarily serves.",
    cards: [
      [
        "💳",
        "Credit Markets",
        "Markets for corporate, sovereign and other supported credit instruments and derivatives.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core credit products that may be covered by the role.",
    cards: [
      [
        "🏢",
        "Investment Grade Credit",
        "Higher-rated corporate bonds and related credit exposures.",
      ],
      [
        "⚡",
        "High Yield Credit",
        "Below-investment-grade corporate bonds and related credit exposures.",
      ],
      [
        "🌍",
        "Emerging Markets Credit",
        "Sovereign and corporate credit instruments across supported emerging markets.",
      ],
      [
        "🧩",
        "Credit Derivatives",
        "Products such as single-name CDS and credit indices used to trade or manage credit exposure.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a Credit Sales role.",
    cards: [
      [
        "🤝",
        "Manage Client Relationships",
        "Understand client portfolios, investment objectives and credit-market activity across the covered client base.",
      ],
      [
        "💬",
        "Discuss Markets & Products",
        "Communicate relevant credit-market developments, product information and trading ideas within the role's mandate.",
      ],
      [
        "📊",
        "Coordinate Pricing & Execution",
        "Work with credit trading desks to obtain pricing and facilitate client transactions.",
      ],
      [
        "🔎",
        "Identify Client Needs",
        "Connect client investment or risk-management objectives with relevant credit products and internal specialists.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Credit Sales role.",
    cards: [
      [
        "📊",
        "Credit Trading",
        "Provides liquidity, pricing and execution across supported credit products.",
      ],
      [
        "🧩",
        "Structuring",
        "Supports customized or more complex credit solutions where applicable.",
      ],
      [
        "🔬",
        "Credit Research / Strategy",
        "Provides issuer, sector, macro and credit-market analysis.",
      ],
      [
        "🛡️",
        "Risk & Compliance",
        "Supports applicable risk, conduct and regulatory controls.",
      ],
      [
        "⚙️",
        "Middle Office",
        "Supports trade control, booking and exception-management processes.",
      ],
      [
        "💸",
        "Operations / Settlement",
        "Supports confirmations, settlement and post-trade processing.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and market infrastructure supporting Credit Sales activity.",
    cards: [
      [
        "💻",
        "Sales & Trading Platforms",
        "Support pricing, execution, trade capture and communication with trading desks.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides bond prices, spreads, curves, issuer data and other credit-market information.",
      ],
      [
        "🌐",
        "Trading Venues",
        "Support electronic and other forms of execution across applicable credit products.",
      ],
      [
        "🔗",
        "Clearing, Settlement & Post-Trade",
        "Supports applicable clearing, confirmations, settlement and post-trade processing.",
      ],
    ],
  },
];

function CreditSalespersonMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Credit Sales"
      title="Credit Salesperson"
      intro="Works with clients across credit markets, connects their investment or risk-management needs with relevant products and coordinates pricing and execution with credit trading desks."
      sections={creditSalespersonSections}
    />
  );
}

function RatesSalesMap({
  goBack,
  openSalesperson,
}: {
  goBack: () => void;
  openSalesperson: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Sales
      </button>

      <header className="hero detail-hero">
        <div className="globe">📉</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS SALES</p>
          <h1>Rates Sales</h1>
          <p className="intro">
            Explore client-facing roles connecting customers with interest-rate
            markets, fixed-income products and rates trading desks.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📉</span>
          <div>
            <h2>Rates Sales Roles</h2>
            <p>Explore a core client-facing role in institutional rates markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openSalesperson}>
            <span>👤</span>
            <strong>Rates Salesperson</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const ratesSalespersonSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Sales"],
      ["📉", "Rates Sales", "Rates Salesperson"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets this role primarily serves.",
    cards: [
      [
        "📉",
        "Interest Rate Markets",
        "Markets for government debt, interest-rate derivatives and other rates exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core rates products that may be covered by the role.",
    cards: [
      [
        "🏛️",
        "Government Bonds",
        "Sovereign debt instruments traded across supported government bond markets.",
      ],
      [
        "🔁",
        "Interest Rate Swaps",
        "Derivatives used to exchange interest-rate cash flows and manage rate exposures.",
      ],
      [
        "📅",
        "Rates Futures",
        "Exchange-traded contracts linked to government bonds or short-term interest rates.",
      ],
      [
        "🧩",
        "Rates Options",
        "Options and option-linked instruments providing customized interest-rate exposure.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a Rates Sales role.",
    cards: [
      [
        "🤝",
        "Manage Client Relationships",
        "Understand client objectives, portfolio activity and interest-rate needs across the covered client base.",
      ],
      [
        "💬",
        "Discuss Markets & Products",
        "Communicate relevant rates-market developments, product features and trading ideas within the role's mandate.",
      ],
      [
        "📊",
        "Coordinate Pricing & Execution",
        "Work with rates trading desks to obtain pricing and facilitate client transactions.",
      ],
      [
        "🔎",
        "Identify Client Needs",
        "Connect client objectives and rate exposures with relevant products and internal specialists.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a Rates Sales role.",
    cards: [
      [
        "📊",
        "Rates Trading",
        "Provides liquidity, pricing and execution across supported rates products.",
      ],
      [
        "🧩",
        "Structuring",
        "Supports customized or more complex interest-rate solutions where applicable.",
      ],
      [
        "🔬",
        "Research / Strategy",
        "Provides macroeconomic, fixed-income and rates-market analysis.",
      ],
      [
        "🛡️",
        "Risk & Compliance",
        "Supports applicable risk, conduct and regulatory controls.",
      ],
      [
        "⚙️",
        "Middle Office",
        "Supports trade control, booking and exception-management processes.",
      ],
      [
        "💸",
        "Operations / Settlement",
        "Supports confirmations, settlement and post-trade processing.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and market infrastructure supporting Rates Sales activity.",
    cards: [
      [
        "💻",
        "Sales & Trading Platforms",
        "Support pricing, execution, trade capture and communication with trading desks.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides bond prices, yield curves, rates, volatility and economic data.",
      ],
      [
        "🏛️",
        "Trading Venues & Exchanges",
        "Support execution and price discovery across applicable cash and derivatives markets.",
      ],
      [
        "🔗",
        "Clearing, Settlement & Post-Trade",
        "Supports applicable clearing, confirmations, settlement and post-trade processing.",
      ],
    ],
  },
];

function RatesSalespersonMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Rates Sales"
      title="Rates Salesperson"
      intro="Works with clients across interest-rate markets, connects their investment or risk-management needs with relevant products and coordinates pricing and execution with rates trading desks."
      sections={ratesSalespersonSections}
    />
  );
}

function FXSalesMap({
  goBack,
  openSalesperson,
}: {
  goBack: () => void;
  openSalesperson: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Sales
      </button>

      <header className="hero detail-hero">
        <div className="globe">💱</div>
        <div>
          <p className="eyebrow">GLOBAL MARKETS SALES</p>
          <h1>FX Sales</h1>
          <p className="intro">
            Explore client-facing roles connecting customers with currency
            markets, FX products and trading desks.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💱</span>
          <div>
            <h2>FX Sales Roles</h2>
            <p>Explore a core client-facing role in institutional FX markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openSalesperson}>
            <span>👤</span>
            <strong>FX Salesperson</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const fxSalespersonSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Sales"],
      ["💱", "FX Sales", "FX Salesperson"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market this role primarily serves.",
    cards: [
      [
        "💱",
        "Foreign Exchange Market",
        "The global market for currencies and related FX instruments.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core FX products that may be covered by the role.",
    cards: [
      [
        "💵",
        "FX Spot",
        "Currency transactions exchanging one currency for another at prevailing spot-market terms.",
      ],
      [
        "🔁",
        "Forwards & FX Swaps",
        "Products used to manage future currency exposures, funding and liquidity needs.",
      ],
      [
        "🧩",
        "FX Options",
        "Option products providing customized currency exposure and risk-management profiles.",
      ],
      [
        "🌏",
        "EM FX / NDFs",
        "Emerging-market currency products including deliverable FX and non-deliverable forwards where applicable.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in an FX Sales role.",
    cards: [
      [
        "🤝",
        "Manage Client Relationships",
        "Understand client objectives, market activity and currency-related needs across the covered client base.",
      ],
      [
        "💬",
        "Discuss Markets & Products",
        "Communicate relevant FX market developments, product features and trading ideas within the role's mandate.",
      ],
      [
        "📊",
        "Coordinate Pricing & Execution",
        "Work with FX trading desks to obtain pricing and facilitate client transactions.",
      ],
      [
        "🔎",
        "Identify Client Needs",
        "Connect client objectives and exposures with relevant FX products and internal specialists.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an FX Sales role.",
    cards: [
      [
        "📊",
        "FX Trading",
        "Provides market liquidity, pricing and execution across supported FX products.",
      ],
      [
        "🧩",
        "Structuring",
        "Supports customized or more complex FX solutions where applicable.",
      ],
      [
        "🔬",
        "Research / Strategy",
        "Provides macroeconomic, currency and market analysis.",
      ],
      [
        "🛡️",
        "Risk & Compliance",
        "Supports applicable risk, conduct and regulatory controls.",
      ],
      [
        "⚙️",
        "Middle Office",
        "Supports trade control, booking and exception-management processes.",
      ],
      [
        "💸",
        "Operations / Settlement",
        "Supports confirmations, settlement and post-trade processing.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Systems and market infrastructure supporting FX Sales activity.",
    cards: [
      [
        "💻",
        "Sales & Trading Platforms",
        "Support pricing, execution, trade capture and communication with trading desks.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides FX prices, curves, volatility, economic data and other market information.",
      ],
      [
        "🌐",
        "Electronic Trading Venues",
        "Support electronic FX price discovery and execution where applicable.",
      ],
      [
        "🔗",
        "Settlement & Post-Trade Infrastructure",
        "Supports confirmations, payment flows, settlement and post-trade processing.",
      ],
    ],
  },
];

function FXSalespersonMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="FX Sales"
      title="FX Salesperson"
      intro="Works with clients across currency markets, connects their FX needs with relevant products and coordinates pricing and execution with trading desks."
      sections={fxSalespersonSections}
    />
  );
}

function SalesMap({
  goBack,
  openFXSales,
  openRatesSales,
  openCreditSales,
  openEquitiesSales,
  openCommoditiesSales,
  openCrossAssetSales,
}: {
  goBack: () => void;
  openFXSales: () => void;
  openRatesSales: () => void;
  openCreditSales: () => void;
  openEquitiesSales: () => void;
  openCommoditiesSales: () => void;
  openCrossAssetSales: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Global Markets
      </button>

      <header className="hero detail-hero">
        <div className="globe">🤝</div>

        <div>
          <p className="eyebrow">GLOBAL MARKETS</p>
          <h1>Sales</h1>

          <p className="intro">
            Explore client-facing sales roles across institutional markets,
            products and cross-asset solutions.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🤝</span>

          <div>
            <h2>Sales Desks</h2>
            <p>
              Select a market or product area to explore its client-facing
              sales roles.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          {salesDesks.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "sales-fx") {
                  openFXSales();
                } else if (item.id === "sales-rates") {
                  openRatesSales();
                } else if (item.id === "sales-credit") {
                  openCreditSales();
                } else if (item.id === "sales-equities") {
                  openEquitiesSales();
                } else if (item.id === "sales-commodities") {
                  openCommoditiesSales();
                } else if (item.id === "sales-cross-asset") {
                  openCrossAssetSales();
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

function TradingMap({
  goBack,
  openFX,
  openRates,
  openCredit,
  openEquities,
  openCommodities,
  openCrossAsset,
}: {
  goBack: () => void;
  openFX: () => void;
  openRates: () => void;
  openCredit: () => void;
  openEquities: () => void;
  openCommodities: () => void;
  openCrossAsset: () => void;
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
                } else if (item.id === "rates") {
                  openRates();
                } else if (item.id === "credit") {
                  openCredit();
                } else if (item.id === "equities") {
                  openEquities();
                } else if (item.id === "commodities") {
                  openCommodities();
                } else if (item.id === "cross-asset") {
                  openCrossAsset();
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














function EmergingMarketsEquitiesMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Equities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🌍</div>
        <div>
          <p className="eyebrow">EQUITIES TRADING</p>
          <h1>Emerging Markets Equities</h1>
          <p className="intro">
            Explore trading roles focused on listed equities across emerging markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🌍</span>
          <div>
            <h2>Emerging Markets Equities Roles</h2>
            <p>Explore a core trading role across emerging-market equity markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>EM Equity Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const emEquityTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🌍", "Equities Trading", "Emerging Markets Equities → EM Equity Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "🌍",
        "Emerging Markets Equities",
        "Equity markets across supported emerging-market countries and regions.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "🏢",
        "Emerging-Market Listed Equities",
        "Shares of publicly listed companies across supported emerging markets.",
      ],
      [
        "🧺",
        "EM Equity ETFs",
        "Exchange-traded funds providing exposure to emerging-market countries, regions or indices.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional emerging-markets equities desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Facilitate institutional transactions and provide liquidity across supported EM equities.",
      ],
      [
        "📊",
        "Manage Trading Risk",
        "Monitor inventory, price, liquidity and market exposures across supported markets.",
      ],
      [
        "⚡",
        "Execute Flow",
        "Execute institutional client and market transactions across EM equity markets.",
      ],
      [
        "🌍",
        "Monitor Countries & Markets",
        "Track companies, local markets, capital flows, currencies, liquidity and country-level developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an emerging-markets equities desk.",
    cards: [
      ["🤝", "Equity Sales", "Connects institutional client activity with the trading desk."],
      ["🔬", "Equity Research", "Provides company and sector analysis across supported markets."],
      ["🌍", "EM Research / Strategy", "Provides country, macro and cross-market context."],
      ["⚡", "Electronic Trading", "Supports electronic execution and liquidity workflows where applicable."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and local-market settlement workflows."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Market and post-trade infrastructure supporting emerging-market equity trading.",
    cards: [
      [
        "🏛️",
        "Local Stock Exchanges & Trading Venues",
        "Provide markets and execution venues for listed equities across supported countries.",
      ],
      [
        "🔌",
        "Market Connectivity",
        "Connects trading systems with local exchanges, venues and liquidity sources.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Local prices, company information, security data and market data support trading decisions.",
      ],
      [
        "🔗",
        "Local Clearing & Settlement Infrastructure",
        "Supports clearing, securities settlement and post-trade processing across supported markets.",
      ],
    ],
  },
];

function EMEquityTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Emerging Markets Equities"
      title="EM Equity Trader"
      intro="Trades emerging-market equities, provides institutional liquidity and manages market, liquidity and country-related risk across supported markets."
      sections={emEquityTraderSections}
    />
  );
}

function ElectronicEquitiesMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Equities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">⚡</div>
        <div>
          <p className="eyebrow">EQUITIES TRADING</p>
          <h1>Electronic Equities</h1>
          <p className="intro">
            Explore trading roles focused on electronic pricing, execution,
            liquidity and market connectivity across equity markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚡</span>
          <div>
            <h2>Electronic Equities Roles</h2>
            <p>Explore a core trading role in electronic equity markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Electronic Equity Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const electronicEquityTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["⚡", "Equities Trading", "Electronic Equities → Electronic Equity Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "⚡",
        "Electronic Equity Markets",
        "Electronic markets where equities and related products are priced and executed across exchanges and other supported venues.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "🏢",
        "Listed Equities",
        "Shares of publicly listed companies traded through electronic markets.",
      ],
      [
        "🧺",
        "Equity ETFs",
        "Exchange-traded funds executed through supported electronic venues and workflows.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in institutional electronic equity trading.",
    cards: [
      [
        "⚡",
        "Manage Electronic Execution",
        "Monitor and support electronic execution across exchanges and other supported venues.",
      ],
      [
        "💱",
        "Manage Pricing & Liquidity",
        "Monitor prices, liquidity and trading conditions across electronic equity markets.",
      ],
      [
        "📊",
        "Manage Trading Risk",
        "Monitor inventory, price, liquidity and market exposures generated by electronic trading.",
      ],
      [
        "🔧",
        "Improve Trading Workflows",
        "Work with quantitative and technology teams on execution, analytics and automation.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to electronic equity trading.",
    cards: [
      ["🤝", "Equity Sales", "Connects institutional client activity and execution needs with the desk."],
      ["📊", "Cash Equity Trading", "Provides market context and liquidity across underlying equities."],
      ["🧮", "Quantitative Trading / Research", "Supports execution models, analytics and automated trading workflows."],
      ["💻", "Technology", "Builds and maintains trading systems, connectivity and automation."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and securities settlement."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Electronic market and post-trade infrastructure supporting equity trading.",
    cards: [
      [
        "🏛️",
        "Exchanges & Electronic Trading Venues",
        "Provide electronic markets and execution venues for supported equity products.",
      ],
      [
        "🔌",
        "Market Connectivity",
        "Connects trading systems with exchanges, venues, clients and liquidity sources.",
      ],
      [
        "📡",
        "Real-Time Market Data",
        "Prices, quotes, order-book and reference data support execution and risk decisions.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports trade clearing, securities settlement and post-trade processing.",
      ],
    ],
  },
];

function ElectronicEquityTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Electronic Equities"
      title="Electronic Equity Trader"
      intro="Supports electronic equity execution and liquidity, manages trading risk and works with quantitative and technology teams across electronic markets."
      sections={electronicEquityTraderSections}
    />
  );
}

function IndexETFTradingMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Equities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧺</div>
        <div>
          <p className="eyebrow">EQUITIES TRADING</p>
          <h1>Index / ETF Trading</h1>
          <p className="intro">
            Explore trading roles focused on equity indices, ETFs and related
            market exposures.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧺</span>
          <div>
            <h2>Index / ETF Trading Roles</h2>
            <p>Explore a core trading role in index and ETF markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Index / ETF Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const indexETFTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🧺", "Equities Trading", "Index / ETF Trading → Index / ETF Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "🧺",
        "Equity Index & ETF Markets",
        "Markets for exchange-traded funds and instruments linked to broad or specialized equity indices.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "🧺",
        "Equity ETFs",
        "Exchange-traded funds providing exposure to equity indices, sectors, regions or investment themes.",
      ],
      [
        "📊",
        "Equity Index Products",
        "Tradable instruments and exposures linked to equity-market indices.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional index and ETF trading desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Quote and facilitate institutional transactions in supported ETFs and index products.",
      ],
      [
        "⚖️",
        "Manage Relative-Value Risk",
        "Monitor relationships between ETFs, underlying baskets and related index exposures.",
      ],
      [
        "📊",
        "Manage Trading Risk",
        "Monitor inventory, basis, price, liquidity and market exposures.",
      ],
      [
        "🌍",
        "Monitor Index & ETF Markets",
        "Track flows, index moves, underlying equities, liquidity and market developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an index and ETF trading desk.",
    cards: [
      ["🤝", "Equity Sales", "Connects institutional client activity with the trading desk."],
      ["📊", "Cash Equity Trading", "Provides liquidity and market context across underlying equities."],
      ["🧩", "Equity Derivatives Trading", "Connects related index and derivative exposures."],
      ["🧮", "Quantitative Trading / Research", "Supports pricing, basket and execution analytics."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and securities settlement."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Market and post-trade infrastructure supporting index and ETF trading.",
    cards: [
      [
        "🏛️",
        "Stock Exchanges & Trading Venues",
        "Provide execution venues for ETFs and related listed instruments.",
      ],
      [
        "🔌",
        "Market Connectivity",
        "Connects trading systems with exchanges, venues and liquidity sources.",
      ],
      [
        "📡",
        "Market, Index & Reference Data",
        "Prices, index composition, security data and underlying-market information support trading decisions.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports trade clearing, securities settlement and post-trade processing.",
      ],
    ],
  },
];

function IndexETFTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Index / ETF Trading"
      title="Index / ETF Trader"
      intro="Trades equity ETFs and index-linked exposures, provides liquidity and manages relative-value and market risk across supported products."
      sections={indexETFTraderSections}
    />
  );
}

function EquityDerivativesMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Equities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">EQUITIES TRADING</p>
          <h1>Equity Derivatives</h1>
          <p className="intro">
            Explore trading roles in derivatives linked to individual equities
            and equity indices.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Equity Derivatives Roles</h2>
            <p>Explore a core trading role in equity derivatives.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Equity Derivatives Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const equityDerivativesTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🧩", "Equities Trading", "Equity Derivatives → Equity Derivatives Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market in which this role primarily operates.",
    cards: [
      [
        "🧩",
        "Equity Derivatives Market",
        "The market for derivatives whose value is linked to individual equities, equity indices or related equity exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "🏢",
        "Single-Stock Options",
        "Options whose underlying asset is the share of an individual company.",
      ],
      [
        "📊",
        "Index Options",
        "Options whose value is linked to an equity-market index.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional equity derivatives desk.",
    cards: [
      [
        "💱",
        "Price Derivatives",
        "Price supported equity-derivative instruments and provide liquidity.",
      ],
      [
        "📊",
        "Manage Option Risk",
        "Monitor volatility, directional and other option-related market exposures.",
      ],
      [
        "⚡",
        "Execute Flow",
        "Execute institutional client and interdealer equity-derivatives transactions.",
      ],
      [
        "🌍",
        "Monitor Equity & Volatility Markets",
        "Track equities, indices, volatility, events, liquidity and broader market conditions.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an equity derivatives trading desk.",
    cards: [
      ["🤝", "Equity Derivatives Sales", "Connects institutional client activity with the trading desk."],
      ["🧩", "Structuring", "Designs and supports customized equity-derivative solutions."],
      ["🧮", "Quantitative Research / Trading", "Supports models, pricing and risk analytics."],
      ["🔬", "Equity Research / Strategy", "Provides company, sector and market context."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧾", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmations, lifecycle events and post-trade processing."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Trading and post-trade infrastructure supporting equity derivatives.",
    cards: [
      [
        "🖥️",
        "Trading & Pricing Systems",
        "Support pricing, execution and risk management across equity derivatives.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Equity prices, volatility data, curves and reference information support pricing and risk decisions.",
      ],
      [
        "🏛️",
        "Exchanges & Trading Venues",
        "Support execution of listed equity derivatives and other applicable trading workflows.",
      ],
      [
        "🔗",
        "Clearing & Post-Trade Infrastructure",
        "Supports clearing where applicable, lifecycle processing and settlement.",
      ],
    ],
  },
];

function EquityDerivativesTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Equity Derivatives"
      title="Equity Derivatives Trader"
      intro="Prices and trades equity derivatives, provides liquidity and manages option and market risk across supported stocks and indices."
      sections={equityDerivativesTraderSections}
    />
  );
}

function CashEquitiesMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Equities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">📊</div>
        <div>
          <p className="eyebrow">EQUITIES TRADING</p>
          <h1>Cash Equities</h1>
          <p className="intro">
            Explore trading roles in listed shares and institutional cash equity markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📊</span>
          <div>
            <h2>Cash Equities Roles</h2>
            <p>Explore a core trading role in institutional cash equities.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Cash Equity Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const cashEquityTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["📊", "Equities Trading", "Cash Equities → Cash Equity Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market in which this role primarily operates.",
    cards: [
      [
        "📊",
        "Cash Equity Market",
        "The market where listed shares of companies are bought and sold.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "🏢",
        "Listed Equities",
        "Shares of publicly listed companies traded on supported equity markets.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional cash equities desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Facilitate institutional equity transactions and provide liquidity in supported stocks.",
      ],
      [
        "📊",
        "Manage Trading Risk",
        "Monitor inventory, price, liquidity and market exposures.",
      ],
      [
        "⚡",
        "Execute Flow",
        "Execute institutional client and market transactions across supported equities.",
      ],
      [
        "🌍",
        "Monitor Equity Markets",
        "Track company news, market moves, liquidity, flows and broader equity-market developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a cash equities trading desk.",
    cards: [
      ["🤝", "Equity Sales", "Connects institutional client activity with the trading desk."],
      ["🔬", "Equity Research", "Provides company, sector and market analysis."],
      ["⚡", "Electronic Trading", "Supports electronic execution and liquidity workflows."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧮", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and securities settlement."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Market and post-trade infrastructure supporting cash equity trading.",
    cards: [
      [
        "🏛️",
        "Stock Exchanges & Trading Venues",
        "Provide markets and execution venues for listed equities.",
      ],
      [
        "🔌",
        "Market Connectivity",
        "Connects trading systems with exchanges, venues and liquidity sources.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, order-book information, company and security data support trading decisions.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports trade clearing, securities settlement and post-trade processing.",
      ],
    ],
  },
];

function CashEquityTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cash Equities"
      title="Cash Equity Trader"
      intro="Trades listed equities, facilitates institutional flow and manages trading risk across supported stocks and markets."
      sections={cashEquityTraderSections}
    />
  );
}







function AgriculturalCommoditiesMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Commodities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🌾</div>
        <div>
          <p className="eyebrow">COMMODITIES TRADING</p>
          <h1>Agricultural Commodities</h1>
          <p className="intro">
            Explore trading roles across grains, soft commodities and related
            agricultural derivatives.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🌾</span>
          <div>
            <h2>Agricultural Commodities Roles</h2>
            <p>Explore a core trading role in institutional agricultural commodity markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Agricultural Commodities Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const agriculturalCommoditiesTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🌾", "Commodities Trading", "Agricultural Commodities → Agricultural Commodities Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "🌾",
        "Agricultural Commodity Markets",
        "Global markets for grains, soft commodities and related agricultural price exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments and exposures associated with this role.",
    cards: [
      [
        "🌾",
        "Grains",
        "Agricultural commodities such as wheat, corn and soybeans traded across physical and derivatives markets.",
      ],
      [
        "☕",
        "Soft Commodities",
        "Agricultural products such as coffee, sugar and cocoa traded across global commodity markets.",
      ],
      [
        "📅",
        "Futures & Swaps",
        "Derivative contracts used to trade and manage agricultural commodity price exposures.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional agricultural commodities trading desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Price and facilitate transactions across supported agricultural commodity products.",
      ],
      [
        "📊",
        "Manage Market Risk",
        "Monitor price, spread, basis, liquidity and inventory-related exposures.",
      ],
      [
        "⚖️",
        "Trade Market Relationships",
        "Monitor relationships across commodities, regions, grades and delivery periods.",
      ],
      [
        "🌦️",
        "Monitor Agricultural Markets",
        "Track weather, harvests, inventories, trade flows, supply-demand conditions and broader market developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an agricultural commodities trading desk.",
    cards: [
      ["🤝", "Commodity Sales", "Connects institutional and corporate client activity with the trading desk."],
      ["🔬", "Commodity Research / Strategy", "Provides supply-demand, weather and agricultural-market analysis."],
      ["🧩", "Structuring", "Supports customized commodity and risk-management solutions."],
      ["🛡️", "Market Risk", "Monitors commodity-market exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧾", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmations, settlements and applicable commodity post-trade workflows."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Trading and physical-market infrastructure supporting agricultural commodity markets.",
    cards: [
      [
        "🏛️",
        "Commodity Exchanges & Trading Venues",
        "Support execution and price discovery across listed and other supported agricultural markets.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, forward curves, inventories, weather and benchmark data support trading and risk decisions.",
      ],
      [
        "🔗",
        "Clearing & Post-Trade Infrastructure",
        "Supports applicable clearing, confirmations, settlement and post-trade processing.",
      ],
      [
        "🚚",
        "Storage & Transportation Infrastructure",
        "Warehousing, transportation and delivery systems shape physical supply, regional pricing and market relationships.",
      ],
    ],
  },
];

function AgriculturalCommoditiesTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Agricultural Commodities"
      title="Agricultural Commodities Trader"
      intro="Trades agricultural commodities and related derivatives, provides liquidity and manages price, spread and market risk across supported markets."
      sections={agriculturalCommoditiesTraderSections}
    />
  );
}

function MetalsMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Commodities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🥇</div>
        <div>
          <p className="eyebrow">COMMODITIES TRADING</p>
          <h1>Metals</h1>
          <p className="intro">
            Explore trading roles across precious metals, base metals and
            related commodity derivatives.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🥇</span>
          <div>
            <h2>Metals Roles</h2>
            <p>Explore a core trading role in institutional metals markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Metals Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const metalsTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🥇", "Commodities Trading", "Metals → Metals Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "🥇",
        "Metals Markets",
        "Global markets for precious metals, base metals and related financial exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments and exposures associated with this role.",
    cards: [
      [
        "🥇",
        "Precious Metals",
        "Metals such as gold and silver traded through physical and financial markets.",
      ],
      [
        "⛏️",
        "Base Metals",
        "Industrial metals such as copper and aluminum traded across global commodity markets.",
      ],
      [
        "📅",
        "Futures & Swaps",
        "Derivative contracts used to trade and manage metals-price exposures.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional metals trading desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Price and facilitate transactions across supported metals products.",
      ],
      [
        "📊",
        "Manage Market Risk",
        "Monitor outright price, spread, basis, liquidity and inventory-related exposures.",
      ],
      [
        "⚖️",
        "Trade Market Relationships",
        "Monitor relationships across metals, locations, maturities and related instruments.",
      ],
      [
        "🌍",
        "Monitor Metals Markets",
        "Track supply, demand, inventories, currencies, macro conditions and industrial-market developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a metals trading desk.",
    cards: [
      ["🤝", "Commodity Sales", "Connects institutional and corporate client activity with the trading desk."],
      ["🔬", "Commodity Research / Strategy", "Provides supply-demand, macro and metals-market analysis."],
      ["🧩", "Structuring", "Supports customized commodity and risk-management solutions."],
      ["🛡️", "Market Risk", "Monitors commodity-market exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧾", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmations, settlements and applicable metals post-trade workflows."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Trading and physical-market infrastructure supporting metals markets.",
    cards: [
      [
        "🏛️",
        "Commodity Exchanges & Trading Venues",
        "Support execution and price discovery across listed and other supported metals markets.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, forward curves, inventories and benchmark data support trading and risk decisions.",
      ],
      [
        "🔗",
        "Clearing & Post-Trade Infrastructure",
        "Supports applicable clearing, confirmations, settlement and post-trade processing.",
      ],
      [
        "🏭",
        "Warehousing & Delivery Infrastructure",
        "Storage, approved warehouses and delivery systems support applicable physical metals markets.",
      ],
    ],
  },
];

function MetalsTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Metals"
      title="Metals Trader"
      intro="Trades precious and base metals, provides liquidity and manages commodity price, spread and market risk across supported markets."
      sections={metalsTraderSections}
    />
  );
}

function PowerMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Commodities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">⚡</div>
        <div>
          <p className="eyebrow">COMMODITIES TRADING</p>
          <h1>Power</h1>
          <p className="intro">
            Explore trading roles across electricity markets and related
            regional power-price exposures.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚡</span>
          <div>
            <h2>Power Roles</h2>
            <p>Explore a core trading role in institutional power markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Power Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const powerTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["⚡", "Commodities Trading", "Power → Power Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "⚡",
        "Power Markets",
        "Regional electricity markets where power and related price exposures are traded.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments and exposures associated with this role.",
    cards: [
      [
        "⚡",
        "Electricity / Power",
        "Physical and financial exposures linked to electricity prices across supported regional markets.",
      ],
      [
        "📅",
        "Power Futures",
        "Exchange-traded contracts linked to future electricity prices and delivery periods.",
      ],
      [
        "🔁",
        "Power Swaps",
        "Derivative contracts used to trade and manage electricity-price exposures.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional power trading desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Price and facilitate transactions across supported power products and markets.",
      ],
      [
        "📊",
        "Manage Market Risk",
        "Monitor price, location, time, liquidity and other power-market exposures.",
      ],
      [
        "⚖️",
        "Trade Regional & Curve Relationships",
        "Monitor relationships across locations, delivery periods and related energy markets.",
      ],
      [
        "🌦️",
        "Monitor Power Fundamentals",
        "Track electricity demand, generation, fuel costs, weather, transmission constraints and market conditions.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a power trading desk.",
    cards: [
      ["🤝", "Commodity Sales", "Connects institutional and corporate client activity with the trading desk."],
      ["🔬", "Commodity Research / Analytics", "Provides supply-demand, weather and power-market analysis."],
      ["🧩", "Structuring", "Supports customized power and energy risk-management solutions."],
      ["🛡️", "Market Risk", "Monitors commodity-market exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧾", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmations, settlements and applicable power-market workflows."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Trading and physical-market infrastructure supporting power markets.",
    cards: [
      [
        "🏛️",
        "Power Exchanges & Trading Venues",
        "Support execution and price discovery across supported electricity markets.",
      ],
      [
        "📡",
        "Market & Grid Data",
        "Prices, demand, generation, weather and grid information support trading and risk decisions.",
      ],
      [
        "🔗",
        "Clearing & Post-Trade Infrastructure",
        "Supports applicable clearing, confirmations, settlement and post-trade processing.",
      ],
      [
        "🔌",
        "Grid & Transmission Infrastructure",
        "Electricity networks and transmission constraints shape regional supply, delivery and pricing.",
      ],
    ],
  },
];

function PowerTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Power"
      title="Power Trader"
      intro="Trades power and related derivatives, provides liquidity and manages regional electricity-price and market risk across supported markets."
      sections={powerTraderSections}
    />
  );
}

function NaturalGasMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Commodities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🔥</div>
        <div>
          <p className="eyebrow">COMMODITIES TRADING</p>
          <h1>Natural Gas</h1>
          <p className="intro">
            Explore trading roles across natural-gas markets, derivatives and
            regional energy exposures.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔥</span>
          <div>
            <h2>Natural Gas Roles</h2>
            <p>Explore a core trading role in institutional natural-gas markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Natural Gas Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const naturalGasTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🔥", "Commodities Trading", "Natural Gas → Natural Gas Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "🔥",
        "Natural Gas Markets",
        "Regional and international markets for natural gas and related price exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments and exposures associated with this role.",
    cards: [
      [
        "🔥",
        "Natural Gas",
        "Physical and financial exposures linked to natural-gas markets and regional pricing hubs.",
      ],
      [
        "📅",
        "Natural Gas Futures",
        "Exchange-traded contracts linked to natural-gas prices and delivery periods.",
      ],
      [
        "🔁",
        "Natural Gas Swaps",
        "Derivative contracts used to trade and manage natural-gas price and basis exposures.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional natural-gas trading desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Price and facilitate transactions across supported natural-gas products.",
      ],
      [
        "📊",
        "Manage Market Risk",
        "Monitor price, basis, spread, liquidity and inventory-related exposures.",
      ],
      [
        "⚖️",
        "Trade Regional & Curve Relationships",
        "Monitor relationships across locations, pricing hubs and delivery periods.",
      ],
      [
        "🌍",
        "Monitor Gas Markets",
        "Track supply, demand, storage, weather, transportation and broader energy-market developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a natural-gas trading desk.",
    cards: [
      ["🤝", "Commodity Sales", "Connects institutional and corporate client activity with the trading desk."],
      ["🔬", "Commodity Research / Strategy", "Provides supply-demand, weather and market analysis."],
      ["🧩", "Structuring", "Supports customized commodity and risk-management solutions."],
      ["🛡️", "Market Risk", "Monitors commodity-market exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧾", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmations, settlements and applicable commodity post-trade workflows."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Trading and physical-market infrastructure supporting natural-gas markets.",
    cards: [
      [
        "🏛️",
        "Commodity Exchanges & Trading Venues",
        "Support execution and price discovery across listed and other supported gas markets.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, forward curves, storage, weather and benchmark data support trading and risk decisions.",
      ],
      [
        "🔗",
        "Clearing & Post-Trade Infrastructure",
        "Supports applicable clearing, confirmations, settlement and post-trade processing.",
      ],
      [
        "🛠️",
        "Pipeline & Storage Infrastructure",
        "Transportation networks, storage facilities and delivery points shape regional gas pricing and market relationships.",
      ],
    ],
  },
];

function NaturalGasTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Natural Gas"
      title="Natural Gas Trader"
      intro="Trades natural-gas products, provides liquidity and manages price, basis and market risk across supported regional and derivatives markets."
      sections={naturalGasTraderSections}
    />
  );
}

function OilEnergyMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Commodities Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🛢️</div>
        <div>
          <p className="eyebrow">COMMODITIES TRADING</p>
          <h1>Oil / Energy</h1>
          <p className="intro">
            Explore trading roles across crude oil, refined products and related
            energy markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🛢️</span>
          <div>
            <h2>Oil / Energy Roles</h2>
            <p>Explore a core trading role in institutional oil and energy markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Oil / Energy Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const oilEnergyTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🛢️", "Commodities Trading", "Oil / Energy → Oil / Energy Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "🛢️",
        "Oil & Energy Markets",
        "Markets for crude oil, refined petroleum products and related energy exposures.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments and exposures associated with this role.",
    cards: [
      [
        "🛢️",
        "Crude Oil",
        "Physical and financial exposures linked to major crude-oil markets and benchmarks.",
      ],
      [
        "⛽",
        "Refined Products",
        "Energy products such as gasoline, diesel and other petroleum products.",
      ],
      [
        "📅",
        "Futures & Swaps",
        "Derivative contracts used to trade and manage oil and energy price exposures.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional oil and energy trading desk.",
    cards: [
      [
        "💱",
        "Provide Liquidity",
        "Price and facilitate transactions across supported oil and energy products.",
      ],
      [
        "📊",
        "Manage Market Risk",
        "Monitor outright price, spread, basis, liquidity and inventory-related exposures.",
      ],
      [
        "⚖️",
        "Trade Market Relationships",
        "Monitor and trade relationships across grades, locations, products and maturities.",
      ],
      [
        "🌍",
        "Monitor Energy Markets",
        "Track supply, demand, inventories, geopolitics, transportation and broader energy-market developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an oil and energy trading desk.",
    cards: [
      ["🤝", "Commodity Sales", "Connects institutional and corporate client activity with the trading desk."],
      ["🔬", "Commodity Research / Strategy", "Provides supply-demand, macro and market analysis."],
      ["🧩", "Structuring", "Supports customized commodity and risk-management solutions."],
      ["🛡️", "Market Risk", "Monitors commodity-market exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧾", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmations, settlements and applicable commodity post-trade workflows."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Trading and post-trade infrastructure supporting oil and energy markets.",
    cards: [
      [
        "🏛️",
        "Commodity Exchanges & Trading Venues",
        "Support execution and price discovery across listed and other supported commodity markets.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, curves, inventories and benchmark data support trading and risk decisions.",
      ],
      [
        "🔗",
        "Clearing & Post-Trade Infrastructure",
        "Supports applicable clearing, confirmations, settlement and post-trade processing.",
      ],
      [
        "🚢",
        "Physical Market Infrastructure",
        "Storage, transportation and delivery systems shape physical commodity pricing and market relationships.",
      ],
    ],
  },
];

function OilEnergyTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Oil / Energy"
      title="Oil / Energy Trader"
      intro="Trades oil and related energy products, provides liquidity and manages commodity price, spread and market risk across supported markets."
      sections={oilEnergyTraderSections}
    />
  );
}


function CrossAssetTradingMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">TRADING</p>
          <h1>Cross-Asset / Multi-Asset</h1>
          <p className="intro">
            Explore trading roles that work across multiple asset classes rather
            than within a single product market.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Cross-Asset / Multi-Asset Roles</h2>
            <p>
              Explore a trading role spanning multiple institutional markets
              and product families.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Cross-Asset / Multi-Asset Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const crossAssetTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["🧩", "Cross-Asset / Multi-Asset", "Cross-Asset / Multi-Asset Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "Cross-asset roles operate across more than one financial market.",
    cards: [
      [
        "🌍",
        "Multiple Financial Markets",
        "Activity may span rates, FX, credit, equities, commodities and related derivatives depending on the desk mandate.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Product coverage varies by institution and desk mandate.",
    cards: [
      [
        "📉",
        "Rates",
        "Government bonds, interest-rate derivatives and other supported rates exposures.",
      ],
      [
        "💱",
        "FX",
        "Currencies and related FX derivatives.",
      ],
      [
        "💳",
        "Credit",
        "Credit instruments and related derivatives where included in the desk mandate.",
      ],
      [
        "📈",
        "Equities",
        "Equity and equity-linked exposures where included in the desk mandate.",
      ],
      [
        "🛢️",
        "Commodities",
        "Commodity exposures where supported by the institution and desk mandate.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in a cross-asset or multi-asset trading role.",
    cards: [
      [
        "💱",
        "Price & Execute",
        "Price and execute transactions across products supported by the desk.",
      ],
      [
        "📊",
        "Manage Cross-Asset Risk",
        "Monitor market risk and interactions between exposures across multiple asset classes.",
      ],
      [
        "🔗",
        "Trade Market Relationships",
        "Evaluate relative-value and transmission relationships between different markets and instruments.",
      ],
      [
        "🌍",
        "Monitor Global Markets",
        "Track macroeconomic developments, policy, liquidity and market conditions across asset classes.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Functions commonly connected to cross-asset trading.",
    cards: [
      [
        "🤝",
        "Sales",
        "Connects institutional client activity and cross-asset opportunities with the desk.",
      ],
      [
        "🧩",
        "Structuring",
        "Supports multi-product and customized cross-asset solutions.",
      ],
      [
        "🔬",
        "Research / Strategy",
        "Provides macro, market and cross-asset analysis.",
      ],
      [
        "📊",
        "Product Trading Desks",
        "Coordinates with specialist FX, rates, credit, equities and commodity desks where applicable.",
      ],
      [
        "🛡️",
        "Market Risk",
        "Monitors market exposures, concentrations and risk limits.",
      ],
      [
        "⚙️",
        "Middle Office / Product Control",
        "Supports trade control, valuation oversight and P&L processes.",
      ],
      [
        "💸",
        "Operations",
        "Supports confirmations, settlements and post-trade processing across applicable products.",
      ],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Work?",
    description: "Infrastructure spanning multiple financial markets.",
    cards: [
      [
        "💻",
        "Trading & Pricing Systems",
        "Support pricing, execution, position management and risk monitoring across supported products.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Provides prices, curves, volatility, reference data and other inputs across asset classes.",
      ],
      [
        "🏛️",
        "Trading Venues & Exchanges",
        "Support execution and price discovery across applicable markets and instruments.",
      ],
      [
        "🔗",
        "Clearing, Settlement & Post-Trade",
        "Different products connect to different clearing, settlement and post-trade infrastructures.",
      ],
    ],
  },
];

function CrossAssetTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Cross-Asset / Multi-Asset"
      title="Cross-Asset / Multi-Asset Trader"
      intro="Trades across multiple asset classes, evaluates relationships between markets and manages risk across a broader multi-product mandate."
      sections={crossAssetTraderSections}
    />
  );
}

function CommoditiesTradingMap({
  goBack,
  openOilEnergy,
  openNaturalGas,
  openPower,
  openMetals,
  openAgriculture,
}: {
  goBack: () => void;
  openOilEnergy: () => void;
  openNaturalGas: () => void;
  openPower: () => void;
  openMetals: () => void;
  openAgriculture: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🛢️</div>
        <div>
          <p className="eyebrow">TRADING</p>
          <h1>Commodities Trading</h1>
          <p className="intro">
            Explore major trading areas across energy, metals and agricultural
            commodity markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🛢️</span>
          <div>
            <h2>Commodities Trading Areas</h2>
            <p>
              Explore major commodity-market trading areas commonly found
              across institutional markets businesses.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          {commoditiesTradingAreas.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "commodities-oil-energy") {
                  openOilEnergy();
                } else if (item.id === "commodities-natural-gas") {
                  openNaturalGas();
                } else if (item.id === "commodities-power") {
                  openPower();
                } else if (item.id === "commodities-metals") {
                  openMetals();
                } else if (item.id === "commodities-agriculture") {
                  openAgriculture();
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

function EquitiesTradingMap({
  goBack,
  openCash,
  openDerivatives,
  openIndexETF,
  openElectronic,
  openEM,
}: {
  goBack: () => void;
  openCash: () => void;
  openDerivatives: () => void;
  openIndexETF: () => void;
  openElectronic: () => void;
  openEM: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">📈</div>
        <div>
          <p className="eyebrow">TRADING</p>
          <h1>Equities Trading</h1>
          <p className="intro">
            Explore major trading areas across cash equities, equity derivatives
            and electronic equity markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📈</span>
          <div>
            <h2>Equities Trading Areas</h2>
            <p>
              Explore major product and trading areas commonly found across
              institutional equities businesses.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          {equitiesTradingAreas.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "equities-cash") {
                  openCash();
                } else if (item.id === "equities-derivatives") {
                  openDerivatives();
                } else if (item.id === "equities-index-etf") {
                  openIndexETF();
                } else if (item.id === "equities-electronic") {
                  openElectronic();
                } else if (item.id === "equities-em") {
                  openEM();
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

function ElectronicCreditMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Credit Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">💻</div>
        <div>
          <p className="eyebrow">CREDIT TRADING</p>
          <h1>Electronic Credit</h1>
          <p className="intro">
            Explore trading roles focused on electronic pricing, execution and
            liquidity across credit markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💻</span>
          <div>
            <h2>Electronic Credit Roles</h2>
            <p>Explore a core trading role in electronic credit.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Electronic Credit Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const electronicCreditTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["💳", "Credit Trading", "Electronic Credit → Electronic Credit Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "💻",
        "Electronic Credit Markets",
        "Electronic trading environments for corporate bonds and other supported credit instruments.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Products commonly supported by electronic credit trading.",
    cards: [
      [
        "📄",
        "Corporate Bonds",
        "Investment-grade and high-yield corporate bonds traded through supported electronic workflows.",
      ],
      [
        "🧩",
        "Electronically Traded Credit Products",
        "Additional credit instruments may be supported depending on the desk, product and venue.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities in institutional electronic credit trading.",
    cards: [
      [
        "⚡",
        "Manage Electronic Pricing",
        "Monitor electronically distributed prices and liquidity across supported credit products.",
      ],
      [
        "📊",
        "Manage Trading Risk",
        "Monitor inventory, credit-spread, liquidity and market exposures generated by electronic trading.",
      ],
      [
        "🖥️",
        "Monitor Execution",
        "Monitor execution quality, trading activity and liquidity across electronic venues.",
      ],
      [
        "🔧",
        "Improve Trading Workflows",
        "Work with quantitative and technology teams on pricing, execution and automation.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to electronic credit trading.",
    cards: [
      ["🤝", "Credit Sales", "Connects client activity and execution needs with the desk."],
      ["🧮", "Quantitative Trading / Research", "Supports pricing and execution analytics."],
      ["💻", "Technology", "Builds and maintains trading systems, connectivity and automation."],
      ["🔬", "Credit Research", "Provides issuer, sector and credit analysis."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and settlement workflows."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Electronic market and post-trade infrastructure supporting credit trading.",
    cards: [
      [
        "🖥️",
        "Electronic Trading Platforms",
        "Electronic venues support price discovery, liquidity and execution.",
      ],
      [
        "🔌",
        "Market Connectivity",
        "Connectivity links trading systems with venues, clients and liquidity sources.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, spreads, issuer and security data support electronic pricing and risk decisions.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Post-trade infrastructure supports applicable clearing and securities settlement.",
      ],
    ],
  },
];

function ElectronicCreditTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Electronic Credit"
      title="Electronic Credit Trader"
      intro="Supports electronic credit pricing and execution, manages trading risk and monitors liquidity across electronically traded credit markets."
      sections={electronicCreditTraderSections}
    />
  );
}

function CreditDerivativesMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Credit Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">CREDIT TRADING</p>
          <h1>Credit Derivatives</h1>
          <p className="intro">
            Explore trading roles in derivatives linked to corporate and sovereign credit risk.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Credit Derivatives Roles</h2>
            <p>Explore a core trading role in credit derivatives.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Credit Derivatives Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const creditDerivativesTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["💳", "Credit Trading", "Credit Derivatives → Credit Derivatives Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market in which this role primarily operates.",
    cards: [
      [
        "🧩",
        "Credit Derivatives Market",
        "The market for derivatives whose value is linked to the credit risk of companies, sovereigns or groups of reference entities.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "📄",
        "Single-Name Credit Default Swaps",
        "Contracts that transfer credit risk linked to a specific reference entity.",
      ],
      [
        "📊",
        "Credit Default Swap Indices",
        "Standardized credit derivatives referencing baskets of corporate or sovereign credit exposures.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional credit derivatives desk.",
    cards: [
      [
        "💱",
        "Make Markets",
        "Price credit derivatives and provide liquidity across supported names and indices.",
      ],
      [
        "📊",
        "Manage Credit Risk",
        "Monitor spread, default, market and position exposures.",
      ],
      [
        "⚡",
        "Execute Flow",
        "Execute client and interdealer credit-derivatives transactions.",
      ],
      [
        "🌍",
        "Monitor Credit Markets",
        "Track issuers, indices, spreads, credit events, rates and market liquidity.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a credit derivatives trading desk.",
    cards: [
      ["🤝", "Credit Sales", "Connects institutional client activity with the trading desk."],
      ["🔬", "Credit Research", "Provides issuer, sector and credit analysis."],
      ["🧩", "Structuring", "Works with sales and trading on customized credit solutions."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧮", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmation, lifecycle and post-trade processing."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Trading and post-trade infrastructure supporting credit derivatives.",
    cards: [
      [
        "🖥️",
        "Trading Venues & Dealer Connectivity",
        "Support electronic and dealer-based execution workflows.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Credit spreads, curves, reference-entity and contract data support pricing and risk decisions.",
      ],
      [
        "🧹",
        "Clearing & Post-Trade Infrastructure",
        "Supports confirmation, lifecycle processing and central clearing where applicable.",
      ],
    ],
  },
];

function CreditDerivativesTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Credit Derivatives"
      title="Credit Derivatives Trader"
      intro="Prices and trades credit derivatives, provides liquidity and manages credit-spread and market risk across supported names and indices."
      sections={creditDerivativesTraderSections}
    />
  );
}

function EmergingMarketsCreditMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Credit Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🌍</div>
        <div>
          <p className="eyebrow">CREDIT TRADING</p>
          <h1>Emerging Markets Credit</h1>
          <p className="intro">
            Explore trading roles across emerging-market sovereign and corporate credit.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🌍</span>
          <div>
            <h2>Emerging Markets Credit Roles</h2>
            <p>Explore a core trading role in emerging-market credit.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>EM Credit Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const emCreditTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["💳", "Credit Trading", "Emerging Markets Credit → EM Credit Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The markets in which this role primarily operates.",
    cards: [
      [
        "🌍",
        "Emerging Markets Credit",
        "Markets for debt issued by emerging-market sovereigns and companies, often including internationally traded hard-currency bonds.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "🏛️",
        "EM Sovereign Bonds",
        "Debt securities issued by emerging-market governments.",
      ],
      [
        "🏢",
        "EM Corporate Bonds",
        "Debt securities issued by companies in emerging markets.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional emerging-markets credit desk.",
    cards: [
      [
        "💱",
        "Make Markets",
        "Quote supported EM credit securities and provide liquidity.",
      ],
      [
        "📊",
        "Manage Risk",
        "Monitor sovereign, corporate, spread, rate, liquidity and inventory exposures.",
      ],
      [
        "⚡",
        "Execute Flow",
        "Execute client and interdealer EM credit transactions.",
      ],
      [
        "🌍",
        "Monitor Countries & Issuers",
        "Track macro conditions, policy, sovereign risk, issuers, spreads and liquidity.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an emerging-markets credit trading desk.",
    cards: [
      ["🤝", "EM / Credit Sales", "Connects institutional client activity with the trading desk."],
      ["🔬", "EM Research / Credit Research", "Provides country, issuer and market analysis."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧮", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and settlement."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Market and post-trade infrastructure supporting emerging-markets credit trading.",
    cards: [
      [
        "🖥️",
        "Trading Venues & Market Connectivity",
        "Support electronic and dealer-based execution across supported markets.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, spreads, country, issuer and security data support trading decisions.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports post-trade processing, clearing where applicable, and securities settlement.",
      ],
    ],
  },
];

function EMCreditTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Emerging Markets Credit"
      title="EM Credit Trader"
      intro="Trades emerging-market sovereign and corporate credit, provides liquidity and manages country, credit and market risk across supported markets."
      sections={emCreditTraderSections}
    />
  );
}

function HighYieldCreditMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Credit Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">⚡</div>
        <div>
          <p className="eyebrow">CREDIT TRADING</p>
          <h1>High Yield Credit</h1>
          <p className="intro">
            Explore trading roles in high-yield corporate credit markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚡</span>
          <div>
            <h2>High Yield Credit Roles</h2>
            <p>Explore a core trading role in high-yield credit.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>High Yield Credit Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const highYieldCreditTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["💳", "Credit Trading", "High Yield Credit → High Yield Credit Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market in which this role primarily operates.",
    cards: [
      [
        "⚡",
        "High Yield Corporate Bond Market",
        "The market for corporate debt issued by borrowers with below-investment-grade credit ratings.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "📄",
        "High Yield Corporate Bonds",
        "Below-investment-grade corporate debt securities offering higher credit spreads and credit risk.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional high-yield credit desk.",
    cards: [
      [
        "💱",
        "Make Markets",
        "Quote high-yield bonds and provide liquidity in supported securities.",
      ],
      [
        "📊",
        "Manage Risk",
        "Monitor credit, spread, liquidity, interest-rate and inventory exposures.",
      ],
      [
        "⚡",
        "Execute Flow",
        "Execute client and interdealer high-yield credit transactions.",
      ],
      [
        "🌍",
        "Monitor Credit Markets",
        "Track issuers, spreads, ratings, rates, liquidity and market developments.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a high-yield credit trading desk.",
    cards: [
      ["🤝", "Credit Sales", "Connects institutional client activity with the trading desk."],
      ["🔬", "Credit Research", "Provides issuer, sector and fundamental credit analysis."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧮", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and settlement."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Market and post-trade infrastructure supporting high-yield bond trading.",
    cards: [
      [
        "🖥️",
        "Trading Venues & Market Connectivity",
        "Support electronic and dealer-based execution workflows.",
      ],
      [
        "📡",
        "Market & Reference Data",
        "Prices, spreads, ratings, issuer data and security information support trading decisions.",
      ],
      [
        "🔗",
        "Clearing & Settlement Infrastructure",
        "Supports post-trade processing, clearing where applicable, and securities settlement.",
      ],
    ],
  },
];

function HighYieldCreditTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="High Yield Credit"
      title="High Yield Credit Trader"
      intro="Trades high-yield corporate bonds, provides liquidity and manages credit, liquidity and market risk across supported issuers and sectors."
      sections={highYieldCreditTraderSections}
    />
  );
}

function InvestmentGradeCreditMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Credit Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🏢</div>
        <div>
          <p className="eyebrow">CREDIT TRADING</p>
          <h1>Investment Grade Credit</h1>
          <p className="intro">
            Explore trading roles in investment-grade corporate credit markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🏢</span>
          <div>
            <h2>Investment Grade Credit Roles</h2>
            <p>Explore a core trading role in investment-grade credit.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Investment Grade Credit Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const investmentGradeCreditTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["💳", "Credit Trading", "Investment Grade Credit → Investment Grade Credit Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market in which this role primarily operates.",
    cards: [
      [
        "🏢",
        "Investment Grade Corporate Bond Market",
        "The market for debt issued by companies with higher credit ratings.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "📄",
        "Investment Grade Corporate Bonds",
        "Debt securities issued by investment-grade corporate borrowers.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional investment-grade credit desk.",
    cards: [
      ["💱", "Make Markets", "Quote corporate bonds and provide liquidity in supported securities."],
      ["📊", "Manage Risk", "Monitor credit, spread, interest-rate and inventory exposures."],
      ["⚡", "Execute Flow", "Execute client and interdealer credit transactions."],
      ["🌍", "Monitor Credit Markets", "Track issuers, spreads, rates, liquidity and market developments."],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to an investment-grade credit trading desk.",
    cards: [
      ["🤝", "Credit Sales", "Connects institutional client activity with the trading desk."],
      ["🔬", "Credit Research", "Provides issuer, sector and credit analysis."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧮", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations / Settlement", "Supports post-trade processing and settlement."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Market and post-trade infrastructure supporting corporate bond trading.",
    cards: [
      ["🖥️", "Trading Venues & Market Connectivity", "Support electronic and dealer-based execution workflows."],
      ["📡", "Market & Reference Data", "Prices, spreads, issuer data and security information support trading decisions."],
      ["🔗", "Clearing & Settlement Infrastructure", "Supports post-trade processing, clearing where applicable, and securities settlement."],
    ],
  },
];

function InvestmentGradeCreditTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Investment Grade Credit"
      title="Investment Grade Credit Trader"
      intro="Trades investment-grade corporate bonds, provides liquidity and manages credit and market risk across supported issuers and sectors."
      sections={investmentGradeCreditTraderSections}
    />
  );
}

function CreditTradingMap({
  goBack,
  openIG,
  openHY,
  openEM,
  openDerivatives,
  openElectronicCredit,
}: {
  goBack: () => void;
  openIG: () => void;
  openHY: () => void;
  openEM: () => void;
  openDerivatives: () => void;
  openElectronicCredit: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">💳</div>
        <div>
          <p className="eyebrow">TRADING</p>
          <h1>Credit Trading</h1>
          <p className="intro">
            Explore major trading areas across corporate credit, emerging
            markets and credit derivatives.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💳</span>
          <div>
            <h2>Credit Trading Areas</h2>
            <p>
              Explore major product and trading areas commonly found across
              institutional credit businesses.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          {creditTradingAreas.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "credit-ig") {
                  openIG();
                } else if (item.id === "credit-hy") {
                  openHY();
                } else if (item.id === "credit-em") {
                  openEM();
                } else if (item.id === "credit-derivatives") {
                  openDerivatives();
                } else if (item.id === "credit-electronic") {
                  openElectronicCredit();
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

function RatesTradingMap({
  goBack,
  openGovernmentBonds,
  openSwaps,
  openFuturesSTIR,
  openOptions,
  openElectronicRates,
}: {
  goBack: () => void;
  openGovernmentBonds: () => void;
  openSwaps: () => void;
  openFuturesSTIR: () => void;
  openOptions: () => void;
  openElectronicRates: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">📉</div>

        <div>
          <p className="eyebrow">TRADING</p>
          <h1>Rates Trading</h1>

          <p className="intro">
            Explore trading areas across government bonds, interest rates and
            rates derivatives.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📉</span>

          <div>
            <h2>Rates Trading Areas</h2>
            <p>
              Explore major product and trading areas commonly found across
              institutional rates businesses.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          {ratesTradingAreas.map((item) => (
            <button
              className="finance-card"
              key={item.id}
              onClick={() => {
                if (item.id === "rates-government-bonds") {
                  openGovernmentBonds();
                } else if (item.id === "rates-swaps") {
                  openSwaps();
                } else if (item.id === "rates-futures-stir") {
                  openFuturesSTIR();
                } else if (item.id === "rates-options") {
                  openOptions();
                } else if (item.id === "rates-electronic") {
                  openElectronicRates();
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






function ElectronicRatesMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>← Rates Trading</button>

      <header className="hero detail-hero">
        <div className="globe">⚡</div>
        <div>
          <p className="eyebrow">RATES TRADING</p>
          <h1>Electronic Rates</h1>
          <p className="intro">
            Explore trading roles focused on electronic pricing, execution and
            liquidity across rates markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚡</span>
          <div>
            <h2>Electronic Rates Roles</h2>
            <p>Explore a core trading role in electronic rates.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Electronic Rates Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const electronicRatesTraderSections: RoleDetailSection[] = [
    {
      emoji: "📍",
      title: "Where Am I?",
      description: "See where this role sits within the financial system.",
      cards: [
        ["🏦", "Financial Institutions", "Banks"],
        ["📈", "Global Markets", "Trading"],
        ["📉", "Rates Trading", "Electronic Rates → Electronic Rates Trader"],
      ],
    },
    {
      emoji: "📈",
      title: "What Market?",
      description: "The markets in which this role primarily operates.",
      cards: [
        ["📉", "Rates Markets",
         "Electronic markets for government bonds and other supported interest-rate products."],
      ],
    },
    {
      emoji: "🧩",
      title: "What Products?",
      description: "Products commonly supported by electronic rates trading.",
      cards: [
        ["🏛️", "Government Bonds",
         "Sovereign bonds traded through electronic and dealer markets."],
        ["📅", "Electronic Rates Products",
         "Depending on the desk and venue, electronic workflows can support additional rates instruments."],
      ],
    },
    {
      emoji: "💼",
      title: "What Do I Actually Do?",
      description: "Typical responsibilities in institutional electronic rates trading.",
      cards: [
        ["⚡", "Manage Electronic Pricing",
         "Monitor electronically distributed prices and liquidity."],
        ["📊", "Manage Trading Risk",
         "Monitor positions and rates exposures generated by electronic trading."],
        ["🖥️", "Monitor Execution",
         "Monitor execution quality, liquidity and trading activity across electronic venues."],
        ["🔧", "Improve Trading Workflows",
         "Work with quantitative and technology teams on pricing, execution and automation."],
      ],
    },
    {
      emoji: "🔗",
      title: "Who Do I Work With?",
      description: "Key functions connected to electronic rates trading.",
      cards: [
        ["🤝", "Rates Sales", "Connects client activity and execution needs with the desk."],
        ["🧮", "Quantitative Trading / Research", "Supports pricing and execution analytics."],
        ["💻", "Technology", "Builds and maintains trading systems, connectivity and automation."],
        ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
        ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
        ["💸", "Operations", "Supports post-trade processing and settlement workflows."],
      ],
    },
    {
      emoji: "⚙️",
      title: "What Infrastructure Supports the Trades?",
      description: "Electronic market and post-trade infrastructure supporting rates trading.",
      cards: [
        ["🖥️", "Electronic Trading Platforms",
         "Electronic venues support price discovery and execution."],
        ["🔌", "Market Connectivity",
         "Connectivity links trading systems with venues, clients and liquidity sources."],
        ["📡", "Market Data",
         "Real-time prices, yields and rates data support trading decisions."],
        ["🔗", "Clearing & Settlement Infrastructure",
         "Post-trade infrastructure supports applicable clearing and settlement."],
      ],
    },
  ];

function ElectronicRatesTraderMap({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Electronic Rates"
      title="Electronic Rates Trader"
      intro="Supports electronic rates pricing and execution, manages trading risk and monitors liquidity across electronic markets."
      sections={electronicRatesTraderSections}
    />
  );
}

function RatesOptionsMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>← Rates Trading</button>

      <header className="hero detail-hero">
        <div className="globe">🧩</div>
        <div>
          <p className="eyebrow">RATES TRADING</p>
          <h1>Rates Options</h1>
          <p className="intro">
            Explore trading roles in interest-rate options and volatility markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>Rates Options Roles</h2>
            <p>Explore a core trading role in rates options.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Rates Options Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

type RoleDetailSection = {
  emoji: string;
  title: string;
  description: string;
  cards: string[][];
};

type RoleDetailPageProps = {
  goBack: () => void;
  backLabel: string;
  title: string;
  intro: string;
  sections: RoleDetailSection[];
  eyebrow?: string;
};

function RoleDetailPage({
  goBack,
  backLabel,
  title,
  intro,
  sections,
  eyebrow = "GLOBAL MARKETS ROLE",
}: RoleDetailPageProps) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← {backLabel}
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="intro">{intro}</p>
        </div>
      </header>

      {sections.map((section) => (
        <section className="island central-bank-island" key={section.title}>
          <div className="island-heading">
            <span className="island-emoji">{section.emoji}</span>
            <div>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
          </div>

          <div className="cards function-cards">
            {section.cards.map(([emoji, title, text]) => (
              <div className="finance-card" key={title}>
                <span>{emoji}</span>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

const ratesOptionsTraderSections: RoleDetailSection[] = [
  {
    emoji: "📍",
    title: "Where Am I?",
    description: "See where this role sits within the financial system.",
    cards: [
      ["🏦", "Financial Institutions", "Banks"],
      ["📈", "Global Markets", "Trading"],
      ["📉", "Rates Trading", "Rates Options → Rates Options Trader"],
    ],
  },
  {
    emoji: "📈",
    title: "What Market?",
    description: "The market in which this role primarily operates.",
    cards: [
      [
        "🧩",
        "Interest Rate Derivatives Market",
        "The market for derivatives linked to interest rates, yield curves and rates volatility.",
      ],
    ],
  },
  {
    emoji: "🧩",
    title: "What Products?",
    description: "Core instruments associated with this role.",
    cards: [
      [
        "🔁",
        "Swaptions",
        "Options that provide the right to enter into an interest-rate swap under specified terms.",
      ],
      [
        "📅",
        "Options on Rates Futures",
        "Options linked to listed interest-rate futures contracts.",
      ],
    ],
  },
  {
    emoji: "💼",
    title: "What Do I Actually Do?",
    description: "Typical responsibilities on an institutional rates options desk.",
    cards: [
      [
        "💱",
        "Price Options",
        "Quote and price rates options across supported markets and maturities.",
      ],
      [
        "📊",
        "Manage Option Risk",
        "Monitor and manage interest-rate and volatility exposures.",
      ],
      [
        "⚡",
        "Execute Flow",
        "Execute client and interdealer rates options transactions.",
      ],
      [
        "🌍",
        "Monitor Rates & Volatility",
        "Track yield curves, volatility, monetary policy and market conditions.",
      ],
    ],
  },
  {
    emoji: "🔗",
    title: "Who Do I Work With?",
    description: "Key functions connected to a rates options trading desk.",
    cards: [
      ["🤝", "Rates Sales", "Connects institutional client activity with the trading desk."],
      ["🧩", "Structuring", "Works with sales and trading on customized rates solutions."],
      ["🛡️", "Market Risk", "Monitors market-risk exposures and risk limits."],
      ["⚙️", "Middle Office", "Supports trade control, monitoring and exception management."],
      ["🧮", "Product Control", "Supports valuation control and trading P&L oversight."],
      ["💸", "Operations", "Supports confirmations, lifecycle events and post-trade processing."],
    ],
  },
  {
    emoji: "⚙️",
    title: "What Infrastructure Supports the Trades?",
    description: "Infrastructure supporting rates options from pricing through post-trade processing.",
    cards: [
      ["🖥️", "Trading & Pricing Systems", "Support pricing, execution and position management."],
      ["📡", "Market Data & Curves", "Rates, curves and volatility data support pricing and risk decisions."],
      ["🔗", "Clearing & Post-Trade Infrastructure", "Supports applicable clearing, confirmation and lifecycle processing."],
    ],
  },
];

function RatesOptionsTraderMap({ goBack }: { goBack: () => void }) {
  return (
    <RoleDetailPage
      goBack={goBack}
      backLabel="Rates Options"
      title="Rates Options Trader"
      intro="Prices and trades interest-rate options, manages volatility and interest-rate risk, and provides liquidity across rates derivatives."
      sections={ratesOptionsTraderSections}
    />
  );
}

function RatesFuturesSTIRMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Rates Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">📅</div>
        <div>
          <p className="eyebrow">RATES TRADING</p>
          <h1>Rates Futures / STIR</h1>
          <p className="intro">
            Explore trading roles across listed interest-rate futures and
            short-term interest-rate markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">📅</span>
          <div>
            <h2>Rates Futures / STIR Roles</h2>
            <p>Explore a core trading role in listed rates derivatives.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Rates Futures Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function RatesFuturesTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Rates Futures / STIR
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>
        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>Rates Futures Trader</h1>
          <p className="intro">
            Trades listed interest-rate futures, manages rates exposure and
            provides liquidity across supported contracts and maturities.
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
            <span>📉</span>
            <strong>Rates Trading</strong>
            <span>Rates Futures / STIR → Rates Futures Trader</span>
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
            <span>📅</span>
            <strong>Listed Rates Derivatives Market</strong>
            <span>
              Exchange-traded markets for futures linked to government bonds
              and short-term interest rates.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>What Products?</h2>
            <p>Core instruments associated with this role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🏛️</span>
            <strong>Government Bond Futures</strong>
            <span>
              Exchange-traded futures linked to government bond markets.
            </span>
          </div>

          <div className="finance-card">
            <span>⏱️</span>
            <strong>Short-Term Interest Rate Futures</strong>
            <span>
              Futures linked to short-term interest-rate benchmarks and
              expectations for future policy rates.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities on an institutional rates futures desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Trade &amp; Provide Liquidity</strong>
            <span>
              Execute and provide liquidity across supported rates futures contracts.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Rate Risk</strong>
            <span>
              Monitor positions and interest-rate exposures generated by trading activity.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Manage Relative-Value Relationships</strong>
            <span>
              Monitor pricing relationships across contracts, maturities and
              related rates instruments.
            </span>
          </div>

          <div className="finance-card">
            <span>🌍</span>
            <strong>Monitor Rates Markets</strong>
            <span>
              Track central-bank policy, economic data, yield curves and market liquidity.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>
          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions connected to a rates futures trading desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>Rates Sales</strong>
            <span>
              Connects institutional client activity and market information with the desk.
            </span>
          </div>

          <div className="finance-card">
            <span>🏛️</span>
            <strong>Government Bond Traders</strong>
            <span>
              Coordinate around related cash bond and futures market activity.
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
            <span>🧮</span>
            <strong>Product Control</strong>
            <span>Supports valuation control and trading P&amp;L oversight.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations</strong>
            <span>Supports post-trade processing and contract lifecycle workflows.</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Exchange, clearing and market infrastructure supporting listed
              rates derivatives.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Futures Exchanges &amp; Trading Platforms</strong>
            <span>
              Listed venues provide standardized contracts, price discovery and execution.
            </span>
          </div>

          <div className="finance-card">
            <span>🧹</span>
            <strong>Central Clearing</strong>
            <span>
              Clearing houses manage post-trade clearing and margin for listed futures.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data</strong>
            <span>
              Futures prices, rates and market information support trading and risk decisions.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function InterestRateSwapsMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Rates Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🔁</div>
        <div>
          <p className="eyebrow">RATES TRADING</p>
          <h1>Interest Rate Swaps</h1>
          <p className="intro">
            Explore trading roles in interest-rate swap markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔁</span>
          <div>
            <h2>Interest Rate Swap Roles</h2>
            <p>Explore a core trading role in interest-rate derivatives.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Interest Rate Swap Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function InterestRateSwapTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Interest Rate Swaps
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>
        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>Interest Rate Swap Trader</h1>
          <p className="intro">
            Prices and trades interest-rate swaps, provides liquidity and
            manages interest-rate risk across supported currencies and maturities.
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
            <span>📉</span>
            <strong>Rates Trading</strong>
            <span>Interest Rate Swaps → Interest Rate Swap Trader</span>
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
            <span>🔁</span>
            <strong>Interest Rate Derivatives Market</strong>
            <span>
              The market for derivatives whose value is linked to interest
              rates and yield curves.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>What Products?</h2>
            <p>Core instruments associated with this role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🔁</span>
            <strong>Interest Rate Swaps</strong>
            <span>
              Contracts that exchange interest-payment streams based on
              specified rates and terms.
            </span>
          </div>

          <div className="finance-card">
            <span>📅</span>
            <strong>Forward-Starting Swaps</strong>
            <span>
              Interest-rate swaps whose contractual swap period begins at a
              future date.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities on an institutional rates swap desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Make Markets</strong>
            <span>
              Quote swap rates and provide liquidity across supported
              currencies and maturities.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Rate Risk</strong>
            <span>
              Monitor and manage interest-rate and curve exposures generated
              by trading activity.
            </span>
          </div>

          <div className="finance-card">
            <span>⚡</span>
            <strong>Execute Flow</strong>
            <span>
              Execute client and interdealer interest-rate swap transactions.
            </span>
          </div>

          <div className="finance-card">
            <span>🌍</span>
            <strong>Monitor Rates Markets</strong>
            <span>
              Track yield curves, monetary policy, economic data and market liquidity.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>
          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions connected to an interest-rate swap desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>Rates Sales</strong>
            <span>
              Connects institutional client activity and market information
              with the trading desk.
            </span>
          </div>

          <div className="finance-card">
            <span>🧩</span>
            <strong>Structuring</strong>
            <span>
              Works with sales and trading on customized rates solutions and
              derivative structures.
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
            <span>🧮</span>
            <strong>Product Control</strong>
            <span>Supports valuation control and trading P&amp;L oversight.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations</strong>
            <span>
              Supports confirmations, lifecycle events and post-trade processing.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Trading and post-trade infrastructure supporting interest-rate
              derivatives.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Trading Venues &amp; Market Connectivity</strong>
            <span>
              Dealer and electronic trading systems support pricing and execution.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data &amp; Curves</strong>
            <span>
              Rates, yield curves and market data support pricing and risk management.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Clearing &amp; Post-Trade Infrastructure</strong>
            <span>
              Clearing, confirmation and lifecycle systems support applicable
              swap transactions after execution.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function GovernmentBondsMap({
  goBack,
  openTrader,
}: {
  goBack: () => void;
  openTrader: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Rates Trading
      </button>

      <header className="hero detail-hero">
        <div className="globe">🏛️</div>
        <div>
          <p className="eyebrow">RATES TRADING</p>
          <h1>Government Bonds</h1>
          <p className="intro">
            Explore trading roles in sovereign government bond markets.
          </p>
        </div>
      </header>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🏛️</span>
          <div>
            <h2>Government Bond Roles</h2>
            <p>Explore a core trading role in government bond markets.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <button className="finance-card" onClick={openTrader}>
            <span>👤</span>
            <strong>Government Bond Trader</strong>
            <span className="card-arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function GovernmentBondTraderMap({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← Government Bonds
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>
        <div>
          <p className="eyebrow">TRADING ROLE</p>
          <h1>Government Bond Trader</h1>
          <p className="intro">
            Trades sovereign government bonds, provides liquidity and manages
            interest-rate and market risk across supported maturities.
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
            <span>📉</span>
            <strong>Rates Trading</strong>
            <span>Government Bonds → Government Bond Trader</span>
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
            <span>🏛️</span>
            <strong>Government Bond Market</strong>
            <span>
              The market for debt securities issued by sovereign governments.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🧩</span>
          <div>
            <h2>What Products?</h2>
            <p>Core instruments associated with this role.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>📜</span>
            <strong>Government Bonds</strong>
            <span>
              Sovereign debt securities across short-, medium- and long-term maturities.
            </span>
          </div>

          <div className="finance-card">
            <span>💵</span>
            <strong>Treasury Bills / Short-Term Government Debt</strong>
            <span>
              Short-dated sovereign instruments used in government funding and money markets.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">💼</span>
          <div>
            <h2>What Do I Actually Do?</h2>
            <p>Typical responsibilities on an institutional government bond desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>💱</span>
            <strong>Make Markets</strong>
            <span>
              Quote government bonds and provide liquidity across supported maturities.
            </span>
          </div>

          <div className="finance-card">
            <span>📊</span>
            <strong>Manage Risk</strong>
            <span>
              Monitor positions and interest-rate exposures generated by trading activity.
            </span>
          </div>

          <div className="finance-card">
            <span>⚡</span>
            <strong>Execute Flow</strong>
            <span>
              Execute client and interdealer government bond transactions.
            </span>
          </div>

          <div className="finance-card">
            <span>🌍</span>
            <strong>Monitor Rates Markets</strong>
            <span>
              Track yields, central-bank policy, economic data, issuance and market liquidity.
            </span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">🔗</span>
          <div>
            <h2>Who Do I Work With?</h2>
            <p>Key functions connected to a government bond trading desk.</p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🤝</span>
            <strong>Rates Sales</strong>
            <span>
              Connects institutional client activity and market information with the trading desk.
            </span>
          </div>

          <div className="finance-card">
            <span>🔬</span>
            <strong>Rates Research / Strategy</strong>
            <span>
              Provides analysis of rates, monetary policy and government bond markets.
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
            <span>🧮</span>
            <strong>Product Control</strong>
            <span>Supports valuation control and trading P&amp;L oversight.</span>
          </div>

          <div className="finance-card">
            <span>💸</span>
            <strong>Operations / Settlement</strong>
            <span>Supports post-trade processing and securities settlement.</span>
          </div>
        </div>
      </section>

      <section className="island central-bank-island">
        <div className="island-heading">
          <span className="island-emoji">⚙️</span>
          <div>
            <h2>What Infrastructure Supports the Trades?</h2>
            <p>
              Market and post-trade infrastructure supporting government bond
              trading from execution through settlement.
            </p>
          </div>
        </div>

        <div className="cards function-cards">
          <div className="finance-card">
            <span>🖥️</span>
            <strong>Trading Venues &amp; Market Connectivity</strong>
            <span>
              Electronic venues and dealer-market connectivity support price discovery and execution.
            </span>
          </div>

          <div className="finance-card">
            <span>📡</span>
            <strong>Market Data</strong>
            <span>
              Bond prices, yields, curves and market information support trading decisions.
            </span>
          </div>

          <div className="finance-card">
            <span>🔗</span>
            <strong>Clearing &amp; Settlement Infrastructure</strong>
            <span>
              Post-trade systems support clearing, securities movement and cash settlement.
            </span>
          </div>
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
  const [page, setPage] = useState<"system" | "central-bank" | "banks" | "global-markets" | "financing" | "financing-repo" | "financing-repo-role" | "financing-securities-lending" | "financing-securities-lending-role" | "financing-equity" | "financing-equity-role" | "financing-credit" | "financing-credit-role" | "financing-cross-asset" | "financing-cross-asset-role" | "markets-coo" | "markets-coo-role" | "research-strategy" | "research-macro" | "research-macro-role" | "research-fx" | "research-fx-role" | "research-rates" | "research-rates-role" | "research-credit" | "research-credit-role" | "research-equity" | "research-equity-role" | "research-cross-asset" | "research-cross-asset-role" | "structuring" | "structuring-fx" | "structuring-fx-structurer" | "structuring-rates" | "structuring-rates-structurer" | "structuring-credit" | "structuring-credit-structurer" | "structuring-equity" | "structuring-equity-structurer" | "structuring-commodities" | "structuring-commodities-structurer" | "structuring-cross-asset" | "structuring-cross-asset-structurer" | "sales" | "sales-fx" | "sales-fx-salesperson" | "sales-rates" | "sales-rates-salesperson" | "sales-credit" | "sales-credit-salesperson" | "sales-equities" | "sales-equities-salesperson" | "sales-commodities" | "sales-commodities-salesperson" | "sales-cross-asset" | "sales-cross-asset-salesperson" | "trading" | "credit-trading" | "credit-ig" | "credit-ig-trader" | "credit-hy" | "credit-hy-trader" | "credit-em" | "credit-em-trader" | "credit-derivatives" | "credit-derivatives-trader" | "credit-electronic" | "credit-electronic-trader" | "cross-asset-trading" | "cross-asset-trader" | "commodities-trading" | "commodities-oil-energy" | "commodities-oil-energy-trader" | "commodities-natural-gas" | "commodities-natural-gas-trader" | "commodities-power" | "commodities-power-trader" | "commodities-metals" | "commodities-metals-trader" | "commodities-agriculture" | "commodities-agriculture-trader" | "equities-trading" | "equities-cash" | "equities-cash-trader" | "equities-derivatives" | "equities-derivatives-trader" | "equities-index-etf" | "equities-index-etf-trader" | "equities-electronic" | "equities-electronic-trader" | "equities-em" | "equities-em-trader" | "rates-trading" | "rates-government-bonds" | "rates-government-bond-trader" | "rates-swaps" | "rates-swap-trader" | "rates-futures-stir" | "rates-futures-trader" | "rates-options" | "rates-options-trader" | "rates-electronic" | "rates-electronic-trader" | "fx-trading" | "fx-spot" | "fx-spot-trader" | "fx-forwards-swaps" | "fx-forward-swap-trader" | "fx-options" | "fx-options-trader" | "fx-em-ndf" | "fx-em-ndf-trader" | "fx-electronic" | "fx-electronic-trader" | "function">(
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

  if (page === "rates-electronic-trader") {
    return (
      <ElectronicRatesTraderMap
        goBack={() => setPage("rates-electronic")}
      />
    );
  }

  if (page === "rates-electronic") {
    return (
      <ElectronicRatesMap
        goBack={() => setPage("rates-trading")}
        openTrader={() => setPage("rates-electronic-trader")}
      />
    );
  }

  if (page === "rates-options-trader") {
    return <RatesOptionsTraderMap goBack={() => setPage("rates-options")} />;
  }

  if (page === "rates-options") {
    return (
      <RatesOptionsMap
        goBack={() => setPage("rates-trading")}
        openTrader={() => setPage("rates-options-trader")}
      />
    );
  }

  if (page === "rates-futures-trader") {
    return (
      <RatesFuturesTraderMap
        goBack={() => setPage("rates-futures-stir")}
      />
    );
  }

  if (page === "rates-futures-stir") {
    return (
      <RatesFuturesSTIRMap
        goBack={() => setPage("rates-trading")}
        openTrader={() => setPage("rates-futures-trader")}
      />
    );
  }

  if (page === "rates-swap-trader") {
    return (
      <InterestRateSwapTraderMap
        goBack={() => setPage("rates-swaps")}
      />
    );
  }

  if (page === "rates-swaps") {
    return (
      <InterestRateSwapsMap
        goBack={() => setPage("rates-trading")}
        openTrader={() => setPage("rates-swap-trader")}
      />
    );
  }

  if (page === "rates-government-bond-trader") {
    return (
      <GovernmentBondTraderMap
        goBack={() => setPage("rates-government-bonds")}
      />
    );
  }

  if (page === "rates-government-bonds") {
    return (
      <GovernmentBondsMap
        goBack={() => setPage("rates-trading")}
        openTrader={() => setPage("rates-government-bond-trader")}
      />
    );
  }

  if (page === "rates-trading") {
    return (
      <RatesTradingMap
        goBack={() => setPage("trading")}
        openGovernmentBonds={() => setPage("rates-government-bonds")}
        openSwaps={() => setPage("rates-swaps")}
        openFuturesSTIR={() => setPage("rates-futures-stir")}
        openOptions={() => setPage("rates-options")}
        openElectronicRates={() => setPage("rates-electronic")}
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

  if (page === "cross-asset-trader") {
    return (
      <CrossAssetTraderMap
        goBack={() => setPage("cross-asset-trading")}
      />
    );
  }

  if (page === "cross-asset-trading") {
    return (
      <CrossAssetTradingMap
        goBack={() => setPage("trading")}
        openTrader={() => setPage("cross-asset-trader")}
      />
    );
  }

  if (page === "commodities-agriculture-trader") {
    return (
      <AgriculturalCommoditiesTraderMap
        goBack={() => setPage("commodities-agriculture")}
      />
    );
  }

  if (page === "commodities-agriculture") {
    return (
      <AgriculturalCommoditiesMap
        goBack={() => setPage("commodities-trading")}
        openTrader={() => setPage("commodities-agriculture-trader")}
      />
    );
  }

  if (page === "commodities-metals-trader") {
    return (
      <MetalsTraderMap
        goBack={() => setPage("commodities-metals")}
      />
    );
  }

  if (page === "commodities-metals") {
    return (
      <MetalsMap
        goBack={() => setPage("commodities-trading")}
        openTrader={() => setPage("commodities-metals-trader")}
      />
    );
  }

  if (page === "commodities-power-trader") {
    return (
      <PowerTraderMap
        goBack={() => setPage("commodities-power")}
      />
    );
  }

  if (page === "commodities-power") {
    return (
      <PowerMap
        goBack={() => setPage("commodities-trading")}
        openTrader={() => setPage("commodities-power-trader")}
      />
    );
  }

  if (page === "commodities-natural-gas-trader") {
    return (
      <NaturalGasTraderMap
        goBack={() => setPage("commodities-natural-gas")}
      />
    );
  }

  if (page === "commodities-natural-gas") {
    return (
      <NaturalGasMap
        goBack={() => setPage("commodities-trading")}
        openTrader={() => setPage("commodities-natural-gas-trader")}
      />
    );
  }

  if (page === "commodities-oil-energy-trader") {
    return (
      <OilEnergyTraderMap
        goBack={() => setPage("commodities-oil-energy")}
      />
    );
  }

  if (page === "commodities-oil-energy") {
    return (
      <OilEnergyMap
        goBack={() => setPage("commodities-trading")}
        openTrader={() => setPage("commodities-oil-energy-trader")}
      />
    );
  }

  if (page === "commodities-trading") {
    return (
      <CommoditiesTradingMap
        goBack={() => setPage("trading")}
        openOilEnergy={() => setPage("commodities-oil-energy")}
        openNaturalGas={() => setPage("commodities-natural-gas")}
        openPower={() => setPage("commodities-power")}
        openMetals={() => setPage("commodities-metals")}
        openAgriculture={() => setPage("commodities-agriculture")}
      />
    );
  }

  if (page === "equities-em-trader") {
    return (
      <EMEquityTraderMap
        goBack={() => setPage("equities-em")}
      />
    );
  }

  if (page === "equities-em") {
    return (
      <EmergingMarketsEquitiesMap
        goBack={() => setPage("equities-trading")}
        openTrader={() => setPage("equities-em-trader")}
      />
    );
  }

  if (page === "equities-electronic-trader") {
    return (
      <ElectronicEquityTraderMap
        goBack={() => setPage("equities-electronic")}
      />
    );
  }

  if (page === "equities-electronic") {
    return (
      <ElectronicEquitiesMap
        goBack={() => setPage("equities-trading")}
        openTrader={() => setPage("equities-electronic-trader")}
      />
    );
  }

  if (page === "equities-index-etf-trader") {
    return (
      <IndexETFTraderMap
        goBack={() => setPage("equities-index-etf")}
      />
    );
  }

  if (page === "equities-index-etf") {
    return (
      <IndexETFTradingMap
        goBack={() => setPage("equities-trading")}
        openTrader={() => setPage("equities-index-etf-trader")}
      />
    );
  }

  if (page === "equities-derivatives-trader") {
    return (
      <EquityDerivativesTraderMap
        goBack={() => setPage("equities-derivatives")}
      />
    );
  }

  if (page === "equities-derivatives") {
    return (
      <EquityDerivativesMap
        goBack={() => setPage("equities-trading")}
        openTrader={() => setPage("equities-derivatives-trader")}
      />
    );
  }

  if (page === "equities-cash-trader") {
    return (
      <CashEquityTraderMap
        goBack={() => setPage("equities-cash")}
      />
    );
  }

  if (page === "equities-cash") {
    return (
      <CashEquitiesMap
        goBack={() => setPage("equities-trading")}
        openTrader={() => setPage("equities-cash-trader")}
      />
    );
  }

  if (page === "equities-trading") {
    return (
      <EquitiesTradingMap
        goBack={() => setPage("trading")}
        openCash={() => setPage("equities-cash")}
        openDerivatives={() => setPage("equities-derivatives")}
        openIndexETF={() => setPage("equities-index-etf")}
        openElectronic={() => setPage("equities-electronic")}
        openEM={() => setPage("equities-em")}
      />
    );
  }

  if (page === "credit-electronic-trader") {
    return (
      <ElectronicCreditTraderMap
        goBack={() => setPage("credit-electronic")}
      />
    );
  }

  if (page === "credit-electronic") {
    return (
      <ElectronicCreditMap
        goBack={() => setPage("credit-trading")}
        openTrader={() => setPage("credit-electronic-trader")}
      />
    );
  }

  if (page === "credit-derivatives-trader") {
    return (
      <CreditDerivativesTraderMap
        goBack={() => setPage("credit-derivatives")}
      />
    );
  }

  if (page === "credit-derivatives") {
    return (
      <CreditDerivativesMap
        goBack={() => setPage("credit-trading")}
        openTrader={() => setPage("credit-derivatives-trader")}
      />
    );
  }

  if (page === "credit-em-trader") {
    return (
      <EMCreditTraderMap
        goBack={() => setPage("credit-em")}
      />
    );
  }

  if (page === "credit-em") {
    return (
      <EmergingMarketsCreditMap
        goBack={() => setPage("credit-trading")}
        openTrader={() => setPage("credit-em-trader")}
      />
    );
  }

  if (page === "credit-hy-trader") {
    return (
      <HighYieldCreditTraderMap
        goBack={() => setPage("credit-hy")}
      />
    );
  }

  if (page === "credit-hy") {
    return (
      <HighYieldCreditMap
        goBack={() => setPage("credit-trading")}
        openTrader={() => setPage("credit-hy-trader")}
      />
    );
  }

  if (page === "credit-ig-trader") {
    return (
      <InvestmentGradeCreditTraderMap
        goBack={() => setPage("credit-ig")}
      />
    );
  }

  if (page === "credit-ig") {
    return (
      <InvestmentGradeCreditMap
        goBack={() => setPage("credit-trading")}
        openTrader={() => setPage("credit-ig-trader")}
      />
    );
  }

  if (page === "credit-trading") {
    return (
      <CreditTradingMap
        goBack={() => setPage("trading")}
        openIG={() => setPage("credit-ig")}
        openHY={() => setPage("credit-hy")}
        openEM={() => setPage("credit-em")}
        openDerivatives={() => setPage("credit-derivatives")}
        openElectronicCredit={() => setPage("credit-electronic")}
      />
    );
  }

  if (page === "markets-coo-role") {
    return (
      <MarketsBusinessManagerMap
        goBack={() => setPage("markets-coo")}
      />
    );
  }

  if (page === "markets-coo") {
    return (
      <MarketsCOOMap
        goBack={() => setPage("global-markets")}
        openRole={() => setPage("markets-coo-role")}
      />
    );
  }

  if (page === "financing-cross-asset-role") {
    return (
      <CrossAssetFinancingSpecialistMap
        goBack={() => setPage("financing-cross-asset")}
      />
    );
  }

  if (page === "financing-cross-asset") {
    return (
      <CrossAssetFinancingMap
        goBack={() => setPage("financing")}
        openRole={() => setPage("financing-cross-asset-role")}
      />
    );
  }

  if (page === "financing-credit-role") {
    return (
      <CreditFinancingTraderMap
        goBack={() => setPage("financing-credit")}
      />
    );
  }

  if (page === "financing-credit") {
    return (
      <CreditFinancingMap
        goBack={() => setPage("financing")}
        openRole={() => setPage("financing-credit-role")}
      />
    );
  }

  if (page === "financing-equity-role") {
    return (
      <EquityFinanceTraderMap
        goBack={() => setPage("financing-equity")}
      />
    );
  }

  if (page === "financing-equity") {
    return (
      <EquityFinanceMap
        goBack={() => setPage("financing")}
        openRole={() => setPage("financing-equity-role")}
      />
    );
  }

  if (page === "financing-securities-lending-role") {
    return (
      <SecuritiesLendingTraderMap
        goBack={() => setPage("financing-securities-lending")}
      />
    );
  }

  if (page === "financing-securities-lending") {
    return (
      <SecuritiesLendingMap
        goBack={() => setPage("financing")}
        openRole={() => setPage("financing-securities-lending-role")}
      />
    );
  }

  if (page === "financing-repo-role") {
    return (
      <RepoFinancingTraderMap
        goBack={() => setPage("financing-repo")}
      />
    );
  }

  if (page === "financing-repo") {
    return (
      <RepoFinancingMap
        goBack={() => setPage("financing")}
        openRole={() => setPage("financing-repo-role")}
      />
    );
  }

  if (page === "financing") {
    return (
      <FinancingMap
        goBack={() => setPage("global-markets")}
        openRepo={() => setPage("financing-repo")}
        openSecuritiesLending={() => setPage("financing-securities-lending")}
        openEquityFinance={() => setPage("financing-equity")}
        openCreditFinancing={() => setPage("financing-credit")}
        openCrossAssetFinancing={() => setPage("financing-cross-asset")}
      />
    );
  }

  if (page === "research-cross-asset-role") {
    return (
      <CrossAssetStrategistMap
        goBack={() => setPage("research-cross-asset")}
      />
    );
  }

  if (page === "research-cross-asset") {
    return (
      <CrossAssetStrategyMap
        goBack={() => setPage("research-strategy")}
        openRole={() => setPage("research-cross-asset-role")}
      />
    );
  }

  if (page === "research-equity-role") {
    return (
      <EquityStrategistMap
        goBack={() => setPage("research-equity")}
      />
    );
  }

  if (page === "research-equity") {
    return (
      <EquityStrategyMap
        goBack={() => setPage("research-strategy")}
        openRole={() => setPage("research-equity-role")}
      />
    );
  }

  if (page === "research-credit-role") {
    return (
      <CreditStrategistMap
        goBack={() => setPage("research-credit")}
      />
    );
  }

  if (page === "research-credit") {
    return (
      <CreditStrategyMap
        goBack={() => setPage("research-strategy")}
        openRole={() => setPage("research-credit-role")}
      />
    );
  }

  if (page === "research-rates-role") {
    return (
      <RatesStrategistMap
        goBack={() => setPage("research-rates")}
      />
    );
  }

  if (page === "research-rates") {
    return (
      <RatesStrategyMap
        goBack={() => setPage("research-strategy")}
        openRole={() => setPage("research-rates-role")}
      />
    );
  }

  if (page === "research-fx-role") {
    return (
      <FXStrategistMap
        goBack={() => setPage("research-fx")}
      />
    );
  }

  if (page === "research-fx") {
    return (
      <FXStrategyMap
        goBack={() => setPage("research-strategy")}
        openRole={() => setPage("research-fx-role")}
      />
    );
  }

  if (page === "research-macro-role") {
    return (
      <MacroStrategistMap
        goBack={() => setPage("research-macro")}
      />
    );
  }

  if (page === "research-macro") {
    return (
      <MacroResearchMap
        goBack={() => setPage("research-strategy")}
        openRole={() => setPage("research-macro-role")}
      />
    );
  }

  if (page === "research-strategy") {
    return (
      <ResearchStrategyMap
        goBack={() => setPage("global-markets")}
        openMacroResearch={() => setPage("research-macro")}
        openFXStrategy={() => setPage("research-fx")}
        openRatesStrategy={() => setPage("research-rates")}
        openCreditStrategy={() => setPage("research-credit")}
        openEquityStrategy={() => setPage("research-equity")}
        openCrossAssetStrategy={() => setPage("research-cross-asset")}
      />
    );
  }

  if (page === "structuring-cross-asset-structurer") {
    return (
      <CrossAssetStructurerMap
        goBack={() => setPage("structuring-cross-asset")}
      />
    );
  }

  if (page === "structuring-cross-asset") {
    return (
      <CrossAssetStructuringMap
        goBack={() => setPage("structuring")}
        openStructurer={() => setPage("structuring-cross-asset-structurer")}
      />
    );
  }

  if (page === "structuring-commodities-structurer") {
    return (
      <CommoditiesStructurerMap
        goBack={() => setPage("structuring-commodities")}
      />
    );
  }

  if (page === "structuring-commodities") {
    return (
      <CommoditiesStructuringMap
        goBack={() => setPage("structuring")}
        openStructurer={() => setPage("structuring-commodities-structurer")}
      />
    );
  }

  if (page === "structuring-equity-structurer") {
    return (
      <EquityStructurerMap
        goBack={() => setPage("structuring-equity")}
      />
    );
  }

  if (page === "structuring-equity") {
    return (
      <EquityStructuringMap
        goBack={() => setPage("structuring")}
        openStructurer={() => setPage("structuring-equity-structurer")}
      />
    );
  }

  if (page === "structuring-credit-structurer") {
    return (
      <CreditStructurerMap
        goBack={() => setPage("structuring-credit")}
      />
    );
  }

  if (page === "structuring-credit") {
    return (
      <CreditStructuringMap
        goBack={() => setPage("structuring")}
        openStructurer={() => setPage("structuring-credit-structurer")}
      />
    );
  }

  if (page === "structuring-rates-structurer") {
    return (
      <RatesStructurerMap
        goBack={() => setPage("structuring-rates")}
      />
    );
  }

  if (page === "structuring-rates") {
    return (
      <RatesStructuringMap
        goBack={() => setPage("structuring")}
        openStructurer={() => setPage("structuring-rates-structurer")}
      />
    );
  }

  if (page === "structuring-fx-structurer") {
    return (
      <FXStructurerMap
        goBack={() => setPage("structuring-fx")}
      />
    );
  }

  if (page === "structuring-fx") {
    return (
      <FXStructuringMap
        goBack={() => setPage("structuring")}
        openStructurer={() => setPage("structuring-fx-structurer")}
      />
    );
  }

  if (page === "structuring") {
    return (
      <StructuringMap
        goBack={() => setPage("global-markets")}
        openFXStructuring={() => setPage("structuring-fx")}
        openRatesStructuring={() => setPage("structuring-rates")}
        openCreditStructuring={() => setPage("structuring-credit")}
        openEquityStructuring={() => setPage("structuring-equity")}
        openCommoditiesStructuring={() => setPage("structuring-commodities")}
        openCrossAssetStructuring={() => setPage("structuring-cross-asset")}
      />
    );
  }

  if (page === "sales-cross-asset-salesperson") {
    return (
      <CrossAssetSalespersonMap
        goBack={() => setPage("sales-cross-asset")}
      />
    );
  }

  if (page === "sales-cross-asset") {
    return (
      <CrossAssetSalesMap
        goBack={() => setPage("sales")}
        openSalesperson={() => setPage("sales-cross-asset-salesperson")}
      />
    );
  }

  if (page === "sales-commodities-salesperson") {
    return (
      <CommoditiesSalespersonMap
        goBack={() => setPage("sales-commodities")}
      />
    );
  }

  if (page === "sales-commodities") {
    return (
      <CommoditiesSalesMap
        goBack={() => setPage("sales")}
        openSalesperson={() => setPage("sales-commodities-salesperson")}
      />
    );
  }

  if (page === "sales-equities-salesperson") {
    return (
      <EquitiesSalespersonMap
        goBack={() => setPage("sales-equities")}
      />
    );
  }

  if (page === "sales-equities") {
    return (
      <EquitiesSalesMap
        goBack={() => setPage("sales")}
        openSalesperson={() => setPage("sales-equities-salesperson")}
      />
    );
  }

  if (page === "sales-credit-salesperson") {
    return (
      <CreditSalespersonMap
        goBack={() => setPage("sales-credit")}
      />
    );
  }

  if (page === "sales-credit") {
    return (
      <CreditSalesMap
        goBack={() => setPage("sales")}
        openSalesperson={() => setPage("sales-credit-salesperson")}
      />
    );
  }

  if (page === "sales-rates-salesperson") {
    return (
      <RatesSalespersonMap
        goBack={() => setPage("sales-rates")}
      />
    );
  }

  if (page === "sales-rates") {
    return (
      <RatesSalesMap
        goBack={() => setPage("sales")}
        openSalesperson={() => setPage("sales-rates-salesperson")}
      />
    );
  }

  if (page === "sales-fx-salesperson") {
    return (
      <FXSalespersonMap
        goBack={() => setPage("sales-fx")}
      />
    );
  }

  if (page === "sales-fx") {
    return (
      <FXSalesMap
        goBack={() => setPage("sales")}
        openSalesperson={() => setPage("sales-fx-salesperson")}
      />
    );
  }

  if (page === "sales") {
    return (
      <SalesMap
        goBack={() => setPage("global-markets")}
        openFXSales={() => setPage("sales-fx")}
        openRatesSales={() => setPage("sales-rates")}
        openCreditSales={() => setPage("sales-credit")}
        openEquitiesSales={() => setPage("sales-equities")}
        openCommoditiesSales={() => setPage("sales-commodities")}
        openCrossAssetSales={() => setPage("sales-cross-asset")}
      />
    );
  }

  if (page === "trading") {
    return (
      <TradingMap
        goBack={() => setPage("global-markets")}
        openFX={() => setPage("fx-trading")}
        openRates={() => setPage("rates-trading")}
        openCredit={() => setPage("credit-trading")}
        openEquities={() => setPage("equities-trading")}
        openCommodities={() => setPage("commodities-trading")}
        openCrossAsset={() => setPage("cross-asset-trading")}
      />
    );
  }

  if (page === "global-markets") {
    return (
      <GlobalMarketsMap
        goBack={() => setPage("banks")}
        openTrading={() => setPage("trading")}
        openSales={() => setPage("sales")}
        openStructuring={() => setPage("structuring")}
        openResearchStrategy={() => setPage("research-strategy")}
        openFinancing={() => setPage("financing")}
        openMarketsCOO={() => setPage("markets-coo")}
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
