# Sofer Advisors Service Pages Rebuild & Expansion

Preview deployment and source code for Sofer Advisors valuation service pages:
- **AIB-729**: Business Valuation Services (`/business-valuation-services/`)
- **AIB-730**: Estate & Gift Tax Valuation (`/business-valuation-services/estate-gift-tax-valuation/`)

## Key Compliance & Quality Gates
- **Option A Decision:** Jerry confirmed `/business-valuation-services/estate-gift-tax-valuation/`.
- **CTA Requirements:**
  - Business Valuation: `"Request a Free Consultation"`
  - Estate & Gift Tax: `"Schedule a Free Consultation"`
- **Schema Strictness:**
  - Includes: `WebPage`, `BreadcrumbList`, `FAQPage`, `Organization`
  - Explicitly Excluded: `Service`, `ProfessionalService`, `LocalBusiness`, `FinancialService`, `AggregateRating`
- **Sign-Off Gate:** Preview-only deployment with `noindex, nofollow, noarchive`. Staging held for David Hern sign-off before publishing live.
