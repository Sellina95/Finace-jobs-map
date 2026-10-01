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
};

function RoleDetailPage({
  goBack,
  backLabel,
  title,
  intro,
  sections,
}: RoleDetailPageProps) {
  return (
    <main className="world">
      <button className="back-button" onClick={goBack}>
        ← {backLabel}
      </button>

      <header className="hero detail-hero">
        <div className="globe">👤</div>
        <div>
          <p className="eyebrow">TRADING ROLE</p>
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
  const [page, setPage] = useState<"system" | "central-bank" | "banks" | "global-markets" | "trading" | "credit-trading" | "credit-ig" | "credit-ig-trader" | "credit-hy" | "credit-hy-trader" | "credit-em" | "credit-em-trader" | "credit-derivatives" | "credit-derivatives-trader" | "credit-electronic" | "credit-electronic-trader" | "cross-asset-trading" | "cross-asset-trader" | "commodities-trading" | "commodities-oil-energy" | "commodities-oil-energy-trader" | "commodities-natural-gas" | "commodities-natural-gas-trader" | "commodities-power" | "commodities-power-trader" | "commodities-metals" | "commodities-metals-trader" | "commodities-agriculture" | "commodities-agriculture-trader" | "equities-trading" | "equities-cash" | "equities-cash-trader" | "equities-derivatives" | "equities-derivatives-trader" | "equities-index-etf" | "equities-index-etf-trader" | "equities-electronic" | "equities-electronic-trader" | "equities-em" | "equities-em-trader" | "rates-trading" | "rates-government-bonds" | "rates-government-bond-trader" | "rates-swaps" | "rates-swap-trader" | "rates-futures-stir" | "rates-futures-trader" | "rates-options" | "rates-options-trader" | "rates-electronic" | "rates-electronic-trader" | "fx-trading" | "fx-spot" | "fx-spot-trader" | "fx-forwards-swaps" | "fx-forward-swap-trader" | "fx-options" | "fx-options-trader" | "fx-em-ndf" | "fx-em-ndf-trader" | "fx-electronic" | "fx-electronic-trader" | "function">(
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
