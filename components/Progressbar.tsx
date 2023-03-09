export const Progressbar = () => {
  return (
    <svg
      width="200"
      height="100"
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.6511 2.63308C23.5574 -0.113417 27.4426 -0.113416 28.3489 2.63309L32.117 14.0516C32.5226 15.281 33.6712 16.1115 34.9658 16.1115H47.0594C49.9768 16.1115 51.1777 19.854 48.8049 21.5514L39.1014 28.4929C38.0336 29.2568 37.5865 30.6263 37.998 31.873L41.7232 43.1617C42.6326 45.9175 39.489 48.2302 37.1288 46.5418L27.2455 39.4716C26.2016 38.7248 24.7984 38.7248 23.7545 39.4716L13.8712 46.5418C11.511 48.2302 8.36741 45.9175 9.27681 43.1617L13.002 31.873C13.4135 30.6263 12.9664 29.2568 11.8986 28.4929L2.19512 21.5514C-0.177676 19.854 1.02314 16.1115 3.94057 16.1115H16.0342C17.3288 16.1115 18.4773 15.281 18.883 14.0516L22.6511 2.63308Z"
        fill="url(#paint0_radial_362_5843)"
      />
      <text x="20" y="30" fill="#73B218">
        1
      </text>
      <defs>
        <radialGradient
          id="paint0_radial_362_5843"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.5 26) rotate(90) scale(32 32.5)">
          <stop stop-color="#EFFFD8" />
          <stop offset="1" stop-color="#82DD00" />
        </radialGradient>
      </defs>

      <rect width="197" height="16" rx="8" y="10" fill="#F1FEFF" />
      <rect
        width="129"
        height="16"
        rx="8"
        y="10"
        fill="url(#paint0_linear_380_3948)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_380_3948"
          x1="129.269"
          y1="8.00001"
          x2="4.1131"
          y2="8.00001"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#BEFF61" />
          <stop offset="1" stop-color="#E2FFB7" />
        </linearGradient>
      </defs>
    </svg>
  );
};
