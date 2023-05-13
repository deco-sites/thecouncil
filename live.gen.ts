// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $$$$0 from "./routes/_app.tsx";
import * as $$$$$$$$0 from "./sections/Footer.tsx";
import * as $$$$$$$$1 from "./sections/Head.tsx";
import * as $$$$$$$$2 from "./sections/Header.tsx";
import * as $$$$$$$$3 from "./sections/ListPerson.tsx";
import * as $$$$$$$$4 from "./sections/TextArea.tsx";
import * as $$$$$$$$5 from "./sections/TextGrid.tsx";
import * as $live_middleware from "$live/routes/_middleware.ts";
import * as $live_workbench from "$live/routes/live/workbench.ts";
import * as $live_invoke from "$live/routes/live/invoke/index.ts";
import * as $live_editorData from "$live/routes/live/editorData.ts";
import * as $live_inspect from "$live/routes/live/inspect/[...block].ts";
import * as $live_meta from "$live/routes/live/_meta.ts";
import * as $live_previews from "$live/routes/live/previews/[...block].tsx";
import * as $live_catchall from "$live/routes/[...catchall].tsx";
import * as i2$$$$$0 from "$live/handlers/devPage.ts";
import * as i2$$$$$1 from "$live/handlers/fresh.ts";
import * as i1$2 from "$live/handlers/proxy.ts";
import * as i2$$$$$2 from "$live/handlers/router.ts";
import * as i2$$$$$3 from "$live/handlers/routesSelection.ts";
import * as i2$$$$$$0 from "$live/pages/LivePage.tsx";
import * as i2$$$$0 from "$live/sections/PageInclude.tsx";
import * as i2$$$$1 from "$live/sections/Slot.tsx";
import * as i2$$$$2 from "$live/sections/UseSlot.tsx";
import * as i2$$$$$$$0 from "$live/matchers/MatchAlways.ts";
import * as i2$$$$$$$1 from "$live/matchers/MatchDate.ts";
import * as i2$$$$$$$2 from "$live/matchers/MatchEnvironment.ts";
import * as i2$$$$$$$3 from "$live/matchers/MatchMulti.ts";
import * as i1$$$$4 from "$live/matchers/MatchOrigin.ts";
import * as i2$$$$$$$4 from "$live/matchers/MatchRandom.ts";
import * as i2$$$$$$$5 from "$live/matchers/MatchSite.ts";
import * as i2$$$$$$$6 from "$live/matchers/MatchUserAgent.ts";
import * as i2$$$$$$$$0 from "$live/flags/audience.ts";
import * as i2$$$$$$$$1 from "$live/flags/everyone.ts";
import * as i2$0 from "deco-sites/std/functions/occProductDetailsPage.ts";
import * as i2$1 from "deco-sites/std/functions/segment.ts";
import * as i2$2 from "deco-sites/std/functions/shopifyProductDetailsPage.ts";
import * as i2$3 from "deco-sites/std/functions/shopifyProductList.ts";
import * as i2$4 from "deco-sites/std/functions/shopifyProductListingPage.ts";
import * as i2$5 from "deco-sites/std/functions/slugFromParams.ts";
import * as i2$6 from "deco-sites/std/functions/vndaProductDetailsPage.ts";
import * as i2$7 from "deco-sites/std/functions/vndaProductList.ts";
import * as i2$8 from "deco-sites/std/functions/vndaProductListingPage.ts";
import * as i2$9 from "deco-sites/std/functions/vtexClient.ts";
import * as i2$10 from "deco-sites/std/functions/vtexConfig.ts";
import * as i2$11 from "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts";
import * as i2$12 from "deco-sites/std/functions/vtexLegacyProductList.ts";
import * as i2$13 from "deco-sites/std/functions/vtexLegacyProductListingPage.ts";
import * as i2$14 from "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts";
import * as i2$15 from "deco-sites/std/functions/vtexNavbar.ts";
import * as i2$16 from "deco-sites/std/functions/vtexProductDetailsPage.ts";
import * as i2$17 from "deco-sites/std/functions/vtexProductList.ts";
import * as i2$18 from "deco-sites/std/functions/vtexProductListingPage.ts";
import * as i2$19 from "deco-sites/std/functions/vtexSuggestions.ts";
import * as i2$20 from "deco-sites/std/functions/vtexWishlist.ts";
import * as i2$$0 from "deco-sites/std/accounts/occ.ts";
import * as i2$$1 from "deco-sites/std/accounts/shopify.ts";
import * as i2$$2 from "deco-sites/std/accounts/vnda.ts";
import * as i2$$3 from "deco-sites/std/accounts/vtex.ts";
import * as i2$$4 from "deco-sites/std/accounts/yourViews.ts";
import * as i2$$$0 from "deco-sites/std/loaders/vtexLegacyProductDetailsPage.ts";
import * as i2$$$1 from "deco-sites/std/loaders/vtexLegacyRelatedProductsLoader.ts";
import * as i2$$$$3 from "deco-sites/std/sections/Analytics.tsx";
import * as i2$$$$4 from "deco-sites/std/sections/configOCC.global.tsx";
import * as i2$$$$5 from "deco-sites/std/sections/configShopify.global.tsx";
import * as i2$$$$6 from "deco-sites/std/sections/configVNDA.global.tsx";
import * as i2$$$$7 from "deco-sites/std/sections/configVTEX.global.tsx";
import * as i2$$$$8 from "deco-sites/std/sections/configYourViews.global.tsx";
import * as i2$$$$9 from "deco-sites/std/sections/SEO.tsx";
import * as i2$$$$10 from "deco-sites/std/sections/SEOPDP.tsx";
import * as i2$$$$11 from "deco-sites/std/sections/SEOPLP.tsx";

const manifest = {
  "routes": {
    "./routes/_app.tsx": $$$$0,
    "./routes/_middleware.ts": $live_middleware,
    "./routes/[...catchall].tsx": $live_catchall,
    "./routes/index.tsx": $live_catchall,
    "./routes/live/_meta.ts": $live_meta,
    "./routes/live/editorData.ts": $live_editorData,
    "./routes/live/inspect/[...block].ts": $live_inspect,
    "./routes/live/invoke/index.ts": $live_invoke,
    "./routes/live/previews/[...block].tsx": $live_previews,
    "./routes/live/workbench.ts": $live_workbench,
  },
  "sections": {
    "$live/sections/PageInclude.tsx": i2$$$$0,
    "$live/sections/Slot.tsx": i2$$$$1,
    "$live/sections/UseSlot.tsx": i2$$$$2,
    "deco-sites/std/sections/Analytics.tsx": i2$$$$3,
    "deco-sites/std/sections/configOCC.global.tsx": i2$$$$4,
    "deco-sites/std/sections/configShopify.global.tsx": i2$$$$5,
    "deco-sites/std/sections/configVNDA.global.tsx": i2$$$$6,
    "deco-sites/std/sections/configVTEX.global.tsx": i2$$$$7,
    "deco-sites/std/sections/configYourViews.global.tsx": i2$$$$8,
    "deco-sites/std/sections/SEO.tsx": i2$$$$9,
    "deco-sites/std/sections/SEOPDP.tsx": i2$$$$10,
    "deco-sites/std/sections/SEOPLP.tsx": i2$$$$11,
    "deco-sites/the-council/sections/Footer.tsx": $$$$$$$$0,
    "deco-sites/the-council/sections/Head.tsx": $$$$$$$$1,
    "deco-sites/the-council/sections/Header.tsx": $$$$$$$$2,
    "deco-sites/the-council/sections/ListPerson.tsx": $$$$$$$$3,
    "deco-sites/the-council/sections/TextArea.tsx": $$$$$$$$4,
    "deco-sites/the-council/sections/TextGrid.tsx": $$$$$$$$5,
  },
  "handlers": {
    "$live/handlers/devPage.ts": i2$$$$$0,
    "$live/handlers/fresh.ts": i2$$$$$1,
    "$live/handlers/proxy.ts": i1$2,
    "$live/handlers/router.ts": i2$$$$$2,
    "$live/handlers/routesSelection.ts": i2$$$$$3,
  },
  "pages": {
    "$live/pages/LivePage.tsx": i2$$$$$$0,
  },
  "matchers": {
    "$live/matchers/MatchAlways.ts": i2$$$$$$$0,
    "$live/matchers/MatchDate.ts": i2$$$$$$$1,
    "$live/matchers/MatchEnvironment.ts": i2$$$$$$$2,
    "$live/matchers/MatchMulti.ts": i2$$$$$$$3,
    "$live/matchers/MatchOrigin.ts": i1$$$$4,
    "$live/matchers/MatchRandom.ts": i2$$$$$$$4,
    "$live/matchers/MatchSite.ts": i2$$$$$$$5,
    "$live/matchers/MatchUserAgent.ts": i2$$$$$$$6,
  },
  "flags": {
    "$live/flags/audience.ts": i2$$$$$$$$0,
    "$live/flags/everyone.ts": i2$$$$$$$$1,
  },
  "functions": {
    "deco-sites/std/functions/occProductDetailsPage.ts": i2$0,
    "deco-sites/std/functions/segment.ts": i2$1,
    "deco-sites/std/functions/shopifyProductDetailsPage.ts": i2$2,
    "deco-sites/std/functions/shopifyProductList.ts": i2$3,
    "deco-sites/std/functions/shopifyProductListingPage.ts": i2$4,
    "deco-sites/std/functions/slugFromParams.ts": i2$5,
    "deco-sites/std/functions/vndaProductDetailsPage.ts": i2$6,
    "deco-sites/std/functions/vndaProductList.ts": i2$7,
    "deco-sites/std/functions/vndaProductListingPage.ts": i2$8,
    "deco-sites/std/functions/vtexClient.ts": i2$9,
    "deco-sites/std/functions/vtexConfig.ts": i2$10,
    "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts": i2$11,
    "deco-sites/std/functions/vtexLegacyProductList.ts": i2$12,
    "deco-sites/std/functions/vtexLegacyProductListingPage.ts": i2$13,
    "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts": i2$14,
    "deco-sites/std/functions/vtexNavbar.ts": i2$15,
    "deco-sites/std/functions/vtexProductDetailsPage.ts": i2$16,
    "deco-sites/std/functions/vtexProductList.ts": i2$17,
    "deco-sites/std/functions/vtexProductListingPage.ts": i2$18,
    "deco-sites/std/functions/vtexSuggestions.ts": i2$19,
    "deco-sites/std/functions/vtexWishlist.ts": i2$20,
  },
  "accounts": {
    "deco-sites/std/accounts/occ.ts": i2$$0,
    "deco-sites/std/accounts/shopify.ts": i2$$1,
    "deco-sites/std/accounts/vnda.ts": i2$$2,
    "deco-sites/std/accounts/vtex.ts": i2$$3,
    "deco-sites/std/accounts/yourViews.ts": i2$$4,
  },
  "loaders": {
    "deco-sites/std/loaders/vtexLegacyProductDetailsPage.ts": i2$$$0,
    "deco-sites/std/loaders/vtexLegacyRelatedProductsLoader.ts": i2$$$1,
  },
  "islands": {},
  "config": config,
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest satisfies DecoManifest;
