import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography, Link, List, ListItem } from '@mui/joy';

const years = [
  new Date(1965, 0, 1),
  new Date(1966, 0, 1),
  new Date(1967, 0, 1),
  new Date(1968, 0, 1),
  new Date(1969, 0, 1),
  new Date(1970, 0, 1),
  new Date(1971, 0, 1),
  new Date(1972, 0, 1),
  new Date(1973, 0, 1),
  new Date(1974, 0, 1),
  new Date(1975, 0, 1),
  new Date(1976, 0, 1),
  new Date(1977, 0, 1),
  new Date(1978, 0, 1),
  new Date(1979, 0, 1),
  new Date(1980, 0, 1),
  new Date(1981, 0, 1),
  new Date(1982, 0, 1),
  new Date(1983, 0, 1),
  new Date(1984, 0, 1),
  new Date(1985, 0, 1),
  new Date(1986, 0, 1),
  new Date(1987, 0, 1),
  new Date(1988, 0, 1),
  new Date(1989, 0, 1),
  new Date(1990, 0, 1),
  new Date(1991, 0, 1),
  new Date(1992, 0, 1),
  new Date(1993, 0, 1),
  new Date(1994, 0, 1),
  new Date(1995, 0, 1),
  new Date(1996, 0, 1),
  new Date(1997, 0, 1),
  new Date(1998, 0, 1),
  new Date(1999, 0, 1),
  new Date(2000, 0, 1),
  new Date(2001, 0, 1),
  new Date(2002, 0, 1),
  new Date(2003, 0, 1),
  new Date(2004, 0, 1),
  new Date(2005, 0, 1),
  new Date(2006, 0, 1),
  new Date(2007, 0, 1),
  new Date(2008, 0, 1),
  new Date(2009, 0, 1),
  new Date(2010, 0, 1),
  new Date(2011, 0, 1),
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
  new Date(2019, 0, 1),
  new Date(2020, 0, 1),
  new Date(2021, 0, 1),
  new Date(2022, 0, 1),
  new Date(2023, 0, 1),
  new Date(2024, 0, 1),
];

const BRK = [
  149.50, 144.42, 163.62, 290.92, 347.36, 331.38, 598.15, 646.60, 630.43, 323.41, 331.50, 760.13,
  1115.86, 1277.67, 2587.27, 3435.90, 4528.51, 6267.46, 10592.01, 10306.02, 19962.77, 22797.48,
  23846.17, 37986.94, 70123.90, 53925.28, 73122.68, 94913.24, 131834.49, 164793.11, 259384.35,
  275466.18, 371603.88, 565581.10, 453030.46, 573536.56, 610816.44, 587605.41, 680447.07, 709706.29,
  715383.94, 887791.47, 1142587.63, 779244.76, 800284.37, 971545.23, 925882.60, 1081430.88, 1435058.77,
  1822524.64, 1594709.06, 1967870.98, 2398834.73, 2466002.10, 2737262.33, 2802956.63, 3632631.79, 3777937.06,
  4374851.12, 5490438.16
];

const SP500 = [
  112.40, 101.19, 125.28, 138.83, 127.39, 131.92, 150.68, 178.94, 153.34, 113.62, 155.66,
  192.75, 179.30, 190.97, 226.34, 298.17, 284.14, 342.16, 418.59, 444.32, 583.11, 690.95,
  731.11, 852.02, 1120.19, 1085.86, 1414.17, 1520.15, 1671.66, 1693.83, 2323.85, 2850.92,
  3794.68, 4870.01, 5887.13, 5355.42, 4720.81, 3683.84, 4728.42, 5236.38, 5489.54, 6346.59,
  6694.69, 4247.62, 5349.25, 6142.07, 6270.95, 7267.44, 9603.57, 10902.40, 11052.73,
  12353.98, 15023.11, 14388.11, 18878.88, 22281.45, 28624.73, 23461.54, 29575.78, 36934.23
];

const TBond = [
  100.72, 103.65, 102.01, 105.35, 100.07, 116.83, 128.27, 131.88, 136.71, 139.43, 144.45,
  167.54, 169.71, 168.39, 169.51, 164.45, 177.93, 236.32, 243.88, 277.37, 348.69, 433.37,
  411.87, 445.74, 524.61, 557.32, 640.95, 700.95, 800.56, 736.22, 909.09, 922.08, 1013.73,
  1164.99, 1068.83, 1246.85, 1316.32, 1515.30, 1520.99, 1589.29, 1634.87, 1666.93, 1837.12,
  2206.40, 1961.12, 2127.09, 2468.18, 2541.52, 2310.13, 2558.38, 2591.23, 2609.13, 2682.23,
  2681.78, 2940.19, 3273.37, 3128.81, 2571.00, 2670.76, 2626.96
];

const corporateBond = [
  103.19, 99.63, 100.53, 105.40, 103.26, 109.10, 124.37, 138.56, 144.54, 138.21, 153.49, 183.80,
  202.10, 208.44, 204.25, 197.48, 214.19, 276.42, 321.18, 371.35, 459.97, 558.19, 573.89, 656.42,
  761.12, 808.92, 962.03, 1070.79, 1236.47, 1224.50, 1485.16, 1535.89, 1731.78, 1863.87, 1880.77,
  2057.34, 2233.01, 2504.18, 2812.60, 3103.59, 3268.03, 3437.85, 3604.40, 3476.79, 4179.44,
  4572.75, 5133.50, 5612.31, 5557.15, 6156.31, 6063.91, 6762.74, 7387.21, 7145.69, 8235.25,
  9108.28, 9193.30, 7801.06, 8482.54, 8630.13
];

const realEstae = [
  101.66, 102.90, 105.28, 109.64, 117.31, 126.94, 132.33, 136.27, 140.93, 155.13, 165.64, 179.18,
  205.44, 237.75, 270.42, 290.42, 305.22, 306.94, 321.51, 336.56, 361.70, 396.47, 427.60, 458.48,
  478.62, 475.33, 474.52, 478.40, 488.72, 501.01, 509.99, 522.36, 543.37, 578.37, 622.80, 680.66,
  726.12, 795.53, 873.59, 992.74, 1126.86, 1146.39, 1084.51, 954.41, 917.62, 879.88, 845.69,
  900.13, 996.57, 1041.48, 1095.64, 1153.76, 1225.37, 1280.75, 1327.95, 1466.49, 1743.29, 1842.09,
  1958.01, 2041.03
];

const gold = [
  100.06, 100.09, 99.57, 111.99, 117.61, 106.50, 124.27, 184.90, 319.80, 531.34, 399.57,
  383.19, 469.94, 643.87, 1458.69, 1680.20, 1132.48, 1309.40, 1089.46, 878.35, 931.05,
  1107.55, 1379.20, 1168.80, 1135.61, 1100.28, 1006.13, 948.43, 1116.10, 1091.88, 1102.56,
  1051.99, 826.78, 819.94, 826.92, 781.91, 787.75, 989.17, 1185.90, 1241.03, 1461.54,
  1800.57, 2375.36, 2477.92, 3098.29, 4004.27, 4485.75, 4740.74, 3431.62, 3435.90, 3019.94,
  3264.67, 3678.06, 3643.87, 4339.03, 5387.75, 5185.47, 5213.96, 5905.44, 7438.49
]

const lineChartsParams = {
  series: [
    {
      label: 'Berkshire Hathaway',
      data: BRK,
      showMark: false,
    },
    {
      label: 'S&P 500 (Include dividend reinvestnemt)',
      data: SP500,
      showMark: false,
    },
    {
      label: 'US T. Bond (10-year)',
      data: TBond,
      showMark: false,
    },
    {
      label: 'Baa Corporate Bond',
      data: corporateBond,
      showMark: false,
    },
    {
      label: 'Real Estate',
      data: realEstae,
      showMark: false,
    },
    {
      label: 'Gold',
      data: gold,
      showMark: false,
    },

  ]
};

const yearFormatter = (date) => date.getFullYear().toString();
const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

const abbreviatedCurrencyFormatter = (value) => {
  if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(1)}K`;
  return `$${value}`;
};

export default function App() {
  return (
    <div>
      <Typography level="h1" textAlign={"center"}>Visualizing the Growth of $100, by Asset Class (1965-2024)</Typography>
      <Box sx={{ height: '93vh', width: '100vw' }}>
        <LineChart
          {...lineChartsParams}
          xAxis={[{ data: years, scaleType: 'time', valueFormatter: yearFormatter }]}
          yAxis={[{ valueFormatter: abbreviatedCurrencyFormatter }]}
          series={lineChartsParams.series.map((series) => ({
            ...series,
            valueFormatter: (v) => (v === null ? '' : currencyFormatter(v)),
          }))}
        />
      </Box>
      <Box marginLeft={4}>
        <h3>Sources</h3>
        <List marker="disc">
          <ListItem>      <Link target="_blank" href="https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html">Historical Returns on Stocks, Bonds and Bills: 1928-2024</Link>
          </ListItem>
          <ListItem>
            <Link target="_blank" href="https://www.berkshirehathaway.com/2024ar/2024ar.pdf">Berkshire Hathaway Annual Report 2024 (Page 14)</Link>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}