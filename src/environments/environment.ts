// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  social: {
    twitter: 'https://twitter.com/wikicatcoin',
    telegram: 'https://t.co/Yv8HV8rHn1',
    instagram: 'https://instagram.com/wikicatcoin',
    reddit: 'https://www.reddit.com/r/Wikicatcoin'
  },
  links: {
    buy: 'https://pancakeswap.finance/swap?outputCurrency=0x6Ec90334d89dBdc89E08A133271be3d104128Edb',
    contract: 'https://bscscan.com/token/0x6Ec90334d89dBdc89E08A133271be3d104128Edb',
    lock: 'https://app.unicrypt.network/amm/pancake-v2/pair/0x933477eba23726cA95A957cB85dBB1957267EF85',
    renounce: 'https://www.bscheck.eu/bsc/0x6ec90334d89dbdc89e08a133271be3d104128edb',
    audit: 'https://solidity.finance/audits/WIKICAT/',
    chart: 'https://poocoin.app/tokens/0x6Ec90334d89dBdc89E08A133271be3d104128Edb'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
